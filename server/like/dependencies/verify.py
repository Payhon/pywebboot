import json

from fastapi import Request


async def verify_token(request: Request):
    """登录状态及权限校验依赖项"""
    from like.utils.redis import RedisUtil
    from like.exceptions.base import AppException
    from like.admin.config import AdminConfig
    from like.http_base import HttpResp
    from like.admin.service.system.auth_admin import SystemAuthAdminService
    from like.admin.service.system.auth_perm import SystemAuthPermService

    # 路由转权限
    auths = request.url.path.replace('/api/', '').replace('/', ':')

    # 免登录接口
    if auths in AdminConfig.not_login_uri:
        return

    # Token是否为空
    token = request.headers.get('token', '')
    if not token:
        raise AppException(HttpResp.TOKEN_EMPTY)

    # Token是否过期
    token = f'{AdminConfig.backstage_token_key}{token}'
    exist_cnt = await RedisUtil.exists(token)
    if exist_cnt == 0:
        raise AppException(HttpResp.TOKEN_INVALID)

    # 用户信息缓存
    uid_str = await RedisUtil.get(token)
    uid = int(uid_str)
    if not await RedisUtil.hexists(AdminConfig.backstage_manage_key, uid_str):
        await SystemAuthAdminService.cache_admin_user_by_uid(uid)

    # 校验用户被删除
    mapping = json.loads(await RedisUtil.hget(AdminConfig.backstage_manage_key, uid_str))
    if not (mapping and mapping.get('is_delete') == 0):
        await RedisUtil.delete(token)
        await RedisUtil.hdel(AdminConfig.backstage_manage_key, f'{uid}')
        raise AppException(HttpResp.TOKEN_INVALID)

    # 校验用户被禁用
    if mapping.get('is_disable') == 1:
        raise AppException(HttpResp.LOGIN_DISABLE_ERROR)

    # 令牌剩余30分钟自动续签
    if await RedisUtil.ttl(token) < 1800:
        await RedisUtil.expire(token, 7200)

    # 单次请求信息保存
    request.state.admin_id = uid
    request.state.role_id = mapping.get('role')
    request.state.username = mapping.get('username')
    request.state.nickname = mapping.get('nickname')

    # 免权限验证接口
    if auths in AdminConfig.not_auth_uri or uid == 1:
        return

    # 校验角色权限是否存在
    role_id = mapping.get('role')
    if not await RedisUtil.hexists(AdminConfig.backstage_roles_key, role_id):
        await SystemAuthPermService.cache_role_menus_by_role_id(role_id)

    # 验证是否有权限操作
    menus = await RedisUtil.hget(AdminConfig.backstage_roles_key, role_id)
    if not (menus and auths in menus.split(',')):
        raise AppException(HttpResp.NO_PERMISSION)


async def verify_show_mode(request: Request):
    from like.http_base import HttpResp
    from like.exceptions.base import AppException
    from like.admin.config import AdminConfig
    from like.config import get_settings

    # 路由转权限
    auths = request.url.path.replace('/api/', '').replace('/', ':')
    # 禁止修改操作 (演示功能,限制POST请求)
    if get_settings().disallow_modify and request.method == 'POST' and auths not in AdminConfig.show_whitelist_uri:
        raise AppException(HttpResp.NO_PERMISSION, msg='演示环境不支持修改数据，请下载源码本地部署体验!')

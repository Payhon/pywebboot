import{a8 as e,d as t,r as s,a,o as r,c as n,w as l,b as i,l as o,t as c,x as u,g as d,h as p,K as f,k as m,i as x,u as y,e as g,a9 as b,F as v,f as _,S as k,j as h,m as j,aa as w,ab as C,ac as O}from"./index.f1911d8b.js";import{_ as I}from"./u-avatar.71bf841e.js";import{_ as L}from"./u-icon.a60b7a77.js";import{_ as z}from"./plugin-vue_export-helper.21dcd24c.js";import{_ as S}from"./u-image.be177646.js";import{n as U}from"./util.2d759fe8.js";import{_ as F}from"./tabbar.b895d37f.js";import{a as B}from"./shop.e01639cf.js";var J=z(t({__name:"user-info",props:{content:{type:Object,default:()=>({})},styles:{type:Object,default:()=>({})},user:{type:Object,default:()=>({})},isLogin:{type:Boolean}},setup(t){const{copy:y}={copy:t=>{e({data:String(t)})}};return(e,g)=>{const b=s(a("u-avatar"),I),v=m,_=x,k=s(a("u-icon"),L);return r(),n(v,{class:"user-info flex px-[50rpx] justify-between py-[50rpx]"},{default:l((()=>[t.isLogin?(r(),n(v,{key:0,class:"flex items-center",onClick:g[1]||(g[1]=e=>{f({url:"/pages/user_data/user_data"})})},{default:l((()=>[i(b,{src:t.user.avatar,size:120},null,8,["src"]),i(v,{class:"text-white ml-[20rpx]"},{default:l((()=>[i(v,{class:"text-2xl"},{default:l((()=>[o(c(t.user.nickname),1)])),_:1}),i(v,{class:"text-xs mt-[18rpx]",onClick:g[0]||(g[0]=u((e=>d(y)(t.user.username)),["stop"]))},{default:l((()=>[o(" 账号："+c(t.user.username),1)])),_:1})])),_:1})])),_:1})):(r(),n(_,{key:1,class:"flex items-center","hover-class":"none",url:"/pages/login/login"},{default:l((()=>[i(b,{src:"/static/images/user/default_avatar.png",size:120}),i(v,{class:"text-white text-3xl ml-[20rpx]"},{default:l((()=>[o("未登录")])),_:1})])),_:1})),t.isLogin?(r(),n(_,{key:2,"hover-class":"none",url:"/pages/user_set/user_set"},{default:l((()=>[i(k,{name:"setting",color:"#fff",size:48})])),_:1})):p("v-if",!0)])),_:1})}}}),[["__scopeId","data-v-0f3174a2"]]);const K=t({__name:"my-service",props:{content:{type:Object,default:()=>({})},styles:{type:Object,default:()=>({})}},setup(e){const{getImageUrl:t}=y(),n=e=>{U(e)};return(l,o)=>{const u=s(a("u-image"),S),f=s(a("u-icon"),L);return r(),g("div",{class:"my-service bg-white mx-[20rpx] mt-[20rpx] rounded-lg"},[e.content.title?(r(),g("div",{key:0,class:"title px-[30rpx] py-[20rpx] font-medium text-xl border-light border-solid border-0 border-b"},[b("div",null,c(e.content.title),1)])):p("v-if",!0),1==e.content.style?(r(),g("div",{key:1,class:"flex flex-wrap pt-[40rpx] pb-[20rpx]"},[(r(!0),g(v,null,_(e.content.data,((e,s)=>(r(),g("div",{key:s,class:"flex flex-col items-center w-1/4 mb-[15px]",onClick:t=>n(e.link)},[i(u,{width:"52",height:"52",src:d(t)(e.image),alt:""},null,8,["src"]),b("div",{class:"mt-[7px]"},c(e.name),1)],8,["onClick"])))),128))])):p("v-if",!0),2==e.content.style?(r(),g("div",{key:2},[(r(!0),g(v,null,_(e.content.data,((e,s)=>(r(),g("div",{key:s,class:"flex items-center border-light border-solid border-0 border-b h-[100rpx] px-[24rpx]",onClick:t=>n(e.link)},[i(u,{width:"48",height:"48",src:d(t)(e.image),alt:""},null,8,["src"]),b("div",{class:"ml-[20rpx] flex-1"},c(e.name),1),b("div",{class:"text-muted"},[i(f,{name:"arrow-right"})])],8,["onClick"])))),128))])):p("v-if",!0)])}}}),N=t({__name:"user-banner",props:{content:{type:Object,default:()=>({})},styles:{type:Object,default:()=>({})}},setup(e){const{getImageUrl:t}=y();return(o,c)=>{const u=s(a("u-image"),S),f=k,x=h,y=m;return e.content.data.length&&e.content.enabled?(r(),n(y,{key:0,class:"banner h-[200rpx] mx-[20rpx] mt-[20rpx] translate-y-0"},{default:l((()=>[i(x,{class:"swiper h-full","indicator-dots":e.content.data.length>1,"indicator-active-color":"#4173ff",autoplay:!0},{default:l((()=>[(r(!0),g(v,null,_(e.content.data,((e,s)=>(r(),n(f,{key:s,onClick:t=>{return s=e.limk,void U(s);var s}},{default:l((()=>[i(u,{mode:"aspectFit",width:"100%",height:"100%",src:d(t)(e.image),"border-radius":14},null,8,["src"])])),_:2},1032,["onClick"])))),128))])),_:1},8,["indicator-dots"])])),_:1})):p("v-if",!0)}}}),q=t({__name:"user",setup(e){const t=j({pages:[]}),o=w(),{userInfo:c,isLogin:u}=C(o);return O((()=>{o.getUser()})),(async()=>{const e=await B({id:2});t.pages=JSON.parse(e.pages)})(),(e,o)=>{const f=s(a("w-user-info"),J),x=s(a("w-my-service"),K),y=s(a("w-user-banner"),N),b=m,k=s(a("tabbar"),F);return r(),n(b,{class:"user"},{default:l((()=>[(r(!0),g(v,null,_(t.pages,((e,t)=>(r(),n(b,{key:t},{default:l((()=>["user-info"==e.name?(r(),n(f,{key:0,content:e.content,styles:e.styles,user:d(c),"is-login":d(u)},null,8,["content","styles","user","is-login"])):p("v-if",!0),"my-service"==e.name?(r(),n(x,{key:1,content:e.content,styles:e.styles},null,8,["content","styles"])):p("v-if",!0),"user-banner"==e.name?(r(),n(y,{key:2,content:e.content,styles:e.styles},null,8,["content","styles"])):p("v-if",!0)])),_:2},1024)))),128)),i(k)])),_:1})}}});export{q as default};

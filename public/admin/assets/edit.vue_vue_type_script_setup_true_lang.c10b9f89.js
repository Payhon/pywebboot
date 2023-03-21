import{_ as j,C as Q,D as W,Q as X,R as z,t as G,F as H}from"./element-plus.ef27c94c.js";import{_ as J}from"./picker.046ca35c.js";import{P as K}from"./index.70072f9d.js";import{r as p,f as Y}from"./index.0fb45745.js";import{u as Z}from"./useDictOptions.85f271e9.js";import{r as $}from"./role.20eadbd4.js";import{e as ee}from"./post.91cd1291.js";import{d as ue}from"./department.a7680669.js";import{d as le,s as A,r as ae,e as k,a1 as I,o as i,c as V,X as o,P as t,u as l,a as m,W as x,a8 as U,O as F,T as q}from"./@vue.a137a740.js";function Ce(s){return p.get({url:"/system/admin/list",params:s})}function oe(s){return p.post({url:"/system/admin/add",params:s})}function te(s){return p.get({url:"/system/admin/detail",params:s})}function re(s){return p.post({url:"/system/admin/edit",params:s})}function ge(s){return p.post({url:"/system/admin/del",params:s})}function Ve(s){return p.post({url:"/system/admin/disable",params:s})}const se={class:"edit-popup"},de=m("div",{class:"form-tips"},"\u5EFA\u8BAE\u5C3A\u5BF8\uFF1A100*100px\uFF0C\u652F\u6301jpg\uFF0Cjpeg\uFF0Cpng\u683C\u5F0F",-1),ne=m("div",{class:"form-tips"},"\u5141\u8BB8\u591A\u4EBA\u540C\u65F6\u5728\u7EBF\u767B\u5F55",-1),ve=le({__name:"edit",emits:["success","close"],setup(s,{expose:R,emit:v}){const E=A(),c=A(),B=ae("add"),S=k(()=>B.value=="edit"?"\u7F16\u8F91\u7BA1\u7406\u5458":"\u65B0\u589E\u7BA1\u7406\u5458"),u=I({id:"",username:"",nickname:"",deptId:"",postId:"",role:"",avatar:"",password:"",passwordConfirm:"",isDisable:0,isMultipoint:1,sort:"1"}),f=k(()=>u.role=="0"),w=(n,e,r)=>{u.password&&(e||r(new Error("\u8BF7\u518D\u6B21\u8F93\u5165\u5BC6\u7801")),e!==u.password&&r(new Error("\u4E24\u6B21\u8F93\u5165\u5BC6\u7801\u4E0D\u4E00\u81F4!"))),r()},b=I({username:[{required:!0,message:"\u8BF7\u8F93\u5165\u8D26\u53F7",trigger:["blur"]}],nickname:[{required:!0,message:"\u8BF7\u8F93\u5165\u540D\u79F0",trigger:["blur"]}],role:[{required:!0,message:"\u8BF7\u9009\u62E9\u89D2\u8272",trigger:["blur"]}],deptId:[{required:!0,message:"\u8BF7\u8F93\u5165\u540D\u79F0",trigger:["blur"]}],postId:[{required:!0,message:"\u8BF7\u8F93\u5165\u540D\u79F0",trigger:["blur"]}],password:[{required:!0,message:"\u8BF7\u8F93\u5165\u5BC6\u7801",trigger:"blur"}],passwordConfirm:[{required:!0,message:"\u8BF7\u518D\u6B21\u8F93\u5165\u5BC6\u7801",trigger:"blur"},{validator:w,trigger:"blur"}]}),{optionsData:_}=Z({role:{api:$},post:{api:ee},dept:{api:ue}}),M=async()=>{var n,e;await((n=E.value)==null?void 0:n.validate()),B.value=="edit"?await re(u):await oe(u),(e=c.value)==null||e.close(),Y.msgSuccess("\u64CD\u4F5C\u6210\u529F"),v("success")},N=(n="add")=>{var e;B.value=n,(e=c.value)==null||e.open()},L=async n=>{const e=await te({id:n.id});for(const r in u)e[r]!=null&&e[r]!=null&&(u[r]=e[r]),Number(u.deptId)==0&&(u.deptId=""),Number(u.postId)==0&&(u.postId="");b.password=[],b.passwordConfirm=[{validator:w,trigger:"blur"}]},O=()=>{v("close")};return R({open:N,setFormData:L}),(n,e)=>{const r=Q,d=W,P=J,T=j,C=X,D=z,y=G,h=H;return i(),V("div",se,[o(K,{ref_key:"popupRef",ref:c,title:l(S),async:!0,width:"550px",onConfirm:M,onClose:O},{default:t(()=>[o(h,{ref_key:"formRef",ref:E,model:l(u),"label-width":"84px",rules:l(b)},{default:t(()=>[o(d,{label:"\u8D26\u53F7",prop:"username"},{default:t(()=>[o(r,{modelValue:l(u).username,"onUpdate:modelValue":e[0]||(e[0]=a=>l(u).username=a),disabled:l(f),placeholder:"\u8BF7\u8F93\u5165\u8D26\u53F7",clearable:""},null,8,["modelValue","disabled"])]),_:1}),o(d,{label:"\u5934\u50CF"},{default:t(()=>[m("div",null,[m("div",null,[o(P,{modelValue:l(u).avatar,"onUpdate:modelValue":e[1]||(e[1]=a=>l(u).avatar=a),limit:1},null,8,["modelValue"])]),de])]),_:1}),o(d,{label:"\u540D\u79F0",prop:"nickname"},{default:t(()=>[o(r,{modelValue:l(u).nickname,"onUpdate:modelValue":e[2]||(e[2]=a=>l(u).nickname=a),placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0",clearable:""},null,8,["modelValue"])]),_:1}),o(d,{label:"\u5F52\u5C5E\u90E8\u95E8",prop:"deptId"},{default:t(()=>[o(T,{multiple:"",class:"flex-1",modelValue:l(u).deptId,"onUpdate:modelValue":e[3]||(e[3]=a=>l(u).deptId=a),data:l(_).dept,clearable:"","node-key":"id",props:{value:"id",label:"name",disabled(a){return!!a.isStop}},"check-strictly":"","default-expand-all":!0,placeholder:"\u8BF7\u9009\u62E9\u4E0A\u7EA7\u90E8\u95E8"},null,8,["modelValue","data","props"])]),_:1}),o(d,{label:"\u5C97\u4F4D",prop:"postId"},{default:t(()=>[o(D,{multiple:"",class:"flex-1",clearable:"",modelValue:l(u).postId,"onUpdate:modelValue":e[4]||(e[4]=a=>l(u).postId=a),placeholder:"\u8BF7\u9009\u62E9\u5C97\u4F4D"},{default:t(()=>[(i(!0),V(x,null,U(l(_).post,(a,g)=>(i(),F(C,{key:g,label:a.name,value:a.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),o(d,{label:"\u89D2\u8272",prop:"role"},{default:t(()=>[o(D,{multiple:"",modelValue:l(u).role,"onUpdate:modelValue":e[5]||(e[5]=a=>l(u).role=a),disabled:l(f),class:"flex-1",clearable:"",placeholder:"\u8BF7\u9009\u62E9\u89D2\u8272"},{default:t(()=>[l(f)?(i(),F(C,{key:0,label:"\u7CFB\u7EDF\u7BA1\u7406\u5458",value:"0"})):q("",!0),(i(!0),V(x,null,U(l(_).role,(a,g)=>(i(),F(C,{key:g,label:a.name,value:String(a.id)},null,8,["label","value"]))),128))]),_:1},8,["modelValue","disabled"])]),_:1}),o(d,{label:"\u5BC6\u7801",prop:"password"},{default:t(()=>[o(r,{modelValue:l(u).password,"onUpdate:modelValue":e[6]||(e[6]=a=>l(u).password=a),modelModifiers:{trim:!0},"show-password":"",clearable:"",placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801"},null,8,["modelValue"])]),_:1}),o(d,{label:"\u786E\u8BA4\u5BC6\u7801",prop:"passwordConfirm"},{default:t(()=>[o(r,{modelValue:l(u).passwordConfirm,"onUpdate:modelValue":e[7]||(e[7]=a=>l(u).passwordConfirm=a),modelModifiers:{trim:!0},"show-password":"",clearable:"",placeholder:"\u8BF7\u8F93\u5165\u786E\u8BA4\u5BC6\u7801"},null,8,["modelValue"])]),_:1}),l(f)?q("",!0):(i(),F(d,{key:0,label:"\u7BA1\u7406\u5458\u72B6\u6001"},{default:t(()=>[o(y,{modelValue:l(u).isDisable,"onUpdate:modelValue":e[8]||(e[8]=a=>l(u).isDisable=a),"active-value":0,"inactive-value":1},null,8,["modelValue"])]),_:1})),o(d,{label:"\u591A\u5904\u767B\u5F55"},{default:t(()=>[m("div",null,[o(y,{modelValue:l(u).isMultipoint,"onUpdate:modelValue":e[9]||(e[9]=a=>l(u).isMultipoint=a),"active-value":1,"inactive-value":0},null,8,["modelValue"]),ne])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["title"])])}}});export{ve as _,Ve as a,ge as b,Ce as c};
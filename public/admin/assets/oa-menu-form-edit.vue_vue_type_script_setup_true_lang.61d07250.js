import{P as f}from"./index.e70b9606.js";import{_ as y}from"./oa-menu-form.vue_vue_type_script_setup_true_lang.a18eb046.js";import{d as v,s as d,l as P,o as g,O as F,P as m,K as I,X as R}from"./@vue.a137a740.js";const w=v({__name:"oa-menu-form-edit",props:{modular:{default:"edit"},subItem:{default:{}}},emits:["add","edit"],setup(n,{emit:r}){const p=n,s=d(),u=d(),e={name:"",visitType:"view",url:"",appId:"",pagePath:""};P(()=>{if(Object.keys(p.subItem).length!=0)for(const o in e)e[o]=p.subItem[o]});const l=async()=>{await s.value.menuFormRef.validate(),p.modular==="edit"?r("edit",{...e}):r("add",{...e}),u.value.close(),s.value.menuFormRef.resetFields()};return(o,t)=>{const i=f;return g(),F(i,{ref_key:"menuFromPopupRef",ref:u,async:"",clickModalClose:!1,title:`${n.modular==="add"?"\u65B0\u589E":"\u7F16\u8F91"}\u5B50\u83DC\u5355`,onConfirm:l},{trigger:m(()=>[I(o.$slots,"default")]),default:m(()=>[R(y,{ref_key:"menuFormEditRef",ref:s,modular:"secondary",name:e.name,"onUpdate:name":t[0]||(t[0]=a=>e.name=a),visitType:e.visitType,"onUpdate:visitType":t[1]||(t[1]=a=>e.visitType=a),url:e.url,"onUpdate:url":t[2]||(t[2]=a=>e.url=a),appId:e.appId,"onUpdate:appId":t[3]||(t[3]=a=>e.appId=a),pagePath:e.pagePath,"onUpdate:pagePath":t[4]||(t[4]=a=>e.pagePath=a)},null,8,["name","visitType","url","appId","pagePath"])]),_:3},8,["title"])}}});export{w as _};

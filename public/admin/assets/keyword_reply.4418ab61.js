import{H as N,I as U,w as O,J as P,t as j,K as z,L as H}from"./element-plus.78b4a0ef.js";import{u as I,_ as J}from"./usePaging.1c1359fc.js";import{f as E,b as M}from"./index.58c62ddb.js";import{o as Q,d as X,e as q}from"./wx_oa.33ab6961.js";import{_ as G}from"./edit.vue_vue_type_script_setup_true_lang.63348a5a.js";import{d as W,s as Y,r as Z,e as D,an as ee,o as i,c as te,X as u,P as a,a as g,Q as m,O as p,U as d,u as n,V as v,k as ue,T as ae,n as B}from"./@vue.a137a740.js";import"./@vueuse.07613b64.js";import"./@element-plus.3660753f.js";import"./lodash-es.a31ceab4.js";import"./dayjs.068bf47c.js";import"./axios.e7810230.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.fd318bfa.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./lodash.d8623de2.js";import"./vue-router.9605b890.js";import"./pinia.9b4180ce.js";import"./css-color-function.b4cd2695.js";import"./color.78a8308a.js";import"./clone.e368915a.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./ms.564e106c.js";import"./nprogress.83306ad1.js";import"./vue-clipboard3.ca2ed524.js";import"./clipboard.fb7e1912.js";import"./echarts.7e912674.js";import"./zrender.754e8e90.js";import"./tslib.60310f1a.js";import"./highlight.js.7165574c.js";import"./@highlightjs.7fc78ec7.js";import"./index.e70b9606.js";const oe={class:"flex justify-end mt-4"},ze=W({__name:"keyword_reply",setup(ne){const _=Y(),f=Z(!1),b=D(()=>t=>{switch(t){case 1:return"\u5168\u5339\u914D";case 2:return"\u6A21\u7CCA\u5339\u914D"}}),k=D(()=>t=>{switch(t){case 1:return"\u6587\u672C"}}),r="keyword",{pager:c,getLists:s}=I({fetchFun:q,params:{type:r}}),A=async()=>{var t;f.value=!0,await B(),(t=_.value)==null||t.open("add",r)},V=async t=>{var o,y;f.value=!0,await B(),(o=_.value)==null||o.open("edit",r),(y=_.value)==null||y.getDetail(t)},R=async t=>{await E.confirm("\u786E\u5B9A\u8981\u5220\u9664\uFF1F"),await Q({id:t,type:r}),E.msgSuccess("\u5220\u9664\u6210\u529F"),s()},T=async t=>{try{await X({id:t,type:r}),E.msgSuccess("\u4FEE\u6539\u6210\u529F"),s()}catch{s()}};return s(),(t,o)=>{const y=N,w=U,S=M,h=O,l=P,$=j,x=z,K=J,C=ee("perms"),L=H;return i(),te("div",null,[u(w,{class:"!border-none",shadow:"never"},{default:a(()=>[u(y,{type:"warning",title:"\u6E29\u99A8\u63D0\u793A\uFF1A1.\u7C89\u4E1D\u5728\u516C\u4F17\u53F7\u53D1\u9001\u5185\u5BB9\u65F6\uFF0C\u901A\u8FC7\u5173\u952E\u8BCD\u53EF\u89E6\u53D1\u5173\u952E\u8BCD\u56DE\u590D\uFF1B2.\u540C\u65F6\u53EF\u542F\u7528\u591A\u4E2A\u5173\u952E\u8BCD\u56DE\u590D\uFF0C\u6709\u591A\u6761\u5173\u952E\u8BCD\u5339\u914D\u65F6\u4F18\u9009\u9009\u62E9\u6392\u5E8F\u9760\u524D\u7684\u4E00\u6761",closable:!1,"show-icon":""})]),_:1}),u(w,{class:"!border-none mt-4",shadow:"never"},{default:a(()=>[g("div",null,[m((i(),p(h,{class:"mb-4",type:"primary",onClick:o[0]||(o[0]=e=>A())},{icon:a(()=>[u(S,{name:"el-icon-Plus"})]),default:a(()=>[d(" \u65B0\u589E ")]),_:1})),[[C,["channel:oaReplyKeyword:add"]]])]),m((i(),p(x,{size:"large",data:n(c).lists},{default:a(()=>[u(l,{label:"\u89C4\u5219\u540D\u79F0",prop:"name","min-width":"120"}),u(l,{label:"\u5173\u952E\u8BCD",prop:"keyword","min-width":"120"}),u(l,{label:"\u5339\u914D\u65B9\u5F0F","min-width":"120"},{default:a(({row:e})=>[d(v(n(b)(e.matchingType)),1)]),_:1}),u(l,{label:"\u56DE\u590D\u7C7B\u578B","min-width":"120"},{default:a(({row:e})=>[d(v(n(k)(e.contentType)),1)]),_:1}),u(l,{label:"\u72B6\u6001","min-width":"120"},{default:a(({row:e})=>[m(u($,{modelValue:e.status,"onUpdate:modelValue":F=>e.status=F,"active-value":1,"inactive-value":0,onChange:F=>T(e.id)},null,8,["modelValue","onUpdate:modelValue","onChange"]),[[C,["channel:oaReplyKeyword:status"]]])]),_:1}),u(l,{label:"\u6392\u5E8F",prop:"sort","min-width":"120"}),u(l,{label:"\u64CD\u4F5C",width:"120",fixed:"right"},{default:a(({row:e})=>[m((i(),p(h,{type:"primary",link:"",onClick:F=>V(e)},{default:a(()=>[d(" \u7F16\u8F91 ")]),_:2},1032,["onClick"])),[[C,["channel:oaReplyKeyword:edit"]]]),m((i(),p(h,{type:"danger",link:"",onClick:F=>R(e.id)},{default:a(()=>[d(" \u5220\u9664 ")]),_:2},1032,["onClick"])),[[C,["channel:oaReplyKeyword:del"]]])]),_:1})]),_:1},8,["data"])),[[L,n(c).loading]]),g("div",oe,[u(K,{modelValue:n(c),"onUpdate:modelValue":o[1]||(o[1]=e=>ue(c)?c.value=e:null),onChange:n(s)},null,8,["modelValue","onChange"])])]),_:1}),n(f)?(i(),p(G,{key:0,ref_key:"editRef",ref:_,onSuccess:n(s),onClose:o[2]||(o[2]=e=>f.value=!1)},null,8,["onSuccess"])):ae("",!0)])}}});export{ze as default};

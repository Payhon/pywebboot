import{H as C,Z as v,I as A,J as k,w as y,K as D,L as x}from"./element-plus.78b4a0ef.js";import{_ as L,s as T}from"./edit.vue_vue_type_script_setup_true_lang.adfbec48.js";import{d as f,s as R,a1 as N,an as S,o as a,c as V,X as t,P as e,Q as d,u as F,O as i,U as n}from"./@vue.a137a740.js";import"./@vueuse.07613b64.js";import"./@element-plus.3660753f.js";import"./lodash-es.a31ceab4.js";import"./dayjs.068bf47c.js";import"./axios.e7810230.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.fd318bfa.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./index.58c62ddb.js";import"./lodash.d8623de2.js";import"./vue-router.9605b890.js";import"./pinia.9b4180ce.js";import"./css-color-function.b4cd2695.js";import"./color.78a8308a.js";import"./clone.e368915a.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./ms.564e106c.js";import"./nprogress.83306ad1.js";import"./vue-clipboard3.ca2ed524.js";import"./clipboard.fb7e1912.js";import"./echarts.7e912674.js";import"./zrender.754e8e90.js";import"./tslib.60310f1a.js";import"./highlight.js.7165574c.js";import"./@highlightjs.7fc78ec7.js";import"./index.e70b9606.js";const $={class:"storage"},z=f({name:"storage"}),ht=f({...z,setup(H){const m=R(),o=N({loading:!1,lists:[]}),p=async()=>{try{o.loading=!0,o.lists=await T(),o.loading=!1}catch{o.loading=!1}},B=s=>{var r;(r=m.value)==null||r.open(s)};return p(),(s,r)=>{const E=C,c=A,u=k,_=v,g=y,h=D,b=S("perms"),w=x;return a(),V("div",$,[t(c,{class:"!border-none",shadow:"never"},{default:e(()=>[t(E,{type:"warning",title:"\u6E29\u99A8\u63D0\u793A\uFF1A1.\u5207\u6362\u5B58\u50A8\u65B9\u5F0F\u540E\uFF0C\u9700\u8981\u5C06\u8D44\u6E90\u6587\u4EF6\u4F20\u8F93\u81F3\u65B0\u7684\u5B58\u50A8\u7AEF\uFF1B2.\u8BF7\u52FF\u968F\u610F\u5207\u6362\u5B58\u50A8\u65B9\u5F0F\uFF0C\u53EF\u80FD\u5BFC\u81F4\u56FE\u7247\u65E0\u6CD5\u67E5\u770B",closable:!1,"show-icon":""})]),_:1}),d((a(),i(c,{class:"!border-none mt-4",shadow:"never"},{default:e(()=>[t(h,{size:"large",data:F(o).lists},{default:e(()=>[t(u,{label:"\u50A8\u5B58\u65B9\u5F0F",prop:"alias","min-width":"120"}),t(u,{label:"\u50A8\u5B58\u4F4D\u7F6E",prop:"describe","min-width":"160"}),t(u,{label:"\u72B6\u6001","min-width":"80"},{default:e(({row:l})=>[l.status==1?(a(),i(_,{key:0},{default:e(()=>[n("\u5F00\u542F")]),_:1})):(a(),i(_,{key:1,type:"danger"},{default:e(()=>[n("\u5173\u95ED")]),_:1}))]),_:1}),t(u,{label:"\u64CD\u4F5C","min-width":"80",fixed:"right"},{default:e(({row:l})=>[d((a(),i(g,{type:"primary",link:"",onClick:I=>B(l.alias)},{default:e(()=>[n(" \u8BBE\u7F6E ")]),_:2},1032,["onClick"])),[[b,["setting:storage:edit"]]])]),_:1})]),_:1},8,["data"])]),_:1})),[[w,F(o).loading]]),t(L,{ref_key:"editRef",ref:m,onSuccess:p},null,512)])}}});export{ht as default};

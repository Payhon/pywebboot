import{d as e,u as t,r as s,a,o as n,c as r,w as c,b as o,k as l,t as u,g as i,a9 as p,B as m,j as f,l as d,e as x,f as y,F as _}from"./index.0362d7aa.js";import{_ as g}from"./u-image.6438ddf6.js";import{_ as v}from"./u-button.e9297612.js";import{a as b}from"./shop.5d8d93f6.js";import"./u-icon.4f286f8e.js";import"./plugin-vue_export-helper.21dcd24c.js";async function h(e){if(!e)return uni.$u.toast("图片错误");uni.$u.toast("长按图片保存")}const j=e({__name:"customer-service",props:{content:{type:Object,default:()=>({})},styles:{type:Object,default:()=>({})}},setup:e=>(t(),(t,d)=>{const x=s(a("u-image"),g),y=f,_=s(a("u-button"),v);return n(),r(y,{class:"customer-service bg-white flex flex-col justify-center items-center mx-[36rpx] mt-[20rpx] rounded-lg px-[110rpx] pt-[100rpx] pb-[160rpx]"},{default:c((()=>[o(x,{width:"280",height:"280",src:e.content.qrcode},null,8,["src"]),e.content.title?(n(),r(y,{key:0,class:"text-lg mt-[14rpx] font-medium"},{default:c((()=>[l(u(e.content.title),1)])),_:1})):i("v-if",!0),e.content.time?(n(),r(y,{key:1,class:"text-content mt-[40rpx]"},{default:c((()=>[l("服务时间："+u(e.content.time),1)])),_:1})):i("v-if",!0),e.content.mobile?(n(),r(y,{key:2,class:"text-content mt-[14rpx] flex flex-wrap"},{default:c((()=>[l(" 客服电话："+u(e.content.mobile)+" ",1),p("a",{class:"ml-[10rpx] phone text-muted underline",href:"tel:"+e.content.mobile}," 拨打 ",8,["href"])])),_:1})):i("v-if",!0),o(y,{class:"mt-[100rpx] w-full"},{default:c((()=>[o(_,{type:"primary",shape:"circle",onClick:d[0]||(d[0]=t=>m(h)(e.content.qrcode))},{default:c((()=>[l(" 保存二维码图片 ")])),_:1})])),_:1})])),_:1})})}),k=e({__name:"customer_service",setup(e){const t=d({pages:[]});return(async()=>{const e=await b({id:3});t.pages=JSON.parse(e.pages)})(),(e,o)=>{const l=s(a("w-customer-service"),j),u=f;return n(),r(u,{class:"customer-service"},{default:c((()=>[(n(!0),x(_,null,y(t.pages,((e,t)=>(n(),r(u,{key:t},{default:c((()=>["customer-service"==e.name?(n(),r(l,{key:0,content:e.content,styles:e.styles},null,8,["content","styles"])):i("v-if",!0)])),_:2},1024)))),128))])),_:1})}}});export{k as default};
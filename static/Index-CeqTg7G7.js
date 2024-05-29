import{u as G}from"./useTable-B7hd0WvU.js";import{d as J}from"./index-C7XNEq9c.js";import{c as g,a as K,h as Z}from"./commonFn-Ei0WKKhK.js";import{e as Q}from"./index-Cfrc5ih1.js";import{a as X}from"./index-BRvIyV96.js";import{l as $,r as y,d as ee,ah as u,ap as te,m as c,p,q as h,U as l,O as r,F as k,a7 as S,M as V,S as b,P as ae,u as s,I as le,T as _,R as z}from"./vue-BtEXIrqH.js";import"./element-BbMnn7tA.js";import"//at.alicdn.com/t/c/font_4557022_266y8yxi6v9.js";import"./vxe-EK889JN8.js";const re={class:"order base-box p-36 ml-40 mr-40 mt-20"},oe={class:"top-search"},ne={class:"table-wrapper"},se={key:0},ue={key:0},ce={class:"pager-wrapper mt-32 flex justify-end"},ve=$({__name:"Index",setup(de){const v=JSON.parse(Q("user-info")||"{}"),n=y({luAgent:v.agent,tradeState:"",payWay:"",merchantId:"",bizNo:""}),D=y([]),w=y([]),M=[{label:"待支付",value:"10"},{label:"支付成功",value:"20"},{label:"支付失败",value:"30"},{label:"取消支付",value:"40"},{label:"全额退款",value:"60"},{label:"部分退款",value:"61"}];y("first");const{paginationData:m,handleCurrentChange:N,handSearch:T,tableData:A,queryTableData:L,loadingRef:P}=G({searchData:n,url:"/traderecord/list",method:"post"}),U=()=>{n.value={luAgent:v.agent}};function W(){const a=[];for(const t in n.value){let o=n.value[t];Array.isArray(o)&&(o=o.map(d=>Z.utc(new Date(d)).format("YYYY-MM-DD HH:mm:ss")).toString()),o&&a.push({columnName:t,value:o})}T(a)}const I=[{text:"Last week",value:()=>{const a=new Date,t=new Date;return t.setTime(t.getTime()-3600*1e3*24*7),[t,a]}},{text:"Last month",value:()=>{const a=new Date,t=new Date;return t.setTime(t.getTime()-3600*1e3*24*30),[t,a]}},{text:"Last 3 months",value:()=>{const a=new Date,t=new Date;return t.setTime(t.getTime()-3600*1e3*24*90),[t,a]}}],Y=()=>{const a={agentId:v.agent,pageNo:1,pageSize:15},t=new URLSearchParams(Object.entries(a)).toString();X(t).then(o=>{o.data.results&&(D.value=o.data.results)}).catch(o=>{console.error(o)})},B=async()=>{try{const a=await J();a.data&&a.data.length&&(w.value=a.data)}catch(a){console.log(a,"e")}},x=a=>{if(a==="10")return{class:"order-wait",text:"等待支付"};if(a==="20")return{class:"order-success",text:"支付成功"};if(a==="30")return{class:"order-fail",text:"支付失败"};if(a==="40")return{class:"order-cancel",text:"取消支付"};if(a==="60")return{class:"order-refund",text:"全额退款"};if(a==="61")return{class:"order-partial-refund",text:"部分退款"}},q=a=>{let t="";return w.value.forEach(o=>{o.code.toUpperCase()===a.toUpperCase()&&(t=o.name)}),t};return ee(()=>{L(),Y(),B()}),(a,t)=>{const o=u("el-option"),f=u("el-select"),d=u("el-form-item"),O=u("el-date-picker"),R=u("el-input"),C=u("el-button"),F=u("el-form"),i=u("el-table-column"),H=u("el-table"),j=u("el-pagination"),E=te("loading");return c(),p("div",re,[h("div",oe,[l(F,{inline:!0,model:n.value,class:"demo-form-inline"},{default:r(()=>[l(d,null,{default:r(()=>[l(f,{modelValue:n.value.merchantId,"onUpdate:modelValue":t[0]||(t[0]=e=>n.value.merchantId=e),placeholder:"全部站点",clearable:""},{default:r(()=>[(c(!0),p(k,null,S(D.value,e=>(c(),V(o,{key:e.id,label:e.merchant,value:e.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),l(d,null,{default:r(()=>[l(f,{modelValue:n.value.tradeState,"onUpdate:modelValue":t[1]||(t[1]=e=>n.value.tradeState=e),placeholder:"全部订单状态",clearable:""},{default:r(()=>[(c(),p(k,null,S(M,e=>l(o,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1}),l(d,null,{default:r(()=>[l(f,{modelValue:n.value.payWay,"onUpdate:modelValue":t[2]||(t[2]=e=>n.value.payWay=e),placeholder:"全部支付方式",clearable:""},{default:r(()=>[(c(!0),p(k,null,S(w.value,e=>(c(),V(o,{key:e.code,label:e.name,value:e.code},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),l(d,null,{default:r(()=>[l(O,{modelValue:n.value.createdAt,"onUpdate:modelValue":t[3]||(t[3]=e=>n.value.createdAt=e),type:"daterange","unlink-panels":"","range-separator":"-","start-placeholder":"开始时间","end-placeholder":"结束时间",format:"YYYY-MM-DD",shortcuts:I,size:"default"},null,8,["modelValue"])]),_:1}),l(d,null,{default:r(()=>[l(R,{modelValue:n.value.bizNo,"onUpdate:modelValue":t[4]||(t[4]=e=>n.value.bizNo=e),placeholder:"请输入商户订单号",clearable:""},null,8,["modelValue"])]),_:1}),l(d,null,{default:r(()=>[l(C,{type:"primary",onClick:U},{default:r(()=>[b("重置")]),_:1}),l(C,{type:"primary",onClick:W},{default:r(()=>[b("查询")]),_:1})]),_:1})]),_:1},8,["model"])]),h("div",ne,[ae((c(),V(H,{data:s(A),style:{width:"100%"}},{default:r(()=>[l(i,{prop:"merchant~merchantName",label:"站点名称",width:"120"}),l(i,{prop:"bizNo",label:"商户订单号",width:"240"}),l(i,{prop:"tradeState",label:"订单状态",width:"120"},{default:r(e=>[h("div",{class:le(x(e.row.tradeState).class)},_(x(e.row.tradeState).text),3)]),_:1}),l(i,{prop:"price",label:"订单金额",width:"120"},{default:r(e=>[s(g)(e.row.price,e.row.currencyMultiply)?(c(),p("span",se,_(s(g)(e.row.price,e.row.currencyMultiply)+" "+e.row.currency),1)):z("",!0)]),_:1}),l(i,{prop:"agentBrokerage",label:"佣金",width:"120"},{default:r(e=>[s(g)(e.row.agentBrokerage,e.row.currencyMultiply)?(c(),p("span",ue,_(s(g)(e.row.agentBrokerage,e.row.currencyMultiply)+" "+e.row.currency),1)):z("",!0)]),_:1}),l(i,{prop:"payWay",label:"支付方式",width:"120"},{default:r(e=>[b(_(q(e.row.payWay)),1)]),_:1}),l(i,{prop:"createdAt",label:"下单时间(香港)",width:"160"},{default:r(e=>[b(_(s(K)(e.row.createdAt)),1)]),_:1})]),_:1},8,["data"])),[[E,s(P)]])]),h("div",ce,[l(j,{background:"",layout:s(m).layout,"page-sizes":s(m).pageSizes,total:s(m).total,"page-size":s(m).pageSize,currentPage:s(m).currentPage,onCurrentChange:s(N)},null,8,["layout","page-sizes","total","page-size","currentPage","onCurrentChange"])])])}}});export{ve as default};

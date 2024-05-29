import{F as $}from"./Index-Di390-Cq.js";import{_ as y}from"./Index.vue_vue_type_script_setup_true_lang-TK6O32Dg.js";import{i as B,e as E,_ as N}from"./index-Cfrc5ih1.js";import{g as u,e as L}from"./commonFn-Ei0WKKhK.js";import{E as Z}from"./element-BbMnn7tA.js";import{l as z,aK as I,r as v,aL as O,Z as F,b as P,ah as m,m as j,M as G,O as r,q as a,U as t,S as q,T as S,u as T,aF as J,aG as K}from"./vue-BtEXIrqH.js";const ve="data:image/svg+xml,%3csvg%20width='70'%20height='70'%20viewBox='0%200%2070%2070'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_7_507)'%3e%3cpath%20d='M34.9999%200C15.6691%200%200%2015.6702%200%2034.9999C0%2054.3297%2015.6691%2069.9999%2034.9999%2069.9999C54.3297%2069.9999%2070%2054.3297%2070%2034.9999C70%2015.6702%2054.3297%200%2034.9999%200ZM54.1418%2028.2413L31.3257%2051.0568C30.7925%2051.5911%2029.9266%2051.5911%2029.3933%2051.0568L15.8582%2037.5217C15.325%2036.9885%2015.325%2036.1226%2015.8582%2035.5889L20.1125%2031.3352C20.6457%2030.8014%2021.5116%2030.8014%2022.0448%2031.3352L30.3596%2039.6488L47.9552%2022.0542C48.4884%2021.5205%2049.3543%2021.5205%2049.8876%2022.0542L54.1419%2026.3079C54.6761%2026.8417%2054.6761%2027.7076%2054.1418%2028.2413Z'%20fill='%2330CA66'/%3e%3cpath%20d='M54.1419%2028.2414L31.3258%2051.0569C30.7926%2051.5912%2029.9267%2051.5912%2029.3935%2051.0569L15.8584%2037.5218C15.3252%2036.9886%2015.3252%2036.1227%2015.8584%2035.589L20.1126%2031.3353C20.6458%2030.8016%2021.5117%2030.8016%2022.045%2031.3353L30.3598%2039.6489L47.9553%2022.0544C48.4885%2021.5206%2049.3545%2021.5206%2049.8878%2022.0544L54.142%2026.308C54.6762%2026.8418%2054.6762%2027.7077%2054.1419%2028.2414Z'%20fill='white'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_7_507'%3e%3crect%20width='70'%20height='70'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";function H(s,w){return B({url:`/merchantapp/create${w?"?parentMerchantId="+w:""}`,method:"post",data:s})}const b=s=>(J("data-v-474535ab"),s=s(),K(),s),Q={class:"base-box detail-box"},W={class:"p-20"},X=b(()=>a("div",{class:"add-title flex-center"},"站点信息",-1)),Y=b(()=>a("div",{class:"add-text flex-center"},"请保管好该站点的appId以及AppSecret，请勿泄露",-1)),ee={class:"add-item mb-30 mt-40 flex-center"},le=b(()=>a("div",{class:"add-item-left"},"AppId",-1)),te={class:"add-item-right flex-center flex-1 ml-20"},oe={class:"add-item flex-center"},ae=b(()=>a("div",{class:"add-item-left"},"AppSecret",-1)),re={class:"add-item-right flex-center flex-1 ml-20"},se={class:"dialog-footer p-20"},ie={class:"create-title mb-50"},ne={class:"flex-center w-full mt-30"},de=z({__name:"Create",props:I(["row"],{modelValue:{},modelModifiers:{}}),emits:I(["refresh"],["update:modelValue"]),setup(s,{emit:w}){const M=JSON.parse(E("user-info")||"{}"),_=v(!1),p=v({appID:"",appSecret:""}),i=s,g=v(!1),h=O(s,"modelValue"),C=v(),x=v(!1),e=F({name:"",edit:!1,turnover:"",websiteUrl:"",region:"",category:"",currency:"",desc:""}),k=F({name:[{required:!0,message:"请输入站点名称",trigger:"blur"}],websiteUrl:[{required:!0,message:"请输入业务/产品网址",trigger:"blur"}],turnover:[{required:!0,message:"请选择营业额",trigger:"change"}],category:[{required:!0,message:"请选择行业类别",trigger:"change"}],currency:[{required:!0,message:"请输入站点名称",trigger:"change"}],region:[{required:!0,message:"请选择业务分布地区",trigger:"change"}]}),A=async f=>{f&&await f.validate(async(l,d)=>{if(l){const c={name:e.name,claims:[{claimType:"turnover",claimValue:e.turnover},{claimType:"currency",claimValue:e.turnover},{claimType:"websiteUrl",claimValue:e.websiteUrl},{claimType:"desc",claimValue:e.desc},{claimType:"region",claimValue:e.region},{claimType:"category",claimValue:e.category.toString()}]};g.value&&(c.isRejected="0"),console.log(c,"req"),x.value=!0;try{const V=await H(c,M.mer);if(Z.success("创建成功"),g.value){location.reload();return}p.value=V.data,_.value=!0}catch{x.value=!1}console.log("submit!")}else console.log("error submit!",d)})},D=()=>{_.value=!1,location.reload()};return P(()=>h.value,f=>{var l,d;f&&((l=C.value)==null||l.resetFields()),g.value=!1,i.row.name&&(g.value=!0,e.edit=!0,e.name=i.row.name,e.websiteUrl=u(i.row.claims,"websiteUrl"),e.category=(d=u(i.row.claims,"category"))==null?void 0:d.split(","),e.currency=u(i.row.claims,"currency"),e.turnover=u(i.row.claims,"turnover"),e.region=u(i.row.claims,"region"),e.desc=u(i.row.claims,"desc"))}),(f,l)=>{const d=m("SvgIcon"),c=m("el-button"),V=m("el-dialog"),U=m("el-input"),n=m("el-form-item"),R=m("el-form");return j(),G($,{modelValue:h.value,"onUpdate:modelValue":l[11]||(l[11]=o=>h.value=o)},{default:r(()=>[a("div",Q,[t(V,{modelValue:_.value,"onUpdate:modelValue":l[2]||(l[2]=o=>_.value=o),width:"500"},{footer:r(()=>[a("div",se,[t(c,{type:"primary",onClick:D},{default:r(()=>[q("确定")]),_:1})])]),default:r(()=>[a("div",W,[X,Y,a("div",ee,[le,a("div",te,[a("div",null,S(p.value.appID),1),t(d,{name:"icon-fuzhi",class:"cursor-pointer ml-10",color:"#FE6F55",onClick:l[0]||(l[0]=o=>T(L)(p.value.appID))})])]),a("div",oe,[ae,a("div",re,[a("div",null,S(p.value.appSecret),1),t(d,{name:"icon-fuzhi",class:"cursor-pointer ml-10",color:"#FE6F55",onClick:l[1]||(l[1]=o=>T(L)(p.value.appSecret))})])])])]),_:1},8,["modelValue"]),a("div",ie,S(g.value?"补充资料":"创建新站点"),1),t(R,{ref_key:"siteFormRef",ref:C,"label-position":"top",rules:k,"label-width":"auto",model:e},{default:r(()=>[t(n,{prop:"name",label:"站点名称"},{default:r(()=>[t(U,{modelValue:e.name,"onUpdate:modelValue":l[3]||(l[3]=o=>e.name=o),placeholder:"请输入站点名称"},null,8,["modelValue"])]),_:1}),t(n,{prop:"websiteUrl",label:"业务/产品网址"},{default:r(()=>[t(U,{modelValue:e.websiteUrl,"onUpdate:modelValue":l[4]||(l[4]=o=>e.websiteUrl=o),placeholder:"请输入业务/产品网址"},null,8,["modelValue"])]),_:1}),t(n,{prop:"category",label:"行业类别"},{default:r(()=>[t(y,{type:"category",modelValue:e.category,"onUpdate:modelValue":l[5]||(l[5]=o=>e.category=o),placeholder:"请选择行业类别"},null,8,["modelValue"])]),_:1}),t(n,{prop:"currency",label:"收款币种"},{default:r(()=>[t(y,{type:"currency",modelValue:e.currency,"onUpdate:modelValue":l[6]||(l[6]=o=>e.currency=o),placeholder:"请选择收款币种"},null,8,["modelValue"])]),_:1}),t(n,{prop:"turnover",label:"单月营业额"},{default:r(()=>[t(y,{type:"turnover",modelValue:e.turnover,"onUpdate:modelValue":l[7]||(l[7]=o=>e.turnover=o),placeholder:"请选择单月营业额"},null,8,["modelValue"])]),_:1}),t(n,{prop:"region",label:"业务分布地区"},{default:r(()=>[t(y,{type:"region",modelValue:e.region,"onUpdate:modelValue":l[8]||(l[8]=o=>e.region=o),placeholder:"请选择业务分布地区"},null,8,["modelValue"])]),_:1}),t(n,{prop:"desc",label:"业务/产品描述 (选填)"},{default:r(()=>[t(U,{modelValue:e.desc,"onUpdate:modelValue":l[9]||(l[9]=o=>e.desc=o),placeholder:"请输入业务/产品描述"},null,8,["modelValue"])]),_:1}),t(n,null,{default:r(()=>[a("div",ne,[t(c,{type:"primary",loading:x.value,onClick:l[10]||(l[10]=o=>A(C.value))},{default:r(()=>[q("提交认证")]),_:1},8,["loading"])])]),_:1})]),_:1},8,["rules","model"])])]),_:1},8,["modelValue"])}}}),_e=N(de,[["__scopeId","data-v-474535ab"]]);export{_e as C,ve as _};

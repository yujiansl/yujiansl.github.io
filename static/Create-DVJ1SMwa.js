import{F as T}from"./Index-BgrOBixy.js";import{_}from"./Index.vue_vue_type_script_setup_true_lang-CAnY41O0.js";import{i as k,e as M,_ as $}from"./index-bEAPwbJM.js";import{d as C}from"./commonFn-DSVr4W-5.js";import{l as A,r as V,aL as D,Z as x,b as B,ah as n,m as N,M as R,O as r,q as a,U as o,S as U,T as S,u as L,aF as Z,aG as z}from"./vue-BtEXIrqH.js";const ne="data:image/svg+xml,%3csvg%20width='70'%20height='70'%20viewBox='0%200%2070%2070'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_7_507)'%3e%3cpath%20d='M34.9999%200C15.6691%200%200%2015.6702%200%2034.9999C0%2054.3297%2015.6691%2069.9999%2034.9999%2069.9999C54.3297%2069.9999%2070%2054.3297%2070%2034.9999C70%2015.6702%2054.3297%200%2034.9999%200ZM54.1418%2028.2413L31.3257%2051.0568C30.7925%2051.5911%2029.9266%2051.5911%2029.3933%2051.0568L15.8582%2037.5217C15.325%2036.9885%2015.325%2036.1226%2015.8582%2035.5889L20.1125%2031.3352C20.6457%2030.8014%2021.5116%2030.8014%2022.0448%2031.3352L30.3596%2039.6488L47.9552%2022.0542C48.4884%2021.5205%2049.3543%2021.5205%2049.8876%2022.0542L54.1419%2026.3079C54.6761%2026.8417%2054.6761%2027.7076%2054.1418%2028.2413Z'%20fill='%2330CA66'/%3e%3cpath%20d='M54.1419%2028.2414L31.3258%2051.0569C30.7926%2051.5912%2029.9267%2051.5912%2029.3935%2051.0569L15.8584%2037.5218C15.3252%2036.9886%2015.3252%2036.1227%2015.8584%2035.589L20.1126%2031.3353C20.6458%2030.8016%2021.5117%2030.8016%2022.045%2031.3353L30.3598%2039.6489L47.9553%2022.0544C48.4885%2021.5206%2049.3545%2021.5206%2049.8878%2022.0544L54.142%2026.308C54.6762%2026.8418%2054.6762%2027.7077%2054.1419%2028.2414Z'%20fill='white'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_7_507'%3e%3crect%20width='70'%20height='70'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";function E(i,m){return k({url:`/merchantapp/create${m?"?parentMerchantId="+m:""}`,method:"post",data:i})}const p=i=>(Z("data-v-2401e75a"),i=i(),z(),i),O={class:"base-box detail-box"},P={class:"p-20"},G=p(()=>a("div",{class:"add-title flex-center"},"站点信息",-1)),J=p(()=>a("div",{class:"add-text flex-center"},"请保管好该站点的appId以及AppSecret，请勿泄露",-1)),j={class:"add-item mb-30 mt-40 flex-center"},H=p(()=>a("div",{class:"add-item-left"},"AppId",-1)),K={class:"add-item-right flex-center flex-1 ml-20"},Q={class:"add-item flex-center"},W=p(()=>a("div",{class:"add-item-left"},"AppSecret",-1)),X={class:"add-item-right flex-center flex-1 ml-20"},Y={class:"dialog-footer p-20"},ee=p(()=>a("div",{class:"create-title mb-50"},"创建新站点",-1)),le={class:"flex-center w-full mt-30"},te=A({__name:"Create",props:{modelValue:{},modelModifiers:{}},emits:["update:modelValue"],setup(i){const m=JSON.parse(M("user-info")||"{}"),f=V(!1),d=V({appID:"",appSecret:""}),g=D(i,"modelValue"),y=V(),h=V(!1),l=x({name:"",turnover:"",websiteUrl:"",region:"",category:"",currency:"",desc:""}),I=x({name:[{required:!0,message:"请输入站点名称",trigger:"blur"}],websiteUrl:[{required:!0,message:"请输入回调url",trigger:"blur"}],turnover:[{required:!0,message:"请选择营业额",trigger:"change"}],category:[{required:!0,message:"请选择行业类别",trigger:"change"}],currency:[{required:!0,message:"请输入站点名称",trigger:"change"}],region:[{required:!0,message:"请选择业务分布地区",trigger:"change"}]}),F=async u=>{u&&await u.validate(async(e,v)=>{if(e){const c={websiteUrl:l.websiteUrl,name:l.name,currency:l.currency,claims:[{claimType:"turnover",claimValue:l.turnover},{claimType:"websiteUrl",claimValue:l.websiteUrl},{claimType:"desc",claimValue:l.desc},{claimType:"region",claimValue:l.region},{claimType:"category",claimValue:l.category.toString()}]};console.log(c,"req"),h.value=!0;try{await E(c,m.mer),ElMessage.success("创建成功"),d.value=res.data,f.value=!0}catch{h.value=!1}console.log("submit!")}else console.log("error submit!",v)})};return B(g,u=>{var e;u&&((e=y.value)==null||e.resetFields())}),(u,e)=>{const v=n("SvgIcon"),c=n("el-button"),w=n("el-dialog"),b=n("el-input"),s=n("el-form-item"),q=n("el-form");return N(),R(T,{modelValue:g.value,"onUpdate:modelValue":e[12]||(e[12]=t=>g.value=t)},{default:r(()=>[a("div",O,[o(w,{modelValue:f.value,"onUpdate:modelValue":e[3]||(e[3]=t=>f.value=t),width:"500"},{footer:r(()=>[a("div",Y,[o(c,{type:"primary",onClick:e[2]||(e[2]=t=>{f.value=!1,g.value=!1})},{default:r(()=>[U(" 确定")]),_:1})])]),default:r(()=>[a("div",P,[G,J,a("div",j,[H,a("div",K,[a("div",null,S(d.value.appID),1),o(v,{name:"icon-fuzhi",class:"cursor-pointer ml-10",color:"#FE6F55",onClick:e[0]||(e[0]=t=>L(C)(d.value.appID))})])]),a("div",Q,[W,a("div",X,[a("div",null,S(d.value.appSecret),1),o(v,{name:"icon-fuzhi",class:"cursor-pointer ml-10",color:"#FE6F55",onClick:e[1]||(e[1]=t=>L(C)(d.value.appSecret))})])])])]),_:1},8,["modelValue"]),ee,o(q,{ref_key:"siteFormRef",ref:y,"label-position":"top",rules:I,"label-width":"auto",model:l},{default:r(()=>[o(s,{prop:"name",label:"站点名称"},{default:r(()=>[o(b,{modelValue:l.name,"onUpdate:modelValue":e[4]||(e[4]=t=>l.name=t),placeholder:"请输入站点名称"},null,8,["modelValue"])]),_:1}),o(s,{prop:"websiteUrl",label:"业务/产品网址"},{default:r(()=>[o(b,{modelValue:l.websiteUrl,"onUpdate:modelValue":e[5]||(e[5]=t=>l.websiteUrl=t),placeholder:"请输入业务/产品网址"},null,8,["modelValue"])]),_:1}),o(s,{prop:"category",label:"行业类别"},{default:r(()=>[o(_,{type:"category",modelValue:l.category,"onUpdate:modelValue":e[6]||(e[6]=t=>l.category=t),placeholder:"请选择行业类别"},null,8,["modelValue"])]),_:1}),o(s,{prop:"currency",label:"收款币种"},{default:r(()=>[o(_,{type:"currency",modelValue:l.currency,"onUpdate:modelValue":e[7]||(e[7]=t=>l.currency=t),placeholder:"请选择收款币种"},null,8,["modelValue"])]),_:1}),o(s,{prop:"turnover",label:"单月营业额"},{default:r(()=>[o(_,{type:"turnover",modelValue:l.turnover,"onUpdate:modelValue":e[8]||(e[8]=t=>l.turnover=t),placeholder:"请选择单月营业额"},null,8,["modelValue"])]),_:1}),o(s,{prop:"region",label:"业务分布地区"},{default:r(()=>[o(_,{type:"region",modelValue:l.region,"onUpdate:modelValue":e[9]||(e[9]=t=>l.region=t),placeholder:"请选择业务分布地区"},null,8,["modelValue"])]),_:1}),o(s,{prop:"desc",label:"业务/产品描述 (选填)"},{default:r(()=>[o(b,{modelValue:l.desc,"onUpdate:modelValue":e[10]||(e[10]=t=>l.desc=t),placeholder:"请输入业务/产品描述"},null,8,["modelValue"])]),_:1}),o(s,null,{default:r(()=>[a("div",le,[o(c,{type:"primary",onClick:e[11]||(e[11]=t=>F(y.value))},{default:r(()=>[U("提交认证")]),_:1})])]),_:1})]),_:1},8,["rules","model"])])]),_:1},8,["modelValue"])}}}),de=$(te,[["__scopeId","data-v-2401e75a"]]);export{de as C,ne as _};

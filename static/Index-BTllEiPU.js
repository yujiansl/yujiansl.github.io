import{_ as K}from"./LIKU-logo-BbnHVERV.js";import{C as M,_ as j}from"./Create-BVmYWzpE.js";import{u as q,E as F}from"./element-BbMnn7tA.js";import{f as A,e as G,_ as J}from"./index-Cfrc5ih1.js";import{l as P,aE as Z,r as C,ah as r,m as f,p as b,q as o,U as e,O as n,u as s,F as H,a7 as Q,S as u,Z as W,aF as X,aG as Y}from"./vue-BtEXIrqH.js";import{u as ee}from"./useEnterprise-euz5rIMR.js";import{U}from"./Index-BrVI3k6U.js";import{_ as oe}from"./Index.vue_vue_type_script_setup_true_lang-TK6O32Dg.js";import{m as te}from"./index-C7XNEq9c.js";import"./Index-Di390-Cq.js";import"./commonFn-Ei0WKKhK.js";import"//at.alicdn.com/t/c/font_4557022_266y8yxi6v9.js";import"./vxe-EK889JN8.js";const i=p=>(X("data-v-71a5b3c1"),p=p(),Y(),p),le={class:"full-content auth-box w-full h-full position-relative"},se={class:"auth-header flex pl-30 pr-30 justify-between items-center"},ae=i(()=>o("img",{src:K,class:"header-logo"},null,-1)),ne={class:"right-menu"},re={class:"right-menu-avatar"},ie=i(()=>o("span",{style:{display:"block"}},"退出登录",-1)),de={class:"auth-body flex-center flex-col"},ce={class:"auth-content"},me=i(()=>o("div",{class:"auth-title mt-30 mb-47 flex-center"},"最后一步，让 LIKU 了解你们",-1)),ue={class:"base-box info-box mt-44"},pe={key:0,class:"form-with-title"},_e=i(()=>o("div",{class:"detail-title"},"你的企业信息",-1)),fe=i(()=>o("div",{class:"item-desc"},"请上传能证明企业注册文件（如：公司注册书、商业登记证、营业执照等）",-1)),be=i(()=>o("div",{class:"item-desc"},"请上传能证明企业主身份文件（如：护照、法定身份证、驾照等）",-1)),ye={class:"w-full flex-center flex-col"},ve={key:1,class:"pt-46"},he=i(()=>o("img",{src:j,class:"auth-img",alt:""},null,-1)),ke=i(()=>o("div",{class:"start-title mt-20 mb-6"},"信息已提交",-1)),we=i(()=>o("div",{class:"start-text mb-125"},[u(" 我们已收到你的信息，审核结果请留意邮箱。"),o("br"),u(" 预计 3 个工作日内完成认证！ ")],-1)),xe={class:"w-full flex-center mb-40"},Ve={href:"https://t.me/LikuPay",target:"_blank",class:"contact-box pt-30 pb-30 flex-center"},ge=P({__name:"Index",setup(p){const S=A(),y=Z(),k=C(!1),w=C(!1),N=[{value:"director",label:"董事"},{value:"legal",label:"法定代表人"},{value:"beneficiary",label:"受益人"}],D=JSON.parse(G("user-info")||"{}"),{enterpriseFormRef:x,enterpriseForm:a,enterpriseRules:T}=ee(),E=()=>{S.logout(),y.push("/login")},V=()=>{y.push("/")},R=async v=>{v&&await v.validate((t,h)=>{if(t)try{const c=[];for(const _ in a)c.push({claimType:_,claimValue:a[_]});const m=W({});m.merchantId=D.mer,m.claims=c,te(m).then(()=>{F.success("保存成功"),k.value=!0}).catch(()=>{F.error("操作失败")})}catch(c){console.error(c)}else console.error("error submit!",h)})},B=()=>{y.push("/site/index")};return(v,t)=>{const h=r("el-avatar"),c=r("el-dropdown-item"),m=r("el-dropdown-menu"),_=r("el-dropdown"),g=r("el-input"),d=r("el-form-item"),L=r("el-option"),O=r("el-select"),I=r("el-button"),$=r("el-form"),z=r("SvgIcon");return f(),b("div",le,[o("div",se,[ae,o("div",ne,[e(_,{class:"right-menu-item"},{dropdown:n(()=>[e(m,null,{default:n(()=>[e(c,{divided:"",onClick:E},{default:n(()=>[ie]),_:1})]),_:1})]),default:n(()=>[o("div",re,[e(h,{icon:s(q),size:38},null,8,["icon"])])]),_:1})])]),o("div",de,[o("div",ce,[me,o("div",ue,[k.value?(f(),b("div",ve,[he,ke,we,o("div",xe,[e(I,{type:"primary",onClick:B},{default:n(()=>[u("创建站点")]),_:1})]),o("div",{class:"complete-btn cursor-pointer w-full flex-center mb-40",onClick:V},"完成")])):(f(),b("div",pe,[_e,e($,{"label-position":"top",ref_key:"enterpriseFormRef",ref:x,model:s(a),rules:s(T),class:"modal-ruleForm"},{default:n(()=>[e(d,{label:"企业名称",prop:"kyb.companyName"},{default:n(()=>[e(g,{modelValue:s(a)["kyb.companyName"],"onUpdate:modelValue":t[0]||(t[0]=l=>s(a)["kyb.companyName"]=l),placeholder:"请输入企业名称"},null,8,["modelValue"])]),_:1}),e(d,{label:"企业注册地",prop:"kyb.registrationCountry"},{default:n(()=>[e(oe,{type:"region",modelValue:s(a)["kyb.registrationCountry"],"onUpdate:modelValue":t[1]||(t[1]=l=>s(a)["kyb.registrationCountry"]=l),placeholder:"请选择企业注册地"},null,8,["modelValue"])]),_:1}),e(d,{label:"企业证件",prop:"kyb.companyIDFile"},{default:n(()=>[e(U,{modelValue:s(a)["kyb.companyIDFile"],"onUpdate:modelValue":t[2]||(t[2]=l=>s(a)["kyb.companyIDFile"]=l),id:"companyIDFile",ext:"img"},null,8,["modelValue"]),fe]),_:1}),e(d,{label:"企业主姓名",prop:"kyb.ownerName"},{default:n(()=>[e(g,{modelValue:s(a)["kyb.ownerName"],"onUpdate:modelValue":t[3]||(t[3]=l=>s(a)["kyb.ownerName"]=l),placeholder:"请输入企业主姓名"},null,8,["modelValue"])]),_:1}),e(d,{label:"企业主类型",prop:"kyb.ownerType"},{default:n(()=>[e(O,{modelValue:s(a)["kyb.ownerType"],"onUpdate:modelValue":t[4]||(t[4]=l=>s(a)["kyb.ownerType"]=l),placeholder:"请选择企业主类型"},{default:n(()=>[(f(),b(H,null,Q(N,l=>e(L,{key:l.value,label:l.label,value:l.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1}),e(d,{label:"企业主证件",prop:"kyb.ownerIDFile"},{default:n(()=>[e(U,{defaultImgUrl:"",modelValue:s(a)["kyb.ownerIDFile"],"onUpdate:modelValue":t[5]||(t[5]=l=>s(a)["kyb.ownerIDFile"]=l),id:"ownerIDFile",ext:"img"},null,8,["modelValue"]),be]),_:1}),e(d,null,{default:n(()=>[o("div",ye,[e(I,{type:"primary",class:"mt-60 mb-24",onClick:t[6]||(t[6]=l=>R(s(x)))},{default:n(()=>[u("提交认证 ")]),_:1}),o("div",{class:"auth-wait cursor-pointer",onClick:V},"稍后完善")])]),_:1})]),_:1},8,["model","rules"])]))])]),o("a",Ve,[e(z,{name:"icon-lianxikefu",size:"18px",class:"mr-6"}),u(" 联系客服 ")]),e(M,{modelValue:w.value,"onUpdate:modelValue":t[7]||(t[7]=l=>w.value=l)},null,8,["modelValue"])])])}}}),$e=J(ge,[["__scopeId","data-v-71a5b3c1"]]);export{$e as default};

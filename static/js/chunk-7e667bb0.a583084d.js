(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7e667bb0"],{"373f":function(e,a,t){},"4c8a":function(e,a,t){"use strict";t.d(a,"a",(function(){return r})),t.d(a,"b",(function(){return n}));var r=function(e,a,t){var r=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;""!==a&&a?r.test(a)?t():t(new Error("请输入正确的邮箱地址")):t(new Error("請輸入郵箱"))},n=function(e,a,t){var r=/^[0-9a-zA-Z!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]{6,30}$/;""!==a&&a?r.test(a)?t():t(new Error("请输入6～30位数字、字母或标点符号")):t(new Error("請輸入密碼"))}},"5aa6":function(e,a,t){"use strict";var r=t("373f"),n=t.n(r);n.a},"830b":function(e,a,t){"use strict";t.r(a);var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"flex jc-c ai-c h-100 reg-container"},[e.globalLoading?t("div",{staticClass:"a-spin flex jc-c ai-c"},[t("a-spin")],1):e._e(),t("div",{staticClass:"reg-box"},[t("div",{staticClass:"reg-title"},[e._v("LIKU 登錄")]),t("a-form",{attrs:{form:e.form}},[t("a-form-item",{attrs:{"label-col":e.formItemLayout.labelCol,"wrapper-col":e.formItemLayout.wrapperCol,label:"email"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["email",{rules:[{required:!0,message:"請輸入郵箱賬號"}]}],expression:"[\n        'email',\n        { rules: [{ required: true, message:'請輸入郵箱賬號'}] },\n      ]"}],attrs:{placeholder:"請輸入郵箱"}})],1),t("a-form-item",{attrs:{"label-col":e.formItemLayout.labelCol,"wrapper-col":e.formItemLayout.wrapperCol,label:"pwd"}},[t("a-input-password",{directives:[{name:"decorator",rawName:"v-decorator",value:["password",{rules:[{required:!0,message:"請輸入密碼"}]}],expression:"[\n        'password',\n        { rules: [{ required: true, message:'請輸入密碼'  }] },\n      ]"}],attrs:{placeholder:"請輸入密碼"}})],1),t("a-form-item",{attrs:{"label-col":e.formItemLayout.labelCol,"wrapper-col":e.formItemLayout.wrapperCol,label:"code"}},[t("div",{directives:[{name:"show",rawName:"v-show",value:!e.isEmailLogin,expression:"!isEmailLogin"}],staticClass:"flex jc-sb ai-c"},[t("div",{staticStyle:{width:"100%"},attrs:{id:"cf-turnstile"}})]),t("div",{directives:[{name:"show",rawName:"v-show",value:e.isEmailLogin,expression:"isEmailLogin"}],staticClass:"flex jc-sb ai-c",staticStyle:{position:"relative"}},[t("a-input",{staticClass:"pl-50",attrs:{placeholder:"請輸入郵箱驗證碼"},model:{value:e.codeEmail,callback:function(a){e.codeEmail=a},expression:"codeEmail"}}),t("div",{staticClass:"get-code flex jc-c ai-c",on:{click:e.emailCode}},[e._v(" "+e._s(e.codeText)+" ")])],1),e.cloundwareCaptcha.existCaptcha?t("a",{staticClass:"change-method flex mt-1 cp",on:{click:function(a){return e.changeCaptchaMethod(!e.isEmailLogin)}}},[e._v(e._s(e.isEmailLogin?"使用自動驗證":"使用郵箱驗證"))]):e._e()])],1),t("a-button",{staticClass:"reg-btn",attrs:{type:"primary"},on:{click:e.merLogin}},[e._v(e._s("立即登錄"))]),t("div",{staticClass:"flex jc-sb ai-c"},[e._m(0),t("a",{attrs:{href:"javascript:;"},on:{click:function(a){return e.$router.push({path:"/register"})}}},[e._v("沒有賬號，去註冊")])])],1)])},n=[function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("a",{staticClass:"a-icon-box",attrs:{href:"https://www.liku.io/",target:"_blank"}},[r("img",{attrs:{src:t("f330"),alt:""}}),e._v(" 返回首頁")])}],i=(t("caad"),t("d3b7"),t("ac1f"),t("25f0"),t("2532"),t("1276"),t("96cf"),t("1da1")),o=t("5530"),s=t("5880"),c=t("4c8a"),l=t("14b7"),d=t.n(l),u=t("ca00"),m=t("4703"),p=t("89a5"),f="id-Token",g="refresh-Token",h={name:"MerLogin",components:{},mounted:function(){var e=this,a=this;window._turnstileCb=function(){e.cloundwareCaptcha.execCallback=!0;try{turnstile.render("#cf-turnstile",{sitekey:"0x4AAAAAAAIxM-Ap2BkOCl-B",theme:"light",language:"zh-tw",callback:function(e){a.turnstileText=e}}),e.cloundwareCaptcha.execTry=!0,e.cloundwareCaptcha.existCaptcha=!0,e.isEmailLogin=!1}catch(t){e.cloundwareCaptcha.execTry=!1,e.cloundwareCaptcha.existCaptcha=!1,e.isEmailLogin=!0}},window._turnstileCbRemove=function(){try{turnstile.remove()}catch(e){}},this.changeCode(),Object(u["d"])(),window._turnstileCb()},beforeDestroy:function(){var e=document.querySelector(".turnstile-script");e&&window._turnstileCbRemove()},data:function(){var e={labelCol:{span:0},wrapperCol:{span:24}},a={labelCol:{span:4},wrapperCol:{span:8,offset:4}};return{challengeId:"",codeEmail:"",turnstileText:"",validatePass:c["b"],validateEmail:c["a"],globalLoading:!1,checkNick:!1,isEmailLogin:!1,cloundwareCaptcha:{execCallback:!1,execTry:!1,existCaptcha:!0},codeText:"發送驗證碼",formItemLayout:e,formTailLayout:a,code:{input:"",text:""},form:this.$form.createForm(this,{name:"dynamic_rule"}),verifyCode:!1}},methods:Object(o["a"])(Object(o["a"])({},Object(s["mapMutations"])("account",["setUser","setPermissions","setRoles"])),{},{changeCaptchaMethod:function(e){this.isEmailLogin=e,e?(this.cloundwareCaptcha.execTry=!1,this.cloundwareCaptcha.execCallback=!1,window._turnstileCbRemove()):window._turnstileCb()},changeCode:function(){var e=Math.random().toString().split(".")[1].substring(0,4);this.code.text=e},emailCode:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var t,r,n,i,o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(t=e.form.getFieldsValue(),r=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,r.test(t.email)){a.next=5;break}return e.$message.error("請輸入正確的郵箱"),a.abrupt("return");case 5:if(!e.codeLoading){a.next=7;break}return a.abrupt("return");case 7:return e.codeLoading=!0,a.prev=8,n={challengeType:"EmailConfirmCode",email:t.email},e.codeText="發送中",a.next=13,Object(m["e"])(n);case 13:i=a.sent,e.challengeId=i.data.challengeId,e.$message.success("驗證碼已發送"),e.codeText=60,o=window.setInterval((function(){e.codeText--<=0&&(e.codeText="發送驗證碼",e.codeLoading=!1,window.clearInterval(o))}),1e3),a.next=25;break;case 20:a.prev=20,a.t0=a["catch"](8),e.codeText="發送驗證碼",e.codeLoading=!1,e.$message.error("驗證碼發送失敗，請稍後再試");case 25:case"end":return a.stop()}}),a,null,[[8,20]])})))()},merLogin:function(){var e=this,a=this.form.getFieldsValue();this.form.validateFields(function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(r){var n,i,s,c,l,u,h,b;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r){t.next=61;break}if(t.prev=1,n=Object(o["a"])(Object(o["a"])({},a),{},{code:e.codeEmail,challengeId:e.challengeId}),!e.isEmailLogin){t.next=13;break}if(a["challengeId"]=e.challengeId,e.codeEmail){t.next=8;break}return e.$message.error("請輸入郵箱驗證碼"),t.abrupt("return");case 8:if(e.challengeId){t.next=11;break}return e.$message.error("驗證碼錯誤，請重試"),t.abrupt("return");case 11:t.next=17;break;case 13:if(e.turnstileText){t.next=17;break}return e.$message.error("請先完成驗證操作"),window._turnstileCb(),t.abrupt("return");case 17:return localStorage.clear(),e.globalLoading=!0,t.next=21,Object(m["j"])(n,e.isEmailLogin?"":e.turnstileText);case 21:if(i=t.sent,!i.data.id||!i.data.refresh){t.next=39;break}c=i.data.id,l=i.data.refresh,localStorage.setItem(f,c),u=d.a.decode(c),localStorage.setItem("user-info",JSON.stringify(u)),localStorage.setItem("id-Token-exp",u.exp),localStorage.setItem(g,l),s=[{id:u.profile.includes("admin")?"admin":"merchant"}],h=[{id:"queryForm"}],e.setPermissions(h),e.setRoles(s),b=[],b="admin"===s[0].id?[{router:"root",children:["adminIndex","adminOrder",{router:"detail",renderMenu:!1,show:!1}]}]:[{router:"root",children:["index","order","balance","setting"]}],Object(p["d"])(b),t.next=43;break;case 39:return"1"===i.data.incorrectPassword?e.$message.error("密碼不正確"):"1"===i.data.isLockedOut?e.$message.error("賬戶已鎖定"):"1"===i.data.isNotAllow?e.$message.error("登錄未授權"):"1"===i.data.isNotFound?e.$message.error("用戶不存在"):"1"===i.data.requiresEmailConfirmed?e.$message.error("未驗證郵箱"):"1"===i.data.requiresTwoFactor?e.$message.error("需要兩步認證"):e.$message.error("其他錯誤"),e.changeCode(),e.globalLoading=!1,t.abrupt("return");case 43:if(i.data){t.next=48;break}return e.$message.error(i),e.changeCode(),e.globalLoading=!1,t.abrupt("return");case 48:return e.changeCode(),t.next=51,e.$router.push({path:"admin"===s[0].id?"adminIndex":"/index"});case 51:e.globalLoading=!1,t.next=59;break;case 54:t.prev=54,t.t0=t["catch"](1),e.isEmailLogin||window._turnstileCb(),e.globalLoading=!1,e.changeCode();case 59:t.next=62;break;case 61:e.verifyCode=!1;case 62:case"end":return t.stop()}}),t,null,[[1,54]])})));return function(e){return t.apply(this,arguments)}}())}})},b=h,w=(t("5aa6"),t("0c7c")),x=Object(w["a"])(b,r,n,!1,null,"ff79e216",null);a["default"]=x.exports},f330:function(e,a,t){e.exports=t.p+"static/img/left-arrow.f322f89e.svg"}}]);
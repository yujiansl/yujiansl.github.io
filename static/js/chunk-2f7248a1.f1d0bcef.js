(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2f7248a1"],{"4bf4":function(e,a,r){"use strict";var t=r("b23d"),o=r.n(t);o.a},"4c8a":function(e,a,r){"use strict";r.d(a,"a",(function(){return t})),r.d(a,"b",(function(){return o}));var t=function(e,a,r){var t=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;""!==a&&a?t.test(a)?r():r(new Error("请输入正确的邮箱地址")):r(new Error("請輸入郵箱"))},o=function(e,a,r){var t=/^[0-9a-zA-Z!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]{6,30}$/;""!==a&&a?t.test(a)?r():r(new Error("请输入6～30位数字、字母或标点符号")):r(new Error("請輸入密碼"))}},b23d:function(e,a,r){},c98e:function(e,a,r){"use strict";r.r(a);var t=function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("div",{staticClass:"flex jc-c ai-c h-100 reg-container"},[e.globalLoading?r("div",{staticClass:"a-spin flex jc-c ai-c"},[r("a-spin")],1):e._e(),r("div",{staticClass:"reg-box"},[r("div",{staticClass:"reg-title"},[e._v("LIKU 商戶註冊")]),r("a-form",{attrs:{form:e.form}},[r("a-form-item",{attrs:{"label-col":e.formItemLayout.labelCol,"wrapper-col":e.formItemLayout.wrapperCol,label:"name"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["merchantName",{rules:[{required:!0,message:"請輸入商戶名稱"},{min:4,max:16,message:"請輸入4-16位商戶名稱"}]}],expression:"[\n        'merchantName',\n        { rules: [{ required: true, message: '請輸入商戶名稱' },{min:4,max:16,message: '請輸入4-16位商戶名稱'}] },\n      ]"}],attrs:{placeholder:"請輸入商戶名稱"}})],1),r("a-form-item",{attrs:{"label-col":e.formItemLayout.labelCol,"wrapper-col":e.formItemLayout.wrapperCol,label:"email"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["email",{rules:[{required:!0,validator:e.validateEmail,trigger:"change"}]}],expression:"[\n        'email',\n        { rules: [{ required: true, validator: validateEmail, trigger:'change'}] },\n      ]"}],attrs:{placeholder:"請輸入郵箱"}})],1),r("a-form-item",{attrs:{"label-col":e.formItemLayout.labelCol,"wrapper-col":e.formItemLayout.wrapperCol,label:"pwd"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["password",{rules:[{required:!0,validator:e.validatePass,trigger:"change"}]}],expression:"[\n        'password',\n        { rules: [{ required: true, validator: validatePass, trigger:'change' }] },\n      ]"}],attrs:{type:"password",placeholder:"請輸入密碼"}})],1),r("a-form-item",{attrs:{"label-col":e.formItemLayout.labelCol,"wrapper-col":e.formItemLayout.wrapperCol,label:"rePwd"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["rePassword",{rules:[{required:!0,validator:e.reValidPwd,trigger:"change"}]}],expression:"[\n        'rePassword',\n        { rules: [{ required: true, validator: reValidPwd, trigger:'change' }] },\n      ]"}],attrs:{type:"password",placeholder:"請再次輸入密碼"}})],1),r("a-form-item",{attrs:{"label-col":e.formItemLayout.labelCol,"wrapper-col":e.formItemLayout.wrapperCol,label:"code"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["challengeResult",{rules:[{required:!0,message:"請輸入郵箱驗證碼"},{min:6,max:6,message:"請輸入6位驗證碼"}]}],expression:"[\n        'challengeResult',\n        { rules: [{ required: true, message: '請輸入郵箱驗證碼' },{min:6,max:6,message: '請輸入6位驗證碼'}] },\n      ]"}],staticClass:"pl-50",attrs:{placeholder:"請輸入郵箱驗證碼"}}),r("div",{staticClass:"get-code flex jc-c ai-c",on:{click:e.emailCode}},[e._v(" "+e._s(e.codeText)+" ")])],1),r("a-form-item",{attrs:{"label-col":e.formItemLayout.labelCol,"wrapper-col":e.formItemLayout.wrapperCol,label:"code"}},[r("div",{staticStyle:{width:"100%"},attrs:{id:"cf-turnstile"}})])],1),r("a-button",{staticClass:"reg-btn",attrs:{type:"primary"},on:{click:e.check}},[e._v("立即註冊")]),r("div",{staticClass:"flex jc-sb ai-c"},[e._m(0),r("a",{attrs:{href:"javascript:;"},on:{click:function(a){return e.$router.push({path:"/login"})}}},[e._v("商戶登錄")])])],1)])},o=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("a",{attrs:{href:"https://www.liku.io/",target:"_blank"}},[t("img",{attrs:{src:r("f330"),alt:""}}),e._v(" 返回首頁")])}],l=(r("96cf"),r("1da1")),n=r("4c8a"),s=r("4703"),i={name:"Register",data:function(){var e=this,a={labelCol:{span:0},wrapperCol:{span:24}},r={labelCol:{span:4},wrapperCol:{span:8,offset:4}},t=function(a,r,t){var o=e.form.getFieldsValue();r?r===o.password?t():t(new Error("兩次輸入的密碼不一致")):t(new Error("請輸入密碼"))};return{globalLoading:!1,turnstileText:"",codeLoading:!1,codeText:"發送驗證碼",validateEmail:n["a"],validatePass:n["b"],reValidPwd:t,checkNick:!1,formItemLayout:a,formTailLayout:r,form:this.$form.createForm(this,{name:"dynamic_rule"}),challengeId:"",formValue:{challengeId:"",challengeResult:"",email:"790534596@qq.com",merchantName:"",password:"",rePassword:""}}},mounted:function(){},beforeDestroy:function(){},methods:{emailCode:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function a(){var r,t,o,l,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(r=e.form.getFieldsValue(),t=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,t.test(r.email)){a.next=5;break}return e.$message.error("請輸入正確的郵箱"),a.abrupt("return");case 5:if(!e.codeLoading){a.next=7;break}return a.abrupt("return");case 7:return e.codeLoading=!0,a.prev=8,o={challengeType:"EmailConfirmCode",email:r.email},e.codeText="發送中",a.next=13,Object(s["e"])(o);case 13:l=a.sent,e.challengeId=l.data.challengeId,e.$message.success("驗證碼已發送"),e.codeText=60,n=window.setInterval((function(){e.codeText--<=0&&(e.codeText="發送驗證碼",e.codeLoading=!1,window.clearInterval(n))}),1e3),a.next=25;break;case 20:a.prev=20,a.t0=a["catch"](8),e.codeText="發送驗證碼",e.codeLoading=!1,e.$message.error("驗證碼發送失敗，請稍後再試");case 25:case"end":return a.stop()}}),a,null,[[8,20]])})))()},check:function(){var e=this;this.form.validateFields(function(){var a=Object(l["a"])(regeneratorRuntime.mark((function a(r){var t;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(r){a.next=20;break}if(e.challengeId){a.next=4;break}return e.$message.error("驗證碼錯誤，請重試"),a.abrupt("return");case 4:return a.prev=4,e.globalLoading=!0,t=e.form.getFieldsValue(),t.challengeId=e.challengeId,a.next=10,Object(s["k"])(t,e.turnstileText);case 10:return e.globalLoading=!1,e.$message.success("註冊成功！現在去登錄"),a.next=14,e.$router.push({path:"/"});case 14:a.next=20;break;case 16:a.prev=16,a.t0=a["catch"](4),window._turnstileCb(),e.globalLoading=!1;case 20:case"end":return a.stop()}}),a,null,[[4,16]])})));return function(e){return a.apply(this,arguments)}}())}}},c=i,u=(r("4bf4"),r("0c7c")),d=Object(u["a"])(c,t,o,!1,null,"5c9fa92d",null);a["default"]=d.exports},f330:function(e,a,r){e.exports=r.p+"static/img/left-arrow.f322f89e.svg"}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{B60Y:function(T,p,e){T.exports={content:"content___2BgwA",qr:"qr___2jKqb",btn:"btn___3XH3m",text:"text___2OPwG",intro:"intro___3G_e1",title:"title___2MxAm"}},DAaq:function(T,p,e){"use strict";e.d(p,"b",function(){return L}),e.d(p,"a",function(){return B}),e.d(p,"c",function(){return K});var E=e("qLMh"),R=e("9og8"),U=e("9kvl"),C="d8VO";function L(u){return y.apply(this,arguments)}function y(){return y=Object(R.a)(Object(E.a)().mark(function u(m){return Object(E.a)().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.abrupt("return",Object(U.e)("/v1/api/merchant/update",{method:"POST",data:m}));case 1:case"end":return c.stop()}},u)})),y.apply(this,arguments)}function B(){return h.apply(this,arguments)}function h(){return h=Object(R.a)(Object(E.a)().mark(function u(){return Object(E.a)().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return P.abrupt("return",Object(U.e)("/v1/api/merchant/detail",{method:"POST"}));case 1:case"end":return P.stop()}},u)})),h.apply(this,arguments)}function K(u){return r.apply(this,arguments)}function r(){return r=Object(R.a)(Object(E.a)().mark(function u(m){return Object(E.a)().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.abrupt("return",Object(U.e)("/v1/api/withdraw/merchant/create",{method:"POST",data:m}));case 1:case"end":return c.stop()}},u)})),r.apply(this,arguments)}},mEvm:function(T,p,e){"use strict";e.r(p);var E=e("14J3"),R=e("BMrR"),U=e("jCWc"),C=e("kPKH"),L=e("T2oS"),y=e("W9HT"),B=e("+L6B"),h=e("2/Rp"),K=e("y8nQ"),r=e("Vl3Y"),u=e("Znn+"),m=e("ZTPi"),P=e("miYZ"),c=e("tsqr"),S=e("qLMh"),Z=e("9og8"),x=e("tJVT"),rt=e("5NDa"),f=e("5rEg"),H=e("B60Y"),j=e.n(H),O=e("q1tI"),J=e.n(O),Y=e("2PG1"),_=e("tL7X"),A=e("DAaq"),z=e("GWEE"),t=e("nKUr"),nt=e.n(t),a="eo1F",w=f.a.TextArea;p.default=function(){var b=J.a.useRef(null),X=Object(O.useState)("secret"),k=Object(x.a)(X,2),v=k[0],Q=k[1],q=Object(O.useState)(!0),F=Object(x.a)(q,2),g=F[0],D=F[1],tt=Object(O.useState)(!1),N=Object(x.a)(tt,2),W=N[0],M=N[1],et=Object(O.useState)({agentId:"",appId:"",appSecret:"",balance:"",canAPIWithdraw:0,canManualWithdraw:0,canOrder:0,code:void 0,id:"",password:"",rate:"",status:0}),$=Object(x.a)(et,2),I=$[0],at=$[1],G=function(){var i=Object(Z.a)(Object(S.a)().mark(function o(){var l,n;return Object(S.a)().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return D(!0),d.prev=1,d.next=4,Object(A.a)();case 4:n=d.sent,at(n.data),D(!1),(l=b.current)===null||l===void 0||l.setFieldsValue({appId:n.data.appId,appSecret:n.data.appSecret}),d.next=13;break;case 10:d.prev=10,d.t0=d.catch(1),D(!1);case 13:case"end":return d.stop()}},o,null,[[1,10]])}));return function(){return i.apply(this,arguments)}}();Object(O.useEffect)(function(){G()},[v]);var V=function(o){var l={id:I.id,appSecret:o.appSecret,confirmPassword:o.confirmPassword};M(!0),Object(A.b)(l).then(function(){var n;c.default.success(_.a.text("reg_tips83")),(n=b.current)===null||n===void 0||n.resetFields(),G()}).finally(function(){M(!1)})},_t=function(o){var l={id:I.id,password:o.password,confirmPassword:o.confirmPassword};M(!0),Object(A.b)(l).then(function(){z.a.logout()}).finally(function(){M(!1)})};return Object(O.useEffect)(function(){var i;(i=b.current)===null||i===void 0||i.setFieldsValue({chain:1}),D(!1)},[]),Object(t.jsxs)(R.a,{className:j.a.content,_nk:"".concat(a,"11"),children:[Object(t.jsxs)(m.a,{activeKey:v,onChange:Q,_nk:"".concat(a,"21"),children:[Object(t.jsx)(m.a.TabPane,{tab:_.a.text("reg_tip55"),_nk:"".concat(a,"31")},"secret"),Object(t.jsx)(m.a.TabPane,{tab:_.a.text("reg_tip15"),_nk:"".concat(a,"32")},"pass")]}),Object(t.jsxs)(C.a,{md:24,_nk:"".concat(a,"41"),children:[!g&&v==="whiteList"&&Object(t.jsxs)(r.a,{layout:"vertical",ref:b,name:"control-ref",onFinish:V,style:{width:"100%",maxWidth:"700px"},_nk:"".concat(a,"51"),children:[Object(t.jsx)(r.a.Item,{name:"chain",label:_.a.text("reg_tip56"),_nk:"".concat(a,"33"),children:Object(t.jsx)(w,{placeholder:_.a.text("reg_tip57"),rows:4,_nk:"".concat(a,"61")})}),Object(t.jsx)(r.a.Item,{name:"password",label:_.a.text("reg_tip58"),_nk:"".concat(a,"34"),children:Object(t.jsx)(w,{placeholder:_.a.text("reg_tip57"),rows:4,_nk:"".concat(a,"62")})}),Object(t.jsx)(r.a.Item,{name:"password",label:_.a.text("reg_tip50"),rules:[{required:!0},function(){return{validator:function(o,l){var n=/^[a-zA-Z0-9._]{6,15}$/,s;return n.test(l)||(s="\u5BC6\u7801\u683C\u5F0F\u4E0D\u6B63\u786E!"),s&&s.length>0?Promise.reject(s):Promise.resolve()}}}],_nk:"".concat(a,"35"),children:Object(t.jsx)(f.a,{placeholder:_.a.text("reg_tip4"),_nk:"".concat(a,"71")})}),Object(t.jsx)(r.a.Item,{_nk:"".concat(a,"36"),children:Object(t.jsx)(h.a,{loading:W,style:{marginRight:"10px"},type:"primary",className:j.a.btn,htmlType:"submit",_nk:"".concat(a,"81"),children:_.a.text("withdraw48")})})]}),!g&&v==="secret"&&Object(t.jsxs)(r.a,{layout:"vertical",ref:b,name:"control-ref",onFinish:V,style:{width:"100%",maxWidth:"700px"},_nk:"".concat(a,"52"),children:[Object(t.jsx)(r.a.Item,{name:"appId",label:"APPID",rules:[{required:!0}],_nk:"".concat(a,"37"),children:Object(t.jsx)(f.a,{disabled:!0,placeholder:_.a.text("reg_tips76"),_nk:"".concat(a,"72")})}),Object(t.jsx)(r.a.Item,{name:"appSecret",label:"APP SECRET",rules:[{required:!0},function(){return{validator:function(o,l){var n,s=l.toString().replaceAll(" ","");return s.length!==16&&(n="APP SECRET \u5BC6\u7801\u957F\u5EA6\u4E0D\u5BF9!"),n&&n.length>0?Promise.reject(n):Promise.resolve()}}}],_nk:"".concat(a,"38"),children:Object(t.jsx)(f.a.Password,{placeholder:_.a.text("reg_tips77"),_nk:"".concat(a,"39")})}),Object(t.jsx)(r.a.Item,{name:"confirmPassword",label:_.a.text("reg_tip48"),rules:[{required:!0}],_nk:"".concat(a,"3a"),children:Object(t.jsx)(f.a.Password,{placeholder:_.a.text("reg_tip51"),_nk:"".concat(a,"3b")})}),Object(t.jsx)(r.a.Item,{_nk:"".concat(a,"3c"),children:Object(t.jsx)(h.a,{loading:W,style:{marginRight:"10px"},type:"primary",className:j.a.btn,htmlType:"submit",_nk:"".concat(a,"82"),children:_.a.text("withdraw48")})})]}),!g&&v==="pass"&&Object(t.jsxs)(r.a,{layout:"vertical",ref:b,name:"control-ref",onFinish:_t,style:{width:"100%",maxWidth:"700px"},_nk:"".concat(a,"53"),children:[Object(t.jsx)(r.a.Item,{name:"confirmPassword",label:_.a.text("reg_tips126"),rules:[{required:!0}],_nk:"".concat(a,"3d"),children:Object(t.jsx)(f.a.Password,{placeholder:_.a.text("reg_tips127"),_nk:"".concat(a,"3e")})}),Object(t.jsx)(r.a.Item,{name:"password",label:_.a.text("reg_tips78"),rules:[{required:!0},function(){return{validator:function(o,l){var n=/^[a-zA-Z0-9._]{6,15}$/,s;return n.test(l)||(s="\u5BC6\u7801\u683C\u5F0F\u4E0D\u6B63\u786E!"),s&&s.length>0?Promise.reject(s):Promise.resolve()}}}],_nk:"".concat(a,"3f"),children:Object(t.jsx)(f.a.Password,{value:I.appId,placeholder:_.a.text("reg_tips79"),_nk:"".concat(a,"3g")})}),Object(t.jsx)(r.a.Item,{name:"rePassword",label:_.a.text("reg_tips136"),rules:[{required:!0},function(i){return{validator:function(l,n){var s;return i.getFieldValue("password")!==n&&(s=_.a.text("reg_tips136")),s&&s.length>0?Promise.reject(s):Promise.resolve()}}}],_nk:"".concat(a,"3h"),children:Object(t.jsx)(f.a.Password,{value:I.appId,placeholder:_.a.text("reg_tips79"),_nk:"".concat(a,"3i")})}),Object(t.jsx)(r.a.Item,{_nk:"".concat(a,"3j"),children:Object(t.jsx)(h.a,{loading:W,style:{marginRight:"10px"},type:"primary",className:j.a.btn,htmlType:"submit",_nk:"".concat(a,"83"),children:_.a.text("withdraw48")})})]}),g&&Object(t.jsx)("div",{className:"flex-c-c",style:{minHeight:"318px"},_nk:"".concat(a,"91"),children:Object(t.jsx)(y.a,{_nk:"".concat(a,"a1")})}),v==="secret"&&Object(t.jsxs)("div",{className:j.a.intro,_nk:"".concat(a,"92"),children:[Object(t.jsxs)("div",{className:j.a.title,_nk:"".concat(a,"93"),children:[Object(t.jsx)(Y.a,{style:{marginRight:"10px"},_nk:"".concat(a,"b1")}),_.a.text("reg_tip59")]}),Object(t.jsx)("div",{_nk:"".concat(a,"94"),children:_.a.text("reg_tip61")})]})]})]})}}}]);

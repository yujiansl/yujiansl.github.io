(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{DAaq:function(b,c,t){"use strict";t.d(c,"b",function(){return D}),t.d(c,"a",function(){return R}),t.d(c,"c",function(){return i});var E=t("qLMh"),v=t("9og8"),p=t("9kvl"),U="d8VO";function D(l){return h.apply(this,arguments)}function h(){return h=Object(v.a)(Object(E.a)().mark(function l(o){return Object(E.a)().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",Object(p.e)("/v1/api/merchant/update",{method:"POST",data:o}));case 1:case"end":return u.stop()}},l)})),h.apply(this,arguments)}function R(){return r.apply(this,arguments)}function r(){return r=Object(v.a)(Object(E.a)().mark(function l(){return Object(E.a)().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",Object(p.e)("/v1/api/merchant/detail",{method:"POST"}));case 1:case"end":return s.stop()}},l)})),r.apply(this,arguments)}function i(l){return e.apply(this,arguments)}function e(){return e=Object(v.a)(Object(E.a)().mark(function l(o){return Object(E.a)().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",Object(p.e)("/v1/api/withdraw/merchant/create",{method:"POST",data:o}));case 1:case"end":return u.stop()}},l)})),e.apply(this,arguments)}},Sa09:function(b,c,t){"use strict";t.r(c);var E=t("14J3"),v=t("BMrR"),p=t("jCWc"),U=t("kPKH"),D=t("+L6B"),h=t("2/Rp"),R=t("5NDa"),r=t("5rEg"),i=t("y8nQ"),e=t("Vl3Y"),l=t("7Kak"),o=t("9yH6"),s=t("miYZ"),u=t("tsqr"),g=t("k1fw"),M=t("tJVT"),I=t("rwFS"),j=t.n(I),y=t("q1tI"),W=t.n(y),K=t("2PG1"),_=t("tL7X"),x=t("DAaq"),L=t("pn+7"),a=t("nKUr"),G=t.n(a),n="lhf9";c.default=function(){var f=W.a.useRef(null),F=Object(y.useState)(!1),T=Object(M.a)(F,2),S=T[0],B=T[1],$=Object(y.useState)({}),C=Object(M.a)($,2),V=C[0],N=C[1],A=Object(y.useCallback)(function(){var P;Object(x.a)().then(function(d){var m;N(d.data),(m=f.current)===null||m===void 0||m.setFieldsValue({usdtBalance:d.data.usdtBalance})}).catch(function(){var d;(d=f.current)===null||d===void 0||d.setFieldsValue({usdtBalance:0})}),(P=f.current)===null||P===void 0||P.setFieldsValue({chainType:1})},[]),Z=function(d){B(!0),Object(x.c)(Object(g.a)({},d)).then(function(){var m,O;u.default.success(_.a.text("reg_tips145")),(m=f.current)===null||m===void 0||m.resetFields(),(O=f.current)===null||O===void 0||O.setFieldsValue({chainType:1}),A()}).finally(function(){B(!1)})},J=function(){var d,m,O;(d=f.current)===null||d===void 0||d.resetFields(),(m=f.current)===null||m===void 0||m.setFieldsValue({chainType:1}),(O=f.current)===null||O===void 0||O.setFieldsValue({usdtBalance:V.usdtBalance})};return Object(y.useEffect)(function(){A()},[]),Object(a.jsx)(v.a,{className:j.a.content,_nk:"".concat(n,"11"),children:Object(a.jsxs)(U.a,{md:24,_nk:"".concat(n,"21"),children:[Object(a.jsxs)(e.a,{layout:"vertical",ref:f,name:"control-ref",onFinish:Z,style:{width:"100%",maxWidth:"700px"},_nk:"".concat(n,"31"),children:[Object(a.jsx)(e.a.Item,{name:"chainType",label:_.a.text("reg_tip69"),rules:[{required:!0}],_nk:"".concat(n,"41"),children:Object(a.jsxs)(o.a.Group,{_nk:"".concat(n,"42"),children:[Object(a.jsxs)(o.a,{value:1,_nk:"".concat(n,"51"),children:[_.a.text("reg_tips5"),"(TRC20)"]}),Object(a.jsxs)(o.a,{value:2,_nk:"".concat(n,"52"),children:[_.a.text("reg_tips6"),"(ERC20)"]})]})}),Object(a.jsx)(e.a.Item,{name:"usdtBalance",label:_.a.text("reg_tip70"),rules:[{required:!0}],_nk:"".concat(n,"43"),children:Object(a.jsx)(r.a,{disabled:!0,_nk:"".concat(n,"61")})}),Object(a.jsx)(e.a.Item,{name:"crypto",label:_.a.text("reg_tip71"),rules:[{required:!0}],_nk:"".concat(n,"44"),children:Object(a.jsx)(r.a,{type:"number",onBlur:function(){return Object(L.a)(f,"crypto")},placeholder:_.a.text("reg_tip78"),_nk:"".concat(n,"62")})}),Object(a.jsx)(e.a.Item,{name:"toAddress",label:_.a.text("reg_tip72"),rules:[{required:!0}],_nk:"".concat(n,"45"),children:Object(a.jsx)(r.a,{placeholder:_.a.text("reg_tip73"),_nk:"".concat(n,"63")})}),Object(a.jsx)(e.a.Item,{name:"confirmPassword",label:_.a.text("reg_tip48"),rules:[{required:!0}],_nk:"".concat(n,"46"),children:Object(a.jsx)(r.a.Password,{placeholder:_.a.text("reg_tip51"),_nk:"".concat(n,"47")})}),Object(a.jsxs)(e.a.Item,{_nk:"".concat(n,"48"),children:[Object(a.jsx)(h.a,{style:{marginRight:"10px"},type:"primary",className:j.a.btn,htmlType:"submit",loading:S,_nk:"".concat(n,"71"),children:_.a.text("withdraw48")}),Object(a.jsx)(h.a,{type:"default",className:j.a.btn,onClick:J,_nk:"".concat(n,"72"),children:_.a.text("reg_tip44")})]})]}),Object(a.jsxs)("div",{className:j.a.intro,_nk:"".concat(n,"81"),children:[Object(a.jsxs)("div",{className:j.a.title,_nk:"".concat(n,"82"),children:[Object(a.jsx)(K.a,{style:{marginRight:"10px"},_nk:"".concat(n,"91")}),_.a.text("reg_tip59")]}),Object(a.jsxs)("div",{_nk:"".concat(n,"83"),children:["1. ",_.a.text("reg_tip74"),"\uFF1A1 USDT"]}),Object(a.jsxs)("div",{_nk:"".concat(n,"84"),children:["2. ",_.a.text("reg_tip75"),"\uFF1A2.5 USDT"]}),Object(a.jsxs)("div",{_nk:"".concat(n,"85"),children:["3. ",_.a.text("reg_tip76"),"\uFF1A1 USDT"]}),Object(a.jsxs)("div",{_nk:"".concat(n,"86"),children:["4. ",_.a.text("reg_tip77")]})]})]})})}},"pn+7":function(b,c,t){"use strict";t.d(c,"b",function(){return D}),t.d(c,"a",function(){return h}),t.d(c,"c",function(){return R});var E=t("jrin"),v=t("miYZ"),p=t("tsqr"),U="TZQN";function D(r){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",e=document.createElement("textarea");e.readOnly=Boolean("readonly"),e.style.position="absolute",e.style.left="-9999px",e.value=r,document.body.appendChild(e),e.select(),e.setSelectionRange(0,e.value.length),document.execCommand("Copy"),document.body.removeChild(e),i||p.default.success("\u590D\u5236\u6210\u529F"),i&&Object.prototype.toString.call(i)==="[object Function]"&&i()}function h(r,i){var e,l,o=Math.abs((r==null||((e=r.current)===null||e===void 0)?void 0:e.getFieldValue(i))||0),s=Number(o.toFixed(4)).toString();r==null||((l=r.current)===null||l===void 0)||l.setFieldsValue(Object(E.a)({},i,s))}function R(r,i){var e,l,o,s,u=Math.abs((r==null||((e=r.current)===null||e===void 0||((l=e.getForm())===null||l===void 0))?void 0:l.getFieldValue(i))||0),g=Number(u.toFixed(4)).toString();r==null||((o=r.current)===null||o===void 0||((s=o.getForm())===null||s===void 0))||s.setFieldsValue(Object(E.a)({},i,g))}},rwFS:function(b,c,t){b.exports={content:"content___2Nd7T",qr:"qr___1JUdd",btn:"btn___1_Z1Z",text:"text___3jidE",intro:"intro___rVZVZ",title:"title___12gKb"}}}]);

(window.webpackJsonp=window.webpackJsonp||[]).push([[78,135],{"2a5k":function(v,d,t){"use strict";t.r(d);var l=t("14J3"),h=t("BMrR"),P=t("jCWc"),R=t("kPKH"),b=t("+L6B"),j=t("2/Rp"),y=t("5NDa"),f=t("5rEg"),U=t("y8nQ"),s=t("Vl3Y"),B=t("7Kak"),O=t("9yH6"),M=t("miYZ"),p=t("tsqr"),r=t("k1fw"),o=t("tJVT"),u=t("vPIv"),n=t.n(u),D=t("q1tI"),I=t.n(D),x=t("2PG1"),C=t("e+sY"),W=t("tL7X"),e=t("nKUr"),J=t.n(e),a="sCBR";d.default=function(){var c=I.a.useRef(null),L=Object(D.useState)({}),g=Object(o.a)(L,2),K=g[0],S=g[1],$=Object(D.useState)(!1),T=Object(o.a)($,2),N=T[0],A=T[1],F=Object(D.useCallback)(function(){Object(C.a)().then(function(m){var i,_;(i=c.current)===null||i===void 0||i.setFieldsValue({chainType:1}),(_=c.current)===null||_===void 0||_.setFieldsValue({usdtBalance:m.data.usdtBalance}),S(m.data)})},[]),V=function(i){A(!0),Object(C.d)(Object(r.a)({},i)).then(function(){var _,E;p.default.success(W.a.text("reg_tips83")),(_=c.current)===null||_===void 0||_.resetFields(),(E=c.current)===null||E===void 0||E.setFieldsValue({chainType:1}),F()}).finally(function(){A(!1)})},k=function(){var i,_,E;(i=c.current)===null||i===void 0||i.resetFields(),(_=c.current)===null||_===void 0||_.setFieldsValue({chainType:1}),(E=c.current)===null||E===void 0||E.setFieldsValue({usdtBalance:K.usdtBalance})},G=function(i){var _,E=i.target.value;(_=c.current)===null||_===void 0||_.setFieldsValue({crypto:Number(E||0).toFixed(2)})};return Object(D.useEffect)(function(){var m;F(),(m=c.current)===null||m===void 0||m.setFieldsValue({chain:1})},[]),Object(e.jsx)(h.a,{className:"content",_nk:"".concat(a,"11"),children:Object(e.jsx)(R.a,{md:24,_nk:"".concat(a,"21"),children:Object(e.jsxs)(s.a,{layout:"vertical",ref:c,name:"control-ref",onFinish:V,style:{width:"100%",maxWidth:"700px"},_nk:"".concat(a,"31"),children:[Object(e.jsx)(s.a.Item,{name:"chainType",label:"\u94FE\u8DEF\u7C7B\u578B",rules:[{required:!0}],_nk:"".concat(a,"41"),children:Object(e.jsxs)(O.a.Group,{_nk:"".concat(a,"42"),children:[Object(e.jsx)(O.a,{value:1,_nk:"".concat(a,"51"),children:"\u6CE2\u573A(TRC20)"}),Object(e.jsx)(O.a,{value:2,_nk:"".concat(a,"52"),children:"\u4EE5\u592A\u574A(ERC20)"})]})}),Object(e.jsx)(s.a.Item,{name:"usdtBalance",label:"\u8D26\u6237\u4F59\u989D",rules:[{required:!0}],_nk:"".concat(a,"43"),children:Object(e.jsx)(f.a,{disabled:!0,_nk:"".concat(a,"61")})}),Object(e.jsx)(s.a.Item,{name:"crypto",label:"\u8F6C\u8D26\u91D1\u989D",rules:[{required:!0}],_nk:"".concat(a,"44"),children:Object(e.jsx)(f.a,{onBlur:G,type:"number",placeholder:"\u8BF7\u8F93\u5165\u63D0\u6B3E\u91D1\u989D",_nk:"".concat(a,"62")})}),Object(e.jsx)(s.a.Item,{name:"toAddress",label:"\u8F6C\u8D26\u5730\u5740",rules:[{required:!0}],_nk:"".concat(a,"45"),children:Object(e.jsx)(f.a,{placeholder:"\u8BF7\u8F93\u5165\u6536\u6B3E\u5730\u5740",_nk:"".concat(a,"63")})}),Object(e.jsx)("div",{className:"tips",_nk:"".concat(a,"71"),children:"\u5355\u4F4D\uFF1AUSDT\uFF0C\u6309\u7B14\u6536\u8D39"}),Object(e.jsx)(s.a.Item,{name:"confirmPassword",label:"\u786E\u8BA4\u5BC6\u7801",rules:[{required:!0}],_nk:"".concat(a,"46"),children:Object(e.jsx)(f.a.Password,{placeholder:"\u8BF7\u8F93\u5165\u786E\u8BA4\u5BC6\u7801",_nk:"".concat(a,"47")})}),Object(e.jsx)(s.a.Item,{_nk:"".concat(a,"48"),children:Object(e.jsxs)("div",{className:"intro",_nk:"".concat(a,"72"),children:[Object(e.jsxs)("div",{className:"title",_nk:"".concat(a,"73"),children:[Object(e.jsx)(x.a,{style:{marginRight:"10px"},_nk:"".concat(a,"81")}),"\u8BF4\u660E"]}),Object(e.jsx)("div",{_nk:"".concat(a,"74"),children:"1. \u8F6C\u8D26\u624B\u7EED\u8D39\uFF1A 1 USDT\u3002"}),Object(e.jsx)("div",{_nk:"".concat(a,"75"),children:"2. \u7CFB\u7EDF\u6700\u4F4E\u63D0\u8F6C\u8D26\u989D\uFF1A 1 USDT\u3002"}),Object(e.jsx)("div",{_nk:"".concat(a,"76"),children:"3. \u8BF7\u786E\u4FDD\u8F93\u5165\u6B63\u786E\u7684\u8F6C\u8D26\u5730\u5740\u3002"})]})}),Object(e.jsxs)(s.a.Item,{_nk:"".concat(a,"49"),children:[Object(e.jsx)(j.a,{loading:N,style:{marginRight:"10px"},type:"primary",className:"btn",htmlType:"submit",_nk:"".concat(a,"91"),children:"\u786E\u8BA4"}),Object(e.jsx)(j.a,{type:"default",className:"btn",onClick:k,_nk:"".concat(a,"92"),children:"\u91CD\u7F6E"})]})]})})})}},"e+sY":function(v,d,t){"use strict";t.d(d,"c",function(){return b}),t.d(d,"a",function(){return y}),t.d(d,"d",function(){return U}),t.d(d,"b",function(){return B}),t.d(d,"e",function(){return M});var l=t("qLMh"),h=t("9og8"),P=t("czNd"),R="nfL4";function b(){return j.apply(this,arguments)}function j(){return j=Object(h.a)(Object(l.a)().mark(function r(){return Object(l.a)().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",Object(P.a)("/v1/api/agent/statistic",{method:"GET"}));case 1:case"end":return u.stop()}},r)})),j.apply(this,arguments)}function y(){return f.apply(this,arguments)}function f(){return f=Object(h.a)(Object(l.a)().mark(function r(){return Object(l.a)().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",Object(P.a)("/v1/api/agent/detail",{method:"POST"}));case 1:case"end":return u.stop()}},r)})),f.apply(this,arguments)}function U(r){return s.apply(this,arguments)}function s(){return s=Object(h.a)(Object(l.a)().mark(function r(o){return Object(l.a)().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",Object(P.a)("/v1/api/withdraw/agent/create",{method:"POST",data:o}));case 1:case"end":return n.stop()}},r)})),s.apply(this,arguments)}function B(r){return O.apply(this,arguments)}function O(){return O=Object(h.a)(Object(l.a)().mark(function r(o){return Object(l.a)().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",Object(P.a)("/v1/api/agent/update",{method:"POST",data:o}));case 1:case"end":return n.stop()}},r)})),O.apply(this,arguments)}function M(r){return p.apply(this,arguments)}function p(){return p=Object(h.a)(Object(l.a)().mark(function r(o){return Object(l.a)().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",Object(P.a)("/v1/api/agent/update",{method:"POST",data:o}));case 1:case"end":return n.stop()}},r)})),p.apply(this,arguments)}},vPIv:function(v,d,t){}}]);

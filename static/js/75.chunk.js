(window.webpackJsonp=window.webpackJsonp||[]).push([[75,134],{"2a5k":function(g,s,t){"use strict";t.r(s);var o=t("14J3"),v=t("BMrR"),p=t("jCWc"),M=t("kPKH"),R=t("+L6B"),P=t("2/Rp"),U=t("5NDa"),r=t("5rEg"),i=t("y8nQ"),e=t("Vl3Y"),m=t("7Kak"),d=t("9yH6"),j=t("miYZ"),D=t("tsqr"),u=t("k1fw"),E=t("tJVT"),l=t("vPIv"),_=t.n(l),b=t("q1tI"),x=t.n(b),I=t("2PG1"),B=t("e+sY"),W=t("pn+7"),n=t("nKUr"),G=t.n(n),a="sCBR";s.default=function(){var h=x.a.useRef(null),L=Object(b.useState)({}),C=Object(E.a)(L,2),K=C[0],S=C[1],$=Object(b.useState)(!1),T=Object(E.a)($,2),V=T[0],A=T[1],F=Object(b.useCallback)(function(){Object(B.a)().then(function(O){var f,c;(f=h.current)===null||f===void 0||f.setFieldsValue({chainType:1}),(c=h.current)===null||c===void 0||c.setFieldsValue({usdtBalance:O.data.usdtBalance}),S(O.data)})},[]),N=function(f){A(!0),Object(B.d)(Object(u.a)({},f)).then(function(){var c,y;D.default.success("\u63D0\u4EA4\u6210\u529F"),(c=h.current)===null||c===void 0||c.resetFields(),(y=h.current)===null||y===void 0||y.setFieldsValue({chainType:1}),F()}).finally(function(){A(!1)})},Y=function(){var f,c,y;(f=h.current)===null||f===void 0||f.resetFields(),(c=h.current)===null||c===void 0||c.setFieldsValue({chainType:1}),(y=h.current)===null||y===void 0||y.setFieldsValue({usdtBalance:K.usdtBalance})};return Object(b.useEffect)(function(){var O;F(),(O=h.current)===null||O===void 0||O.setFieldsValue({chain:1})},[]),Object(n.jsx)(v.a,{className:"content",_nk:"".concat(a,"11"),children:Object(n.jsx)(M.a,{md:24,_nk:"".concat(a,"21"),children:Object(n.jsxs)(e.a,{layout:"vertical",ref:h,name:"control-ref",onFinish:N,style:{width:"100%",maxWidth:"700px"},_nk:"".concat(a,"31"),children:[Object(n.jsx)(e.a.Item,{name:"chainType",label:"\u94FE\u8DEF\u7C7B\u578B",rules:[{required:!0}],_nk:"".concat(a,"41"),children:Object(n.jsxs)(d.a.Group,{_nk:"".concat(a,"42"),children:[Object(n.jsx)(d.a,{value:1,_nk:"".concat(a,"51"),children:"\u6CE2\u573A(TRC20)"}),Object(n.jsx)(d.a,{value:2,_nk:"".concat(a,"52"),children:"\u4EE5\u592A\u574A(ERC20)"})]})}),Object(n.jsx)(e.a.Item,{name:"usdtBalance",label:"\u8D26\u6237\u4F59\u989D(USDT)",rules:[{required:!0}],_nk:"".concat(a,"43"),children:Object(n.jsx)(r.a,{disabled:!0,_nk:"".concat(a,"61")})}),Object(n.jsx)(e.a.Item,{name:"crypto",label:"\u8F6C\u8D26\u91D1\u989D(USDT)",rules:[{required:!0}],_nk:"".concat(a,"44"),children:Object(n.jsx)(r.a,{onBlur:function(){return Object(W.a)(h,"crypto")},type:"number",placeholder:"\u8BF7\u8F93\u5165\u8F6C\u8D26\u91D1\u989D",_nk:"".concat(a,"62")})}),Object(n.jsx)(e.a.Item,{name:"toAddress",label:"\u8F6C\u8D26\u5730\u5740",rules:[{required:!0}],_nk:"".concat(a,"45"),children:Object(n.jsx)(r.a,{placeholder:"\u8BF7\u8F93\u5165\u6536\u6B3E\u5730\u5740",_nk:"".concat(a,"63")})}),Object(n.jsx)(e.a.Item,{name:"confirmPassword",label:"\u786E\u8BA4\u5BC6\u7801",rules:[{required:!0}],_nk:"".concat(a,"46"),children:Object(n.jsx)(r.a.Password,{placeholder:"\u8BF7\u8F93\u5165\u786E\u8BA4\u5BC6\u7801",_nk:"".concat(a,"47")})}),Object(n.jsx)(e.a.Item,{_nk:"".concat(a,"48"),children:Object(n.jsxs)("div",{className:"intro",_nk:"".concat(a,"71"),children:[Object(n.jsxs)("div",{className:"title",_nk:"".concat(a,"72"),children:[Object(n.jsx)(I.a,{style:{marginRight:"10px"},_nk:"".concat(a,"81")}),"\u8BF4\u660E"]}),Object(n.jsx)("div",{_nk:"".concat(a,"73"),children:"1. TRC20\u8F6C\u8D26\u624B\u7EED\u8D39\uFF1A1 USDT"}),Object(n.jsx)("div",{_nk:"".concat(a,"74"),children:"2. ERC20\u8F6C\u8D26\u624B\u7EED\u8D39\uFF1A2.5 USDT"}),Object(n.jsx)("div",{_nk:"".concat(a,"75"),children:"3. \u7CFB\u7EDF\u6700\u4F4E\u8F6C\u8D26\u91D1\u989D\uFF1A1 USDT"}),Object(n.jsx)("div",{_nk:"".concat(a,"76"),children:"4. \u8BF7\u786E\u4FDD\u8F93\u5165\u6B63\u786E\u7684\u8F6C\u8D26\u63A5\u6536\u5730\u5740"})]})}),Object(n.jsxs)(e.a.Item,{_nk:"".concat(a,"49"),children:[Object(n.jsx)(P.a,{loading:V,style:{marginRight:"10px"},type:"primary",className:"btn",htmlType:"submit",_nk:"".concat(a,"91"),children:"\u786E\u8BA4"}),Object(n.jsx)(P.a,{type:"default",className:"btn",onClick:Y,_nk:"".concat(a,"92"),children:"\u91CD\u7F6E"})]})]})})})}},"e+sY":function(g,s,t){"use strict";t.d(s,"c",function(){return R}),t.d(s,"a",function(){return U}),t.d(s,"d",function(){return i}),t.d(s,"b",function(){return m}),t.d(s,"e",function(){return j});var o=t("qLMh"),v=t("9og8"),p=t("czNd"),M="nfL4";function R(){return P.apply(this,arguments)}function P(){return P=Object(v.a)(Object(o.a)().mark(function u(){return Object(o.a)().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",Object(p.a)("/v1/api/agent/statistic",{method:"GET"}));case 1:case"end":return l.stop()}},u)})),P.apply(this,arguments)}function U(){return r.apply(this,arguments)}function r(){return r=Object(v.a)(Object(o.a)().mark(function u(){return Object(o.a)().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",Object(p.a)("/v1/api/agent/detail",{method:"POST"}));case 1:case"end":return l.stop()}},u)})),r.apply(this,arguments)}function i(u){return e.apply(this,arguments)}function e(){return e=Object(v.a)(Object(o.a)().mark(function u(E){return Object(o.a)().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.abrupt("return",Object(p.a)("/v1/api/withdraw/agent/create",{method:"POST",data:E}));case 1:case"end":return _.stop()}},u)})),e.apply(this,arguments)}function m(u){return d.apply(this,arguments)}function d(){return d=Object(v.a)(Object(o.a)().mark(function u(E){return Object(o.a)().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.abrupt("return",Object(p.a)("/v1/api/agent/update",{method:"POST",data:E}));case 1:case"end":return _.stop()}},u)})),d.apply(this,arguments)}function j(u){return D.apply(this,arguments)}function D(){return D=Object(v.a)(Object(o.a)().mark(function u(E){return Object(o.a)().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.abrupt("return",Object(p.a)("/v1/api/agent/update",{method:"POST",data:E}));case 1:case"end":return _.stop()}},u)})),D.apply(this,arguments)}},"pn+7":function(g,s,t){"use strict";t.d(s,"b",function(){return R}),t.d(s,"a",function(){return P}),t.d(s,"c",function(){return U});var o=t("jrin"),v=t("miYZ"),p=t("tsqr"),M="TZQN";function R(r){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",e=document.createElement("textarea");e.readOnly=Boolean("readonly"),e.style.position="absolute",e.style.left="-9999px",e.value=r,document.body.appendChild(e),e.select(),e.setSelectionRange(0,e.value.length),document.execCommand("Copy"),document.body.removeChild(e),i||p.default.success("\u590D\u5236\u6210\u529F"),i&&Object.prototype.toString.call(i)==="[object Function]"&&i()}function P(r,i){var e,m,d=Math.abs((r==null||((e=r.current)===null||e===void 0)?void 0:e.getFieldValue(i))||0),j=Number(d.toFixed(4)).toString();r==null||((m=r.current)===null||m===void 0)||m.setFieldsValue(Object(o.a)({},i,j))}function U(r,i){var e,m,d,j,D=Math.abs((r==null||((e=r.current)===null||e===void 0||((m=e.getForm())===null||m===void 0))?void 0:m.getFieldValue(i))||0),u=Number(D.toFixed(4)).toString();r==null||((d=r.current)===null||d===void 0||((j=d.getForm())===null||j===void 0))||j.setFieldsValue(Object(o.a)({},i,u))}},vPIv:function(g,s,t){}}]);

(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{"6E+K":function(R,l,t){"use strict";t.r(l);var C=t("OaEy"),E=t("2fM7"),h=t("tJVT"),u=t("q1tI"),i=t.n(u),v=t("Bmqs"),r=t("nKUr"),D=t.n(r),m="S0tB";l.default=function(d){var e=d.value,M=d.onChange,a=Object(u.useState)([]),o=Object(h.a)(a,2),c=o[0],f=o[1];return Object(u.useEffect)(function(){v.role.listSelectData().then(function(_){var s=_.data;f(s)})},[]),Object(r.jsx)(E.a,{allowClear:!0,placeholder:"\u8BF7\u9009\u62E9\u89D2\u8272!",mode:"tags",value:e,onChange:M,loading:c.length===0,_nk:"".concat(m,"11"),children:c.map(function(_){return Object(r.jsx)(E.a.Option,{value:_.value,_nk:"iAr".concat(m,"21"),children:_.name},_.value)})})}},Qu6n:function(R,l,t){"use strict";t.r(l);var C=t("y8nQ"),E=t("Vl3Y"),h=t("miYZ"),u=t("tsqr"),i=t("q1tI"),v=t.n(i),r=t("Bmqs"),D=t("rmhi"),m=t("Qurx"),d=t("6E+K"),e=t("nKUr"),M=t.n(e),a="pl5J";l.default=function(o){var c=o.visible,f=o.onVisibleChange,_=o.record,s=Object(i.useRef)();return Object(i.useEffect)(function(){var O;(O=s.current)===null||O===void 0||O.resetFields(),_&&r.user.getScope(_).then(function(P){var n,U=P.data;(n=s.current)===null||n===void 0||n.setFieldsValue({userId:_.userId,username:_.username,roleCodes:U.roleCodes})})},[_]),Object(e.jsxs)(D.a,{title:"\u6388\u6743",visible:c,formRef:s,onVisibleChange:f,onFinish:function(P){return r.user.putScope({userId:P.userId,roleCodes:P.roleCodes}).then(function(){var n;return u.default.success("\u6388\u6743\u6210\u529F!"),(n=s.current)===null||n===void 0||n.resetFields(),!0})},_nk:"".concat(a,"11"),children:[Object(e.jsx)(m.a,{hidden:!0,name:"userId",_nk:"".concat(a,"21")}),Object(e.jsx)(m.a,{labelCol:{span:24},disabled:!0,name:"username",label:"\u7528\u6237\u540D",_nk:"".concat(a,"22")}),Object(e.jsx)(E.a.Item,{labelCol:{span:24},name:"roleCodes",label:"\u89D2\u8272",initialValue:[],_nk:"".concat(a,"31"),children:Object(e.jsx)(d.default,{_nk:"".concat(a,"41")})})]})}}}]);

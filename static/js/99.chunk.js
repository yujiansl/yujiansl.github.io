(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{"6E+K":function(P,n,t){"use strict";t.r(n);var v=t("OaEy"),o=t("2fM7"),E=t("tJVT"),_=t("q1tI"),D=t.n(_),m=t("Bmqs"),e=t("nKUr"),M=t.n(e),r="S0tB";n.default=function(l){var d=l.value,c=l.onChange,i=Object(_.useState)([]),s=Object(E.a)(i,2),u=s[0],O=s[1];return Object(_.useEffect)(function(){m.role.listSelectData().then(function(a){var h=a.data;O(h)})},[]),Object(e.jsx)(o.a,{allowClear:!0,placeholder:"\u8BF7\u9009\u62E9\u89D2\u8272!",mode:"tags",value:d,onChange:c,loading:u.length===0,_nk:"".concat(r,"11"),children:u.map(function(a){return Object(e.jsx)(o.a.Option,{value:a.value,_nk:"iAr".concat(r,"21"),children:a.name},a.value)})})}}}]);

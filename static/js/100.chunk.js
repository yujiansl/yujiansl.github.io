(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{"9fy2":function(d,a,l){"use strict";l.d(a,"a",function(){return e}),l.d(a,"c",function(){return s});var v="a9LB",i={"en-US":{lang:"en-US",label:"English",icon:"\u{1F1FA}\u{1F1F8}",title:"Language"},"zh-CN":{lang:"zh-CN",label:"\u7B80\u4F53\u4E2D\u6587",icon:"\u{1F1E8}\u{1F1F3}",title:"\u8BED\u8A00"}},e=Object.keys(i),s=e.map(function(n){return{key:n,title:n}});a.b=i},FADK:function(d,a,l){"use strict";l.r(a);var v=l("5NDa"),i=l("5rEg"),e=l("k1fw"),s=l("tJVT"),n=l("q1tI"),y=l.n(n),b=l("9fy2"),o=l("nKUr"),P=l.n(o),I="vJBo",f=function(u){var t=u.value,_=u.onChange,D=_===void 0?function(){}:_,R=Object(n.useState)({}),m=Object(s.a)(R,2),E=m[0],h=m[1];return Object(n.useEffect)(function(){var g={};t&&(g=typeof t=="string"?JSON.parse(t):Object(e.a)({},t)),h(g)},[t]),Object(o.jsx)(o.Fragment,{children:b.a.map(function(g){var r=b.b[g];return Object(o.jsx)(i.a,{addonBefore:r.label,value:E[r.lang],onChange:function(O){var T=O.target.value,c=Object(e.a)({},E);c[r.lang]=T,h(c),D(c)},style:{marginBottom:5},_nk:"iAr".concat(I,"11")},"sys-dict-item-languages-".concat(r.label))})})};a.default=f}}]);

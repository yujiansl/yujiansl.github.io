(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{"9fy2":function(R,_,a){"use strict";a.d(_,"a",function(){return d}),a.d(_,"c",function(){return b});var T="a9LB",g={"en-US":{lang:"en-US",label:"English",icon:"\u{1F1FA}\u{1F1F8}",title:"Language"},"zh-CN":{lang:"zh-CN",label:"\u7B80\u4F53\u4E2D\u6587",icon:"\u{1F1E8}\u{1F1F3}",title:"\u8BED\u8A00"}},d=Object.keys(g),b=d.map(function(m){return{key:m,title:m}});_.b=g},Be94:function(R,_,a){"use strict";a.r(_);var T=a("Q9mQ"),g=a("diRs"),d=a("+L6B"),b=a("2/Rp"),m=a("8R5B"),M=a("aJyg"),k=a("5NDa"),B=a("5rEg"),p=a("k1fw"),U=a("oBTY"),v=a("tJVT"),c=a("q1tI"),z=a.n(c),S=a("9fy2"),C=a("xvlK"),t=a("nKUr"),x=a.n(t),s="pvW3",j=["zh-CN","en-US"],L=function(h){var O=h.code,u=h.value,D=h.onChange,K=D===void 0?function(){}:D,A=Object(c.useState)(j),y=Object(v.a)(A,2),E=y[0],P=y[1],N=Object(c.useState)({}),I=Object(v.a)(N,2),r=I[0],f=I[1],W=function(n,e){var i=[];E.forEach(function(o){o===n?e&&i.push(e):r[o]&&i.push(r[o])}),K(i)};return Object(c.useEffect)(function(){if(!u||u.length===0)f({});else{var l={},n=Object(U.a)(E);u.forEach(function(e){l[e.languageTag]=e,n.indexOf(e.languageTag)===-1&&n.push(e.languageTag)}),f(l),P(n)}},[O,u]),Object(t.jsxs)(t.Fragment,{children:[E.map(function(l){return Object(t.jsx)(B.a,{addonBefore:l,style:{marginBottom:5},defaultValue:r[l]?r[l].message:void 0,onChange:function(e){var i=Object(p.a)({},r),o=e.target.value;o&&o.length>0?i[l]={code:O,message:o,languageTag:l}:delete i[l],W(l,i[l]),f(i)},_nk:"iAr".concat(s,"11")},"i18n-create-".concat(l))}),Object(t.jsx)(g.a,{trigger:"click",content:Object(t.jsx)(M.a,{dataSource:S.c,targetKeys:E,render:function(n){return n.title||""},onChange:function(n){P(n.reverse())},_nk:"".concat(s,"31")}),_nk:"".concat(s,"21"),children:Object(t.jsxs)(b.a,{type:"dashed",style:{width:"100%"},_nk:"".concat(s,"41"),children:[Object(t.jsx)(C.a,{_nk:"".concat(s,"51")}),"\u6DFB\u52A0\u8BED\u8A00"]})})]})};_.default=L}}]);

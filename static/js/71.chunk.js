(window.webpackJsonp=window.webpackJsonp||[]).push([[71,90,96,110],{"3PxB":function(m,n,t){"use strict";t.r(n),t.d(n,"CardCom",function(){return o});var h=t("jCWc"),c=t("kPKH"),d=t("q1tI"),P=t.n(d),l=t("6wrw"),r=t.n(l),s=t("nKUr"),M=t.n(s),_="vYEW";function p(i){if(!i)return"";if(i=Number(i||0).toString(),i){var a="".concat(i);if(a.indexOf(".")!==-1){var D=a.substring(0,a.indexOf(".")).replace(/\B(?=(?:\d{3})+$)/g,","),u=a.substring(a.length,a.indexOf("."));return D+u}return a.replace(/\B(?=(?:\d{3})+$)/g,",")}}var o=function(a){return Object(s.jsx)(c.a,{xs:24,sm:12,md:6,_nk:"".concat(_,"11"),children:Object(s.jsxs)("div",{className:r.a.card,_nk:"".concat(_,"21"),children:[Object(s.jsx)("div",{className:r.a.title,_nk:"".concat(_,"22"),children:a.title}),Object(s.jsx)("div",{className:r.a.price,_nk:"".concat(_,"23"),children:p(a.value)})]})})}},"6wrw":function(m,n,t){m.exports={card:"card___ujYsR",title:"title___bWGs_",price:"price___11xSQ"}},VLh5:function(m,n,t){"use strict";t.d(n,"a",function(){return l});var h=t("qLMh"),c=t("9og8"),d=t("czNd"),P="61DC";function l(){return r.apply(this,arguments)}function r(){return r=Object(c.a)(Object(h.a)().mark(function s(){return Object(h.a)().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.abrupt("return",Object(d.a)("/v1/api/admin/statistic",{method:"GET"}));case 1:case"end":return _.stop()}},s)})),r.apply(this,arguments)}},"cJ+M":function(m,n,t){},hNnk:function(m,n,t){"use strict";t.r(n);var h=t("14J3"),c=t("BMrR"),d=t("tJVT"),P=t("sI7y"),l=t.n(P),r=t("q1tI"),s=t.n(r),M=t("3PxB"),_=t("nhnK"),p=t("VLh5"),o=t("nKUr"),i=t.n(o),a="SSMx";n.default=function(){var D=Object(r.useState)({}),u=Object(d.a)(D,2),R=u[0],v=u[1],U=["\u603B\u4EA4\u6613\u91D1\u989D","\u603B\u5546\u6237\u624B\u7EED\u8D39","MS\u603B\u4F63\u91D1","\u5E73\u53F0\u603B\u6536\u5165","\u4ECA\u65E5\u4EA4\u6613\u91D1\u989D","\u4ECA\u65E5\u5546\u6237\u624B\u7EED\u8D39","\u4ECA\u65E5MS\u4F63\u91D1","\u4ECA\u65E5\u5E73\u53F0\u6536\u5165"],f=Object(r.useState)([0,0,0,0,0,0,0,0]),E=Object(d.a)(f,2),C=E[0],y=E[1];return Object(r.useEffect)(function(){Object(p.a)().then(function(O){v(O.data);var e=O.data;y([e.totalCrypto,e.todayPoundage,e.totalBrokerage,e.totalBrokerage,e.todayCrypto,e.todayPoundage,e.todayBrokerage,e.todayOrder])})},[]),Object(o.jsxs)("div",{className:l.a["i-content"],_nk:"".concat(a,"11"),children:[Object(o.jsx)(c.a,{gutter:[20,20],_nk:"".concat(a,"21"),children:C.map(function(O,e){return Object(o.jsx)(M.CardCom,{title:U[e],value:O,_nk:"iAr".concat(a,"31")},e)})}),Object(o.jsx)("div",{className:l.a.chart,_nk:"".concat(a,"12"),children:Object(o.jsx)(_.ChartCom,{data:R.dailyStatistics,_nk:"".concat(a,"41")})})]})}},nhnK:function(m,n,t){"use strict";t.r(n),t.d(n,"ChartCom",function(){return i});var h=t("14J3"),c=t("BMrR"),d=t("rAM+"),P=t("q1tI"),l=t.n(P),r=t("U/Lg"),s=t("cJ+M"),M=t.n(s),_=t("nKUr"),p=t.n(_),o="kuls";function i(a){var D=a.data,u=function(){var v=[],U=[],f=[],E=Object(d.a)(D||[]),C;try{for(E.s();!(C=E.n()).done;){var y=C.value;v.push(y.date),f.push(y.totalCrypto),U.push(y.totalOrder)}}catch(e){E.e(e)}finally{E.f()}var O={title:{text:"Stacked Area Chart"},tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},toolbox:{feature:{saveAsImage:{}}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"category",data:v},yAxis:{type:"value"},series:[{data:U,type:"line"},{data:f,type:"line"}]};return O};return Object(_.jsx)(_.Fragment,{children:Object(_.jsx)(c.a,{_nk:"".concat(o,"11"),children:Object(_.jsx)("div",{style:{width:"100%",height:"470px"},_nk:"".concat(o,"21"),children:Object(_.jsx)(r.a,{style:{height:"100%"},option:u(),_nk:"".concat(o,"31")})})})})}},sI7y:function(m,n,t){m.exports={"i-content":"i-content___3G6iY",chart:"chart___OE6ED","p-content":"p-content___3XzZu",tips:"tips___16CIe","tips-danger":"tips-danger___2nDhr"}}}]);

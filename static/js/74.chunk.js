(window.webpackJsonp=window.webpackJsonp||[]).push([[74,99,134],{FLcF:function(P,i,t){"use strict";t.r(i),t.d(i,"ChartCom",function(){return a});var o=t("14J3"),l=t("BMrR"),d=t("rAM+"),h=t("q1tI"),j=t.n(h),E=t("U/Lg"),n=t("t4g9"),m=t.n(n),u=t("nKUr"),p=t.n(u),O="URU9";function a(y){var e=y.data,s=function(){var _=[],r=[],f=[],U=Object(d.a)(e||[]),v;try{for(U.s();!(v=U.n()).done;){var D=v.value;_.push(D.date),f.push(D.totalCrypto),r.push(D.totalOrder)}}catch(R){U.e(R)}finally{U.f()}var b={title:{text:"\u8BA2\u5355\u7EDF\u8BA1"},tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},legend:{},toolbox:{feature:{saveAsImage:{}}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"category",data:_},yAxis:{type:"value"},series:[{data:r,type:"line"},{data:f,type:"line"}]};return b};return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(l.a,{_nk:"".concat(O,"11"),children:Object(u.jsx)("div",{style:{width:"100%",height:"470px"},_nk:"".concat(O,"21"),children:Object(u.jsx)(E.a,{style:{height:"100%"},option:s(),_nk:"".concat(O,"31")})})})})}},aS3S:function(P,i,t){P.exports={card:"card___2Js-9",title:"title___1hzot",paymentText:"paymentText___uT4q-",rate:"rate___1PKOv",cardLink:"cardLink___3x0Vz",price:"price___3vWnr",chartBox:"chartBox___1y6gC",grayCard:"grayCard___2-bQN"}},"e+sY":function(P,i,t){"use strict";t.d(i,"c",function(){return j}),t.d(i,"a",function(){return n}),t.d(i,"d",function(){return u}),t.d(i,"b",function(){return O}),t.d(i,"e",function(){return y});var o=t("qLMh"),l=t("9og8"),d=t("czNd"),h="nfL4";function j(){return E.apply(this,arguments)}function E(){return E=Object(l.a)(Object(o.a)().mark(function s(){return Object(o.a)().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.abrupt("return",Object(d.a)("/v1/api/agent/statistic",{method:"GET"}));case 1:case"end":return _.stop()}},s)})),E.apply(this,arguments)}function n(){return m.apply(this,arguments)}function m(){return m=Object(l.a)(Object(o.a)().mark(function s(){return Object(o.a)().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.abrupt("return",Object(d.a)("/v1/api/agent/detail",{method:"POST"}));case 1:case"end":return _.stop()}},s)})),m.apply(this,arguments)}function u(s){return p.apply(this,arguments)}function p(){return p=Object(l.a)(Object(o.a)().mark(function s(c){return Object(o.a)().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",Object(d.a)("/v1/api/withdraw/agent/create",{method:"POST",data:c}));case 1:case"end":return r.stop()}},s)})),p.apply(this,arguments)}function O(s){return a.apply(this,arguments)}function a(){return a=Object(l.a)(Object(o.a)().mark(function s(c){return Object(o.a)().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",Object(d.a)("/v1/api/agent/update",{method:"POST",data:c}));case 1:case"end":return r.stop()}},s)})),a.apply(this,arguments)}function y(s){return e.apply(this,arguments)}function e(){return e=Object(l.a)(Object(o.a)().mark(function s(c){return Object(o.a)().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",Object(d.a)("/v1/api/agent/update",{method:"POST",data:c}));case 1:case"end":return r.stop()}},s)})),e.apply(this,arguments)}},iL04:function(P,i,t){"use strict";t.r(i);var o=t("14J3"),l=t("BMrR"),d=t("jCWc"),h=t("kPKH"),j=t("tJVT"),E=t("aS3S"),n=t.n(E),m=t("q1tI"),u=t.n(m),p=t("FLcF"),O=t("e+sY"),a=t("nKUr"),y=t.n(a),e="LzCQ";i.default=function(){var s=Object(m.useState)({dailyStatistics:[],rate:"0.012",todayCrypto:"0",totalCrypto:"0",totalBrokerage:"0",totalOrder:"0",usdtBalance:"0"}),c=Object(j.a)(s,2),_=c[0],r=c[1];return Object(m.useEffect)(function(){Object(O.c)().then(function(f){r(f.data)}).finally(function(){})},[]),Object(a.jsxs)("div",{className:n.a["i-content"],_nk:"".concat(e,"11"),children:[Object(a.jsx)("div",{_nk:"".concat(e,"12"),children:Object(a.jsxs)(l.a,{gutter:[20,20],_nk:"".concat(e,"21"),children:[Object(a.jsx)(h.a,{xs:24,sm:12,md:12,xl:6,_nk:"".concat(e,"31"),children:Object(a.jsxs)("div",{className:n.a.grayCard,_nk:"".concat(e,"13"),children:[Object(a.jsx)("div",{className:n.a.title,_nk:"".concat(e,"14"),children:"\u8D26\u6237\u4F59\u989D\uFF08USDT\uFF09"}),Object(a.jsx)("div",{className:n.a.paymentText,_nk:"".concat(e,"15"),children:_.usdtBalance})]})}),Object(a.jsx)(h.a,{xs:24,sm:12,md:12,xl:6,_nk:"".concat(e,"32"),children:Object(a.jsxs)("div",{className:n.a.grayCard,_nk:"".concat(e,"16"),children:[Object(a.jsx)("div",{className:n.a.title,_nk:"".concat(e,"17"),children:"\u4EE3\u7406\u8D39\u7387"}),Object(a.jsxs)("div",{className:n.a.rate,_nk:"".concat(e,"18"),children:[Number(_.rate)*100,"%"]})]})}),Object(a.jsx)(h.a,{xs:24,sm:12,md:12,xl:6,_nk:"".concat(e,"33"),children:Object(a.jsxs)("div",{className:n.a.grayCard,_nk:"".concat(e,"19"),children:[Object(a.jsx)("div",{className:n.a.title,_nk:"".concat(e,"1a"),children:"\u4ECA\u65E5\u4F63\u91D1\uFF08USDT\uFF09"}),Object(a.jsx)("div",{className:n.a.price,_nk:"".concat(e,"1b"),children:_.todayBrokerage})]})}),Object(a.jsx)(h.a,{xs:24,sm:12,md:12,xl:6,_nk:"".concat(e,"34"),children:Object(a.jsxs)("div",{className:n.a.grayCard,_nk:"".concat(e,"1c"),children:[Object(a.jsx)("div",{className:n.a.title,_nk:"".concat(e,"1d"),children:"\u603B\u4F63\u91D1\uFF08USDT\uFF09"}),Object(a.jsx)("div",{className:n.a.price,_nk:"".concat(e,"1e"),children:_.totalBrokerage})]})})]})}),Object(a.jsx)("div",{className:n.a.chartBox,_nk:"".concat(e,"1f"),children:Object(a.jsx)(p.ChartCom,{data:_.dailyStatistics,_nk:"".concat(e,"41")})})]})}},t4g9:function(P,i,t){}}]);

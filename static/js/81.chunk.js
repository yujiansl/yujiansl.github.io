(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{E9fh:function(A,l,e){"use strict";e.d(l,"e",function(){return n}),e.d(l,"b",function(){return c}),e.d(l,"a",function(){return t}),e.d(l,"d",function(){return m}),e.d(l,"c",function(){return E});var n={};e.r(n),e.d(n,"query",function(){return p});var c={};e.r(c),e.d(c,"query",function(){return d});var m={};e.r(m),e.d(m,"query",function(){return r}),e.d(m,"create",function(){return T});var E={};e.r(E),e.d(E,"query",function(){return v});var M=e("e+sY"),u=e("qLMh"),h=e("9og8"),f=e("9kvl"),_="au0B";function p(i){return g.apply(this,arguments)}function g(){return g=Object(h.a)(Object(u.a)().mark(function i(P){return Object(u.a)().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",Object(f.e)("/v1/api/withdraw/list",{method:"POST",data:P}));case 1:case"end":return a.stop()}},i)})),g.apply(this,arguments)}var s="ltpa";function d(i){return b.apply(this,arguments)}function b(){return b=Object(h.a)(Object(u.a)().mark(function i(P){return Object(u.a)().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",Object(f.e)("/v1/api/order/list",{method:"POST",data:P}));case 1:case"end":return a.stop()}},i)})),b.apply(this,arguments)}var t=e("qgU7"),O=e("czNd"),o="HtB+";function r(i){return U.apply(this,arguments)}function U(){return U=Object(h.a)(Object(u.a)().mark(function i(P){return Object(u.a)().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",Object(O.a)("/v1/api/agent/list",{method:"POST",data:P}));case 1:case"end":return a.stop()}},i)})),U.apply(this,arguments)}function T(i){return y.apply(this,arguments)}function y(){return y=Object(h.a)(Object(u.a)().mark(function i(P){return Object(u.a)().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",Object(O.a)("/v1/api/agent/create",{method:"POST",data:P}));case 1:case"end":return a.stop()}},i)})),y.apply(this,arguments)}var j="+NZr";function v(i){return D.apply(this,arguments)}function D(){return D=Object(h.a)(Object(u.a)().mark(function i(P){return Object(u.a)().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",Object(f.e)("/v1/api/agentbill/list",{method:"POST",data:P}));case 1:case"end":return a.stop()}},i)})),D.apply(this,arguments)}var R="Kjk4"},EYg3:function(A,l,e){"use strict";e.r(l);var n=e("y8nQ"),c=e("Vl3Y"),m=e("5NDa"),E=e("5rEg"),M=e("miYZ"),u=e("tsqr"),h=e("q1tI"),f=e.n(h),_=e("E9fh"),p=e("rmhi"),g=e("NFKh"),s=e.n(g),d=e("nKUr"),b=e.n(d),t="bmuR",O=function(r){var U=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"HelloWorldUpay00",T=s.a.enc.Utf8.parse(U),y=s.a.enc.Utf8.parse(r),j=s.a.AES.encrypt(y,T,{mode:s.a.mode.ECB,padding:s.a.pad.Pkcs7});return j.ciphertext.toString().toLowerCase()};l.default=function(o){var r=o.visible,U=o.onVisibleChange,T=o.tableRef,y=Object(h.useRef)();return Object(h.useEffect)(function(){var j;(j=y.current)===null||j===void 0||j.resetFields()},[r]),Object(d.jsxs)(p.a,{title:"\u5F00\u6237",visible:r,formRef:y,onVisibleChange:U,onFinish:function(v){return _.d.create({name:v.name,rate:v.rate,password:v.password,rePassword:v.rePassword,code:v.code}).then(function(){var D,R;return u.default.success("\u5F00\u6237\u6210\u529F!"),(D=y.current)===null||D===void 0||D.resetFields(),(R=T.current)===null||R===void 0||R.reload(),!0})},_nk:"".concat(t,"11"),children:[Object(d.jsx)(c.a.Item,{name:"name",label:"\u7528\u6237\u540D",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"}],_nk:"".concat(t,"21"),children:Object(d.jsx)(E.a,{placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D",_nk:"".concat(t,"31")})}),Object(d.jsx)(c.a.Item,{name:"password",label:"\u5BC6\u7801",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u5BC6\u7801"}],_nk:"".concat(t,"22"),children:Object(d.jsx)(E.a.Password,{placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801",_nk:"".concat(t,"23")})}),Object(d.jsx)(c.a.Item,{name:"rePassword",label:"\u5BC6\u7801",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u5BC6\u7801"},function(j){return{validator:function(D,R){var i;return j.getFieldValue("password")!==R&&(i="\u4E24\u6B21\u8F93\u5165\u7684\u5BC6\u7801\u4E0D\u4E00\u81F4!"),i&&i.length>0?Promise.reject(i):Promise.resolve()}}}],_nk:"".concat(t,"24"),children:Object(d.jsx)(E.a.Password,{placeholder:"\u8BF7\u518D\u6B21\u8F93\u5165\u5BC6\u7801",_nk:"".concat(t,"25")})}),Object(d.jsx)(c.a.Item,{name:"rate",label:"\u8D39\u7387",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u8D39\u7387"}],_nk:"".concat(t,"26"),children:Object(d.jsx)(E.a,{placeholder:"\u8BF7\u8F93\u5165\u6536\u6B3E\u8D39\u7387",_nk:"".concat(t,"32")})}),Object(d.jsx)("div",{className:"tips-danger",_nk:"".concat(t,"41"),children:"\u6CE8\uFF1A\u6536\u6B3E\u8D39\u7387\u4E3A\u5343\u5206\u4F4D\uFF0C\u4F8B\u5982\uFF1A\u5343\u5206\u4E4B\u4E09\u5219\u586B\u51990.003"}),Object(d.jsx)(c.a.Item,{name:"confirmPassword",label:"\u786E\u8BA4\u5BC6\u7801",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u786E\u8BA4\u5BC6\u7801"}],_nk:"".concat(t,"27"),children:Object(d.jsx)(E.a,{placeholder:"\u8BF7\u8F93\u5165\u786E\u8BA4\u5BC6\u7801",_nk:"".concat(t,"33")})})]})}},"e+sY":function(A,l,e){"use strict";e.d(l,"c",function(){return M}),e.d(l,"a",function(){return h}),e.d(l,"d",function(){return _}),e.d(l,"b",function(){return g}),e.d(l,"e",function(){return d});var n=e("qLMh"),c=e("9og8"),m=e("czNd"),E="nfL4";function M(){return u.apply(this,arguments)}function u(){return u=Object(c.a)(Object(n.a)().mark(function t(){return Object(n.a)().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",Object(m.a)("/v1/api/agent/statistic",{method:"GET"}));case 1:case"end":return o.stop()}},t)})),u.apply(this,arguments)}function h(){return f.apply(this,arguments)}function f(){return f=Object(c.a)(Object(n.a)().mark(function t(){return Object(n.a)().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",Object(m.a)("/v1/api/agent/detail",{method:"POST"}));case 1:case"end":return o.stop()}},t)})),f.apply(this,arguments)}function _(t){return p.apply(this,arguments)}function p(){return p=Object(c.a)(Object(n.a)().mark(function t(O){return Object(n.a)().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",Object(m.a)("/v1/api/withdraw/agent/create",{method:"POST",data:O}));case 1:case"end":return r.stop()}},t)})),p.apply(this,arguments)}function g(t){return s.apply(this,arguments)}function s(){return s=Object(c.a)(Object(n.a)().mark(function t(O){return Object(n.a)().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",Object(m.a)("/v1/api/agent/update",{method:"POST",data:O}));case 1:case"end":return r.stop()}},t)})),s.apply(this,arguments)}function d(t){return b.apply(this,arguments)}function b(){return b=Object(c.a)(Object(n.a)().mark(function t(O){return Object(n.a)().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",Object(m.a)("/v1/api/agent/update",{method:"POST",data:O}));case 1:case"end":return r.stop()}},t)})),b.apply(this,arguments)}},qgU7:function(A,l,e){"use strict";e.r(l),e.d(l,"query",function(){return M}),e.d(l,"create",function(){return h});var n=e("qLMh"),c=e("9og8"),m=e("9kvl"),E="y3pK";function M(_){return u.apply(this,arguments)}function u(){return u=Object(c.a)(Object(n.a)().mark(function _(p){return Object(n.a)().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",Object(m.e)("/v1/api/merchant/list",{method:"POST",data:p}));case 1:case"end":return s.stop()}},_)})),u.apply(this,arguments)}function h(_){return f.apply(this,arguments)}function f(){return f=Object(c.a)(Object(n.a)().mark(function _(p){return Object(n.a)().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",Object(m.e)("/v1/api/merchant/create",{method:"POST",data:p}));case 1:case"end":return s.stop()}},_)})),f.apply(this,arguments)}}}]);

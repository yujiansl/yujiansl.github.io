(window.webpackJsonp=window.webpackJsonp||[]).push([[30,9],{"/8vi":function(D,a,e){"use strict";var t=e("k1fw"),s=e("iQDF"),u=e("+eQT"),v=e("tL7X"),h=e("nKUr"),l=e.n(h),p="vHUN",m=u.a.RangePicker;a.a=function(f){var n=f.formatText,P=n===void 0?"YYYY-MM-DD":n,c=f.placeholderText,O=c===void 0?[v.a.text("reg_tips69"),v.a.text("reg_tips70")]:c;return Object(h.jsx)(m,Object(t.a)(Object(t.a)({},f),{},{placeholder:O,format:P,_nk:"".concat(p,"11")}))}},"5JhE":function(D,a,e){"use strict";e.r(a);var t=e("14J3"),s=e("BMrR"),u=e("jCWc"),v=e("kPKH"),h=e("k1fw"),l=e("miYZ"),p=e("tsqr"),m=e("tJVT"),f=e("XfzV"),n=e.n(f),P=e("Ag2N"),c=e("IfEj"),O=e("q1tI"),E=e.n(O),_=e("vmhP"),i=e("/8vi"),o=e("nKUr"),r=e.n(o),b="mcD2";a.default=function(){var d=Object(O.useRef)(),j=Object(O.useRef)(),M=Object(O.useState)(1),g=Object(m.a)(M,2),y=g[0],L=g[1],I=Object(O.useState)(void 0),A=Object(m.a)(I,2),B=A[0],U=A[1],S=Object(O.useState)([]),W=Object(m.a)(S,2),$=W[0],N=W[1],z=function(R){var T="";return R===1?T="TRC20":R===2?T="ERC20":T="PYUSD",T},w=function(R){c.logList.edit({id:R.id,status:B?2:1}).then(function(){var T;p.default.success("\u4FEE\u6539\u72B6\u6001\u6210\u529F"),(T=d.current)===null||T===void 0||T.reload()})},V=function(R){L(Number(R.target.value))},G=[{title:"ID",dataIndex:"id",align:"center",hideInSearch:!0,ellipsis:!0,order:2,width:"100px"},{title:"\u540E\u53F0\u7528\u6237",dataIndex:"AdminName",align:"center",ellipsis:!0,width:150,renderText:function(R,T){var K;return(K=T.user)===null||K===void 0?void 0:K.name}},{title:"\u89D2\u8272",dataIndex:"system",align:"center",ellipsis:!0,width:"100px",renderFormItem:function(){return Object(o.jsx)(_.a,{placeholder:"\u8BF7\u9009\u62E9\u89D2\u8272",type:12,_nk:"".concat(b,"11")})}},{title:"\u64CD\u4F5C\u4E8B\u4EF6",dataIndex:"operateEvent",align:"center",ellipsis:!0,width:200},{title:"\u64CD\u4F5C\u5185\u5BB9",dataIndex:"operateContent",align:"center",hideInSearch:!0,ellipsis:!0,width:200},{title:"IP\u5730\u5740",dataIndex:"clientIp",align:"center",ellipsis:!0,hideInSearch:!0,width:200},{title:"\u5BA2\u6237\u7AEF",dataIndex:"browser",align:"center",hideInSearch:!0,ellipsis:!0,width:200},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"createdAt",align:"center",width:200,valueType:"dateTime",renderFormItem:function(){return Object(o.jsx)(i.a,{_nk:"".concat(b,"21")})}}];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:n.a.content,_nk:"".concat(b,"31")}),Object(o.jsx)(s.a,{_nk:"".concat(b,"41"),children:Object(o.jsx)(v.a,{md:24,_nk:"".concat(b,"51"),children:Object(o.jsx)(P.default.Modal,Object(h.a)(Object(h.a)({},c.logList),{},{rowKey:"id",columns:G,tableRef:d,formRef:j,handlerData:function(R,T){return T==="create"&&y===1?Object(h.a)(Object(h.a)({},R),{},{ethBalance:"0"}):T==="create"&&y===2?Object(h.a)(Object(h.a)({},R),{},{trxBalance:"0"}):R},operateBar:[],operateBarProps:{width:60},toolBarActions:[],tableProps:{rowSelection:{fixed:!0,type:"checkbox",selectedRowKeys:$,onChange:function(R){N(R)},alwaysShowAlert:!1}},formProps:{titleSuffix:"\u7528\u6237"},onStatusChange:U,_nk:"".concat(b,"61")}))})})]})}},"6EAj":function(D,a,e){"use strict";e.r(a),e.d(a,"query",function(){return h});var t=e("qLMh"),s=e("9og8"),u=e("czNd"),v="jEG1";function h(p){return l.apply(this,arguments)}function l(){return l=Object(s.a)(Object(t.a)().mark(function p(m){return Object(t.a)().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",Object(u.a)("/v1/api/withdraw/list",{method:"POST",data:m}));case 1:case"end":return n.stop()}},p)})),l.apply(this,arguments)}},"8a9g":function(D,a,e){"use strict";e.r(a),e.d(a,"query",function(){return h}),e.d(a,"del",function(){return p}),e.d(a,"edit",function(){return f}),e.d(a,"create",function(){return P}),e.d(a,"statics",function(){return O}),e.d(a,"refreshBalance",function(){return _});var t=e("qLMh"),s=e("9og8"),u=e("czNd"),v="LuJ1";function h(o){return l.apply(this,arguments)}function l(){return l=Object(s.a)(Object(t.a)().mark(function o(r){return Object(t.a)().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.abrupt("return",Object(u.a)("/v1/api/agent/list",{method:"POST",data:r}));case 1:case"end":return d.stop()}},o)})),l.apply(this,arguments)}function p(o){return m.apply(this,arguments)}function m(){return m=Object(s.a)(Object(t.a)().mark(function o(r){return Object(t.a)().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.abrupt("return",Object(u.a)("/v1/api/agent/delete",{method:"POST",data:r}));case 1:case"end":return d.stop()}},o)})),m.apply(this,arguments)}function f(o){return n.apply(this,arguments)}function n(){return n=Object(s.a)(Object(t.a)().mark(function o(r){return Object(t.a)().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.abrupt("return",Object(u.a)("/v1/api/agent/update",{method:"POST",data:r}));case 1:case"end":return d.stop()}},o)})),n.apply(this,arguments)}function P(o){return c.apply(this,arguments)}function c(){return c=Object(s.a)(Object(t.a)().mark(function o(r){return Object(t.a)().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.abrupt("return",Object(u.a)("/v1/api/agent/create",{method:"POST",data:r}));case 1:case"end":return d.stop()}},o)})),c.apply(this,arguments)}function O(){return E.apply(this,arguments)}function E(){return E=Object(s.a)(Object(t.a)().mark(function o(){return Object(t.a)().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.abrupt("return",Object(u.a)("/v1/api/agent/balance/statistic",{method:"GET"}));case 1:case"end":return b.stop()}},o)})),E.apply(this,arguments)}function _(o){return i.apply(this,arguments)}function i(){return i=Object(s.a)(Object(t.a)().mark(function o(r){return Object(t.a)().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.abrupt("return",Object(u.a)("/v1/api/address/balance/refresh",{method:"POST",data:r}));case 1:case"end":return d.stop()}},o)})),i.apply(this,arguments)}},IaIN:function(D,a,e){"use strict";e.r(a),e.d(a,"query",function(){return h}),e.d(a,"submit",function(){return p});var t=e("qLMh"),s=e("9og8"),u=e("czNd"),v="CtSA";function h(f){return l.apply(this,arguments)}function l(){return l=Object(s.a)(Object(t.a)().mark(function f(n){return Object(t.a)().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.abrupt("return",Object(u.a)("/v1/api/systemconfig/list",{method:"POST",data:n}));case 1:case"end":return c.stop()}},f)})),l.apply(this,arguments)}function p(f){return m.apply(this,arguments)}function m(){return m=Object(s.a)(Object(t.a)().mark(function f(n){return Object(t.a)().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.abrupt("return",Object(u.a)("/v1/api/systemconfig/update",{method:"POST",data:n}));case 1:case"end":return c.stop()}},f)})),m.apply(this,arguments)}},IfEj:function(D,a,e){"use strict";var t=e("bpqy");e.d(a,"adminList",function(){return t});var s=e("M9DU");e.d(a,"roleList",function(){return s});var u=e("VLh5"),v=e("IaIN");e.d(a,"riskList",function(){return v});var h=e("brqH");e.d(a,"addressList",function(){return h});var l=e("V9oV");e.d(a,"addressMoney",function(){return l});var p=e("8a9g");e.d(a,"agentList",function(){return p});var m=e("JLSb");e.d(a,"agentbill",function(){return m});var f=e("qv9F");e.d(a,"orderList",function(){return f});var n=e("xKIE");e.d(a,"merList",function(){return n});var P=e("xfgq");e.d(a,"merchantBill",function(){return P});var c=e("6EAj");e.d(a,"withdraw",function(){return c});var O=e("QppO");e.d(a,"adminMenu",function(){return O});var E=e("nGyS");e.d(a,"logList",function(){return E});var _=e("mAZn"),i=e.n(_);e.o(_,"i18n")&&e.d(a,"i18n",function(){return _.i18n});var o="YRl8"},JLSb:function(D,a,e){"use strict";e.r(a),e.d(a,"query",function(){return h});var t=e("qLMh"),s=e("9og8"),u=e("czNd"),v="O6X9";function h(p){return l.apply(this,arguments)}function l(){return l=Object(s.a)(Object(t.a)().mark(function p(m){return Object(t.a)().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",Object(u.a)("/v1/api/agentbill/list",{method:"POST",data:m}));case 1:case"end":return n.stop()}},p)})),l.apply(this,arguments)}},M9DU:function(D,a,e){"use strict";e.r(a),e.d(a,"query",function(){return h}),e.d(a,"create",function(){return p}),e.d(a,"edit",function(){return f}),e.d(a,"del",function(){return P}),e.d(a,"authorizeList",function(){return O});var t=e("qLMh"),s=e("9og8"),u=e("czNd"),v="Z2+p";function h(_){return l.apply(this,arguments)}function l(){return l=Object(s.a)(Object(t.a)().mark(function _(i){return Object(t.a)().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",Object(u.a)("/v1/api/role/list",{method:"POST",data:i}));case 1:case"end":return r.stop()}},_)})),l.apply(this,arguments)}function p(_){return m.apply(this,arguments)}function m(){return m=Object(s.a)(Object(t.a)().mark(function _(i){return Object(t.a)().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",Object(u.a)("/v1/api/admin/create",{method:"POST",data:i}));case 1:case"end":return r.stop()}},_)})),m.apply(this,arguments)}function f(_){return n.apply(this,arguments)}function n(){return n=Object(s.a)(Object(t.a)().mark(function _(i){return Object(t.a)().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",Object(u.a)("/v1/api/role/update",{method:"POST",data:i}));case 1:case"end":return r.stop()}},_)})),n.apply(this,arguments)}function P(_){return c.apply(this,arguments)}function c(){return c=Object(s.a)(Object(t.a)().mark(function _(i){return Object(t.a)().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",Object(u.a)("/v1/api/admin/delete",{method:"POST",data:i}));case 1:case"end":return r.stop()}},_)})),c.apply(this,arguments)}function O(_){return E.apply(this,arguments)}function E(){return E=Object(s.a)(Object(t.a)().mark(function _(i){return Object(t.a)().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return console.log(i,"body"),r.abrupt("return",Object(u.a)("/v1/api/rolepermissionrelation/create",{method:"POST",data:i}));case 2:case"end":return r.stop()}},_)})),E.apply(this,arguments)}},QppO:function(D,a,e){"use strict";e.r(a),e.d(a,"query",function(){return h}),e.d(a,"del",function(){return p}),e.d(a,"edit",function(){return f}),e.d(a,"create",function(){return P}),e.d(a,"getPermissionIds",function(){return O});var t=e("qLMh"),s=e("9og8"),u=e("czNd"),v="iqE9";function h(_){return l.apply(this,arguments)}function l(){return l=Object(s.a)(Object(t.a)().mark(function _(i){return Object(t.a)().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",Object(u.a)("/v1/api/permission/list",{method:"POST",data:i}));case 1:case"end":return r.stop()}},_)})),l.apply(this,arguments)}function p(_){return m.apply(this,arguments)}function m(){return m=Object(s.a)(Object(t.a)().mark(function _(i){return Object(t.a)().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",Object(u.a)("/v1/api/permission/delete",{method:"POST",data:i}));case 1:case"end":return r.stop()}},_)})),m.apply(this,arguments)}function f(_){return n.apply(this,arguments)}function n(){return n=Object(s.a)(Object(t.a)().mark(function _(i){return Object(t.a)().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",Object(u.a)("/v1/api/permission/update",{method:"POST",data:i}));case 1:case"end":return r.stop()}},_)})),n.apply(this,arguments)}function P(_){return c.apply(this,arguments)}function c(){return c=Object(s.a)(Object(t.a)().mark(function _(i){return Object(t.a)().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",Object(u.a)("/v1/api/permission/create",{method:"POST",data:i}));case 1:case"end":return r.stop()}},_)})),c.apply(this,arguments)}function O(_){return E.apply(this,arguments)}function E(){return E=Object(s.a)(Object(t.a)().mark(function _(i){return Object(t.a)().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",Object(u.a)("/v1/api/permission/role/list",{method:"POST",data:i}));case 1:case"end":return r.stop()}},_)})),E.apply(this,arguments)}},V9oV:function(D,a,e){"use strict";e.r(a),e.d(a,"query",function(){return h});var t=e("qLMh"),s=e("9og8"),u=e("czNd"),v="xcBv";function h(p){return l.apply(this,arguments)}function l(){return l=Object(s.a)(Object(t.a)().mark(function p(m){return Object(t.a)().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",Object(u.a)("/v1/api/addresstransferrecord/list",{method:"POST",data:m}));case 1:case"end":return n.stop()}},p)})),l.apply(this,arguments)}},VLh5:function(D,a,e){"use strict";e.d(a,"a",function(){return h});var t=e("qLMh"),s=e("9og8"),u=e("czNd"),v="61DC";function h(){return l.apply(this,arguments)}function l(){return l=Object(s.a)(Object(t.a)().mark(function p(){return Object(t.a)().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.abrupt("return",Object(u.a)("/v1/api/admin/statistic",{method:"GET"}));case 1:case"end":return f.stop()}},p)})),l.apply(this,arguments)}},XfzV:function(D,a,e){D.exports={content:"content___rqPyE","card-box":"card-box___1Omgd",price:"price___Taq-p"}},bpqy:function(D,a,e){"use strict";e.r(a),e.d(a,"query",function(){return h}),e.d(a,"create",function(){return p}),e.d(a,"edit",function(){return f}),e.d(a,"del",function(){return P});var t=e("qLMh"),s=e("9og8"),u=e("czNd"),v="Dkku";function h(O){return l.apply(this,arguments)}function l(){return l=Object(s.a)(Object(t.a)().mark(function O(E){return Object(t.a)().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",Object(u.a)("/v1/api/admin/list",{method:"POST",data:E}));case 1:case"end":return i.stop()}},O)})),l.apply(this,arguments)}function p(O){return m.apply(this,arguments)}function m(){return m=Object(s.a)(Object(t.a)().mark(function O(E){return Object(t.a)().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",Object(u.a)("/v1/api/admin/create",{method:"POST",data:E}));case 1:case"end":return i.stop()}},O)})),m.apply(this,arguments)}function f(O){return n.apply(this,arguments)}function n(){return n=Object(s.a)(Object(t.a)().mark(function O(E){return Object(t.a)().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",Object(u.a)("/v1/api/admin/update",{method:"POST",data:E}));case 1:case"end":return i.stop()}},O)})),n.apply(this,arguments)}function P(O){return c.apply(this,arguments)}function c(){return c=Object(s.a)(Object(t.a)().mark(function O(E){return Object(t.a)().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",Object(u.a)("/v1/api/admin/delete",{method:"POST",data:E}));case 1:case"end":return i.stop()}},O)})),c.apply(this,arguments)}},brqH:function(D,a,e){"use strict";e.r(a),e.d(a,"query",function(){return h}),e.d(a,"del",function(){return p}),e.d(a,"edit",function(){return f}),e.d(a,"create",function(){return P}),e.d(a,"statics",function(){return O}),e.d(a,"refreshBalance",function(){return _}),e.d(a,"merList",function(){return o}),e.d(a,"submit",function(){return b});var t=e("qLMh"),s=e("9og8"),u=e("czNd"),v="0uxR";function h(j){return l.apply(this,arguments)}function l(){return l=Object(s.a)(Object(t.a)().mark(function j(M){return Object(t.a)().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.abrupt("return",Object(u.a)("/v1/api/address/list",{method:"POST",data:M}));case 1:case"end":return y.stop()}},j)})),l.apply(this,arguments)}function p(j){return m.apply(this,arguments)}function m(){return m=Object(s.a)(Object(t.a)().mark(function j(M){return Object(t.a)().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.abrupt("return",Object(u.a)("/v1/api/address/delete",{method:"POST",data:M}));case 1:case"end":return y.stop()}},j)})),m.apply(this,arguments)}function f(j){return n.apply(this,arguments)}function n(){return n=Object(s.a)(Object(t.a)().mark(function j(M){return Object(t.a)().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.abrupt("return",Object(u.a)("/v1/api/address/update",{method:"POST",data:M}));case 1:case"end":return y.stop()}},j)})),n.apply(this,arguments)}function P(j){return c.apply(this,arguments)}function c(){return c=Object(s.a)(Object(t.a)().mark(function j(M){return Object(t.a)().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.abrupt("return",Object(u.a)("/v1/api/address/create",{method:"POST",data:M}));case 1:case"end":return y.stop()}},j)})),c.apply(this,arguments)}function O(){return E.apply(this,arguments)}function E(){return E=Object(s.a)(Object(t.a)().mark(function j(){return Object(t.a)().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.abrupt("return",Object(u.a)("/v1/api/address/balance/statistic",{method:"GET"}));case 1:case"end":return g.stop()}},j)})),E.apply(this,arguments)}function _(j){return i.apply(this,arguments)}function i(){return i=Object(s.a)(Object(t.a)().mark(function j(M){return Object(t.a)().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.abrupt("return",Object(u.a)("/v1/api/address/balance/refresh",{method:"POST",data:M}));case 1:case"end":return y.stop()}},j)})),i.apply(this,arguments)}function o(){return r.apply(this,arguments)}function r(){return r=Object(s.a)(Object(t.a)().mark(function j(){return Object(t.a)().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.abrupt("return",Object(u.a)("/v1/api/merchant/list",{method:"POST",data:{}}));case 1:case"end":return g.stop()}},j)})),r.apply(this,arguments)}function b(j){return d.apply(this,arguments)}function d(){return d=Object(s.a)(Object(t.a)().mark(function j(M){return Object(t.a)().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.abrupt("return",Object(u.a)("/v1/api/systemconfig/update",{method:"POST",data:M}));case 1:case"end":return y.stop()}},j)})),d.apply(this,arguments)}},mAZn:function(D,a){var e="Kfof"},nGyS:function(D,a,e){"use strict";e.r(a),e.d(a,"query",function(){return h});var t=e("qLMh"),s=e("9og8"),u=e("9kvl"),v="/wCr";function h(p){return l.apply(this,arguments)}function l(){return l=Object(s.a)(Object(t.a)().mark(function p(m){return Object(t.a)().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",Object(u.e)("/v1/api/systemlog/list",{method:"POST",data:m}));case 1:case"end":return n.stop()}},p)})),l.apply(this,arguments)}},qv9F:function(D,a,e){"use strict";e.r(a),e.d(a,"query",function(){return p});var t=e("qLMh"),s=e("oBTY"),u=e("k1fw"),v=e("9og8"),h=e("czNd"),l="Nkoj";function p(f){return m.apply(this,arguments)}function m(){return m=Object(v.a)(Object(t.a)().mark(function f(n){var P,c,O=arguments;return Object(t.a)().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return P=O.length>1&&O[1]!==void 0?O[1]:!1,c=Object(u.a)({},n),P&&(c=Object(u.a)(Object(u.a)({},n),{},{range:[].concat(Object(s.a)(n.range),[{renewal_num:{min:"1",max:"99"}}])})),_.abrupt("return",Object(h.a)("/v1/api/order/list",{method:"POST",data:c}));case 4:case"end":return _.stop()}},f)})),m.apply(this,arguments)}},vmhP:function(D,a,e){"use strict";var t=e("k1fw"),s=e("OaEy"),u=e("2fM7"),v=e("tJVT"),h=e("q1tI"),l=e.n(h),p=e("nKUr"),m=e.n(p),f="ku+H",n=[{value:"1",label:"TRC20"},{value:"2",label:"ERC20"}],P=[{value:"1",label:"\u624B\u52A8\u8F6C\u8D26"},{value:"2",label:"API\u8F6C\u8D26"},{value:"3",label:"\u81EA\u52A8\u8F6C\u8D26"}],c=[{value:"1",label:"\u5904\u7406\u4E2D"},{value:"2",label:"\u8F6C\u8D26\u6210\u529F"},{value:"3",label:"\u8F6C\u8D26\u5931\u8D25"}],O=[{value:"1",label:"TRC20"},{value:"2",label:"ERC20"}],E=[{value:"1",label:"\u8BA2\u5355\u6536\u6B3E"},{value:"2",label:"\u63D0\u6B3E"},{value:"3",label:"\u63D0\u6B3E\u624B\u7EED\u8D39"},{value:"4",label:"\u4F59\u989D\u53D8\u52A8"},{value:"5",label:"\u4EE3\u4ED8\u5931\u8D25\u8FD4\u56DE\u91D1\u989D"},{value:"6",label:"\u4EE3\u4ED8\u5931\u8D25\u8FD4\u56DE\u624B\u7EED\u8D39"},{value:"7",label:"\u4E2A\u4EBA\u7801\u6536\u6B3E\u6263\u9664\u624B\u7EED\u8D39"},{value:"8",label:"ERC20\u63D0\u5E01\u624B\u7EED\u8D39"},{value:"9",label:"\u5546\u6237\u8865\u5355"}],_=[{value:"1",label:"\u8BA2\u5355\u4F63\u91D1"},{value:"2",label:"\u8F6C\u8D26"},{value:"3",label:"\u8F6C\u8D26\u624B\u7EED\u8D39"},{value:"4",label:"\u4F59\u989D\u53D8\u52A8"}],i=[{value:"2",label:"\u6B63\u5E38"},{value:"1",label:"\u7981\u7528"}],o=[{value:"1",label:"\u5165\u8D26"},{value:"2",label:"\u51FA\u8D26"}],r=[{value:"1",label:"\u8BA2\u5355"},{value:"2",label:"\u8F6C\u8D26"},{value:"3",label:"\u5145\u503C"}],b=[{value:"0",label:"\u5904\u7406\u4E2D"},{value:"1",label:"\u8BA2\u5355\u5B8C\u6210"},{value:"2",label:"\u8BA2\u5355\u8D85\u65F6"},{value:"3",label:"\u8BA2\u5355\u5931\u8D25"},{value:"4",label:"\u9000\u6B3E\u4E2D"},{value:"5",label:"\u9000\u6B3E\u6210\u529F"}],d=[{value:"unknow",label:"unknow"},{value:"admin",label:"admin"},{value:"merchant",label:"merchant"},{value:"agent",label:"agent"}],j=[{value:"1",label:"\u8BA2\u5355"},{value:"2",label:"\u8BA2\u5355\u624B\u7EED\u8D39"},{value:"3",label:"\u8F6C\u8D26"},{value:"4",label:"\u8F6C\u8D26\u624B\u7EED\u8D39"},{value:"5",label:"\u4EE3\u4ED8"},{value:"6",label:"\u4EE3\u4ED8\u624B\u7EED\u8D39"},{value:"7",label:"\u5145\u503C"},{value:"8",label:"\u4F59\u989D\u53D8\u52A8"}];a.a=function(M){var g=M.allowClear,y=g===void 0?!0:g,L=M.type,I=Object(h.useState)([]),A=Object(v.a)(I,2),B=A[0],U=A[1];return Object(h.useEffect)(function(){switch(L){case 1:U(n);break;case 2:U(P);break;case 3:U(O);break;case 4:U(E);break;case 5:U(c);break;case 6:U(i);break;case 7:U(o);break;case 8:U(_);break;case 9:U(r);break;case 10:U(b);break;case 11:U(j);break;case 12:U(d);break;default:U([])}},[L]),Object(p.jsx)(u.a,Object(t.a)(Object(t.a)({},M),{},{allowClear:y,style:{width:"100%"},options:B,_nk:"".concat(f,"11")}))}},xKIE:function(D,a,e){"use strict";e.r(a),e.d(a,"query",function(){return h}),e.d(a,"del",function(){return p}),e.d(a,"edit",function(){return f}),e.d(a,"create",function(){return P}),e.d(a,"statics",function(){return O}),e.d(a,"agent",function(){return _});var t=e("qLMh"),s=e("9og8"),u=e("czNd"),v="mw8d";function h(o){return l.apply(this,arguments)}function l(){return l=Object(s.a)(Object(t.a)().mark(function o(r){return Object(t.a)().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.abrupt("return",Object(u.a)("/v1/api/merchant/list",{method:"POST",data:r}));case 1:case"end":return d.stop()}},o)})),l.apply(this,arguments)}function p(o){return m.apply(this,arguments)}function m(){return m=Object(s.a)(Object(t.a)().mark(function o(r){return Object(t.a)().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.abrupt("return",Object(u.a)("/v1/api/merchant/delete",{method:"POST",data:r}));case 1:case"end":return d.stop()}},o)})),m.apply(this,arguments)}function f(o){return n.apply(this,arguments)}function n(){return n=Object(s.a)(Object(t.a)().mark(function o(r){return Object(t.a)().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.abrupt("return",Object(u.a)("/v1/api/merchant/update",{method:"POST",data:r}));case 1:case"end":return d.stop()}},o)})),n.apply(this,arguments)}function P(o){return c.apply(this,arguments)}function c(){return c=Object(s.a)(Object(t.a)().mark(function o(r){return Object(t.a)().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.abrupt("return",Object(u.a)("/v1/api/merchant/create",{method:"POST",data:r}));case 1:case"end":return d.stop()}},o)})),c.apply(this,arguments)}function O(){return E.apply(this,arguments)}function E(){return E=Object(s.a)(Object(t.a)().mark(function o(){return Object(t.a)().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.abrupt("return",Object(u.a)("/v1/api/merchant/balance/statistic",{method:"GET"}));case 1:case"end":return b.stop()}},o)})),E.apply(this,arguments)}function _(){return i.apply(this,arguments)}function i(){return i=Object(s.a)(Object(t.a)().mark(function o(){return Object(t.a)().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.abrupt("return",Object(u.a)("/v1/api/agent/list",{method:"POST",data:{}}));case 1:case"end":return b.stop()}},o)})),i.apply(this,arguments)}},xfgq:function(D,a,e){"use strict";e.r(a),e.d(a,"query",function(){return h});var t=e("qLMh"),s=e("9og8"),u=e("czNd"),v="iaO9";function h(p){return l.apply(this,arguments)}function l(){return l=Object(s.a)(Object(t.a)().mark(function p(m){return Object(t.a)().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",Object(u.a)("/v1/api/merchantbill/list",{method:"POST",data:m}));case 1:case"end":return n.stop()}},p)})),l.apply(this,arguments)}}}]);

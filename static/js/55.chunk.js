(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{"/8vi":function(N,i,e){"use strict";var d=e("k1fw"),v=e("iQDF"),P=e("+eQT"),_=e("tL7X"),g=e("nKUr"),f=e.n(g),R="vHUN",r=P.a.RangePicker;i.a=function(h){var u=h.formatText,l=u===void 0?"YYYY-MM-DD":u,o=h.placeholderText,O=o===void 0?[_.a.text("reg_tips69"),_.a.text("reg_tips70")]:o;return Object(g.jsx)(r,Object(d.a)(Object(d.a)({},h),{},{placeholder:O,format:l,_nk:"".concat(R,"11")}))}},"1dju":function(N,i,e){"use strict";e.r(i),e.d(i,"query",function(){return g}),e.d(i,"recharge",function(){return R}),e.d(i,"getBase64Img",function(){return h}),e.d(i,"orderSearch",function(){return l});var d=e("qLMh"),v=e("9og8"),P=e("czNd"),_="X1R1";function g(O){return f.apply(this,arguments)}function f(){return f=Object(v.a)(Object(d.a)().mark(function O(c){return Object(d.a)().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",Object(P.a)("/v1/api/rechargeorder/list",{method:"POST",data:c}));case 1:case"end":return s.stop()}},O)})),f.apply(this,arguments)}function R(O){return r.apply(this,arguments)}function r(){return r=Object(v.a)(Object(d.a)().mark(function O(c){return Object(d.a)().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",Object(P.a)("/v1/api/rechargeorder/create",{method:"POST",data:c}));case 1:case"end":return s.stop()}},O)})),r.apply(this,arguments)}function h(){return u.apply(this,arguments)}function u(){return u=Object(v.a)(Object(d.a)().mark(function O(){return Object(d.a)().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.abrupt("return",Object(P.a)("/v1/api/rechargeorder/address",{method:"GEt"}));case 1:case"end":return D.stop()}},O)})),u.apply(this,arguments)}function l(O){return o.apply(this,arguments)}function o(){return o=Object(v.a)(Object(d.a)().mark(function O(c){return Object(d.a)().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",Object(P.a)("/v1/api/rechargeorder/search",{method:"POST",data:c}));case 1:case"end":return s.stop()}},O)})),o.apply(this,arguments)}},"NK/H":function(N,i,e){"use strict";e.r(i);var d=e("2qtc"),v=e("kLXV"),P=e("14J3"),_=e("BMrR"),g=e("jCWc"),f=e("kPKH"),R=e("+L6B"),r=e("2/Rp"),h=e("k1fw"),u=e("BoS7"),l=e("Sdc0"),o=e("5NDa"),O=e("5rEg"),c=e("miYZ"),D=e("tsqr"),s=e("tJVT"),S=e("Ag2N"),A=e("Opyt"),K=e("XlJJ"),T=e("q1tI"),B=e.n(T),C=e("bPPe"),p=e("tL7X"),x=e("vmhP"),I=e("/8vi"),E=e("nKUr"),L=e.n(E),b="yi2c";i.default=function(){var y=Object(T.useRef)(),w=Object(T.useRef)(),se=Object(T.useState)(!1),G=Object(s.a)(se,2),F=G[0],Q=G[1],X=Object(T.useState)(!1),H=Object(s.a)(X,2),$=H[0],J=H[1],V=function(j){var U="";return j===1?U="TRC20":j===2?U="ERC20":U="PYUSD",U},ue=function(j,U){A.a.update({id:U.id,status:j?2:1}).then(function(z){var W;console.log(z,"res"),D.default.success(p.a.text("reg_tips83")),(W=y.current)===null||W===void 0||W.reload()})},k=[{title:p.a.text("order02"),dataIndex:"id",align:"center",order:2,hideInSearch:!0,ellipsis:!0,width:100},{title:p.a.text("withdraw34"),dataIndex:"address",align:"center",width:200,ellipsis:!0,renderFormItem:function(){return Object(E.jsx)(O.a,{placeholder:p.a.text("reg_tip73"),_nk:"".concat(b,"11")})}},{title:p.a.text("reg_tip69"),dataIndex:"chainType",align:"center",width:"100px",renderText:function(j){return V(j)},renderFormItem:function(){return Object(E.jsx)(x.a,{placeholder:p.a.text("reg_tips68"),type:3,_nk:"".concat(b,"21")})}},{title:p.a.text("withdraw36"),dataIndex:"img",align:"center",hideInSearch:!0,width:"100px",renderText:function(j){return Object(E.jsx)("img",{onClick:function(){J(j)},style:{width:"80px",height:"80px"},src:"data:image/jpg;base64,".concat(j),alt:"qr",_nk:"".concat(b,"31")})}},{title:p.a.text("order16"),dataIndex:"status",align:"center",width:"100px",renderFormItem:function(){return Object(E.jsx)(x.a,{placeholder:p.a.text("reg_tips75"),type:6,_nk:"".concat(b,"22")})},renderText:function(j,U){return Object(E.jsx)(l.a,{checkedChildren:p.a.text("withdraw37"),unCheckedChildren:p.a.text("withdraw38"),defaultChecked:j===2,onChange:function(W){return ue(W,U)},_nk:"".concat(b,"41")})}},{title:p.a.text("withdraw39"),dataIndex:"createdAt",align:"center",width:200,valueType:"dateTime",ellipsis:!0,renderFormItem:function(){return Object(E.jsx)(I.a,{_nk:"".concat(b,"51")})}},{title:p.a.text("withdraw40"),dataIndex:"updateAt",align:"center",valueType:"dateTime",width:200,ellipsis:!0,renderFormItem:function(){return Object(E.jsx)(I.a,{_nk:"".concat(b,"52")})}}];function Y(){}return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(_.a,{_nk:"".concat(b,"61"),children:Object(E.jsx)(f.a,{md:24,_nk:"".concat(b,"71"),children:Object(E.jsx)(S.default.Modal,Object(h.a)(Object(h.a)({},A.a),{},{rowKey:"id",columns:k,tableRef:y,formRef:w,handlerData:function(j,U){return U==="create"?Object(h.a)(Object(h.a)({},j),{},{pass:K.a.encrypt(j.pass)}):j},operateBar:[{type:"del",permission:""}],operateBarProps:{width:50},toolBarActions:[Object(E.jsx)(r.a,{onClick:function(){return Q(!0)},type:"primary",_nk:"".concat(b,"91"),children:p.a.text("withdraw33")})],tableProps:{},formProps:{titleSuffix:"user"},onStatusChange:Y,_nk:"".concat(b,"81")}))})}),Object(E.jsx)(C.default,{tableRef:y,visible:F,onVisibleChange:Q,_nk:"".concat(b,"a1")}),Object(E.jsx)(v.a,{visible:!!$,onOk:function(){return J(!1)},onCancel:function(){return J(!1)},footer:null,_nk:"".concat(b,"b1"),children:Object(E.jsx)("div",{className:"flex-c-c",_nk:"".concat(b,"c1"),children:Object(E.jsx)("img",{src:"data:image/jpg;base64,".concat($),alt:"",_nk:"".concat(b,"32")})})})]})}},Opyt:function(N,i,e){"use strict";e.d(i,"e",function(){return d}),e.d(i,"h",function(){return f}),e.d(i,"g",function(){return R}),e.d(i,"c",function(){return v}),e.d(i,"a",function(){return P}),e.d(i,"d",function(){return _}),e.d(i,"f",function(){return g}),e.d(i,"b",function(){return z});var d={};e.r(d),e.d(d,"query",function(){return O}),e.d(d,"create",function(){return D}),e.d(d,"edit",function(){return S}),e.d(d,"del",function(){return K}),e.d(d,"getScope",function(){return B}),e.d(d,"putScope",function(){return C}),e.d(d,"changePassword",function(){return p}),e.d(d,"updateStatus",function(){return x}),e.d(d,"replaceOrder",function(){return I}),e.d(d,"updateAvatar",function(){return E});var v={};e.r(v),e.d(v,"statistic",function(){return y});var P={};e.r(P),e.d(P,"query",function(){return G}),e.d(P,"update",function(){return Q}),e.d(P,"del",function(){return H}),e.d(P,"create",function(){return J});var _={};e.r(_),e.d(_,"query",function(){return k});var g={};e.r(g),e.d(g,"query",function(){return j});var f={};e.r(f),e.d(f,"query",function(){return le}),e.d(f,"create",function(){return de}),e.d(f,"edit",function(){return ce}),e.d(f,"del",function(){return oe}),e.d(f,"getScope",function(){return ie}),e.d(f,"putScope",function(){return me}),e.d(f,"changePassword",function(){return _e}),e.d(f,"updateStatus",function(){return fe}),e.d(f,"replaceOrder",function(){return he}),e.d(f,"updateAvatar",function(){return Oe});var R={};e.r(R),e.d(R,"createOrder",function(){return pe}),e.d(R,"queryOrder",function(){return Ee});var r=e("qLMh"),h=e("k1fw"),u=e("9og8"),l=e("czNd"),o="1X1R";function O(a){return c.apply(this,arguments)}function c(){return c=Object(u.a)(Object(r.a)().mark(function a(n){return Object(r.a)().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(l.a)("/v1/api/order/list",{method:"POST",data:n}));case 1:case"end":return t.stop()}},a)})),c.apply(this,arguments)}function D(a){return s.apply(this,arguments)}function s(){return s=Object(u.a)(Object(r.a)().mark(function a(n){return Object(r.a)().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(l.a)("system/user",{method:"POST",data:n}));case 1:case"end":return t.stop()}},a)})),s.apply(this,arguments)}function S(a){return A.apply(this,arguments)}function A(){return A=Object(u.a)(Object(r.a)().mark(function a(n){return Object(r.a)().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(l.a)("system/user",{method:"PUT",data:n}));case 1:case"end":return t.stop()}},a)})),A.apply(this,arguments)}function K(a){return T.apply(this,arguments)}function T(){return T=Object(u.a)(Object(r.a)().mark(function a(n){return Object(r.a)().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(l.a)("system/user/".concat(n.userId),{method:"DELETE"}));case 1:case"end":return t.stop()}},a)})),T.apply(this,arguments)}function B(a){return Object(l.a)("system/user/scope/".concat(a.userId),{method:"get"})}function C(a){return Object(l.a)("system/user/scope/".concat(a.userId),{method:"put",data:a})}function p(a){return Object(l.a)("system/user/pass/".concat(a.userId),{method:"put",data:Object(h.a)(Object(h.a)({},a),{},{confirmPass:a.pass})})}function x(a,n){return Object(l.a)("system/user/status",{method:"put",params:{status:n},data:a})}function I(a){return Object(l.a)("/v1/api/order/renewal",{method:"POST",data:a})}function E(a,n,m){var t=new FormData;return t.append("file",n,m.name),t.append("userId","".concat(a.userId)),Object(l.a)("/system/user/avatar",{method:"POST",body:t})}var L=e("9kvl"),b="rMl9";function y(){return w.apply(this,arguments)}function w(){return w=Object(u.a)(Object(r.a)().mark(function a(){return Object(r.a)().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.abrupt("return",Object(L.e)("/v1/api/merchant/statistic",{method:"GET"}));case 1:case"end":return m.stop()}},a)})),w.apply(this,arguments)}var se="isKd";function G(a){return F.apply(this,arguments)}function F(){return F=Object(u.a)(Object(r.a)().mark(function a(n){return Object(r.a)().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(L.e)("/v1/api/address/list",{method:"POST",data:n}));case 1:case"end":return t.stop()}},a)})),F.apply(this,arguments)}function Q(a){return X.apply(this,arguments)}function X(){return X=Object(u.a)(Object(r.a)().mark(function a(n){return Object(r.a)().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(L.e)("/v1/api/address/update",{method:"POST",data:n}));case 1:case"end":return t.stop()}},a)})),X.apply(this,arguments)}function H(a){return $.apply(this,arguments)}function $(){return $=Object(u.a)(Object(r.a)().mark(function a(n){return Object(r.a)().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(L.e)("/v1/api/address/delete",{method:"POST",data:n}));case 1:case"end":return t.stop()}},a)})),$.apply(this,arguments)}function J(a){return V.apply(this,arguments)}function V(){return V=Object(u.a)(Object(r.a)().mark(function a(n){return Object(r.a)().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(L.e)("/v1/api/address/create",{method:"POST",data:n}));case 1:case"end":return t.stop()}},a)})),V.apply(this,arguments)}var ue="7PFW";function k(a){return Y.apply(this,arguments)}function Y(){return Y=Object(u.a)(Object(r.a)().mark(function a(n){return Object(r.a)().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(L.e)("/v1/api/merchantbill/list",{method:"POST",data:n}));case 1:case"end":return t.stop()}},a)})),Y.apply(this,arguments)}var M="004Q";function j(a){return U.apply(this,arguments)}function U(){return U=Object(u.a)(Object(r.a)().mark(function a(n){return Object(r.a)().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(l.a)("/v1/api/withdraw/list",{method:"POST",data:n}));case 1:case"end":return t.stop()}},a)})),U.apply(this,arguments)}var z=e("1dju"),W=e("oBTY"),ve="lhz8";function le(a){return q.apply(this,arguments)}function q(){return q=Object(u.a)(Object(r.a)().mark(function a(n){var m;return Object(r.a)().wrap(function(Z){for(;;)switch(Z.prev=Z.next){case 0:return m=Object(h.a)(Object(h.a)({},n),{},{range:[].concat(Object(W.a)(n.range),[{renewal_num:{min:"1",max:"99"}}])}),Z.abrupt("return",Object(l.a)("/v1/api/order/list",{method:"POST",data:m}));case 2:case"end":return Z.stop()}},a)})),q.apply(this,arguments)}function de(a){return ee.apply(this,arguments)}function ee(){return ee=Object(u.a)(Object(r.a)().mark(function a(n){return Object(r.a)().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(l.a)("system/user",{method:"POST",data:n}));case 1:case"end":return t.stop()}},a)})),ee.apply(this,arguments)}function ce(a){return te.apply(this,arguments)}function te(){return te=Object(u.a)(Object(r.a)().mark(function a(n){return Object(r.a)().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(l.a)("system/user",{method:"PUT",data:n}));case 1:case"end":return t.stop()}},a)})),te.apply(this,arguments)}function oe(a){return ae.apply(this,arguments)}function ae(){return ae=Object(u.a)(Object(r.a)().mark(function a(n){return Object(r.a)().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(l.a)("system/user/".concat(n.userId),{method:"DELETE"}));case 1:case"end":return t.stop()}},a)})),ae.apply(this,arguments)}function ie(a){return Object(l.a)("system/user/scope/".concat(a.userId),{method:"get"})}function me(a){return Object(l.a)("system/user/scope/".concat(a.userId),{method:"put",data:a})}function _e(a){return Object(l.a)("system/user/pass/".concat(a.userId),{method:"put",data:Object(h.a)(Object(h.a)({},a),{},{confirmPass:a.pass})})}function fe(a,n){return Object(l.a)("system/user/status",{method:"put",params:{status:n},data:a})}function he(a){return Object(l.a)("/v1/api/order/renewal",{method:"POST",data:a})}function Oe(a,n,m){var t=new FormData;return t.append("file",n,m.name),t.append("userId","".concat(a.userId)),Object(l.a)("/system/user/avatar",{method:"POST",body:t})}var Pe="L90q";function pe(a){return re.apply(this,arguments)}function re(){return re=Object(u.a)(Object(r.a)().mark(function a(n){return Object(r.a)().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(l.a)("/v1/api/open/order/create",{method:"POST",data:n}));case 1:case"end":return t.stop()}},a)})),re.apply(this,arguments)}function Ee(a){return ne.apply(this,arguments)}function ne(){return ne=Object(u.a)(Object(r.a)().mark(function a(n){return Object(r.a)().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(l.a)("/v1/api/open/order/query",{method:"POST",data:n}));case 1:case"end":return t.stop()}},a)})),ne.apply(this,arguments)}var ye="bgb1"},XlJJ:function(N,i,e){"use strict";e.d(i,"a",function(){return h});var d=e("fWQN"),v=e("mtLc"),P=e("NFKh"),_=e.n(P),g="0amg",f=function(){function u(){Object(d.a)(this,u)}return Object(v.a)(u,[{key:"encrypt",value:function(o){var O=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"XwKsGlMcdPMEhR1B",c=_.a.enc.Utf8.parse(O),D=_.a.enc.Utf8.parse(o),s=_.a.AES.encrypt(D,c,{mode:_.a.mode.ECB,padding:_.a.pad.Pkcs7});return s.toString()}}]),u}(),R=function(){function u(){Object(d.a)(this,u),this.securityKey="==BallCat-Auth=="}return Object(v.a)(u,[{key:"encrypt",value:function(o){var O=_.a.enc.Utf8.parse(this.securityKey);return _.a.AES.encrypt(o,O,{iv:O,mode:_.a.mode.CBC,padding:_.a.pad.Pkcs7}).toString()}}]),u}(),r=new f,h=new R},bPPe:function(N,i,e){"use strict";e.r(i);var d=e("7Kak"),v=e("9yH6"),P=e("y8nQ"),_=e("Vl3Y"),g=e("5NDa"),f=e("5rEg"),R=e("miYZ"),r=e("tsqr"),h=e("q1tI"),u=e.n(h),l=e("rmhi"),o=e("tL7X"),O=e("Opyt"),c=e("nKUr"),D=e.n(c),s="w4VX";i.default=function(S){var A=S.visible,K=S.onVisibleChange,T=S.tableRef,B=Object(h.useRef)();return Object(h.useEffect)(function(){var C;(C=B.current)===null||C===void 0||C.resetFields()},[A]),Object(c.jsxs)(l.a,{title:o.a.text("withdraw50"),visible:A,formRef:B,onVisibleChange:K,onFinish:function(p){return O.a.create({address:p.address,chainType:p.type,confirmPassword:p.confirmPassword}).then(function(){var x,I;return r.default.success(o.a.text("reg_tips82")),(x=B.current)===null||x===void 0||x.resetFields(),(I=T.current)===null||I===void 0||I.reload(),!0})},_nk:"".concat(s,"11"),children:[Object(c.jsx)(_.a.Item,{name:"address",label:o.a.text("withdraw02"),rules:[{required:!0,message:o.a.text("reg_tips3")}],_nk:"".concat(s,"21"),children:Object(c.jsx)(f.a,{placeholder:o.a.text("reg_tip73"),_nk:"".concat(s,"31")})}),Object(c.jsx)("div",{className:"tips-danger",_nk:"".concat(s,"41"),children:o.a.text("reg_tips2")}),Object(c.jsx)(_.a.Item,{name:"type",label:o.a.text("reg_tips4"),rules:[{required:!0,message:o.a.text("reg_tips68")}],_nk:"".concat(s,"22"),children:Object(c.jsxs)(v.a.Group,{_nk:"".concat(s,"23"),children:[Object(c.jsx)("div",{style:{marginBottom:"8px"},_nk:"".concat(s,"42"),children:Object(c.jsx)(v.a,{value:1,_nk:"".concat(s,"51"),children:o.a.text("reg_tips89")})}),Object(c.jsx)("div",{style:{marginBottom:"8px"},_nk:"".concat(s,"43"),children:Object(c.jsx)(v.a,{value:2,_nk:"".concat(s,"52"),children:o.a.text("reg_tips90")})})]})}),Object(c.jsx)(_.a.Item,{name:"confirmPassword",label:o.a.text("reg_tip48"),rules:[{required:!0,message:o.a.text("reg_tip51")}],_nk:"".concat(s,"24"),children:Object(c.jsx)(f.a.Password,{placeholder:o.a.text("reg_tip51"),_nk:"".concat(s,"25")})})]})}},vmhP:function(N,i,e){"use strict";var d=e("k1fw"),v=e("OaEy"),P=e("2fM7"),_=e("tJVT"),g=e("q1tI"),f=e.n(g),R=e("nKUr"),r=e.n(R),h="ku+H",u=[{value:"1",label:"TRC20"},{value:"2",label:"ERC20"}],l=[{value:"1",label:"\u624B\u52A8\u8F6C\u8D26"},{value:"2",label:"API\u8F6C\u8D26"},{value:"3",label:"\u81EA\u52A8\u8F6C\u8D26"}],o=[{value:"1",label:"\u5904\u7406\u4E2D"},{value:"2",label:"\u8F6C\u8D26\u6210\u529F"},{value:"3",label:"\u8F6C\u8D26\u5931\u8D25"}],O=[{value:"1",label:"TRC20"},{value:"2",label:"ERC20"}],c=[{value:"1",label:"\u8BA2\u5355\u6536\u6B3E"},{value:"2",label:"\u63D0\u6B3E"},{value:"3",label:"\u63D0\u6B3E\u624B\u7EED\u8D39"},{value:"4",label:"\u4F59\u989D\u53D8\u52A8"},{value:"5",label:"\u4EE3\u4ED8\u5931\u8D25\u8FD4\u56DE\u91D1\u989D"},{value:"6",label:"\u4EE3\u4ED8\u5931\u8D25\u8FD4\u56DE\u624B\u7EED\u8D39"},{value:"7",label:"\u4E2A\u4EBA\u7801\u6536\u6B3E\u6263\u9664\u624B\u7EED\u8D39"},{value:"8",label:"ERC20\u63D0\u5E01\u624B\u7EED\u8D39"},{value:"9",label:"\u5546\u6237\u8865\u5355"}],D=[{value:"1",label:"\u8BA2\u5355\u4F63\u91D1"},{value:"2",label:"\u8F6C\u8D26"},{value:"3",label:"\u8F6C\u8D26\u624B\u7EED\u8D39"},{value:"4",label:"\u4F59\u989D\u53D8\u52A8"}],s=[{value:"2",label:"\u6B63\u5E38"},{value:"1",label:"\u7981\u7528"}],S=[{value:"1",label:"\u5165\u8D26"},{value:"2",label:"\u51FA\u8D26"}],A=[{value:"1",label:"\u8BA2\u5355"},{value:"2",label:"\u8F6C\u8D26"},{value:"3",label:"\u5145\u503C"}],K=[{value:"0",label:"\u5904\u7406\u4E2D"},{value:"1",label:"\u8BA2\u5355\u5B8C\u6210"},{value:"2",label:"\u8BA2\u5355\u8D85\u65F6"},{value:"3",label:"\u8BA2\u5355\u5931\u8D25"},{value:"4",label:"\u9000\u6B3E\u4E2D"},{value:"5",label:"\u9000\u6B3E\u6210\u529F"}],T=[{value:"unknow",label:"unknow"},{value:"admin",label:"admin"},{value:"merchant",label:"merchant"},{value:"agent",label:"agent"}],B=[{value:"1",label:"\u8BA2\u5355"},{value:"2",label:"\u8BA2\u5355\u624B\u7EED\u8D39"},{value:"3",label:"\u8F6C\u8D26"},{value:"4",label:"\u8F6C\u8D26\u624B\u7EED\u8D39"},{value:"5",label:"\u4EE3\u4ED8"},{value:"6",label:"\u4EE3\u4ED8\u624B\u7EED\u8D39"},{value:"7",label:"\u5145\u503C"},{value:"8",label:"\u4F59\u989D\u53D8\u52A8"}];i.a=function(C){var p=C.allowClear,x=p===void 0?!0:p,I=C.type,E=Object(g.useState)([]),L=Object(_.a)(E,2),b=L[0],y=L[1];return Object(g.useEffect)(function(){switch(I){case 1:y(u);break;case 2:y(l);break;case 3:y(O);break;case 4:y(c);break;case 5:y(o);break;case 6:y(s);break;case 7:y(S);break;case 8:y(D);break;case 9:y(A);break;case 10:y(K);break;case 11:y(B);break;case 12:y(T);break;default:y([])}},[I]),Object(R.jsx)(P.a,Object(d.a)(Object(d.a)({},C),{},{allowClear:x,style:{width:"100%"},options:b,_nk:"".concat(h,"11")}))}}}]);

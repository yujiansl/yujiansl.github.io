(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{"/8vi":function(J,i,e){"use strict";var d=e("k1fw"),v=e("iQDF"),b=e("+eQT"),h=e("tL7X"),g=e("nKUr"),p=e.n(g),U="vHUN",r=b.a.RangePicker;i.a=function(m){var l=m.formatText,u=l===void 0?"YYYY-MM-DD":l,o=m.placeholderText,_=o===void 0?[h.a.text("reg_tips69"),h.a.text("reg_tips70")]:o;return Object(g.jsx)(r,Object(d.a)(Object(d.a)({},m),{},{placeholder:_,format:u,_nk:"".concat(U,"11")}))}},"1dju":function(J,i,e){"use strict";e.r(i),e.d(i,"query",function(){return g}),e.d(i,"recharge",function(){return U}),e.d(i,"getBase64Img",function(){return m}),e.d(i,"orderSearch",function(){return u});var d=e("qLMh"),v=e("9og8"),b=e("czNd"),h="X1R1";function g(_){return p.apply(this,arguments)}function p(){return p=Object(v.a)(Object(d.a)().mark(function _(c){return Object(d.a)().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",Object(b.a)("/v1/api/rechargeorder/list",{method:"POST",data:c}));case 1:case"end":return s.stop()}},_)})),p.apply(this,arguments)}function U(_){return r.apply(this,arguments)}function r(){return r=Object(v.a)(Object(d.a)().mark(function _(c){return Object(d.a)().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",Object(b.a)("/v1/api/rechargeorder/create",{method:"POST",data:c}));case 1:case"end":return s.stop()}},_)})),r.apply(this,arguments)}function m(){return l.apply(this,arguments)}function l(){return l=Object(v.a)(Object(d.a)().mark(function _(){return Object(d.a)().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return j.abrupt("return",Object(b.a)("/v1/api/rechargeorder/address",{method:"GEt"}));case 1:case"end":return j.stop()}},_)})),l.apply(this,arguments)}function u(_){return o.apply(this,arguments)}function o(){return o=Object(v.a)(Object(d.a)().mark(function _(c){return Object(d.a)().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",Object(b.a)("/v1/api/rechargeorder/search",{method:"POST",data:c}));case 1:case"end":return s.stop()}},_)})),o.apply(this,arguments)}},"NK/H":function(J,i,e){"use strict";e.r(i);var d=e("2qtc"),v=e("kLXV"),b=e("14J3"),h=e("BMrR"),g=e("jCWc"),p=e("kPKH"),U=e("+L6B"),r=e("2/Rp"),m=e("k1fw"),l=e("BoS7"),u=e("Sdc0"),o=e("5NDa"),_=e("5rEg"),c=e("miYZ"),j=e("tsqr"),s=e("tJVT"),S=e("Ag2N"),C=e("Opyt"),W=e("XlJJ"),T=e("q1tI"),B=e.n(T),I=e("bPPe"),E=e("tL7X"),L=e("vmhP"),A=e("/8vi"),O=e("nKUr"),x=e.n(O),P="yi2c";i.default=function(){var N=Object(T.useRef)(),K=Object(T.useRef)(),Q=Object(T.useState)(!1),w=Object(s.a)(Q,2),$=w[0],y=w[1],V=Object(T.useState)(!1),z=Object(s.a)(V,2),X=z[0],Y=z[1],G=function(D){var R="";return D===1?R="TRC20":D===2?R="ERC20":R="PYUSD",R},ue=function(D,R){C.a.update({id:R.id,status:D?2:1}).then(function(q){var F;j.default.success(E.a.text("reg_tips83")),(F=N.current)===null||F===void 0||F.reload()})},k=[{title:E.a.text("order02"),dataIndex:"id",align:"center",order:2,hideInSearch:!0,ellipsis:!0,width:100},{title:E.a.text("withdraw34"),dataIndex:"address",align:"center",width:200,ellipsis:!0,renderFormItem:function(){return Object(O.jsx)(_.a,{placeholder:E.a.text("reg_tip73"),_nk:"".concat(P,"11")})}},{title:E.a.text("reg_tip69"),dataIndex:"chainType",align:"center",width:"100px",renderText:function(D){return G(D)},renderFormItem:function(){return Object(O.jsx)(L.a,{placeholder:E.a.text("reg_tips68"),type:3,_nk:"".concat(P,"21")})}},{title:E.a.text("withdraw36"),dataIndex:"img",align:"center",hideInSearch:!0,width:"100px",renderText:function(D){return Object(O.jsx)("img",{onClick:function(){Y(D)},style:{width:"80px",height:"80px"},src:"data:image/jpg;base64,".concat(D),alt:"qr",_nk:"".concat(P,"31")})}},{title:E.a.text("order16"),dataIndex:"status",align:"center",width:"100px",renderFormItem:function(){return Object(O.jsx)(L.a,{placeholder:E.a.text("reg_tips75"),type:6,_nk:"".concat(P,"22")})},renderText:function(D,R){return Object(O.jsx)(u.a,{checkedChildren:E.a.text("withdraw37"),unCheckedChildren:E.a.text("withdraw38"),defaultChecked:D===2,onChange:function(F){return ue(F,R)},_nk:"".concat(P,"41")})}},{title:E.a.text("withdraw39"),dataIndex:"createdAt",align:"center",width:200,valueType:"dateTime",ellipsis:!0,renderFormItem:function(){return Object(O.jsx)(A.a,{_nk:"".concat(P,"51")})}},{title:E.a.text("withdraw40"),dataIndex:"updateAt",align:"center",valueType:"dateTime",width:200,ellipsis:!0,renderFormItem:function(){return Object(O.jsx)(A.a,{_nk:"".concat(P,"52")})}}];function H(){}return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(h.a,{_nk:"".concat(P,"61"),children:Object(O.jsx)(p.a,{md:24,_nk:"".concat(P,"71"),children:Object(O.jsx)(S.default.Modal,Object(m.a)(Object(m.a)({},C.a),{},{rowKey:"id",columns:k,tableRef:N,formRef:K,handlerData:function(D,R){return R==="create"?Object(m.a)(Object(m.a)({},D),{},{pass:W.a.encrypt(D.pass)}):D},operateBar:[{type:"del",permission:""}],operateBarProps:{width:50},toolBarActions:[Object(O.jsx)(r.a,{onClick:function(){return y(!0)},type:"primary",_nk:"".concat(P,"91"),children:E.a.text("withdraw33")})],tableProps:{},formProps:{titleSuffix:""},onStatusChange:H,_nk:"".concat(P,"81")}))})}),Object(O.jsx)(I.default,{tableRef:N,visible:$,onVisibleChange:y,_nk:"".concat(P,"a1")}),Object(O.jsx)(v.a,{visible:!!X,onOk:function(){return Y(!1)},onCancel:function(){return Y(!1)},footer:null,_nk:"".concat(P,"b1"),children:Object(O.jsx)("div",{className:"flex-c-c",_nk:"".concat(P,"c1"),children:Object(O.jsx)("img",{src:"data:image/jpg;base64,".concat(X),alt:"",_nk:"".concat(P,"32")})})})]})}},Opyt:function(J,i,e){"use strict";e.d(i,"e",function(){return d}),e.d(i,"h",function(){return p}),e.d(i,"g",function(){return U}),e.d(i,"c",function(){return v}),e.d(i,"a",function(){return b}),e.d(i,"d",function(){return h}),e.d(i,"f",function(){return g}),e.d(i,"b",function(){return q});var d={};e.r(d),e.d(d,"query",function(){return _}),e.d(d,"create",function(){return j}),e.d(d,"edit",function(){return S}),e.d(d,"del",function(){return W}),e.d(d,"getScope",function(){return B}),e.d(d,"putScope",function(){return I}),e.d(d,"changePassword",function(){return E}),e.d(d,"updateStatus",function(){return L}),e.d(d,"replaceOrder",function(){return A}),e.d(d,"updateAvatar",function(){return O});var v={};e.r(v),e.d(v,"statistic",function(){return N});var b={};e.r(b),e.d(b,"query",function(){return w}),e.d(b,"update",function(){return y}),e.d(b,"del",function(){return z}),e.d(b,"create",function(){return Y});var h={};e.r(h),e.d(h,"query",function(){return k});var g={};e.r(g),e.d(g,"query",function(){return D});var p={};e.r(p),e.d(p,"query",function(){return le}),e.d(p,"create",function(){return de}),e.d(p,"edit",function(){return ce}),e.d(p,"del",function(){return oe}),e.d(p,"getScope",function(){return ie}),e.d(p,"putScope",function(){return me}),e.d(p,"changePassword",function(){return _e}),e.d(p,"updateStatus",function(){return fe}),e.d(p,"replaceOrder",function(){return he}),e.d(p,"updateAvatar",function(){return pe});var U={};e.r(U),e.d(U,"createOrder",function(){return Oe}),e.d(U,"queryOrder",function(){return Ee});var r=e("qLMh"),m=e("k1fw"),l=e("9og8"),u=e("czNd"),o="1X1R";function _(a){return c.apply(this,arguments)}function c(){return c=Object(l.a)(Object(r.a)().mark(function a(n){return Object(r.a)().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(u.a)("/v1/api/order/list",{method:"POST",data:n}));case 1:case"end":return t.stop()}},a)})),c.apply(this,arguments)}function j(a){return s.apply(this,arguments)}function s(){return s=Object(l.a)(Object(r.a)().mark(function a(n){return Object(r.a)().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(u.a)("system/user",{method:"POST",data:n}));case 1:case"end":return t.stop()}},a)})),s.apply(this,arguments)}function S(a){return C.apply(this,arguments)}function C(){return C=Object(l.a)(Object(r.a)().mark(function a(n){return Object(r.a)().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(u.a)("system/user",{method:"PUT",data:n}));case 1:case"end":return t.stop()}},a)})),C.apply(this,arguments)}function W(a){return T.apply(this,arguments)}function T(){return T=Object(l.a)(Object(r.a)().mark(function a(n){return Object(r.a)().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(u.a)("system/user/".concat(n.userId),{method:"DELETE"}));case 1:case"end":return t.stop()}},a)})),T.apply(this,arguments)}function B(a){return Object(u.a)("system/user/scope/".concat(a.userId),{method:"get"})}function I(a){return Object(u.a)("system/user/scope/".concat(a.userId),{method:"put",data:a})}function E(a){return Object(u.a)("system/user/pass/".concat(a.userId),{method:"put",data:Object(m.a)(Object(m.a)({},a),{},{confirmPass:a.pass})})}function L(a,n){return Object(u.a)("system/user/status",{method:"put",params:{status:n},data:a})}function A(a){return Object(u.a)("/v1/api/order/renewal",{method:"POST",data:a})}function O(a,n,f){var t=new FormData;return t.append("file",n,f.name),t.append("userId","".concat(a.userId)),Object(u.a)("/system/user/avatar",{method:"POST",body:t})}var x=e("9kvl"),P="rMl9";function N(){return K.apply(this,arguments)}function K(){return K=Object(l.a)(Object(r.a)().mark(function a(){return Object(r.a)().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.abrupt("return",Object(x.e)("/v1/api/merchant/statistic",{method:"GET"}));case 1:case"end":return f.stop()}},a)})),K.apply(this,arguments)}var Q="isKd";function w(a){return $.apply(this,arguments)}function $(){return $=Object(l.a)(Object(r.a)().mark(function a(n){return Object(r.a)().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(x.e)("/v1/api/address/list",{method:"POST",data:n}));case 1:case"end":return t.stop()}},a)})),$.apply(this,arguments)}function y(a){return V.apply(this,arguments)}function V(){return V=Object(l.a)(Object(r.a)().mark(function a(n){return Object(r.a)().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(x.e)("/v1/api/address/update",{method:"POST",data:n}));case 1:case"end":return t.stop()}},a)})),V.apply(this,arguments)}function z(a){return X.apply(this,arguments)}function X(){return X=Object(l.a)(Object(r.a)().mark(function a(n){return Object(r.a)().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(x.e)("/v1/api/address/delete",{method:"POST",data:n}));case 1:case"end":return t.stop()}},a)})),X.apply(this,arguments)}function Y(a){return G.apply(this,arguments)}function G(){return G=Object(l.a)(Object(r.a)().mark(function a(n){return Object(r.a)().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(x.e)("/v1/api/address/create",{method:"POST",data:n}));case 1:case"end":return t.stop()}},a)})),G.apply(this,arguments)}var ue="7PFW";function k(a){return H.apply(this,arguments)}function H(){return H=Object(l.a)(Object(r.a)().mark(function a(n){return Object(r.a)().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(x.e)("/v1/api/merchantbill/list",{method:"POST",data:n}));case 1:case"end":return t.stop()}},a)})),H.apply(this,arguments)}var M="004Q";function D(a){return R.apply(this,arguments)}function R(){return R=Object(l.a)(Object(r.a)().mark(function a(n){return Object(r.a)().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(u.a)("/v1/api/withdraw/list",{method:"POST",data:n}));case 1:case"end":return t.stop()}},a)})),R.apply(this,arguments)}var q=e("1dju"),F=e("oBTY"),ve="lhz8";function le(a){return ee.apply(this,arguments)}function ee(){return ee=Object(l.a)(Object(r.a)().mark(function a(n){var f;return Object(r.a)().wrap(function(Z){for(;;)switch(Z.prev=Z.next){case 0:return f=Object(m.a)(Object(m.a)({},n),{},{range:[].concat(Object(F.a)(n.range),[{renewal_num:{min:"1",max:"99"}}])}),Z.abrupt("return",Object(u.a)("/v1/api/order/list",{method:"POST",data:f}));case 2:case"end":return Z.stop()}},a)})),ee.apply(this,arguments)}function de(a){return te.apply(this,arguments)}function te(){return te=Object(l.a)(Object(r.a)().mark(function a(n){return Object(r.a)().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(u.a)("system/user",{method:"POST",data:n}));case 1:case"end":return t.stop()}},a)})),te.apply(this,arguments)}function ce(a){return ae.apply(this,arguments)}function ae(){return ae=Object(l.a)(Object(r.a)().mark(function a(n){return Object(r.a)().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(u.a)("system/user",{method:"PUT",data:n}));case 1:case"end":return t.stop()}},a)})),ae.apply(this,arguments)}function oe(a){return re.apply(this,arguments)}function re(){return re=Object(l.a)(Object(r.a)().mark(function a(n){return Object(r.a)().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(u.a)("system/user/".concat(n.userId),{method:"DELETE"}));case 1:case"end":return t.stop()}},a)})),re.apply(this,arguments)}function ie(a){return Object(u.a)("system/user/scope/".concat(a.userId),{method:"get"})}function me(a){return Object(u.a)("system/user/scope/".concat(a.userId),{method:"put",data:a})}function _e(a){return Object(u.a)("system/user/pass/".concat(a.userId),{method:"put",data:Object(m.a)(Object(m.a)({},a),{},{confirmPass:a.pass})})}function fe(a,n){return Object(u.a)("system/user/status",{method:"put",params:{status:n},data:a})}function he(a){return Object(u.a)("/v1/api/order/renewal",{method:"POST",data:a})}function pe(a,n,f){var t=new FormData;return t.append("file",n,f.name),t.append("userId","".concat(a.userId)),Object(u.a)("/system/user/avatar",{method:"POST",body:t})}var be="L90q";function Oe(a){return ne.apply(this,arguments)}function ne(){return ne=Object(l.a)(Object(r.a)().mark(function a(n){return Object(r.a)().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(u.a)("/v1/api/open/order/create",{method:"POST",data:n}));case 1:case"end":return t.stop()}},a)})),ne.apply(this,arguments)}function Ee(a){return se.apply(this,arguments)}function se(){return se=Object(l.a)(Object(r.a)().mark(function a(n){return Object(r.a)().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(u.a)("/v1/api/open/order/query",{method:"POST",data:n}));case 1:case"end":return t.stop()}},a)})),se.apply(this,arguments)}var Pe="bgb1"},XlJJ:function(J,i,e){"use strict";e.d(i,"a",function(){return m});var d=e("fWQN"),v=e("mtLc"),b=e("NFKh"),h=e.n(b),g="0amg",p=function(){function l(){Object(d.a)(this,l)}return Object(v.a)(l,[{key:"encrypt",value:function(o){var _=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"XwKsGlMcdPMEhR1B",c=h.a.enc.Utf8.parse(_),j=h.a.enc.Utf8.parse(o),s=h.a.AES.encrypt(j,c,{mode:h.a.mode.ECB,padding:h.a.pad.Pkcs7});return s.toString()}}]),l}(),U=function(){function l(){Object(d.a)(this,l),this.securityKey="==BallCat-Auth=="}return Object(v.a)(l,[{key:"encrypt",value:function(o){var _=h.a.enc.Utf8.parse(this.securityKey);return h.a.AES.encrypt(o,_,{iv:_,mode:h.a.mode.CBC,padding:h.a.pad.Pkcs7}).toString()}}]),l}(),r=new p,m=new U},bPPe:function(J,i,e){"use strict";e.r(i);var d=e("7Kak"),v=e("9yH6"),b=e("y8nQ"),h=e("Vl3Y"),g=e("5NDa"),p=e("5rEg"),U=e("miYZ"),r=e("tsqr"),m=e("q1tI"),l=e.n(m),u=e("rmhi"),o=e("tL7X"),_=e("Opyt"),c=e("nKUr"),j=e.n(c),s="w4VX";i.default=function(S){var C=S.visible,W=S.onVisibleChange,T=S.tableRef,B=Object(m.useRef)();return Object(m.useEffect)(function(){var I;(I=B.current)===null||I===void 0||I.resetFields()},[C]),Object(c.jsxs)(u.a,{title:o.a.text("withdraw50"),visible:C,formRef:B,onVisibleChange:W,onFinish:function(E){return _.a.create({address:E.address,chainType:E.type,confirmPassword:E.confirmPassword}).then(function(){var L,A;return r.default.success(o.a.text("reg_tips82")),(L=B.current)===null||L===void 0||L.resetFields(),(A=T.current)===null||A===void 0||A.reload(),!0})},_nk:"".concat(s,"11"),children:[Object(c.jsx)(h.a.Item,{name:"address",label:o.a.text("withdraw02"),rules:[{required:!0,message:o.a.text("reg_tips3")}],_nk:"".concat(s,"21"),children:Object(c.jsx)(p.a,{placeholder:o.a.text("reg_tip73"),_nk:"".concat(s,"31")})}),Object(c.jsx)("div",{className:"tips-danger",_nk:"".concat(s,"41"),children:o.a.text("reg_tips2")}),Object(c.jsx)(h.a.Item,{name:"type",label:o.a.text("reg_tips4"),rules:[{required:!0,message:o.a.text("reg_tips68")}],_nk:"".concat(s,"22"),children:Object(c.jsxs)(v.a.Group,{_nk:"".concat(s,"23"),children:[Object(c.jsx)("div",{style:{marginBottom:"8px"},_nk:"".concat(s,"42"),children:Object(c.jsx)(v.a,{value:1,_nk:"".concat(s,"51"),children:o.a.text("reg_tips89")})}),Object(c.jsx)("div",{style:{marginBottom:"8px"},_nk:"".concat(s,"43"),children:Object(c.jsx)(v.a,{value:2,_nk:"".concat(s,"52"),children:o.a.text("reg_tips90")})})]})}),Object(c.jsx)(h.a.Item,{name:"confirmPassword",label:o.a.text("reg_tip48"),rules:[{required:!0,message:o.a.text("reg_tip51")}],_nk:"".concat(s,"24"),children:Object(c.jsx)(p.a.Password,{placeholder:o.a.text("reg_tip51"),_nk:"".concat(s,"25")})})]})}},vmhP:function(J,i,e){"use strict";var d=e("k1fw"),v=e("OaEy"),b=e("2fM7"),h=e("tJVT"),g=e("q1tI"),p=e.n(g),U=e("B7OH"),r=e("tL7X"),m=e("nKUr"),l=e.n(m),u,o="ku+H",_=((u=JSON.parse(U.d.get()))===null||u===void 0?void 0:u.roleId)||0,c=[{value:"1",label:"TRC20"},{value:"2",label:"ERC20"}],j=[{value:"1",label:"\u624B\u52A8\u8F6C\u8D26"},{value:"2",label:"API\u8F6C\u8D26"},{value:"3",label:"\u81EA\u52A8\u8F6C\u8D26"}],s=[{value:"1",label:"\u5904\u7406\u4E2D"},{value:"2",label:"\u8F6C\u8D26\u6210\u529F"},{value:"3",label:"\u8F6C\u8D26\u5931\u8D25"}],S=[{value:"1",label:"TRC20"},{value:"2",label:"ERC20"}],C=[{value:"1",label:"\u8BA2\u5355\u6536\u6B3E"},{value:"2",label:"\u8F6C\u8D26"},{value:"3",label:"\u8F6C\u8D26\u624B\u7EED\u8D39"},{value:"4",label:"\u4F59\u989D\u53D8\u52A8"},{value:"5",label:"\u4EE3\u4ED8\u5931\u8D25\u8FD4\u56DE\u91D1\u989D"},{value:"6",label:"\u4EE3\u4ED8\u5931\u8D25\u8FD4\u56DE\u624B\u7EED\u8D39"},{value:"7",label:"\u4E2A\u4EBA\u7801\u6536\u6B3E\u6263\u9664\u624B\u7EED\u8D39"},{value:"8",label:"ERC20\u63D0\u5E01\u624B\u7EED\u8D39"},{value:"9",label:"\u5546\u6237\u8865\u5355"}],W=[{value:"1",label:"\u8BA2\u5355\u4F63\u91D1"},{value:"2",label:"\u8F6C\u8D26"},{value:"3",label:"\u8F6C\u8D26\u624B\u7EED\u8D39"},{value:"4",label:"\u4F59\u989D\u53D8\u52A8"}],T=[{value:"2",label:"\u6B63\u5E38"},{value:"1",label:"\u7981\u7528"}],B=[{value:"1",label:"\u5165\u8D26"},{value:"2",label:"\u51FA\u8D26"}],I=[{value:"1",label:"\u8BA2\u5355"},{value:"2",label:"\u8F6C\u8D26"},{value:"3",label:"\u5145\u503C"}],E=[{value:"0",label:"\u5904\u7406\u4E2D"},{value:"1",label:"\u8BA2\u5355\u5B8C\u6210"},{value:"2",label:"\u8BA2\u5355\u8D85\u65F6"},{value:"3",label:"\u8BA2\u5355\u5931\u8D25"},{value:"4",label:"\u9000\u6B3E\u4E2D"},{value:"5",label:"\u9000\u6B3E\u6210\u529F"}],L=[{value:"unknow",label:"unknow"},{value:"admin",label:"admin"},{value:"merchant",label:"merchant"},{value:"agent",label:"agent"}],A=[{value:"1",label:"\u8BA2\u5355"},{value:"2",label:"\u8BA2\u5355\u624B\u7EED\u8D39"},{value:"3",label:"\u8F6C\u8D26"},{value:"4",label:"\u8F6C\u8D26\u624B\u7EED\u8D39"},{value:"5",label:"\u4EE3\u4ED8"},{value:"6",label:"\u4EE3\u4ED8\u624B\u7EED\u8D39"},{value:"7",label:"\u5145\u503C"},{value:"8",label:"\u4F59\u989D\u53D8\u52A8"}];i.a=function(O){var x,P=O.allowClear,N=P===void 0?!0:P,K=O.type;_=((x=JSON.parse(U.d.get()))===null||x===void 0?void 0:x.roleId)||0,_===2&&(B=[{value:"1",label:r.a.text("reg_tips140")},{value:"2",label:r.a.text("reg_tips141")}],A=[{value:"1",label:r.a.text("echarts-2")},{value:"2",label:r.a.text("reg_tips142")},{value:"3",label:r.a.text("withdraw14")},{value:"4",label:r.a.text("withdraw15")},{value:"5",label:r.a.text("reg_tips143")},{value:"6",label:r.a.text("reg_tips144")},{value:"7",label:r.a.text("reg_tips41")},{value:"8",label:r.a.text("withdraw16")}],j=[{value:"1",label:r.a.text("withdraw08")},{value:"2",label:r.a.text("withdraw09")},{value:"3",label:r.a.text("withdraw10")}]);var Q=Object(g.useState)([]),w=Object(h.a)(Q,2),$=w[0],y=w[1];return Object(g.useEffect)(function(){switch(K){case 1:y(c);break;case 2:y(j);break;case 3:y(S);break;case 4:y(C);break;case 5:y(s);break;case 6:y(T);break;case 7:y(B);break;case 8:y(W);break;case 9:y(I);break;case 10:y(E);break;case 11:y(A);break;case 12:y(L);break;default:y([])}},[K]),Object(m.jsx)(b.a,Object(d.a)(Object(d.a)({},O),{},{allowClear:N,style:{width:"100%"},options:$,_nk:"".concat(o,"11")}))}}}]);

(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"/53C":function(y,p,e){y.exports={content:"content___CsoxM",title:"title___3VE5a","payment-title":"payment-title___1PPod",amount:"amount___1E3w-",wrapper:"wrapper___21Up6","pay-item":"pay-item___3eKDX","pay-item-img":"pay-item-img___DlUAK","pay-item-title":"pay-item-title___3q-yF","pay-item-text":"pay-item-text___hj0Ru","money-item":"money-item___3cCSG","custom-input":"custom-input___M8OnI","border-active":"border-active___3WeDK","custom-line":"custom-line___3TEZq",currency:"currency___3FXm2","order-text":"order-text___1CAki",refresh:"refresh___3vog4",btn:"btn___1egv1","arrow-img":"arrow-img___2mTbt","custom-select":"custom-select___2gP52",bot:"bot___1S3fn",href:"href___2_ClA",cusDrawer:"cusDrawer___25PLw","ant-drawer-body":"ant-drawer-body___28UwE","modal-title":"modal-title___25NG-","modal-item":"modal-item___3lOBn"}},"1dju":function(y,p,e){"use strict";e.r(p),e.d(p,"query",function(){return D}),e.d(p,"recharge",function(){return E}),e.d(p,"getBase64Img",function(){return i}),e.d(p,"orderSearch",function(){return l});var m=e("qLMh"),g=e("9og8"),b=e("czNd"),S="X1R1";function D(j){return h.apply(this,arguments)}function h(){return h=Object(g.a)(Object(m.a)().mark(function j(n){return Object(m.a)().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",Object(b.a)("/v1/api/rechargeorder/list",{method:"POST",data:n}));case 1:case"end":return r.stop()}},j)})),h.apply(this,arguments)}function E(j){return c.apply(this,arguments)}function c(){return c=Object(g.a)(Object(m.a)().mark(function j(n){return Object(m.a)().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",Object(b.a)("/v1/api/rechargeorder/create",{method:"POST",data:n}));case 1:case"end":return r.stop()}},j)})),c.apply(this,arguments)}function i(){return u.apply(this,arguments)}function u(){return u=Object(g.a)(Object(m.a)().mark(function j(){return Object(m.a)().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.abrupt("return",Object(b.a)("/v1/api/rechargeorder/address",{method:"GEt"}));case 1:case"end":return v.stop()}},j)})),u.apply(this,arguments)}function l(j){return L.apply(this,arguments)}function L(){return L=Object(g.a)(Object(m.a)().mark(function j(n){return Object(m.a)().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",Object(b.a)("/v1/api/rechargeorder/search",{method:"POST",data:n}));case 1:case"end":return r.stop()}},j)})),L.apply(this,arguments)}},"4mLI":function(y,p,e){"use strict";e.r(p);var m=e("bbsP"),g=e("/wGt"),b=e("14J3"),S=e("BMrR"),D=e("jCWc"),h=e("kPKH"),E=e("tJVT"),c=e("/53C"),i=e.n(c),u=e("tL7X"),l=e("q1tI"),L=e.n(l),j=e("Opyt"),n=e("nKUr"),v=e.n(n),r="ADFl",q={text:u.a.text("reg_tips42"),href:"https://lite.liku.io",hrefText:u.a.text("reg_tips43")};p.default=function(){var I=Object(l.useState)(q),Y=Object(E.a)(I,2),U=Y[0],ee=Y[1],te=Object(l.useState)("trc"),G=Object(E.a)(te,2),_=G[0],z=G[1],ae=Object(l.useState)(""),P=Object(E.a)(ae,2),re=P[0],ne=P[1],B=Object(l.useState)(1),se=Object(E.a)(B,2),K=se[0],w=se[1],ce=Object(l.useState)(""),C=Object(E.a)(ce,2),W=C[0],x=C[1],ue=Object(l.useState)(!1),A=Object(E.a)(ue,2),$=A[0],V=A[1],X=Object(l.useState)(!1),le=Object(E.a)(X,2),ie=le[0],T=le[1],H=e("Rz14"),Q=e("bVUI"),de=e("Rz14"),oe=e("EQY8"),M=[{img:H,title:"USDT",key:"trc",text:"\u4EE5\u592A\u574A(TRC20)",mText:u.a.text("reg_tips89"),pText:"USDT (TRON-ERC20)"},{img:Q,title:"USDT",key:"erc",text:"\u6CE2\u573A(TRC20)",mText:u.a.text("reg_tips90"),pText:"USDT (Ethereum-ERC20)"},{img:de,title:"PYUSD",key:"pyusd",text:"PayPal USD (ERC20)",mText:u.a.text("reg_tips91"),pText:"PYUSD (PayPal USD-ERC20)"}],me=[1,50,100,500];Object(l.useEffect)(function(){var d={text:_==="pyusd"?u.a.text("reg_tips58"):u.a.text("reg_tips42"),href:_==="pyusd"?"https://www.paypal.com/":"https://lite.liku.io",hrefText:_==="pyusd"?u.a.text("reg_tips59"):u.a.text("reg_tips43")};ee(d)},[_]);var F=function(f){var O=f.target.value;if(Number(O)<1e6){if(O.includes(".")&&O.split(".")[1].length>2){var R="".concat(O.split(".")[0],".").concat(O.split(".")[1].substring(0,2));x(R);return}x(f.target.value)}},k=function(){var f=function(N,pe){return pe&&(N+=1),N<10?"0".concat(N):N},O=new Date,R=O.getFullYear().toString()+f(O.getMonth(),!0).toString()+f(O.getDate(),!1).toString()+f(O.getHours(),!1).toString()+f(O.getMinutes(),!1).toString()+f(O.getSeconds(),!0).toString()+O.getMilliseconds()+O.getTime().toString().substring(0,8);ne(R)},J=function(){var f=$?W:K;console.log(f,"amount");var O={appid:"GbuOVtKF",chainType:_==="trc"?1:_==="pyusd"?3:2,currency:"1",fiatAmount:f.toString(),merchantOrderNo:re};j.g.createOrder(O).then(function(R){console.log(R,"res")})};return Object(l.useEffect)(function(){k()},[]),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(S.a,{className:"".concat(i.a.content),_nk:"".concat(r,"11"),children:Object(n.jsx)(h.a,{span:24,_nk:"".concat(r,"21"),children:Object(n.jsxs)("div",{className:"".concat(i.a.wrapper),_nk:"".concat(r,"31"),children:[Object(n.jsxs)("div",{className:"".concat(i.a.title," pc"),_nk:"".concat(r,"32"),children:["UPay ",u.a.text("reg_tips10")]}),Object(n.jsx)("div",{className:"".concat(i.a["payment-title"]),_nk:"".concat(r,"33"),children:u.a.text("reg_tips11")}),Object(n.jsx)("div",{className:"pc",_nk:"".concat(r,"34"),children:Object(n.jsx)("div",{className:"flex-sb-c",_nk:"".concat(r,"35"),children:M.map(function(d){return Object(n.jsxs)("div",{className:"".concat(i.a["pay-item"]," ").concat(d.key===_?i.a["border-active"]:""," flex-s-c "),onClick:function(){return z(d.key)},_nk:"iAr".concat(r,"36"),children:[Object(n.jsx)("img",{className:"".concat(i.a["pay-item-img"]),src:d.img,alt:d.key,_nk:"".concat(r,"41")}),Object(n.jsxs)("div",{_nk:"".concat(r,"37"),children:[Object(n.jsx)("div",{className:"".concat(i.a["pay-item-title"]),_nk:"".concat(r,"38"),children:d.title}),Object(n.jsx)("div",{className:"".concat(i.a["pay-item-text"]),_nk:"".concat(r,"39"),children:d.text})]})]},d.key)})})}),Object(n.jsx)("div",{className:"h5",_nk:"".concat(r,"3a"),children:Object(n.jsxs)("div",{onClick:function(){return T(!0)},className:"".concat(i.a["custom-select"]," flex-s-c"),_nk:"".concat(r,"3b"),children:[Object(n.jsx)("img",{src:_==="trc"?H:_==="erc"?Q:de,alt:"",_nk:"".concat(r,"42")}),_==="trc"?"USDT (TRON-ERC20)":_==="erc"?"USDT (Ethereum-ERC20)":"PYUSD (PayPal USD-ERC20)"]})}),Object(n.jsxs)("div",{className:"".concat(i.a["payment-title"]," amount"),_nk:"".concat(r,"3c"),children:[u.a.text("reg_tips14")," (",_==="pyusd"?"PYUSD":"USDT",")"]}),Object(n.jsx)("div",{className:"flex-sb-c",_nk:"".concat(r,"3d"),children:me.map(function(d){return Object(n.jsx)("div",{className:"".concat(i.a["money-item"]," ").concat(!$&&d===K?i.a["border-active"]:""," flex-c-c "),onClick:function(){w(d),V(!1)},_nk:"iAr".concat(r,"3e"),children:d},d)})}),Object(n.jsxs)("div",{className:"".concat(i.a["custom-input"]," "),_nk:"".concat(r,"3f"),children:[Object(n.jsx)("input",{className:"".concat($?i.a["border-active"]:""),onClick:function(){return V(!0)},value:W,onChange:F,onBlur:function(f){x(f.target.value?Number(f.target.value).toFixed(2):"")},type:"number",_nk:"".concat(r,"51")}),Object(n.jsx)("span",{className:"".concat(i.a.currency),_nk:"".concat(r,"61"),children:_==="pyusd"?"PYUSD":"USDT"})]}),Object(n.jsx)("div",{className:"".concat(i.a["custom-line"]," "),_nk:"".concat(r,"3g")}),Object(n.jsxs)("div",{className:"".concat(i.a["order-text"]," flex-s-c flex-w"),_nk:"".concat(r,"3h"),children:[Object(n.jsxs)("span",{_nk:"".concat(r,"62"),children:[u.a.text("reg_tips16")," : ",re]}),Object(n.jsx)("div",{onClick:k,className:"flex-s-c cp ".concat(i.a.refresh),style:{marginLeft:"8px"},_nk:"".concat(r,"3i"),children:u.a.text("reg_tips17")})]}),Object(n.jsxs)("div",{className:"".concat(i.a.bot),_nk:"".concat(r,"3j"),children:[Object(n.jsxs)("div",{onClick:J,className:"".concat(i.a.btn," flex-c-c"),_nk:"".concat(r,"3k"),children:[u.a.text("reg_tips18")," ",$?W:K," ",_==="pyusd"?"PYUSD":"USDT"]}),Object(n.jsxs)("div",{className:"flex-c-c ".concat(i.a.href),_nk:"".concat(r,"3l"),children:[U.text,Object(n.jsxs)("a",{href:U.href,target:"_blank",_nk:"".concat(r,"71"),children:[U.hrefText,Object(n.jsx)("img",{className:"".concat(i.a["arrow-img"]),src:oe,alt:"",_nk:"".concat(r,"43")})]})]})]})]})})}),Object(n.jsxs)(g.a,{placement:"bottom",height:275,closable:!1,headerStyle:{display:"none"},onClose:function(){return T(!1)},visible:ie,_nk:"".concat(r,"81"),children:[Object(n.jsx)("div",{className:"".concat(i.a["modal-title"]," flex-c-c"),_nk:"".concat(r,"3m"),children:u.a.text("reg_tips11")}),M.map(function(d){return Object(n.jsxs)("div",{onClick:function(){z(d.key),T(!1)},className:"".concat(i.a["modal-item"]," flex-s-c"),_nk:"iAr".concat(r,"3n"),children:[Object(n.jsx)("img",{src:d.img,alt:"",_nk:"".concat(r,"44")}),d.mText]},d.key)})]},"bottom")]})}},EQY8:function(y,p,e){y.exports=e.p+"static/images/arrow.svg"},Opyt:function(y,p,e){"use strict";e.d(p,"e",function(){return m}),e.d(p,"h",function(){return h}),e.d(p,"g",function(){return E}),e.d(p,"c",function(){return g}),e.d(p,"a",function(){return b}),e.d(p,"d",function(){return S}),e.d(p,"f",function(){return D}),e.d(p,"b",function(){return H});var m={};e.r(m),e.d(m,"query",function(){return j}),e.d(m,"create",function(){return v}),e.d(m,"edit",function(){return q}),e.d(m,"del",function(){return Y}),e.d(m,"getScope",function(){return ee}),e.d(m,"putScope",function(){return te}),e.d(m,"changePassword",function(){return G}),e.d(m,"updateStatus",function(){return _}),e.d(m,"replaceOrder",function(){return z}),e.d(m,"updateAvatar",function(){return ae});var g={};e.r(g),e.d(g,"statistic",function(){return ne});var b={};e.r(b),e.d(b,"query",function(){return K}),e.d(b,"update",function(){return ce}),e.d(b,"del",function(){return W}),e.d(b,"create",function(){return ue});var S={};e.r(S),e.d(S,"query",function(){return V});var D={};e.r(D),e.d(D,"query",function(){return ie});var h={};e.r(h),e.d(h,"query",function(){return oe}),e.d(h,"create",function(){return me}),e.d(h,"edit",function(){return k}),e.d(h,"del",function(){return d}),e.d(h,"getScope",function(){return O}),e.d(h,"putScope",function(){return R}),e.d(h,"changePassword",function(){return he}),e.d(h,"updateStatus",function(){return N}),e.d(h,"replaceOrder",function(){return pe}),e.d(h,"updateAvatar",function(){return Oe});var E={};e.r(E),e.d(E,"createOrder",function(){return _e});var c=e("qLMh"),i=e("k1fw"),u=e("9og8"),l=e("czNd"),L="1X1R";function j(a){return n.apply(this,arguments)}function n(){return n=Object(u.a)(Object(c.a)().mark(function a(s){return Object(c.a)().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(l.a)("/v1/api/order/list",{method:"POST",data:s}));case 1:case"end":return t.stop()}},a)})),n.apply(this,arguments)}function v(a){return r.apply(this,arguments)}function r(){return r=Object(u.a)(Object(c.a)().mark(function a(s){return Object(c.a)().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(l.a)("system/user",{method:"POST",data:s}));case 1:case"end":return t.stop()}},a)})),r.apply(this,arguments)}function q(a){return I.apply(this,arguments)}function I(){return I=Object(u.a)(Object(c.a)().mark(function a(s){return Object(c.a)().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(l.a)("system/user",{method:"PUT",data:s}));case 1:case"end":return t.stop()}},a)})),I.apply(this,arguments)}function Y(a){return U.apply(this,arguments)}function U(){return U=Object(u.a)(Object(c.a)().mark(function a(s){return Object(c.a)().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(l.a)("system/user/".concat(s.userId),{method:"DELETE"}));case 1:case"end":return t.stop()}},a)})),U.apply(this,arguments)}function ee(a){return Object(l.a)("system/user/scope/".concat(a.userId),{method:"get"})}function te(a){return Object(l.a)("system/user/scope/".concat(a.userId),{method:"put",data:a})}function G(a){return Object(l.a)("system/user/pass/".concat(a.userId),{method:"put",data:Object(i.a)(Object(i.a)({},a),{},{confirmPass:a.pass})})}function _(a,s){return Object(l.a)("system/user/status",{method:"put",params:{status:s},data:a})}function z(a){return Object(l.a)("/v1/api/order/renewal",{method:"POST",data:a})}function ae(a,s,o){var t=new FormData;return t.append("file",s,o.name),t.append("userId","".concat(a.userId)),Object(l.a)("/system/user/avatar",{method:"POST",body:t})}var P=e("9kvl"),re="rMl9";function ne(){return B.apply(this,arguments)}function B(){return B=Object(u.a)(Object(c.a)().mark(function a(){return Object(c.a)().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",Object(P.e)("/v1/api/merchant/statistic",{method:"GET"}));case 1:case"end":return o.stop()}},a)})),B.apply(this,arguments)}var se="isKd";function K(a){return w.apply(this,arguments)}function w(){return w=Object(u.a)(Object(c.a)().mark(function a(s){return Object(c.a)().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(P.e)("/v1/api/address/list",{method:"POST",data:s}));case 1:case"end":return t.stop()}},a)})),w.apply(this,arguments)}function ce(a){return C.apply(this,arguments)}function C(){return C=Object(u.a)(Object(c.a)().mark(function a(s){return Object(c.a)().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(P.e)("/v1/api/address/update",{method:"POST",data:s}));case 1:case"end":return t.stop()}},a)})),C.apply(this,arguments)}function W(a){return x.apply(this,arguments)}function x(){return x=Object(u.a)(Object(c.a)().mark(function a(s){return Object(c.a)().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(P.e)("/v1/api/address/delete",{method:"POST",data:s}));case 1:case"end":return t.stop()}},a)})),x.apply(this,arguments)}function ue(a){return A.apply(this,arguments)}function A(){return A=Object(u.a)(Object(c.a)().mark(function a(s){return Object(c.a)().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(P.e)("/v1/api/address/create",{method:"POST",data:s}));case 1:case"end":return t.stop()}},a)})),A.apply(this,arguments)}var $="7PFW";function V(a){return X.apply(this,arguments)}function X(){return X=Object(u.a)(Object(c.a)().mark(function a(s){return Object(c.a)().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(P.e)("/v1/api/merchantbill/list",{method:"POST",data:s}));case 1:case"end":return t.stop()}},a)})),X.apply(this,arguments)}var le="004Q";function ie(a){return T.apply(this,arguments)}function T(){return T=Object(u.a)(Object(c.a)().mark(function a(s){return Object(c.a)().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(l.a)("/v1/api/withdraw/list",{method:"POST",data:s}));case 1:case"end":return t.stop()}},a)})),T.apply(this,arguments)}var H=e("1dju"),Q=e("oBTY"),de="lhz8";function oe(a){return M.apply(this,arguments)}function M(){return M=Object(u.a)(Object(c.a)().mark(function a(s){var o;return Object(c.a)().wrap(function(Z){for(;;)switch(Z.prev=Z.next){case 0:return o=Object(i.a)(Object(i.a)({},s),{},{range:[].concat(Object(Q.a)(s.range),[{renewal_num:{min:"1",max:"99"}}])}),Z.abrupt("return",Object(l.a)("/v1/api/order/list",{method:"POST",data:o}));case 2:case"end":return Z.stop()}},a)})),M.apply(this,arguments)}function me(a){return F.apply(this,arguments)}function F(){return F=Object(u.a)(Object(c.a)().mark(function a(s){return Object(c.a)().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(l.a)("system/user",{method:"POST",data:s}));case 1:case"end":return t.stop()}},a)})),F.apply(this,arguments)}function k(a){return J.apply(this,arguments)}function J(){return J=Object(u.a)(Object(c.a)().mark(function a(s){return Object(c.a)().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(l.a)("system/user",{method:"PUT",data:s}));case 1:case"end":return t.stop()}},a)})),J.apply(this,arguments)}function d(a){return f.apply(this,arguments)}function f(){return f=Object(u.a)(Object(c.a)().mark(function a(s){return Object(c.a)().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(l.a)("system/user/".concat(s.userId),{method:"DELETE"}));case 1:case"end":return t.stop()}},a)})),f.apply(this,arguments)}function O(a){return Object(l.a)("system/user/scope/".concat(a.userId),{method:"get"})}function R(a){return Object(l.a)("system/user/scope/".concat(a.userId),{method:"put",data:a})}function he(a){return Object(l.a)("system/user/pass/".concat(a.userId),{method:"put",data:Object(i.a)(Object(i.a)({},a),{},{confirmPass:a.pass})})}function N(a,s){return Object(l.a)("system/user/status",{method:"put",params:{status:s},data:a})}function pe(a){return Object(l.a)("/v1/api/order/renewal",{method:"POST",data:a})}function Oe(a,s,o){var t=new FormData;return t.append("file",s,o.name),t.append("userId","".concat(a.userId)),Object(l.a)("/system/user/avatar",{method:"POST",body:t})}var je="L90q";function _e(a){return fe.apply(this,arguments)}function fe(){return fe=Object(u.a)(Object(c.a)().mark(function a(s){return Object(c.a)().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(l.a)("/v1/api/open/order/create",{method:"POST",data:s}));case 1:case"end":return t.stop()}},a)})),fe.apply(this,arguments)}var Ee="bgb1"},Rz14:function(y,p,e){y.exports=e.p+"static/images/trc.svg"},bVUI:function(y,p,e){y.exports=e.p+"static/images/erc.svg"}}]);

(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"/53C":function(b,p,t){b.exports={content:"content___CsoxM",title:"title___3VE5a","payment-title":"payment-title___1PPod",amount:"amount___1E3w-",wrapper:"wrapper___21Up6","pay-item":"pay-item___3eKDX","pay-item-img":"pay-item-img___DlUAK","pay-item-title":"pay-item-title___3q-yF","pay-item-text":"pay-item-text___hj0Ru","money-item":"money-item___3cCSG","custom-input":"custom-input___M8OnI","border-active":"border-active___3WeDK","custom-line":"custom-line___3TEZq",currency:"currency___3FXm2","order-text":"order-text___1CAki",refresh:"refresh___3vog4",btn:"btn___1egv1","arrow-img":"arrow-img___2mTbt","custom-select":"custom-select___2gP52",bot:"bot___1S3fn",href:"href___2_ClA",cusDrawer:"cusDrawer___25PLw","ant-drawer-body":"ant-drawer-body___28UwE","modal-title":"modal-title___25NG-","modal-item":"modal-item___3lOBn"}},"1dju":function(b,p,t){"use strict";t.r(p),t.d(p,"query",function(){return x}),t.d(p,"recharge",function(){return T}),t.d(p,"getBase64Img",function(){return v}),t.d(p,"orderSearch",function(){return l});var f=t("qLMh"),g=t("9og8"),y=t("czNd"),R="X1R1";function x(c){return E.apply(this,arguments)}function E(){return E=Object(g.a)(Object(f.a)().mark(function c(o){return Object(f.a)().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.abrupt("return",Object(y.a)("/v1/api/rechargeorder/list",{method:"POST",data:o}));case 1:case"end":return h.stop()}},c)})),E.apply(this,arguments)}function T(c){return s.apply(this,arguments)}function s(){return s=Object(g.a)(Object(f.a)().mark(function c(o){return Object(f.a)().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.abrupt("return",Object(y.a)("/v1/api/rechargeorder/create",{method:"POST",data:o}));case 1:case"end":return h.stop()}},c)})),s.apply(this,arguments)}function v(){return m.apply(this,arguments)}function m(){return m=Object(g.a)(Object(f.a)().mark(function c(){return Object(f.a)().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return O.abrupt("return",Object(y.a)("/v1/api/rechargeorder/address",{method:"GEt"}));case 1:case"end":return O.stop()}},c)})),m.apply(this,arguments)}function l(c){return D.apply(this,arguments)}function D(){return D=Object(g.a)(Object(f.a)().mark(function c(o){return Object(f.a)().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.abrupt("return",Object(y.a)("/v1/api/rechargeorder/search",{method:"POST",data:o}));case 1:case"end":return h.stop()}},c)})),D.apply(this,arguments)}},"4mLI":function(b,p,t){"use strict";t.r(p);var f=t("bbsP"),g=t("/wGt"),y=t("14J3"),R=t("BMrR"),x=t("jCWc"),E=t("kPKH"),T=t("+L6B"),s=t("2/Rp"),v=t("miYZ"),m=t("tsqr"),l=t("tJVT"),D=t("/53C"),c=t.n(D),o=t("tL7X"),O=t("q1tI"),h=t.n(O),re=t("Opyt"),I=t("Ty5D"),ne=t("9kvl"),n=t("nKUr"),ye=t.n(n),u="ADFl",se={text:o.a.text("reg_tips42"),href:"https://lite.liku.io",hrefText:o.a.text("reg_tips43")};p.default=function(){var ce=Object(I.k)(),G=ce.query,ue=Object(O.useState)(se),P=Object(l.a)(ue,2),V=P[0],le=P[1],B=Object(O.useState)(!1),ie=Object(l.a)(B,2),de=ie[0],S=ie[1],oe=Object(O.useState)("trc"),C=Object(l.a)(oe,2),j=C[0],M=C[1],me=Object(O.useState)(""),A=Object(l.a)(me,2),z=A[0],fe=A[1],K=Object(O.useState)(1),pe=Object(l.a)(K,2),W=pe[0],$=pe[1],Oe=Object(O.useState)(""),H=Object(l.a)(Oe,2),Q=H[0],w=H[1],F=Object(O.useState)(!1),Z=Object(l.a)(F,2),U=Z[0],k=Z[1],X=Object(O.useState)(!1),q=Object(l.a)(X,2),J=q[0],Y=q[1],ee=t("Rz14"),te=t("bVUI"),he=t("Rz14"),_e=t("EQY8"),ae=[{img:ee,title:"USDT",key:"trc",text:"\u6CE2\u573A(TRC20)",mText:o.a.text("reg_tips89"),pText:"USDT (TRON-ERC20)"},{img:te,title:"USDT",key:"erc",text:"\u4EE5\u592A\u574A(ERC20)",mText:o.a.text("reg_tips90"),pText:"USDT (Ethereum-ERC20)"}],be=[1,50,100,500];Object(O.useEffect)(function(){var d={text:j==="pyusd"?o.a.text("reg_tips58"):o.a.text("reg_tips42"),href:j==="pyusd"?"https://www.paypal.com/":"https://lite.liku.io",hrefText:j==="pyusd"?o.a.text("reg_tips59"):o.a.text("reg_tips43")};le(d)},[j]);var Ee=function(_){var e=_.target.value;if(Number(e)<1e6){if(e.includes(".")&&e.split(".")[1].length>2){var r="".concat(e.split(".")[0],".").concat(e.split(".")[1].substring(0,2));w(r);return}w(_.target.value)}},N=function(){var _=function(a,L){return L&&(a+=1),a<10?"0".concat(a):a},e=new Date,r=e.getFullYear().toString()+_(e.getMonth(),!0).toString()+_(e.getDate(),!1).toString()+_(e.getHours(),!1).toString()+_(e.getMinutes(),!1).toString()+_(e.getSeconds(),!0).toString()+e.getMilliseconds()+e.getTime().toString().substring(0,8);fe(r)},je=function(){var _=U?Q:W;if(console.log(_,"amount"),!j){m.default.error("\u8BF7\u9009\u62E9\u652F\u4ED8\u65B9\u5F0F");return}if(!_){m.default.error("\u8BF7\u8F93\u5165\u8BA2\u5355\u91D1\u989D");return}if(!z){m.default.error("\u8BA2\u5355\u53F7\u5DF2\u5931\u6548\uFF0C\u8BF7\u5237\u65B0\u540E\u91CD\u8BD5");return}S(!0);var e={appid:G.id||"GbuOVtKF",chainType:j==="trc"?1:j==="pyusd"?3:2,currency:"1",fiatAmount:_.toString(),merchantOrderNo:z};re.g.createOrder(e).then(function(r){console.log(r,"res");var i=r.data;console.log(i,"data"),ne.c.push({pathname:"/payment/order",query:{id:G.id||"GbuOVtKF",address:i.address,expiredAt:i.expiredAt,merchantOrderNo:i.orderNo,chainType:j,crypto:i.crypto}})}).finally(function(){S(!1)})};return Object(O.useEffect)(function(){N()},[]),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(R.a,{className:"".concat(c.a.content),_nk:"".concat(u,"11"),children:Object(n.jsx)(E.a,{span:24,_nk:"".concat(u,"21"),children:Object(n.jsxs)("div",{className:"".concat(c.a.wrapper),_nk:"".concat(u,"31"),children:[Object(n.jsxs)("div",{className:"".concat(c.a.title," pc"),_nk:"".concat(u,"32"),children:["UPay ",o.a.text("reg_tips10")]}),Object(n.jsx)("div",{className:"".concat(c.a["payment-title"]),_nk:"".concat(u,"33"),children:o.a.text("reg_tips11")}),Object(n.jsx)("div",{className:"pc",_nk:"".concat(u,"34"),children:Object(n.jsx)("div",{className:"flex-s-c",_nk:"".concat(u,"35"),children:ae.map(function(d){return Object(n.jsxs)("div",{style:{marginRight:10},className:"".concat(c.a["pay-item"]," ").concat(d.key===j?c.a["border-active"]:""," flex-s-c "),onClick:function(){return M(d.key)},_nk:"iAr".concat(u,"36"),children:[Object(n.jsx)("img",{className:"".concat(c.a["pay-item-img"]),src:d.img,alt:d.key,_nk:"".concat(u,"41")}),Object(n.jsxs)("div",{_nk:"".concat(u,"37"),children:[Object(n.jsx)("div",{className:"".concat(c.a["pay-item-title"]),_nk:"".concat(u,"38"),children:d.title}),Object(n.jsx)("div",{className:"".concat(c.a["pay-item-text"]),_nk:"".concat(u,"39"),children:d.text})]})]},d.key)})})}),Object(n.jsx)("div",{className:"h5",_nk:"".concat(u,"3a"),children:Object(n.jsxs)("div",{onClick:function(){return Y(!0)},className:"".concat(c.a["custom-select"]," flex-s-c"),_nk:"".concat(u,"3b"),children:[Object(n.jsx)("img",{src:j==="trc"?ee:j==="erc"?te:he,alt:"",_nk:"".concat(u,"42")}),j==="trc"?"USDT (TRON-ERC20)":j==="erc"?"USDT (Ethereum-ERC20)":"PYUSD (PayPal USD-ERC20)"]})}),Object(n.jsxs)("div",{className:"".concat(c.a["payment-title"]," amount"),_nk:"".concat(u,"3c"),children:[o.a.text("reg_tips14")," (",j==="pyusd"?"PYUSD":"USDT",")"]}),Object(n.jsx)("div",{className:"flex-sb-c",_nk:"".concat(u,"3d"),children:be.map(function(d){return Object(n.jsx)("div",{className:"".concat(c.a["money-item"]," ").concat(!U&&d===W?c.a["border-active"]:""," flex-c-c "),onClick:function(){$(d),k(!1)},_nk:"iAr".concat(u,"3e"),children:d},d)})}),Object(n.jsxs)("div",{className:"".concat(c.a["custom-input"]," "),_nk:"".concat(u,"3f"),children:[Object(n.jsx)("input",{className:"".concat(U?c.a["border-active"]:""),onClick:function(){return k(!0)},value:Q,onChange:Ee,onBlur:function(_){w(_.target.value?Number(_.target.value).toFixed(2):"")},type:"number",_nk:"".concat(u,"51")}),Object(n.jsx)("span",{className:"".concat(c.a.currency),_nk:"".concat(u,"61"),children:j==="pyusd"?"PYUSD":"USDT"})]}),Object(n.jsx)("div",{className:"".concat(c.a["custom-line"]," "),_nk:"".concat(u,"3g")}),Object(n.jsxs)("div",{className:"".concat(c.a["order-text"]," flex-s-c flex-w"),_nk:"".concat(u,"3h"),children:[Object(n.jsxs)("span",{_nk:"".concat(u,"62"),children:[o.a.text("reg_tips16")," : ",z]}),Object(n.jsx)("div",{onClick:N,className:"flex-s-c cp ".concat(c.a.refresh),style:{marginLeft:"8px"},_nk:"".concat(u,"3i"),children:o.a.text("reg_tips17")})]}),Object(n.jsxs)("div",{className:"".concat(c.a.bot),_nk:"".concat(u,"3j"),children:[Object(n.jsxs)(s.a,{loading:de,onClick:je,className:"".concat(c.a.btn," flex-c-c"),_nk:"".concat(u,"71"),children:[o.a.text("reg_tips18")," ",U?Q:W," ",j==="pyusd"?"PYUSD":"USDT"]}),Object(n.jsxs)("div",{className:"flex-c-c ".concat(c.a.href),_nk:"".concat(u,"3k"),children:[V.text,Object(n.jsxs)("a",{href:V.href,target:"_blank",_nk:"".concat(u,"81"),children:[V.hrefText,Object(n.jsx)("img",{className:"".concat(c.a["arrow-img"]),src:_e,alt:"",_nk:"".concat(u,"43")})]})]})]})]})})}),Object(n.jsxs)(g.a,{placement:"bottom",height:275,closable:!1,headerStyle:{display:"none"},onClose:function(){return Y(!1)},visible:J,_nk:"".concat(u,"91"),children:[Object(n.jsx)("div",{className:"".concat(c.a["modal-title"]," flex-c-c"),_nk:"".concat(u,"3l"),children:o.a.text("reg_tips11")}),ae.map(function(d){return Object(n.jsxs)("div",{onClick:function(){M(d.key),Y(!1)},className:"".concat(c.a["modal-item"]," flex-s-c"),_nk:"iAr".concat(u,"3m"),children:[Object(n.jsx)("img",{src:d.img,alt:"",_nk:"".concat(u,"44")}),d.mText]},d.key)})]},"bottom")]})}},EQY8:function(b,p,t){b.exports=t.p+"static/images/arrow.svg"},Opyt:function(b,p,t){"use strict";t.d(p,"e",function(){return f}),t.d(p,"h",function(){return E}),t.d(p,"g",function(){return T}),t.d(p,"c",function(){return g}),t.d(p,"a",function(){return y}),t.d(p,"d",function(){return R}),t.d(p,"f",function(){return x}),t.d(p,"b",function(){return Oe});var f={};t.r(f),t.d(f,"query",function(){return c}),t.d(f,"create",function(){return O}),t.d(f,"edit",function(){return re}),t.d(f,"del",function(){return ne}),t.d(f,"getScope",function(){return ye}),t.d(f,"putScope",function(){return u}),t.d(f,"changePassword",function(){return se}),t.d(f,"updateStatus",function(){return ce}),t.d(f,"replaceOrder",function(){return G}),t.d(f,"updateAvatar",function(){return ue});var g={};t.r(g),t.d(g,"statistic",function(){return le});var y={};t.r(y),t.d(y,"query",function(){return de}),t.d(y,"update",function(){return oe}),t.d(y,"del",function(){return j}),t.d(y,"create",function(){return me});var R={};t.r(R),t.d(R,"query",function(){return fe});var x={};t.r(x),t.d(x,"query",function(){return W});var E={};t.r(E),t.d(E,"query",function(){return w}),t.d(E,"create",function(){return Z}),t.d(E,"edit",function(){return k}),t.d(E,"del",function(){return q}),t.d(E,"getScope",function(){return Y}),t.d(E,"putScope",function(){return ee}),t.d(E,"changePassword",function(){return te}),t.d(E,"updateStatus",function(){return he}),t.d(E,"replaceOrder",function(){return _e}),t.d(E,"updateAvatar",function(){return ae});var T={};t.r(T),t.d(T,"createOrder",function(){return Ee}),t.d(T,"queryOrder",function(){return je});var s=t("qLMh"),v=t("k1fw"),m=t("9og8"),l=t("czNd"),D="1X1R";function c(e){return o.apply(this,arguments)}function o(){return o=Object(m.a)(Object(s.a)().mark(function e(r){return Object(s.a)().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",Object(l.a)("/v1/api/order/list",{method:"POST",data:r}));case 1:case"end":return a.stop()}},e)})),o.apply(this,arguments)}function O(e){return h.apply(this,arguments)}function h(){return h=Object(m.a)(Object(s.a)().mark(function e(r){return Object(s.a)().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",Object(l.a)("system/user",{method:"POST",data:r}));case 1:case"end":return a.stop()}},e)})),h.apply(this,arguments)}function re(e){return I.apply(this,arguments)}function I(){return I=Object(m.a)(Object(s.a)().mark(function e(r){return Object(s.a)().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",Object(l.a)("system/user",{method:"PUT",data:r}));case 1:case"end":return a.stop()}},e)})),I.apply(this,arguments)}function ne(e){return n.apply(this,arguments)}function n(){return n=Object(m.a)(Object(s.a)().mark(function e(r){return Object(s.a)().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",Object(l.a)("system/user/".concat(r.userId),{method:"DELETE"}));case 1:case"end":return a.stop()}},e)})),n.apply(this,arguments)}function ye(e){return Object(l.a)("system/user/scope/".concat(e.userId),{method:"get"})}function u(e){return Object(l.a)("system/user/scope/".concat(e.userId),{method:"put",data:e})}function se(e){return Object(l.a)("system/user/pass/".concat(e.userId),{method:"put",data:Object(v.a)(Object(v.a)({},e),{},{confirmPass:e.pass})})}function ce(e,r){return Object(l.a)("system/user/status",{method:"put",params:{status:r},data:e})}function G(e){return Object(l.a)("/v1/api/order/renewal",{method:"POST",data:e})}function ue(e,r,i){var a=new FormData;return a.append("file",r,i.name),a.append("userId","".concat(e.userId)),Object(l.a)("/system/user/avatar",{method:"POST",body:a})}var P=t("9kvl"),V="rMl9";function le(){return B.apply(this,arguments)}function B(){return B=Object(m.a)(Object(s.a)().mark(function e(){return Object(s.a)().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",Object(P.e)("/v1/api/merchant/statistic",{method:"GET"}));case 1:case"end":return i.stop()}},e)})),B.apply(this,arguments)}var ie="isKd";function de(e){return S.apply(this,arguments)}function S(){return S=Object(m.a)(Object(s.a)().mark(function e(r){return Object(s.a)().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",Object(P.e)("/v1/api/address/list",{method:"POST",data:r}));case 1:case"end":return a.stop()}},e)})),S.apply(this,arguments)}function oe(e){return C.apply(this,arguments)}function C(){return C=Object(m.a)(Object(s.a)().mark(function e(r){return Object(s.a)().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",Object(P.e)("/v1/api/address/update",{method:"POST",data:r}));case 1:case"end":return a.stop()}},e)})),C.apply(this,arguments)}function j(e){return M.apply(this,arguments)}function M(){return M=Object(m.a)(Object(s.a)().mark(function e(r){return Object(s.a)().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",Object(P.e)("/v1/api/address/delete",{method:"POST",data:r}));case 1:case"end":return a.stop()}},e)})),M.apply(this,arguments)}function me(e){return A.apply(this,arguments)}function A(){return A=Object(m.a)(Object(s.a)().mark(function e(r){return Object(s.a)().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",Object(P.e)("/v1/api/address/create",{method:"POST",data:r}));case 1:case"end":return a.stop()}},e)})),A.apply(this,arguments)}var z="7PFW";function fe(e){return K.apply(this,arguments)}function K(){return K=Object(m.a)(Object(s.a)().mark(function e(r){return Object(s.a)().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",Object(P.e)("/v1/api/merchantbill/list",{method:"POST",data:r}));case 1:case"end":return a.stop()}},e)})),K.apply(this,arguments)}var pe="004Q";function W(e){return $.apply(this,arguments)}function $(){return $=Object(m.a)(Object(s.a)().mark(function e(r){return Object(s.a)().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",Object(l.a)("/v1/api/withdraw/list",{method:"POST",data:r}));case 1:case"end":return a.stop()}},e)})),$.apply(this,arguments)}var Oe=t("1dju"),H=t("oBTY"),Q="lhz8";function w(e){return F.apply(this,arguments)}function F(){return F=Object(m.a)(Object(s.a)().mark(function e(r){var i;return Object(s.a)().wrap(function(L){for(;;)switch(L.prev=L.next){case 0:return i=Object(v.a)(Object(v.a)({},r),{},{range:[].concat(Object(H.a)(r.range),[{renewal_num:{min:"1",max:"99"}}])}),L.abrupt("return",Object(l.a)("/v1/api/order/list",{method:"POST",data:i}));case 2:case"end":return L.stop()}},e)})),F.apply(this,arguments)}function Z(e){return U.apply(this,arguments)}function U(){return U=Object(m.a)(Object(s.a)().mark(function e(r){return Object(s.a)().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",Object(l.a)("system/user",{method:"POST",data:r}));case 1:case"end":return a.stop()}},e)})),U.apply(this,arguments)}function k(e){return X.apply(this,arguments)}function X(){return X=Object(m.a)(Object(s.a)().mark(function e(r){return Object(s.a)().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",Object(l.a)("system/user",{method:"PUT",data:r}));case 1:case"end":return a.stop()}},e)})),X.apply(this,arguments)}function q(e){return J.apply(this,arguments)}function J(){return J=Object(m.a)(Object(s.a)().mark(function e(r){return Object(s.a)().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",Object(l.a)("system/user/".concat(r.userId),{method:"DELETE"}));case 1:case"end":return a.stop()}},e)})),J.apply(this,arguments)}function Y(e){return Object(l.a)("system/user/scope/".concat(e.userId),{method:"get"})}function ee(e){return Object(l.a)("system/user/scope/".concat(e.userId),{method:"put",data:e})}function te(e){return Object(l.a)("system/user/pass/".concat(e.userId),{method:"put",data:Object(v.a)(Object(v.a)({},e),{},{confirmPass:e.pass})})}function he(e,r){return Object(l.a)("system/user/status",{method:"put",params:{status:r},data:e})}function _e(e){return Object(l.a)("/v1/api/order/renewal",{method:"POST",data:e})}function ae(e,r,i){var a=new FormData;return a.append("file",r,i.name),a.append("userId","".concat(e.userId)),Object(l.a)("/system/user/avatar",{method:"POST",body:a})}var be="L90q";function Ee(e){return N.apply(this,arguments)}function N(){return N=Object(m.a)(Object(s.a)().mark(function e(r){return Object(s.a)().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",Object(l.a)("/v1/api/open/order/create",{method:"POST",data:r}));case 1:case"end":return a.stop()}},e)})),N.apply(this,arguments)}function je(e){return d.apply(this,arguments)}function d(){return d=Object(m.a)(Object(s.a)().mark(function e(r){return Object(s.a)().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",Object(l.a)("/v1/api/open/order/query",{method:"POST",data:r}));case 1:case"end":return a.stop()}},e)})),d.apply(this,arguments)}var _="bgb1"},Rz14:function(b,p,t){b.exports=t.p+"static/images/trc.svg"},bVUI:function(b,p,t){b.exports=t.p+"static/images/erc.svg"}}]);

(window.webpackJsonp=window.webpackJsonp||[]).push([[17,71],{"/53C":function(h,d,e){h.exports={content:"content___CsoxM",title:"title___3VE5a","payment-title":"payment-title___1PPod",amount:"amount___1E3w-",wrapper:"wrapper___21Up6","pay-item":"pay-item___3eKDX","pay-item-img":"pay-item-img___DlUAK","pay-item-title":"pay-item-title___3q-yF","pay-item-text":"pay-item-text___hj0Ru","money-item":"money-item___3cCSG","custom-input":"custom-input___M8OnI","border-active":"border-active___3WeDK","custom-line":"custom-line___3TEZq",currency:"currency___3FXm2","order-text":"order-text___1CAki",refresh:"refresh___3vog4",btn:"btn___1egv1","arrow-img":"arrow-img___2mTbt","custom-select":"custom-select___2gP52",bot:"bot___1S3fn",href:"href___2_ClA",cusDrawer:"cusDrawer___25PLw","ant-drawer-body":"ant-drawer-body___28UwE","modal-title":"modal-title___25NG-","modal-item":"modal-item___3lOBn"}},"1dju":function(h,d,e){"use strict";e.r(d),e.d(d,"query",function(){return K}),e.d(d,"recharge",function(){return C}),e.d(d,"getBase64Img",function(){return P}),e.d(d,"orderSearch",function(){return i});var O=e("qLMh"),D=e("9og8"),R=e("czNd"),S="X1R1";function K(o){return E.apply(this,arguments)}function E(){return E=Object(D.a)(Object(O.a)().mark(function o(r){return Object(O.a)().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.abrupt("return",Object(R.a)("/v1/api/rechargeorder/list",{method:"POST",data:r}));case 1:case"end":return c.stop()}},o)})),E.apply(this,arguments)}function C(o){return s.apply(this,arguments)}function s(){return s=Object(D.a)(Object(O.a)().mark(function o(r){return Object(O.a)().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.abrupt("return",Object(R.a)("/v1/api/rechargeorder/create",{method:"POST",data:r}));case 1:case"end":return c.stop()}},o)})),s.apply(this,arguments)}function P(){return f.apply(this,arguments)}function f(){return f=Object(D.a)(Object(O.a)().mark(function o(){return Object(O.a)().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.abrupt("return",Object(R.a)("/v1/api/rechargeorder/address",{method:"GEt"}));case 1:case"end":return p.stop()}},o)})),f.apply(this,arguments)}function i(o){return v.apply(this,arguments)}function v(){return v=Object(D.a)(Object(O.a)().mark(function o(r){return Object(O.a)().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.abrupt("return",Object(R.a)("/v1/api/rechargeorder/search",{method:"POST",data:r}));case 1:case"end":return c.stop()}},o)})),v.apply(this,arguments)}},"4mLI":function(h,d,e){"use strict";e.r(d);var O=e("bbsP"),D=e("/wGt"),R=e("14J3"),S=e("BMrR"),K=e("jCWc"),E=e("kPKH"),C=e("+L6B"),s=e("2/Rp"),P=e("miYZ"),f=e("tsqr"),i=e("tJVT"),v=e("/53C"),o=e.n(v),r=e("tL7X"),p=e("q1tI"),c=e.n(p),Y=e("Opyt"),$=e("Ty5D"),z=e("9kvl"),W=e("Vwxa"),n=e("nKUr"),de=e.n(n),u="ADFl";d.default=function(){var Q=Object($.k)(),w=Q.query,F=Object(p.useState)(!1),U=Object(i.a)(F,2),Z=U[0],X=U[1],L=Object(p.useState)("trc"),q=Object(i.a)(L,2),j=q[0],A=q[1],J=Object(p.useState)(""),I=Object(i.a)(J,2),T=I[0],M=I[1],ee=Object(p.useState)(1),N=Object(i.a)(ee,2),g=N[0],B=N[1],te=Object(p.useState)(""),je=Object(i.a)(te,2),ae=je[0],k=je[1],ge=Object(p.useState)(!1),me=Object(i.a)(ge,2),re=me[0],_e=me[1],ne=Object(p.useState)(!1),fe=Object(i.a)(ne,2),se=fe[0],ce=fe[1],ue=Object(p.useState)(""),pe=Object(i.a)(ue,2),b=pe[0],be=pe[1],ye={text:r.a.textLang("reg_tips42",b),href:"https://lite.liku.io",hrefText:r.a.textLang("reg_tips43",b)},ve=Object(p.useState)(ye),he=Object(i.a)(ve,2),le=he[0],Pe=he[1],Ue=e("Rz14"),Oe=e("bVUI"),oe=e("Rz14"),xe=e("EQY8"),ie=e("i9P/"),Re=e("jX7E"),a=[{img:Ue,title:"USDT",key:"trc",text:"\u6CE2\u573A(TRC20)",mText:r.a.textLang("reg_tips89",b),pText:"USDT (TRON-ERC20)"},{img:Oe,title:"USDT",key:"erc",text:"\u4EE5\u592A\u574A(ERC20)",mText:r.a.textLang("reg_tips90",b),pText:"USDT (Ethereum-ERC20)"}],l=[1,50,100,500];Object(p.useEffect)(function(){var m={text:j==="pyusd"?r.a.textLang("reg_tips58",b):r.a.textLang("reg_tips42",b),href:j==="pyusd"?"https://www.paypal.com/":"https://lite.liku.io",hrefText:j==="pyusd"?r.a.textLang("reg_tips59",b):r.a.textLang("reg_tips43",b)};Pe(m)},[j]);var _=function(y){var x=y.target.value;if(Number(x)<=1e5){if(x.includes(".")&&x.split(".")[1].length>2){var G="".concat(x.split(".")[0],".").concat(x.split(".")[1].substring(0,4));k(G);return}k(y.target.value)}},t=function(){var y=function(Ee,De){return De&&(Ee+=1),Ee<10?"0".concat(Ee):Ee},x=new Date;function G(){return"".concat(Math.floor(Math.random()*10)).concat(Math.floor(Math.random()*10)).concat(Math.floor(Math.random()*10))}var H=x.getFullYear().toString()+y(x.getMonth(),!0).toString()+y(x.getDate(),!1).toString()+y(x.getHours(),!1).toString()+y(x.getMinutes(),!1).toString()+y(x.getSeconds(),!0).toString()+x.getMilliseconds()+G()+G();M(H)},V=function(){var y=re?ae:g;if(!j){f.default.error("\u8BF7\u9009\u62E9\u652F\u4ED8\u65B9\u5F0F");return}if(!y){f.default.error("\u8BF7\u8F93\u5165\u8BA2\u5355\u91D1\u989D");return}if(y<1||y>1e5){f.default.error("\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u91D1\u989D\uFF0C1-100000 \u4E4B\u95F4\u6700\u591A\u4E24\u4F4D\u5C0F\u6570");return}if(!T){f.default.error("\u8BA2\u5355\u53F7\u5DF2\u5931\u6548\uFF0C\u8BF7\u5237\u65B0\u540E\u91CD\u8BD5");return}X(!0);var x={appId:w.id||"GbuOVtKF",chainType:j==="trc"?1:j==="pyusd"?3:2,fiatCurrency:"1",fiatAmount:y.toString(),merchantOrderNo:T};Y.g.createOrder(x).then(function(G){var H=G.data;z.c.push({pathname:"/payment/order",query:{appId:w.id||"GbuOVtKF",address:H.address,expiredAt:H.expiredAt,orderNo:H.orderNo,chainType:j==="trc"?"1":"2",crypto:H.crypto}})}).finally(function(){X(!1)})};return Object(p.useEffect)(function(){t()},[]),Object(p.useEffect)(function(){var m=localStorage.getItem("local");be(m)},[]),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(W.default,{background:"#f7f7f7",_nk:"".concat(u,"11")}),Object(n.jsx)(S.a,{className:"".concat(o.a.content),_nk:"".concat(u,"21"),children:Object(n.jsx)(E.a,{span:24,_nk:"".concat(u,"31"),children:Object(n.jsxs)("div",{className:"".concat(o.a.wrapper),_nk:"".concat(u,"41"),children:[Object(n.jsxs)("div",{className:"".concat(o.a.title," pc"),_nk:"".concat(u,"42"),children:["UPay ",r.a.textLang("reg_tips10",b)]}),Object(n.jsx)("div",{className:"".concat(o.a["payment-title"]),_nk:"".concat(u,"43"),children:r.a.textLang("reg_tips11",b)}),Object(n.jsx)("div",{className:"pc",_nk:"".concat(u,"44"),children:Object(n.jsx)("div",{className:"flex-s-c",_nk:"".concat(u,"45"),children:a.map(function(m){return Object(n.jsxs)("div",{style:{marginRight:10},className:"".concat(o.a["pay-item"]," ").concat(m.key===j?o.a["border-active"]:""," flex-s-c "),onClick:function(){return A(m.key)},_nk:"iAr".concat(u,"46"),children:[Object(n.jsx)("img",{className:"".concat(o.a["pay-item-img"]),src:m.img,alt:m.key,_nk:"".concat(u,"51")}),Object(n.jsxs)("div",{_nk:"".concat(u,"47"),children:[Object(n.jsx)("div",{className:"".concat(o.a["pay-item-title"]),_nk:"".concat(u,"48"),children:m.title}),Object(n.jsx)("div",{className:"".concat(o.a["pay-item-text"]),_nk:"".concat(u,"49"),children:m.text})]})]},m.key)})})}),Object(n.jsx)("div",{className:"h5",_nk:"".concat(u,"4a"),children:Object(n.jsxs)("div",{onClick:function(){return ce(!0)},className:"".concat(o.a["custom-select"]," flex-s-c"),_nk:"".concat(u,"4b"),children:[Object(n.jsx)("img",{src:j==="trc"?Ue:j==="erc"?Oe:oe,alt:"",_nk:"".concat(u,"52")}),j==="trc"?"USDT (TRON-ERC20)":j==="erc"?"USDT (Ethereum-ERC20)":"PYUSD (PayPal USD-ERC20)"]})}),Object(n.jsxs)("div",{className:"".concat(o.a["payment-title"]," amount"),_nk:"".concat(u,"4c"),children:[r.a.textLang("reg_tips14",b)," (",j==="pyusd"?"PYUSD":"USDT",")"]}),Object(n.jsx)("div",{className:"flex-sb-c",_nk:"".concat(u,"4d"),children:l.map(function(m){return Object(n.jsx)("div",{className:"".concat(o.a["money-item"]," ").concat(!re&&m===g?o.a["border-active"]:""," flex-c-c "),onClick:function(){B(m),_e(!1)},_nk:"iAr".concat(u,"4e"),children:m},m)})}),Object(n.jsxs)("div",{className:"".concat(o.a["custom-input"]," "),_nk:"".concat(u,"4f"),children:[Object(n.jsx)("input",{className:"".concat(re?o.a["border-active"]:""),onClick:function(){return _e(!0)},value:ae,onChange:_,onBlur:function(y){k(y.target.value?Number(y.target.value).toFixed(4):"")},type:"number",_nk:"".concat(u,"61")}),Object(n.jsx)("span",{className:"".concat(o.a.currency),_nk:"".concat(u,"71"),children:j==="pyusd"?"PYUSD":"USDT"})]}),Object(n.jsx)("div",{className:"".concat(o.a["custom-line"]," "),_nk:"".concat(u,"4g")}),Object(n.jsxs)("div",{className:"".concat(o.a["order-text"]," flex-s-c flex-w"),_nk:"".concat(u,"4h"),children:[Object(n.jsxs)("span",{style:{marginRight:"8px"},_nk:"".concat(u,"72"),children:[r.a.textLang("reg_tips16",b)," : ",T]}),Object(n.jsxs)("div",{onClick:t,className:"flex-s-c cp ".concat(o.a.refresh),_nk:"".concat(u,"4i"),children:[Object(n.jsx)("img",{src:Re,alt:"",_nk:"".concat(u,"53")}),r.a.textLang("reg_tips17",b)]})]}),Object(n.jsxs)("div",{className:"".concat(o.a.bot),_nk:"".concat(u,"4j"),children:[Object(n.jsxs)(s.a,{loading:Z,onClick:V,className:"".concat(o.a.btn," flex-c-c"),_nk:"".concat(u,"81"),children:[r.a.textLang("reg_tips18",b)," ",re?ae:g," ",j==="pyusd"?"PYUSD":"USDT"]}),Object(n.jsxs)("div",{className:"flex-c-c ".concat(o.a.href),_nk:"".concat(u,"4k"),children:[le.text,Object(n.jsxs)("a",{href:le.href,target:"_blank",_nk:"".concat(u,"91"),children:[le.hrefText,Object(n.jsx)("img",{className:"".concat(o.a["arrow-img"]),src:xe,alt:"",_nk:"".concat(u,"54")})]})]})]})]})})}),Object(n.jsxs)(D.a,{placement:"bottom",height:205,closable:!1,headerStyle:{display:"none"},onClose:function(){return ce(!1)},visible:se,_nk:"".concat(u,"a1"),children:[Object(n.jsx)("div",{className:"".concat(o.a["modal-title"]," flex-c-c"),_nk:"".concat(u,"4l"),children:r.a.textLang("reg_tips11",b)}),a.map(function(m){return Object(n.jsxs)("div",{onClick:function(){A(m.key),ce(!1)},className:"".concat(o.a["modal-item"]," flex-sb-c"),_nk:"iAr".concat(u,"4m"),children:[Object(n.jsxs)("span",{className:"flex-s-c",_nk:"".concat(u,"73"),children:[Object(n.jsx)("img",{src:m.img,alt:"",_nk:"".concat(u,"55")}),m.mText]}),m.key===j?Object(n.jsx)("img",{src:ie,alt:"",_nk:"".concat(u,"56")}):""]},m.key)})]},"bottom")]})}},"86AH":function(h,d,e){h.exports=e.p+"static/images/arrow-left.svg"},EQY8:function(h,d,e){h.exports=e.p+"static/images/arrow.svg"},HRse:function(h,d,e){h.exports=e.p+"static/images/close.svg"},I088:function(h,d,e){h.exports={container:"container___1_Aav",header:"header___2U6lY","lang-img":"lang-img___2y_U_","arrow-l-img":"arrow-l-img___1BpJU","modal-title":"modal-title___1rVzI","modal-item":"modal-item___2E5RR"}},Opyt:function(h,d,e){"use strict";e.d(d,"e",function(){return O}),e.d(d,"h",function(){return E}),e.d(d,"g",function(){return C}),e.d(d,"c",function(){return D}),e.d(d,"a",function(){return R}),e.d(d,"d",function(){return S}),e.d(d,"f",function(){return K}),e.d(d,"b",function(){return ge});var O={};e.r(O),e.d(O,"query",function(){return o}),e.d(O,"create",function(){return p}),e.d(O,"edit",function(){return Y}),e.d(O,"del",function(){return z}),e.d(O,"getScope",function(){return n}),e.d(O,"putScope",function(){return de}),e.d(O,"changePassword",function(){return u}),e.d(O,"updateStatus",function(){return Q}),e.d(O,"replaceOrder",function(){return w}),e.d(O,"updateAvatar",function(){return F});var D={};e.r(D),e.d(D,"statistic",function(){return X});var R={};e.r(R),e.d(R,"query",function(){return j}),e.d(R,"update",function(){return J}),e.d(R,"del",function(){return T}),e.d(R,"create",function(){return ee});var S={};e.r(S),e.d(S,"query",function(){return B});var K={};e.r(K),e.d(K,"query",function(){return ae});var E={};e.r(E),e.d(E,"query",function(){return _e}),e.d(E,"create",function(){return fe}),e.d(E,"edit",function(){return ce}),e.d(E,"del",function(){return pe}),e.d(E,"getScope",function(){return be}),e.d(E,"putScope",function(){return ye}),e.d(E,"changePassword",function(){return ve}),e.d(E,"updateStatus",function(){return he}),e.d(E,"replaceOrder",function(){return le}),e.d(E,"updateAvatar",function(){return Pe});var C={};e.r(C),e.d(C,"createOrder",function(){return Oe}),e.d(C,"queryOrder",function(){return xe});var s=e("qLMh"),P=e("k1fw"),f=e("9og8"),i=e("czNd"),v="1X1R";function o(a){return r.apply(this,arguments)}function r(){return r=Object(f.a)(Object(s.a)().mark(function a(l){return Object(s.a)().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(i.a)("/v1/api/order/list",{method:"POST",data:l}));case 1:case"end":return t.stop()}},a)})),r.apply(this,arguments)}function p(a){return c.apply(this,arguments)}function c(){return c=Object(f.a)(Object(s.a)().mark(function a(l){return Object(s.a)().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(i.a)("system/user",{method:"POST",data:l}));case 1:case"end":return t.stop()}},a)})),c.apply(this,arguments)}function Y(a){return $.apply(this,arguments)}function $(){return $=Object(f.a)(Object(s.a)().mark(function a(l){return Object(s.a)().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(i.a)("system/user",{method:"PUT",data:l}));case 1:case"end":return t.stop()}},a)})),$.apply(this,arguments)}function z(a){return W.apply(this,arguments)}function W(){return W=Object(f.a)(Object(s.a)().mark(function a(l){return Object(s.a)().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(i.a)("system/user/".concat(l.userId),{method:"DELETE"}));case 1:case"end":return t.stop()}},a)})),W.apply(this,arguments)}function n(a){return Object(i.a)("system/user/scope/".concat(a.userId),{method:"get"})}function de(a){return Object(i.a)("system/user/scope/".concat(a.userId),{method:"put",data:a})}function u(a){return Object(i.a)("system/user/pass/".concat(a.userId),{method:"put",data:Object(P.a)(Object(P.a)({},a),{},{confirmPass:a.pass})})}function Q(a,l){return Object(i.a)("system/user/status",{method:"put",params:{status:l},data:a})}function w(a){return Object(i.a)("/v1/api/order/renewal",{method:"POST",data:a})}function F(a,l,_){var t=new FormData;return t.append("file",l,_.name),t.append("userId","".concat(a.userId)),Object(i.a)("/system/user/avatar",{method:"POST",body:t})}var U=e("9kvl"),Z="rMl9";function X(){return L.apply(this,arguments)}function L(){return L=Object(f.a)(Object(s.a)().mark(function a(){return Object(s.a)().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.abrupt("return",Object(U.e)("/v1/api/merchant/statistic",{method:"GET"}));case 1:case"end":return _.stop()}},a)})),L.apply(this,arguments)}var q="isKd";function j(a){return A.apply(this,arguments)}function A(){return A=Object(f.a)(Object(s.a)().mark(function a(l){return Object(s.a)().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(U.e)("/v1/api/address/list",{method:"POST",data:l}));case 1:case"end":return t.stop()}},a)})),A.apply(this,arguments)}function J(a){return I.apply(this,arguments)}function I(){return I=Object(f.a)(Object(s.a)().mark(function a(l){return Object(s.a)().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(U.e)("/v1/api/address/update",{method:"POST",data:l}));case 1:case"end":return t.stop()}},a)})),I.apply(this,arguments)}function T(a){return M.apply(this,arguments)}function M(){return M=Object(f.a)(Object(s.a)().mark(function a(l){return Object(s.a)().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(U.e)("/v1/api/address/delete",{method:"POST",data:l}));case 1:case"end":return t.stop()}},a)})),M.apply(this,arguments)}function ee(a){return N.apply(this,arguments)}function N(){return N=Object(f.a)(Object(s.a)().mark(function a(l){return Object(s.a)().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(U.e)("/v1/api/address/create",{method:"POST",data:l}));case 1:case"end":return t.stop()}},a)})),N.apply(this,arguments)}var g="7PFW";function B(a){return te.apply(this,arguments)}function te(){return te=Object(f.a)(Object(s.a)().mark(function a(l){return Object(s.a)().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(U.e)("/v1/api/merchantbill/list",{method:"POST",data:l}));case 1:case"end":return t.stop()}},a)})),te.apply(this,arguments)}var je="004Q";function ae(a){return k.apply(this,arguments)}function k(){return k=Object(f.a)(Object(s.a)().mark(function a(l){return Object(s.a)().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(i.a)("/v1/api/withdraw/list",{method:"POST",data:l}));case 1:case"end":return t.stop()}},a)})),k.apply(this,arguments)}var ge=e("1dju"),me=e("oBTY"),re="lhz8";function _e(a){return ne.apply(this,arguments)}function ne(){return ne=Object(f.a)(Object(s.a)().mark(function a(l){var _;return Object(s.a)().wrap(function(V){for(;;)switch(V.prev=V.next){case 0:return _=Object(P.a)(Object(P.a)({},l),{},{range:[].concat(Object(me.a)(l.range),[{renewal_num:{min:"1",max:"99"}}])}),V.abrupt("return",Object(i.a)("/v1/api/order/list",{method:"POST",data:_}));case 2:case"end":return V.stop()}},a)})),ne.apply(this,arguments)}function fe(a){return se.apply(this,arguments)}function se(){return se=Object(f.a)(Object(s.a)().mark(function a(l){return Object(s.a)().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(i.a)("system/user",{method:"POST",data:l}));case 1:case"end":return t.stop()}},a)})),se.apply(this,arguments)}function ce(a){return ue.apply(this,arguments)}function ue(){return ue=Object(f.a)(Object(s.a)().mark(function a(l){return Object(s.a)().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(i.a)("system/user",{method:"PUT",data:l}));case 1:case"end":return t.stop()}},a)})),ue.apply(this,arguments)}function pe(a){return b.apply(this,arguments)}function b(){return b=Object(f.a)(Object(s.a)().mark(function a(l){return Object(s.a)().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(i.a)("system/user/".concat(l.userId),{method:"DELETE"}));case 1:case"end":return t.stop()}},a)})),b.apply(this,arguments)}function be(a){return Object(i.a)("system/user/scope/".concat(a.userId),{method:"get"})}function ye(a){return Object(i.a)("system/user/scope/".concat(a.userId),{method:"put",data:a})}function ve(a){return Object(i.a)("system/user/pass/".concat(a.userId),{method:"put",data:Object(P.a)(Object(P.a)({},a),{},{confirmPass:a.pass})})}function he(a,l){return Object(i.a)("system/user/status",{method:"put",params:{status:l},data:a})}function le(a){return Object(i.a)("/v1/api/order/renewal",{method:"POST",data:a})}function Pe(a,l,_){var t=new FormData;return t.append("file",l,_.name),t.append("userId","".concat(a.userId)),Object(i.a)("/system/user/avatar",{method:"POST",body:t})}var Ue="L90q";function Oe(a){return oe.apply(this,arguments)}function oe(){return oe=Object(f.a)(Object(s.a)().mark(function a(l){return Object(s.a)().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(i.a)("/v1/api/open/order/create",{method:"POST",data:l}));case 1:case"end":return t.stop()}},a)})),oe.apply(this,arguments)}function xe(a){return ie.apply(this,arguments)}function ie(){return ie=Object(f.a)(Object(s.a)().mark(function a(l){return Object(s.a)().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(i.a)("/v1/api/open/order/query",{method:"POST",data:l}));case 1:case"end":return t.stop()}},a)})),ie.apply(this,arguments)}var Re="bgb1"},Rz14:function(h,d,e){h.exports=e.p+"static/images/trc.svg"},Vwxa:function(h,d,e){"use strict";e.r(d);var O=e("qVdP"),D=e("jsC+"),R=e("bbsP"),S=e("/wGt"),K=e("lUTK"),E=e("BvKs"),C=e("tJVT"),s=e("tL7X"),P=e("q1tI"),f=e.n(P),i=e("I088"),v=e.n(i),o=e("9kvl"),r=e("nKUr"),p=e.n(r),c="KQv0",Y=function(z){var W=z.background,n=e("ibdd"),de=e("86AH"),u=e("i9P/"),Q=e("HRse"),w=Object(P.useState)(""),F=Object(C.a)(w,2),U=F[0],Z=F[1],X=Object(P.useState)(!1),L=Object(C.a)(X,2),q=L[0],j=L[1],A=Object(P.useState)(!1),J=Object(C.a)(A,2),I=J[0],T=J[1];Object(P.useEffect)(function(){var g=window.availHeight||document.body.offsetWidth;j(g<769),window.addEventListener("resize",function(){g=window.availHeight||document.body.offsetWidth,j(g<769)})},[]),Object(P.useEffect)(function(){var g=localStorage.getItem("local")||navigator.language||s.a.getLocal();Z(["en","en-US"].includes(g)?"en":"cn"),localStorage.getItem("local")||localStorage.setItem("local",["en","en-US"].includes(g)?"en":"cn")},[U]);var M=function(){var B=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";Z(B),localStorage.setItem("local",B),location.reload()},ee=Object(P.useCallback)(function(g){var B=g.key;M(B)},[]),N=Object(r.jsxs)(E.a,{className:v.a.menu,selectedKeys:[],onClick:ee,_nk:"".concat(c,"11"),children:[Object(r.jsx)(E.a.Item,{_nk:"".concat(c,"21"),children:Object(r.jsx)("div",{className:"flex-s-c",_nk:"".concat(c,"31"),children:"\u7B80\u4F53\u4E2D\u6587"})},"cn"),Object(r.jsx)(E.a.Item,{_nk:"".concat(c,"22"),children:Object(r.jsx)("div",{className:"flex-s-c",_nk:"".concat(c,"32"),children:"English"})},"en")]});return q?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{className:"".concat(v.a.header," flex-sb-c"),_nk:"".concat(c,"33"),children:[Object(r.jsx)("img",{onClick:function(){return o.c.goBack()},src:de,className:"".concat(v.a["arrow-l-img"]),alt:"",_nk:"".concat(c,"41")}),Object(r.jsxs)("span",{_nk:"".concat(c,"51"),children:["UPay ",s.a.textLang("reg_tips10",U)]}),Object(r.jsx)("img",{onClick:function(){return T(!0)},src:n,className:"".concat(v.a["lang-img"]),alt:"",_nk:"".concat(c,"42")})]}),Object(r.jsxs)(S.a,{placement:"bottom",height:205,closable:!1,headerStyle:{display:"none"},onClose:function(){return T(!1)},visible:I,_nk:"".concat(c,"61"),children:[Object(r.jsxs)("div",{className:"".concat(v.a["modal-title"]," flex-c-c"),_nk:"".concat(c,"34"),children:[s.a.textLang("reg_tips157",U),Object(r.jsx)("img",{onClick:function(){return T(!1)},src:Q,alt:"",_nk:"".concat(c,"43")})]}),Object(r.jsxs)("div",{onClick:function(){return M("en")},className:"".concat(v.a["modal-item"]," flex-sb-c"),_nk:"".concat(c,"35"),children:[Object(r.jsxs)("span",{_nk:"".concat(c,"52"),children:["English",U]}),U==="cn"?"":Object(r.jsx)("img",{src:u,alt:"",_nk:"".concat(c,"44")})]}),Object(r.jsxs)("div",{onClick:function(){return M("cn")},className:"".concat(v.a["modal-item"]," flex-sb-c"),_nk:"".concat(c,"36"),children:[Object(r.jsx)("span",{_nk:"".concat(c,"53"),children:"\u7B80\u4F53\u4E2D\u6587"}),U==="en"?"":Object(r.jsx)("img",{src:u,alt:"",_nk:"".concat(c,"45")})]})]},"bottom")]}):Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{style:{paddingRight:20,height:45,background:W,width:"100%"},className:"flex-e-c",_nk:"".concat(c,"37"),children:Object(r.jsx)(D.a,{overlay:N,overlayClassName:v.a.container,_nk:"".concat(c,"71"),children:Object(r.jsxs)("span",{className:"".concat(v.a.action," ").concat(v.a.account," flex-s-c"),_nk:"".concat(c,"54"),children:[Object(r.jsx)("img",{style:{width:"16px",height:"16px",marginRight:"8px"},src:n,alt:"cn",_nk:"".concat(c,"46")}),Object(r.jsx)("span",{className:"".concat(v.a.name," anticon"),_nk:"".concat(c,"55"),children:U==="cn"?"\u7B80\u4F53\u4E2D\u6587":"English"})]})})})})};d.default=Y},bVUI:function(h,d,e){h.exports=e.p+"static/images/erc.svg"},"i9P/":function(h,d,e){h.exports=e.p+"static/images/selected.svg"},ibdd:function(h,d,e){h.exports=e.p+"static/images/lang.svg"},jX7E:function(h,d,e){h.exports=e.p+"static/images/refresh.svg"}}]);

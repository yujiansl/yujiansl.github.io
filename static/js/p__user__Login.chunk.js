(window.webpackJsonp=window.webpackJsonp||[]).push([[11,103],{DAaq:function(P,l,e){"use strict";e.d(l,"b",function(){return h}),e.d(l,"a",function(){return D}),e.d(l,"c",function(){return g});var j=e("qLMh"),_=e("9og8"),C=e("9kvl"),E="d8VO";function h(c){return U.apply(this,arguments)}function U(){return U=Object(_.a)(Object(j.a)().mark(function c(O){return Object(j.a)().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",Object(C.e)("/v1/api/merchant/update",{method:"POST",data:O}));case 1:case"end":return a.stop()}},c)})),U.apply(this,arguments)}function D(){return d.apply(this,arguments)}function d(){return d=Object(_.a)(Object(j.a)().mark(function c(){return Object(j.a)().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.abrupt("return",Object(C.e)("/v1/api/merchant/detail",{method:"POST"}));case 1:case"end":return p.stop()}},c)})),d.apply(this,arguments)}function g(c){return b.apply(this,arguments)}function b(){return b=Object(_.a)(Object(j.a)().mark(function c(O){return Object(j.a)().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",Object(C.e)("/v1/api/withdraw/merchant/create",{method:"POST",data:O}));case 1:case"end":return a.stop()}},c)})),b.apply(this,arguments)}},IQRO:function(P,l,e){P.exports={container:"container___1uJsr",menu:"menu___1q5Bj",right:"right___31nBQ",action:"action___3BVYh",search:"search___Banr6",account:"account___2y9w6",avatar:"avatar___WyhZy",dark:"dark___1Nivb"}},ObQG:function(P,l,e){P.exports={container:"container___1sYa-",lang:"lang___l6cji",content:"content___2zk1-",top:"top___1C1Zi",header:"header___5xZ3f",logo:"logo___2hXsy",titleBox:"titleBox___1OZ7L",title:"title___1-xuF","title-desc":"title-desc___1bGDk",desc:"desc___-njyT",main:"main___x4OjT",icon:"icon___rzGKO",other:"other___lLyaU",register:"register___11Twg",prefixIcon:"prefixIcon___23Xrx"}},PdsH:function(P,l,e){"use strict";e.r(l);var j=e("y8nQ"),_=e("Vl3Y"),C=e("miYZ"),E=e("tsqr"),h=e("qLMh"),U=e("k1fw"),D=e("9og8"),d=e("tJVT"),g=e("fOrg"),b=e("+KLJ"),c=e("Z55w"),O=e("B7OH"),p=e("ZPOE"),a=e("tL7X"),$=e("VMEa"),s=e("Qurx"),o=e("q1tI"),y=e.n(o),v=e("P52E"),i=e.n(v),L=e("9kvl"),V=e("Tb/n"),F=e("ObQG"),R=e.n(F),z=e("og4B"),S=e("DAaq"),r=e("nKUr"),H=e.n(r),t="orTG",J=function(n){var M=n.content;return Object(r.jsx)(b.a,{style:{marginBottom:24},message:M,type:"error",showIcon:!0,_nk:"".concat(t,"11")})},Q=function(){var n=Object(L.h)("@@initialState"),M=n.refresh,ie=n.initialState,ae=Object(o.useRef)(),G=y.a.createRef(),re=Object(o.useState)(""),A=Object(d.a)(re,2),m=A[0],f=A[1];a.a.setIntl(Object(L.g)());var w=Object(v.useAliveController)(),N=w.clear,X=Object(o.useState)(!1),ee=Object(d.a)(X,2),ne=ee[0],te=ee[1],_e=Object(o.useState)({}),Y=Object(d.a)(_e,2),le=Y[0],fe=Y[1],Ee=Object(o.useState)("account"),Oe=Object(d.a)(Ee,1),ce=Oe[0],pe=function(){var x=Object(D.a)(Object(h.a)().mark(function T(I){var W;return Object(h.a)().wrap(function(B){for(;;)switch(B.prev=B.next){case 0:W=G.current||{},te(!0),Object(c.login)({name:I.name,password:"".concat(I.password)}).then(function(){var Pe=Object(D.a)(Object(h.a)().mark(function me(je){var se,oe,q,K,he;return Object(h.a)().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:(se=G.current)===null||se===void 0||se.drawCodeImg(),q=Object(U.a)({},je.data),O.d.set(JSON.stringify(q)),localStorage.setItem("name",(oe=q.user)===null||oe===void 0?void 0:oe.name),O.c.set(q.accessToken),a.a.success("pages.login.success"),K="",u.t0=q.roleId,u.next=u.t0===1?10:u.t0===2?12:u.t0===3?14:16;break;case 10:return K="admin",u.abrupt("break",17);case 12:return K="merchant",u.abrupt("break",17);case 14:return K="agent",u.abrupt("break",17);case 16:return u.abrupt("break",17);case 17:if(K){u.next=20;break}return localStorage.clear(),u.abrupt("return");case 20:if(!(K==="merchant")){u.next=25;break}return u.next=23,Object(S.a)();case 23:he=u.sent,localStorage.setItem("appid",he.data.appId);case 25:return L.c.replace("/".concat(K,"/index")),u.next=28,M();case 28:K!=="merchant"&&a.a.setLocal("zh-CN");case 29:case"end":return u.stop()}},me)}));return function(me){return Pe.apply(this,arguments)}}()).catch(function(){fe({status:"error",type:ce}),te(!1)}).finally(function(){W==null||W.drawCodeImg()});case 3:case"end":return B.stop()}},T)}));return function(I){return x.apply(this,arguments)}}(),ve=function(){var x=Object(D.a)(Object(h.a)().mark(function T(I){var W;return Object(h.a)().wrap(function(B){for(;;)switch(B.prev=B.next){case 0:if(!(I.captcha.toString().toUpperCase()!==m)){B.next=4;break}return E.default.error("\u8F93\u5165\u7684\u9A8C\u8BC1\u7801\u9519\u8BEF"),(W=G.current)===null||W===void 0||W.drawCodeImg(),B.abrupt("return");case 4:return B.next=6,pe(I);case 6:case"end":return B.stop()}},T)}));return function(I){return x.apply(this,arguments)}}(),ue=le.status,de=le.type;window.addEventListener("keydown",function(x){});var ge=function(T){f(T)};return Object(o.useEffect)(function(){document.title="UPay \u767B\u5F55"},[]),Object(r.jsxs)("div",{className:R.a.container,_nk:"".concat(t,"21"),children:[Object(r.jsx)("div",{hidden:!p.a.i18n,style:{padding:"20px 40px"},className:"flex-e-c cp","data-lang":!0,_nk:"".concat(t,"22"),children:L.a&&Object(r.jsx)(z.a,{color:"#fff",_nk:"".concat(t,"31")})}),Object(r.jsx)("div",{className:R.a.content,_nk:"".concat(t,"23"),children:Object(r.jsxs)("div",{className:R.a.main,_nk:"".concat(t,"24"),children:[Object(r.jsxs)("div",{className:R.a.titleBox,_nk:"".concat(t,"25"),children:[Object(r.jsx)("span",{className:R.a.title,_nk:"".concat(t,"41"),children:"UPay"}),Object(r.jsx)("span",{className:R.a["title-desc"],_nk:"".concat(t,"42"),children:"\u7BA1\u7406\u540E\u53F0"})]}),Object(r.jsxs)($.a,{initialValues:{autoLogin:!0},formRef:ae,submitter:{searchConfig:{submitText:a.a.text("pages.login.submit")},render:function(T,I){return I.pop()},submitButtonProps:{loading:ne,size:"large",style:{width:"100%"}}},onFinish:function(){var x=Object(D.a)(Object(h.a)().mark(function T(I){return Object(h.a)().wrap(function(Z){for(;;)switch(Z.prev=Z.next){case 0:return Z.next=2,ve(I);case 2:case"end":return Z.stop()}},T)}));return function(T){return x.apply(this,arguments)}}(),_nk:"".concat(t,"51"),children:[ue==="error"&&de==="account"&&Object(r.jsx)(J,{content:a.a.text("pages.login.accountLogin.errorMessage"),_nk:"".concat(t,"61")}),ce==="account"&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(s.a,{name:"name",placeholder:a.a.text("pages.login.username.placeholder"),rules:[{required:!0,message:a.a.text("pages.login.username.required")}],_nk:"".concat(t,"71")}),Object(r.jsx)(s.a.Password,{name:"password",placeholder:a.a.text("pages.login.password.placeholder"),rules:[{required:!0,message:a.a.text("pages.login.password.required")}],_nk:"".concat(t,"81")}),Object(r.jsx)(_.a.Item,{_nk:"".concat(t,"82"),children:Object(r.jsxs)("div",{className:"flex-sb-s mb0",_nk:"".concat(t,"26"),children:[Object(r.jsx)(s.a,{valueType:"number",name:"captcha",style:{marginBottom:"0"},placeholder:a.a.text("reg_tip5"),rules:[{required:!0,message:a.a.text("reg_tip5")}],_nk:"".concat(t,"72")}),Object(r.jsx)(V.default,{onRef:G,width:120,height:42,length:4,change:ge,_nk:"".concat(t,"91")})]})})]}),ue==="error"&&de==="mobile"&&Object(r.jsx)(J,{content:"\u9A8C\u8BC1\u7801\u9519\u8BEF",_nk:"".concat(t,"62")})]}),Object(r.jsxs)("div",{className:"flex-sb-c",style:{marginTop:24},_nk:"".concat(t,"27"),children:[Object(r.jsx)("a",{href:"https://upay.ink/",target:"_blank",_nk:"".concat(t,"a1"),children:a.a.text("reg_tip7")}),Object(r.jsx)("a",{onClick:function(){return L.c.push("/user/register")},_nk:"".concat(t,"a2"),children:a.a.text("reg_tip8")})]})]})})]})};l.default=Q},"Tb/n":function(P,l,e){"use strict";e.r(l);var j=e("tJVT"),_=e("q1tI"),C=e.n(_),E=e("nKUr"),h=e.n(E),U="13Vp",D=function(g){var b="ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890",c=6,O=50,p=g.width,a=p===void 0?120:p,$=g.height,s=$===void 0?40:$,o=g.letters,y=o===void 0?b:o,v=g.length,i=v===void 0?4:v,L=g.minFontSize,V=L===void 0?20:L,F=g.maxFontSize,R=F===void 0?30:F,z=g.change,S=Object(_.useRef)(null),r=Object(_.useState)(),H=Object(j.a)(r,2),t=H[0],J=H[1];Object(_.useEffect)(function(){J(S.current.getContext("2d"))},[S]),Object(_.useEffect)(function(){t&&k()},[t]);var Q=function(){k()};Object(_.useImperativeHandle)(g.onRef,function(){return{drawCodeImg:k}});var k=function(){t.fillStyle=M(200,230),t.fillRect(0,0,a,s),ie(),ae(),G()},n=function(m,f){return Math.floor(Math.random()*(f-m)+m)},M=function(m,f){return"rgb(".concat(n(m,f),", ").concat(n(m,f),", ").concat(n(m,f),")")},ie=function(){for(var m="",f=0;f<i;f++){var w=n(V,R),N=R-V+6,X=(a-N*i)/(i+1),ee=(f+1)*X+N*f,ne=n(22,s),te=n(-40,40),_e=n(0,y.length),Y=y[_e];t.textBaseline="alphabetic",t.font="".concat(w,"px Simhei"),t.fillStyle=M(60,150),t.save(),t.translate(ee,ne),t.rotate(te*Math.PI/180),t.fillText(Y,0,0),t.restore(),m+=Y}z(m)},ae=function(){for(var m=0;m<c;m++){var f=n(0,t.canvas.clientWidth),w=n(0,t.canvas.clientHeight),N=n(0,t.canvas.clientWidth),X=n(0,t.canvas.clientHeight);t.beginPath(),t.moveTo(f,w),t.lineTo(N,X),t.lineWidth=1,t.strokeStyle=M(150,250),t.stroke()}},G=function(){for(var m=0;m<O;m++){var f=n(0,t.canvas.clientWidth),w=n(0,t.canvas.clientHeight),N=n(1,2);t.beginPath(),t.arc(f,w,N,0,2*Math.PI),t.fillStyle=M(100,200),t.fill()}},re={width:a,height:s,border:"1px solid #d9d9d9"};return Object(E.jsx)("div",{style:re,_nk:"".concat(U,"11"),children:Object(E.jsx)("canvas",{onClick:Q,ref:S,width:a-2,height:s-2,_nk:"".concat(U,"21")})})};l.default=D},Z55w:function(P,l,e){"use strict";e.d(l,"logout",function(){return g}),e.d(l,"login",function(){return c}),e.d(l,"register",function(){return p});var j=e("k1fw"),_=e("qLMh"),C=e("9og8"),E=e("9kvl"),h=e("B7OH"),U=e("vty2"),D=e.n(U),d="2bjP";function g(){return b.apply(this,arguments)}function b(){return b=Object(C.a)(Object(_.a)().mark(function o(){var y;return Object(_.a)().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return y=h.c.get(),i.abrupt("return",Object(E.e)("oauth2/revoke",{method:"POST",headers:{Authorization:"Basic dWk6dWk="},params:{token:y}}));case 2:case"end":return i.stop()}},o)})),b.apply(this,arguments)}function c(o){return O.apply(this,arguments)}function O(){return O=Object(C.a)(Object(_.a)().mark(function o(y){return Object(_.a)().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",Object(E.e)("/v1/api/open/auth/login",{method:"POST",headers:{},data:Object(j.a)({},y)}));case 1:case"end":return i.stop()}},o)})),O.apply(this,arguments)}function p(o){return a.apply(this,arguments)}function a(){return a=Object(C.a)(Object(_.a)().mark(function o(y){return Object(_.a)().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",Object(E.e)("/v1/api/open/auth/signup",{method:"POST",headers:{},data:Object(j.a)({},y)}));case 1:case"end":return i.stop()}},o)})),a.apply(this,arguments)}function $(){return s.apply(this,arguments)}function s(){return s=Object(C.a)(Object(_.a)().mark(function o(){return Object(_.a)().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.abrupt("return",Object(E.e)("system/menu/router",{method:"GET"}));case 1:case"end":return v.stop()}},o)})),s.apply(this,arguments)}},dm4i:function(P,l,e){P.exports=e.p+"static/images/lang-white.svg"},ibdd:function(P,l,e){P.exports=e.p+"static/images/lang.svg"},og4B:function(P,l,e){"use strict";var j=e("qVdP"),_=e("jsC+"),C=e("lUTK"),E=e("BvKs"),h=e("tJVT"),U=e("tL7X"),D=e("B7OH"),d=e("q1tI"),g=e.n(d),b=e("IQRO"),c=e.n(b),O=e("9kvl"),p=e("ZPOE"),a=e("nKUr"),$=e.n(a),s="mTWg",o=function(v){var i=v.color,L=e("ibdd"),V=e("dm4i"),F=Object(d.useState)(""),R=Object(h.a)(F,2),z=R[0],S=R[1],r=Object(d.useState)(),H=Object(h.a)(r,2),t=H[0],J=H[1];Object(d.useEffect)(function(){var n,M=((n=JSON.parse(D.d.get()))===null||n===void 0?void 0:n.roleId)||0;J(M)},[t]),Object(d.useEffect)(function(){S(U.a.getLocal())},[z]);var Q=Object(d.useCallback)(function(n){var M=n.key;Object(O.f)(M==="en"?"en-US":"zh-CN")},[]),k=Object(a.jsxs)(E.a,{className:c.a.menu,selectedKeys:[],onClick:Q,_nk:"".concat(s,"11"),children:[Object(a.jsx)(E.a.Item,{_nk:"".concat(s,"21"),children:Object(a.jsx)("div",{className:"flex-s-c",_nk:"".concat(s,"31"),children:"\u7B80\u4F53\u4E2D\u6587"})},"cn"),Object(a.jsx)(E.a.Item,{_nk:"".concat(s,"22"),children:Object(a.jsx)("div",{className:"flex-s-c",_nk:"".concat(s,"32"),children:"English"})},"en")]});return t===2||!Object(D.e)()?Object(a.jsx)(_.a,{overlay:k,overlayClassName:c.a.container,_nk:"".concat(s,"41"),children:Object(a.jsxs)("span",{className:"".concat(c.a.action," ").concat(c.a.account," flex-s-c"),_nk:"".concat(s,"51"),children:[Object(a.jsx)("img",{style:{width:"16px",height:"16px",marginRight:"8px"},src:i?V:L,alt:"cn",_nk:"".concat(s,"61")}),Object(a.jsx)("span",{style:{color:i||""},className:"".concat(c.a.name," anticon"),_nk:"".concat(s,"52"),children:p.a.i18n&&z==="zh-CN"?"\u7B80\u4F53\u4E2D\u6587":"English"})]})}):""};l.a=o},vty2:function(P,l){var e="v3EN"}}]);

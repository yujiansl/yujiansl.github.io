(window.webpackJsonp=window.webpackJsonp||[]).push([[11,104],{IQRO:function(D,d,e){D.exports={container:"container___1uJsr",menu:"menu___1q5Bj",right:"right___31nBQ",action:"action___3BVYh",search:"search___Banr6",account:"account___2y9w6",avatar:"avatar___WyhZy",dark:"dark___1Nivb"}},ObQG:function(D,d,e){D.exports={container:"container___1sYa-",lang:"lang___l6cji",content:"content___2zk1-",top:"top___1C1Zi",header:"header___5xZ3f",logo:"logo___2hXsy",titleBox:"titleBox___1OZ7L",title:"title___1-xuF","title-desc":"title-desc___1bGDk",desc:"desc___-njyT",main:"main___x4OjT",icon:"icon___rzGKO",other:"other___lLyaU",register:"register___11Twg",prefixIcon:"prefixIcon___23Xrx"}},PdsH:function(D,d,e){"use strict";e.r(d);var N=e("y8nQ"),l=e("Vl3Y"),W=e("miYZ"),h=e("tsqr"),E=e("qLMh"),x=e("k1fw"),M=e("9og8"),p=e("tJVT"),g=e("fOrg"),I=e("+KLJ"),y=e("Z55w"),C=e("B7OH"),B=e("ZPOE"),t=e("tL7X"),w=e("VMEa"),n=e("Qurx"),s=e("q1tI"),v=e.n(s),m=e("P52E"),i=e.n(m),U=e("9kvl"),$=e("Tb/n"),S=e("ObQG"),P=e.n(S),F=e("og4B"),r=e("nKUr"),H=e.n(r),_="orTG",a=function(O){var o=O.content;return Object(r.jsx)(I.a,{style:{marginBottom:24},message:o,type:"error",showIcon:!0,_nk:"".concat(_,"11")})},z=function(){var O=Object(U.h)("@@initialState"),o=O.refresh,Z=O.initialState,G=v.a.createRef(),ne=Object(s.useState)(""),Y=Object(p.a)(ne,2),q=Y[0],A=Y[1];t.a.setIntl(Object(U.g)());var c=Object(m.useAliveController)(),u=c.clear,k=Object(s.useState)(!1),L=Object(p.a)(k,2),Q=L[0],ee=L[1],oe=Object(s.useState)({}),te=Object(p.a)(oe,2),ae=te[0],re=te[1],he=Object(s.useState)("account"),Ee=Object(p.a)(he,1),se=Ee[0],Oe=function(){var K=Object(M.a)(Object(E.a)().mark(function R(j){return Object(E.a)().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return ee(!0),T.abrupt("return",Object(y.login)({name:j.name,password:"".concat(j.password)}).then(function(){var b=Object(M.a)(Object(E.a)().mark(function ce(ue){var _e,de,me,V;return Object(E.a)().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return console.log("res",ue),_e=Object(x.a)({},ue.data),f.next=4,u();case 4:C.d.set(JSON.stringify(_e)),C.c.set(_e.accessToken),de=U.c.location.query,me=de.redirect,t.a.success("pages.login.success"),V="",f.t0=_e.roleId,f.next=f.t0===1?12:f.t0===2?14:f.t0===3?16:18;break;case 12:return V="admin",f.abrupt("break",19);case 14:return V="merchant",f.abrupt("break",19);case 16:return V="agent",f.abrupt("break",19);case 18:return f.abrupt("break",19);case 19:return V||localStorage.clear(),U.c.replace(me||"/".concat(V,"/index")),f.next=23,o();case 23:case"end":return f.stop()}},ce)}));return function(ce){return b.apply(this,arguments)}}()).catch(function(){var b;t.a.error("pages.login.failure"),re({status:"error",type:se}),ee(!1),(b=G.current)===null||b===void 0||b.drawCodeImg()}));case 2:case"end":return T.stop()}},R)}));return function(j){return K.apply(this,arguments)}}(),fe=function(){var K=Object(M.a)(Object(E.a)().mark(function R(j){var X;return Object(E.a)().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:if(console.log(j.captcha.toString().toUpperCase(),q,77777),!(j.captcha.toString().toUpperCase()!==q)){b.next=5;break}return h.default.error("\u8F93\u5165\u7684\u9A8C\u8BC1\u7801\u9519\u8BEF"),(X=G.current)===null||X===void 0||X.drawCodeImg(),b.abrupt("return");case 5:return b.next=7,Oe(j);case 7:case"end":return b.stop()}},R)}));return function(j){return K.apply(this,arguments)}}(),ie=ae.status,le=ae.type,pe=function(R){A(R)};return Object(s.useEffect)(function(){document.title="UPay \u767B\u5F55"},[]),Object(r.jsxs)("div",{className:P.a.container,_nk:"".concat(_,"21"),children:[Object(r.jsx)("div",{hidden:!B.b.i18n,style:{padding:"20px 40px"},className:"flex-e-c cp","data-lang":!0,_nk:"".concat(_,"22"),children:U.a&&Object(r.jsx)(F.a,{color:"#fff",_nk:"".concat(_,"31")})}),Object(r.jsx)("div",{className:P.a.content,_nk:"".concat(_,"23"),children:Object(r.jsxs)("div",{className:P.a.main,_nk:"".concat(_,"24"),children:[Object(r.jsxs)("div",{className:P.a.titleBox,_nk:"".concat(_,"25"),children:[Object(r.jsx)("span",{className:P.a.title,_nk:"".concat(_,"41"),children:"Paye"}),Object(r.jsx)("span",{className:P.a["title-desc"],_nk:"".concat(_,"42"),children:"\u7BA1\u7406\u540E\u53F0"})]}),Object(r.jsxs)(w.a,{initialValues:{autoLogin:!0},submitter:{searchConfig:{submitText:t.a.text("pages.login.submit")},render:function(R,j){return j.pop()},submitButtonProps:{loading:Q,size:"large",style:{width:"100%"}}},onFinish:function(){var K=Object(M.a)(Object(E.a)().mark(function R(j){return Object(E.a)().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return T.next=2,fe(j);case 2:case"end":return T.stop()}},R)}));return function(R){return K.apply(this,arguments)}}(),_nk:"".concat(_,"51"),children:[ie==="error"&&le==="account"&&Object(r.jsx)(a,{content:t.a.text("pages.login.accountLogin.errorMessage"),_nk:"".concat(_,"61")}),se==="account"&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(n.a,{name:"name",placeholder:t.a.text("pages.login.username.placeholder"),rules:[{required:!0,message:t.a.text("pages.login.username.required")}],_nk:"".concat(_,"71")}),Object(r.jsx)(n.a.Password,{name:"password",placeholder:t.a.text("pages.login.password.placeholder"),rules:[{required:!0,message:t.a.text("pages.login.password.required")}],_nk:"".concat(_,"81")}),Object(r.jsx)(l.a.Item,{_nk:"".concat(_,"82"),children:Object(r.jsxs)("div",{className:"flex-sb-s mb0",_nk:"".concat(_,"26"),children:[Object(r.jsx)(n.a,{valueType:"number",name:"captcha",style:{marginBottom:"0"},placeholder:t.a.text("pages.login.password.placeholder"),rules:[{required:!0,message:t.a.text("pages.login.password.required")}],_nk:"".concat(_,"72")}),Object(r.jsx)($.default,{onRef:G,width:120,height:42,length:4,change:pe,_nk:"".concat(_,"91")})]})})]}),ie==="error"&&le==="mobile"&&Object(r.jsx)(a,{content:"\u9A8C\u8BC1\u7801\u9519\u8BEF",_nk:"".concat(_,"62")})]}),Object(r.jsxs)("div",{className:"flex-sb-c",style:{marginTop:24},_nk:"".concat(_,"27"),children:[Object(r.jsx)("a",{href:"https://upay.ink/",target:"_blank",_nk:"".concat(_,"a1"),children:t.a.text("reg_tip7")}),Object(r.jsx)("a",{onClick:function(){return U.c.push("/user/register")},_nk:"".concat(_,"a2"),children:t.a.text("reg_tip8")})]})]})})]})};d.default=z},"Tb/n":function(D,d,e){"use strict";e.r(d);var N=e("tJVT"),l=e("q1tI"),W=e.n(l),h=e("nKUr"),E=e.n(h),x="13Vp",M=function(g){var I="ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890",y=6,C=50,B=g.width,t=B===void 0?120:B,w=g.height,n=w===void 0?40:w,s=g.letters,v=s===void 0?I:s,m=g.length,i=m===void 0?4:m,U=g.minFontSize,$=U===void 0?20:U,S=g.maxFontSize,P=S===void 0?30:S,F=g.change,r=Object(l.useRef)(null),H=Object(l.useState)(),_=Object(N.a)(H,2),a=_[0],z=_[1];Object(l.useEffect)(function(){z(r.current.getContext("2d"))},[r]),Object(l.useEffect)(function(){a&&O()},[a]);var J=function(){O()};Object(l.useImperativeHandle)(g.onRef,function(){return{drawCodeImg:O}});var O=function(){a.fillStyle=Z(200,230),a.fillRect(0,0,t,n),G(),ne(),Y()},o=function(c,u){return Math.floor(Math.random()*(u-c)+c)},Z=function(c,u){return"rgb(".concat(o(c,u),", ").concat(o(c,u),", ").concat(o(c,u),")")},G=function(){for(var c="",u=0;u<i;u++){var k=o($,P),L=P-$+6,Q=(t-L*i)/(i+1),ee=(u+1)*Q+L*u,oe=o(22,n),te=o(-40,40),ae=o(0,v.length),re=v[ae];a.textBaseline="alphabetic",a.font="".concat(k,"px Simhei"),a.fillStyle=Z(60,150),a.save(),a.translate(ee,oe),a.rotate(te*Math.PI/180),a.fillText(re,0,0),a.restore(),c+=re}F(c)},ne=function(){for(var c=0;c<y;c++){var u=o(0,a.canvas.clientWidth),k=o(0,a.canvas.clientHeight),L=o(0,a.canvas.clientWidth),Q=o(0,a.canvas.clientHeight);a.beginPath(),a.moveTo(u,k),a.lineTo(L,Q),a.lineWidth=1,a.strokeStyle=Z(150,250),a.stroke()}},Y=function(){for(var c=0;c<C;c++){var u=o(0,a.canvas.clientWidth),k=o(0,a.canvas.clientHeight),L=o(1,2);a.beginPath(),a.arc(u,k,L,0,2*Math.PI),a.fillStyle=Z(100,200),a.fill()}},q={width:t,height:n,border:"1px solid #d9d9d9"};return Object(h.jsx)("div",{style:q,_nk:"".concat(x,"11"),children:Object(h.jsx)("canvas",{onClick:J,ref:r,width:t-2,height:n-2,_nk:"".concat(x,"21")})})};d.default=M},Z55w:function(D,d,e){"use strict";e.d(d,"logout",function(){return g}),e.d(d,"login",function(){return y}),e.d(d,"register",function(){return B});var N=e("k1fw"),l=e("qLMh"),W=e("9og8"),h=e("9kvl"),E=e("B7OH"),x=e("vty2"),M=e.n(x),p="2bjP";function g(){return I.apply(this,arguments)}function I(){return I=Object(W.a)(Object(l.a)().mark(function s(){var v;return Object(l.a)().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return v=E.c.get(),i.abrupt("return",Object(h.e)("oauth2/revoke",{method:"POST",headers:{Authorization:"Basic dWk6dWk="},params:{token:v}}));case 2:case"end":return i.stop()}},s)})),I.apply(this,arguments)}function y(s){return C.apply(this,arguments)}function C(){return C=Object(W.a)(Object(l.a)().mark(function s(v){return Object(l.a)().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",Object(h.e)("/v1/api/open/auth/login",{method:"POST",headers:{},data:Object(N.a)({},v)}));case 1:case"end":return i.stop()}},s)})),C.apply(this,arguments)}function B(s){return t.apply(this,arguments)}function t(){return t=Object(W.a)(Object(l.a)().mark(function s(v){return Object(l.a)().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",Object(h.e)("/v1/api/open/auth/signup",{method:"POST",headers:{},data:Object(N.a)({},v)}));case 1:case"end":return i.stop()}},s)})),t.apply(this,arguments)}function w(){return n.apply(this,arguments)}function n(){return n=Object(W.a)(Object(l.a)().mark(function s(){return Object(l.a)().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.abrupt("return",Object(h.e)("system/menu/router",{method:"GET"}));case 1:case"end":return m.stop()}},s)})),n.apply(this,arguments)}},ibdd:function(D,d,e){D.exports=e.p+"static/images/lang.svg"},og4B:function(D,d,e){"use strict";var N=e("qVdP"),l=e("jsC+"),W=e("lUTK"),h=e("BvKs"),E=e("tJVT"),x=e("tL7X"),M=e("B7OH"),p=e("q1tI"),g=e.n(p),I=e("IQRO"),y=e.n(I),C=e("9kvl"),B=e("ZPOE"),t=e("nKUr"),w=e.n(t),n="mTWg",s=function(m){var i=m.color,U=e("ibdd"),$=Object(p.useState)(""),S=Object(E.a)($,2),P=S[0],F=S[1],r=Object(p.useState)("merchant"),H=Object(E.a)(r,2),_=H[0],a=H[1];Object(p.useEffect)(function(){var O,o=((O=JSON.parse(M.d.get()))===null||O===void 0?void 0:O.roleId)||0;a(o)},[_]),Object(p.useEffect)(function(){F(x.a.getLocal())},[P]);var z=Object(p.useCallback)(function(O){var o=O.key;Object(C.f)(o==="en"?"en-US":"zh-CN")},[]),J=Object(t.jsxs)(h.a,{className:y.a.menu,selectedKeys:[],onClick:z,_nk:"".concat(n,"11"),children:[Object(t.jsx)(h.a.Item,{_nk:"".concat(n,"21"),children:Object(t.jsx)("div",{className:"flex-s-c",_nk:"".concat(n,"31"),children:"\u7B80\u4F53\u4E2D\u6587"})},"cn"),Object(t.jsx)(h.a.Item,{_nk:"".concat(n,"22"),children:Object(t.jsx)("div",{className:"flex-s-c",_nk:"".concat(n,"32"),children:"English"})},"en")]});return _===2||!Object(M.e)()?Object(t.jsx)(l.a,{overlay:J,overlayClassName:y.a.container,_nk:"".concat(n,"41"),children:Object(t.jsxs)("span",{className:"".concat(y.a.action," ").concat(y.a.account," flex-s-c"),_nk:"".concat(n,"51"),children:[Object(t.jsx)("img",{style:{width:"16px",height:"16px",marginRight:"8px"},src:U,alt:"cn",_nk:"".concat(n,"61")}),Object(t.jsx)("span",{style:{color:i||""},className:"".concat(y.a.name," anticon"),_nk:"".concat(n,"52"),children:B.b.i18n&&P==="zh-CN"?"\u7B80\u4F53\u4E2D\u6587":"English"})]})}):""};d.a=s},vty2:function(D,d){var e="v3EN"}}]);

(window.webpackJsonp=window.webpackJsonp||[]).push([[11,104],{IQRO:function(v,u,e){v.exports={container:"container___1uJsr",menu:"menu___1q5Bj",right:"right___31nBQ",action:"action___3BVYh",search:"search___Banr6",account:"account___2y9w6",avatar:"avatar___WyhZy",dark:"dark___1Nivb"}},ObQG:function(v,u,e){v.exports={container:"container___1sYa-",lang:"lang___l6cji",content:"content___2zk1-",top:"top___1C1Zi",header:"header___5xZ3f",logo:"logo___2hXsy",titleBox:"titleBox___1OZ7L",title:"title___1-xuF","title-desc":"title-desc___1bGDk",desc:"desc___-njyT",main:"main___x4OjT",icon:"icon___rzGKO",other:"other___lLyaU",register:"register___11Twg",prefixIcon:"prefixIcon___23Xrx"}},PdsH:function(v,u,e){"use strict";e.r(u);var N=e("y8nQ"),i=e("Vl3Y"),S=e("miYZ"),E=e("tsqr"),h=e("qLMh"),B=e("k1fw"),M=e("9og8"),f=e("tJVT"),P=e("fOrg"),I=e("+KLJ"),b=e("Z55w"),D=e("B7OH"),A=e("ZPOE"),a=e("tL7X"),$=e("VMEa"),o=e("Qurx"),l=e("q1tI"),p=e.n(l),m=e("P52E"),s=e.n(m),U=e("9kvl"),w=e("Tb/n"),V=e("ObQG"),g=e.n(V),F=e("og4B"),n=e("nKUr"),X=e.n(n),r="orTG",t=function(C){var _=C.content;return Object(n.jsx)(I.a,{style:{marginBottom:24},message:_,type:"error",showIcon:!0,_nk:"".concat(r,"11")})},z=function(){var C=Object(U.h)("@@initialState"),_=C.refresh,x=C.initialState,Z=p.a.createRef(),_e=Object(l.useState)(""),Y=Object(f.a)(_e,2),q=Y[0],K=Y[1];a.a.setIntl(Object(U.g)());var c=Object(m.useAliveController)(),d=c.clear,k=Object(l.useState)(!1),L=Object(f.a)(k,2),G=L[0],ee=L[1],oe=Object(l.useState)({}),te=Object(f.a)(oe,2),ae=te[0],ne=te[1],Ee=Object(l.useState)("account"),he=Object(f.a)(Ee,1),se=he[0],Oe=function(){var W=Object(M.a)(Object(h.a)().mark(function R(j){return Object(h.a)().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return ee(!0),T.abrupt("return",Object(b.login)({name:j.name,password:"".concat(j.password)}).then(function(){var y=Object(M.a)(Object(h.a)().mark(function ce(ue){var re,de,me,H;return Object(h.a)().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return console.log("res",ue),re=Object(B.a)({},ue.data),O.next=4,d();case 4:D.d.set(JSON.stringify(re)),D.c.set(re.accessToken),de=U.c.location.query,me=de.redirect,a.a.success("pages.login.success"),H="",O.t0=re.roleId,O.next=O.t0===1?12:O.t0===2?14:O.t0===3?16:18;break;case 12:return H="admin",O.abrupt("break",19);case 14:return H="merchant",O.abrupt("break",19);case 16:return H="agent",O.abrupt("break",19);case 18:return O.abrupt("break",19);case 19:return H||localStorage.clear(),U.c.replace(me||"/".concat(H,"/index")),O.next=23,_();case 23:case"end":return O.stop()}},ce)}));return function(ce){return y.apply(this,arguments)}}()).catch(function(){var y;a.a.error("pages.login.failure"),ne({status:"error",type:se}),ee(!1),(y=Z.current)===null||y===void 0||y.drawCodeImg()}));case 2:case"end":return T.stop()}},R)}));return function(j){return W.apply(this,arguments)}}(),fe=function(){var W=Object(M.a)(Object(h.a)().mark(function R(j){var Q;return Object(h.a)().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:if(console.log(j.captcha.toString().toUpperCase(),q,77777),!(j.captcha.toString().toUpperCase()!==q)){y.next=5;break}return E.default.error("\u8F93\u5165\u7684\u9A8C\u8BC1\u7801\u9519\u8BEF"),(Q=Z.current)===null||Q===void 0||Q.drawCodeImg(),y.abrupt("return");case 5:return y.next=7,Oe(j);case 7:case"end":return y.stop()}},R)}));return function(j){return W.apply(this,arguments)}}(),le=ae.status,ie=ae.type,pe=function(R){K(R)};return Object(l.useEffect)(function(){document.title="UPay \u767B\u5F55"},[]),Object(n.jsxs)("div",{className:g.a.container,_nk:"".concat(r,"21"),children:[Object(n.jsx)("div",{hidden:!A.b.i18n,style:{padding:"20px 40px"},className:"flex-e-c cp","data-lang":!0,_nk:"".concat(r,"22"),children:U.a&&Object(n.jsx)(F.a,{color:"#fff",_nk:"".concat(r,"31")})}),Object(n.jsx)("div",{className:g.a.content,_nk:"".concat(r,"23"),children:Object(n.jsxs)("div",{className:g.a.main,_nk:"".concat(r,"24"),children:[Object(n.jsxs)("div",{className:g.a.titleBox,_nk:"".concat(r,"25"),children:[Object(n.jsx)("span",{className:g.a.title,_nk:"".concat(r,"41"),children:"Paye"}),Object(n.jsx)("span",{className:g.a["title-desc"],_nk:"".concat(r,"42"),children:"\u7BA1\u7406\u540E\u53F0"})]}),Object(n.jsxs)($.a,{initialValues:{autoLogin:!0},submitter:{searchConfig:{submitText:a.a.text("pages.login.submit")},render:function(R,j){return j.pop()},submitButtonProps:{loading:G,size:"large",style:{width:"100%"}}},onFinish:function(){var W=Object(M.a)(Object(h.a)().mark(function R(j){return Object(h.a)().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return T.next=2,fe(j);case 2:case"end":return T.stop()}},R)}));return function(R){return W.apply(this,arguments)}}(),_nk:"".concat(r,"51"),children:[le==="error"&&ie==="account"&&Object(n.jsx)(t,{content:a.a.text("pages.login.accountLogin.errorMessage"),_nk:"".concat(r,"61")}),se==="account"&&Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(o.a,{name:"name",placeholder:a.a.text("pages.login.username.placeholder"),rules:[{required:!0,message:a.a.text("pages.login.username.required")}],_nk:"".concat(r,"71")}),Object(n.jsx)(o.a.Password,{name:"password",placeholder:a.a.text("pages.login.password.placeholder"),rules:[{required:!0,message:a.a.text("pages.login.password.required")}],_nk:"".concat(r,"81")}),Object(n.jsx)(i.a.Item,{_nk:"".concat(r,"82"),children:Object(n.jsxs)("div",{className:"flex-sb-s mb0",_nk:"".concat(r,"26"),children:[Object(n.jsx)(o.a,{valueType:"number",name:"captcha",style:{marginBottom:"0"},placeholder:a.a.text("reg_tip5"),rules:[{required:!0,message:a.a.text("reg_tip5")}],_nk:"".concat(r,"72")}),Object(n.jsx)(w.default,{onRef:Z,width:120,height:42,length:4,change:pe,_nk:"".concat(r,"91")})]})})]}),le==="error"&&ie==="mobile"&&Object(n.jsx)(t,{content:"\u9A8C\u8BC1\u7801\u9519\u8BEF",_nk:"".concat(r,"62")})]}),Object(n.jsxs)("div",{className:"flex-sb-c",style:{marginTop:24},_nk:"".concat(r,"27"),children:[Object(n.jsx)("a",{href:"https://upay.ink/",target:"_blank",_nk:"".concat(r,"a1"),children:a.a.text("reg_tip7")}),Object(n.jsx)("a",{onClick:function(){return U.c.push("/user/register")},_nk:"".concat(r,"a2"),children:a.a.text("reg_tip8")})]})]})})]})};u.default=z},"Tb/n":function(v,u,e){"use strict";e.r(u);var N=e("tJVT"),i=e("q1tI"),S=e.n(i),E=e("nKUr"),h=e.n(E),B="13Vp",M=function(P){var I="ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890",b=6,D=50,A=P.width,a=A===void 0?120:A,$=P.height,o=$===void 0?40:$,l=P.letters,p=l===void 0?I:l,m=P.length,s=m===void 0?4:m,U=P.minFontSize,w=U===void 0?20:U,V=P.maxFontSize,g=V===void 0?30:V,F=P.change,n=Object(i.useRef)(null),X=Object(i.useState)(),r=Object(N.a)(X,2),t=r[0],z=r[1];Object(i.useEffect)(function(){z(n.current.getContext("2d"))},[n]),Object(i.useEffect)(function(){t&&C()},[t]);var J=function(){C()};Object(i.useImperativeHandle)(P.onRef,function(){return{drawCodeImg:C}});var C=function(){t.fillStyle=x(200,230),t.fillRect(0,0,a,o),Z(),_e(),Y()},_=function(c,d){return Math.floor(Math.random()*(d-c)+c)},x=function(c,d){return"rgb(".concat(_(c,d),", ").concat(_(c,d),", ").concat(_(c,d),")")},Z=function(){for(var c="",d=0;d<s;d++){var k=_(w,g),L=g-w+6,G=(a-L*s)/(s+1),ee=(d+1)*G+L*d,oe=_(22,o),te=_(-40,40),ae=_(0,p.length),ne=p[ae];t.textBaseline="alphabetic",t.font="".concat(k,"px Simhei"),t.fillStyle=x(60,150),t.save(),t.translate(ee,oe),t.rotate(te*Math.PI/180),t.fillText(ne,0,0),t.restore(),c+=ne}F(c)},_e=function(){for(var c=0;c<b;c++){var d=_(0,t.canvas.clientWidth),k=_(0,t.canvas.clientHeight),L=_(0,t.canvas.clientWidth),G=_(0,t.canvas.clientHeight);t.beginPath(),t.moveTo(d,k),t.lineTo(L,G),t.lineWidth=1,t.strokeStyle=x(150,250),t.stroke()}},Y=function(){for(var c=0;c<D;c++){var d=_(0,t.canvas.clientWidth),k=_(0,t.canvas.clientHeight),L=_(1,2);t.beginPath(),t.arc(d,k,L,0,2*Math.PI),t.fillStyle=x(100,200),t.fill()}},q={width:a,height:o,border:"1px solid #d9d9d9"};return Object(E.jsx)("div",{style:q,_nk:"".concat(B,"11"),children:Object(E.jsx)("canvas",{onClick:J,ref:n,width:a-2,height:o-2,_nk:"".concat(B,"21")})})};u.default=M},Z55w:function(v,u,e){"use strict";e.d(u,"logout",function(){return P}),e.d(u,"login",function(){return b}),e.d(u,"register",function(){return A});var N=e("k1fw"),i=e("qLMh"),S=e("9og8"),E=e("9kvl"),h=e("B7OH"),B=e("vty2"),M=e.n(B),f="2bjP";function P(){return I.apply(this,arguments)}function I(){return I=Object(S.a)(Object(i.a)().mark(function l(){var p;return Object(i.a)().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return p=h.c.get(),s.abrupt("return",Object(E.e)("oauth2/revoke",{method:"POST",headers:{Authorization:"Basic dWk6dWk="},params:{token:p}}));case 2:case"end":return s.stop()}},l)})),I.apply(this,arguments)}function b(l){return D.apply(this,arguments)}function D(){return D=Object(S.a)(Object(i.a)().mark(function l(p){return Object(i.a)().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",Object(E.e)("/v1/api/open/auth/login",{method:"POST",headers:{},data:Object(N.a)({},p)}));case 1:case"end":return s.stop()}},l)})),D.apply(this,arguments)}function A(l){return a.apply(this,arguments)}function a(){return a=Object(S.a)(Object(i.a)().mark(function l(p){return Object(i.a)().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",Object(E.e)("/v1/api/open/auth/signup",{method:"POST",headers:{},data:Object(N.a)({},p)}));case 1:case"end":return s.stop()}},l)})),a.apply(this,arguments)}function $(){return o.apply(this,arguments)}function o(){return o=Object(S.a)(Object(i.a)().mark(function l(){return Object(i.a)().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.abrupt("return",Object(E.e)("system/menu/router",{method:"GET"}));case 1:case"end":return m.stop()}},l)})),o.apply(this,arguments)}},dm4i:function(v,u,e){v.exports=e.p+"static/images/lang-white.svg"},ibdd:function(v,u,e){v.exports=e.p+"static/images/lang.svg"},og4B:function(v,u,e){"use strict";var N=e("qVdP"),i=e("jsC+"),S=e("lUTK"),E=e("BvKs"),h=e("tJVT"),B=e("tL7X"),M=e("B7OH"),f=e("q1tI"),P=e.n(f),I=e("IQRO"),b=e.n(I),D=e("9kvl"),A=e("ZPOE"),a=e("nKUr"),$=e.n(a),o="mTWg",l=function(m){var s=m.color,U=e("ibdd"),w=e("dm4i"),V=Object(f.useState)(""),g=Object(h.a)(V,2),F=g[0],n=g[1],X=Object(f.useState)(),r=Object(h.a)(X,2),t=r[0],z=r[1];Object(f.useEffect)(function(){var _,x=((_=JSON.parse(M.d.get()))===null||_===void 0?void 0:_.roleId)||0;z(x)},[t]),Object(f.useEffect)(function(){n(B.a.getLocal())},[F]);var J=Object(f.useCallback)(function(_){var x=_.key;Object(D.f)(x==="en"?"en-US":"zh-CN")},[]),C=Object(a.jsxs)(E.a,{className:b.a.menu,selectedKeys:[],onClick:J,_nk:"".concat(o,"11"),children:[Object(a.jsx)(E.a.Item,{_nk:"".concat(o,"21"),children:Object(a.jsx)("div",{className:"flex-s-c",_nk:"".concat(o,"31"),children:"\u7B80\u4F53\u4E2D\u6587"})},"cn"),Object(a.jsx)(E.a.Item,{_nk:"".concat(o,"22"),children:Object(a.jsx)("div",{className:"flex-s-c",_nk:"".concat(o,"32"),children:"English"})},"en")]});return t===2||!Object(M.e)()?Object(a.jsx)(i.a,{overlay:C,overlayClassName:b.a.container,_nk:"".concat(o,"41"),children:Object(a.jsxs)("span",{className:"".concat(b.a.action," ").concat(b.a.account," flex-s-c"),_nk:"".concat(o,"51"),children:[Object(a.jsx)("img",{style:{width:"16px",height:"16px",marginRight:"8px"},src:s?w:U,alt:"cn",_nk:"".concat(o,"61")}),Object(a.jsx)("span",{style:{color:s||""},className:"".concat(b.a.name," anticon"),_nk:"".concat(o,"52"),children:A.b.i18n&&F==="zh-CN"?"\u7B80\u4F53\u4E2D\u6587":"English"})]})}):""};u.a=l},vty2:function(v,u){var e="v3EN"}}]);

(window.webpackJsonp=window.webpackJsonp||[]).push([[12,105],{IQRO:function(y,m,t){y.exports={container:"container___1uJsr",menu:"menu___1q5Bj",right:"right___31nBQ",action:"action___3BVYh",search:"search___Banr6",account:"account___2y9w6",avatar:"avatar___WyhZy",dark:"dark___1Nivb"}},"Tb/n":function(y,m,t){"use strict";t.r(m);var w=t("tJVT"),c=t("q1tI"),W=t.n(c),O=t("nKUr"),p=t.n(O),b="13Vp",x=function(g){var I="ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890",R=6,r=50,A=g.width,n=A===void 0?120:A,D=g.height,i=D===void 0?40:D,u=g.letters,P=u===void 0?I:u,d=g.length,o=d===void 0?4:d,$=g.minFontSize,a=$===void 0?20:$,z=g.maxFontSize,_=z===void 0?30:z,V=g.change,S=Object(c.useRef)(null),J=Object(c.useState)(),M=Object(w.a)(J,2),e=M[0],F=M[1];Object(c.useEffect)(function(){F(S.current.getContext("2d"))},[S]),Object(c.useEffect)(function(){e&&N()},[e]);var H=function(){N()};Object(c.useImperativeHandle)(g.onRef,function(){return{drawCodeImg:N}});var N=function(){e.fillStyle=C(200,230),e.fillRect(0,0,n,i),G(),Z(),Y()},s=function(h,E){return Math.floor(Math.random()*(E-h)+h)},C=function(h,E){return"rgb(".concat(s(h,E),", ").concat(s(h,E),", ").concat(s(h,E),")")},G=function(){for(var h="",E=0;E<o;E++){var k=s(a,_),K=_-a+6,Q=(n-K*o)/(o+1),q=(E+1)*Q+K*E,tt=s(22,i),et=s(-40,40),at=s(0,P.length),v=P[at];e.textBaseline="alphabetic",e.font="".concat(k,"px Simhei"),e.fillStyle=C(60,150),e.save(),e.translate(q,tt),e.rotate(et*Math.PI/180),e.fillText(v,0,0),e.restore(),h+=v}V(h)},Z=function(){for(var h=0;h<R;h++){var E=s(0,e.canvas.clientWidth),k=s(0,e.canvas.clientHeight),K=s(0,e.canvas.clientWidth),Q=s(0,e.canvas.clientHeight);e.beginPath(),e.moveTo(E,k),e.lineTo(K,Q),e.lineWidth=1,e.strokeStyle=C(150,250),e.stroke()}},Y=function(){for(var h=0;h<r;h++){var E=s(0,e.canvas.clientWidth),k=s(0,e.canvas.clientHeight),K=s(1,2);e.beginPath(),e.arc(E,k,K,0,2*Math.PI),e.fillStyle=C(100,200),e.fill()}},X={width:n,height:i,border:"1px solid #d9d9d9"};return Object(O.jsx)("div",{style:X,_nk:"".concat(b,"11"),children:Object(O.jsx)("canvas",{onClick:H,ref:S,width:n-2,height:i-2,_nk:"".concat(b,"21")})})};m.default=x},Z55w:function(y,m,t){"use strict";t.d(m,"logout",function(){return g}),t.d(m,"login",function(){return R}),t.d(m,"register",function(){return A});var w=t("k1fw"),c=t("qLMh"),W=t("9og8"),O=t("9kvl"),p=t("B7OH"),b=t("vty2"),x=t.n(b),T="2bjP";function g(){return I.apply(this,arguments)}function I(){return I=Object(W.a)(Object(c.a)().mark(function u(){var P;return Object(c.a)().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return P=p.c.get(),o.abrupt("return",Object(O.e)("oauth2/revoke",{method:"POST",headers:{Authorization:"Basic dWk6dWk="},params:{token:P}}));case 2:case"end":return o.stop()}},u)})),I.apply(this,arguments)}function R(u){return r.apply(this,arguments)}function r(){return r=Object(W.a)(Object(c.a)().mark(function u(P){return Object(c.a)().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",Object(O.e)("/v1/api/open/auth/login",{method:"POST",headers:{},data:Object(w.a)({},P)}));case 1:case"end":return o.stop()}},u)})),r.apply(this,arguments)}function A(u){return n.apply(this,arguments)}function n(){return n=Object(W.a)(Object(c.a)().mark(function u(P){return Object(c.a)().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",Object(O.e)("/v1/api/open/auth/signup",{method:"POST",headers:{},data:Object(w.a)({},P)}));case 1:case"end":return o.stop()}},u)})),n.apply(this,arguments)}function D(){return i.apply(this,arguments)}function i(){return i=Object(W.a)(Object(c.a)().mark(function u(){return Object(c.a)().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.abrupt("return",Object(O.e)("system/menu/router",{method:"GET"}));case 1:case"end":return d.stop()}},u)})),i.apply(this,arguments)}},dm4i:function(y,m,t){y.exports=t.p+"static/images/lang-white.svg"},ibdd:function(y,m,t){y.exports=t.p+"static/images/lang.svg"},jwAW:function(y,m,t){"use strict";t.r(m);var w=t("y8nQ"),c=t("Vl3Y"),W=t("miYZ"),O=t("tsqr"),p=t("qLMh"),b=t("9og8"),x=t("tJVT"),T=t("fOrg"),g=t("+KLJ"),I=t("Z55w"),R=t("ZPOE"),r=t("tL7X"),A=t("VMEa"),n=t("Qurx"),D=t("q1tI"),i=t.n(D),u=t("9kvl"),P=t("tOgl"),d=t.n(P),o=t("Tb/n"),$=t("og4B"),a=t("nKUr"),z=t.n(a),_="LALo",V=function(M){var e=M.content;return Object(a.jsx)(g.a,{style:{marginBottom:24},message:e,type:"error",showIcon:!0,_nk:"".concat(_,"11")})},S=function(){var M=i.a.createRef(),e=Object(D.useState)(""),F=Object(x.a)(e,2),H=F[0],N=F[1];r.a.setIntl(Object(u.g)());var s=Object(D.useState)(!1),C=Object(x.a)(s,2),G=C[0],Z=C[1],Y=Object(D.useState)({}),X=Object(x.a)(Y,2),L=X[0],h=X[1],E=Object(D.useState)("account"),k=Object(x.a)(E,1),K=k[0],Q=function(){var v=Object(b.a)(Object(p.a)().mark(function j(f){return Object(p.a)().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return Z(!0),l.abrupt("return",Object(I.register)({name:f.name,rePassword:f.rePassword,password:"".concat(f.password)}).then(Object(b.a)(Object(p.a)().mark(function U(){return Object(p.a)().wrap(function(_t){for(;;)switch(_t.prev=_t.next){case 0:Z(!1),r.a.text("reg_tips133"),u.c.push("/user/login");case 3:case"end":return _t.stop()}},U)}))).catch(function(){var U;r.a.text("reg_tips132"),(U=M.current)===null||U===void 0||U.drawCodeImg(),Z(!1)}));case 2:case"end":return l.stop()}},j)}));return function(f){return v.apply(this,arguments)}}(),q=function(){var v=Object(b.a)(Object(p.a)().mark(function j(f){var B;return Object(p.a)().wrap(function(U){for(;;)switch(U.prev=U.next){case 0:if(console.log(f.captcha.toString().toUpperCase(),H,77777),!(f.captcha.toString().toUpperCase()!==H)){U.next=5;break}return O.default.error("\u8F93\u5165\u7684\u9A8C\u8BC1\u7801\u9519\u8BEF"),(B=M.current)===null||B===void 0||B.drawCodeImg(),U.abrupt("return");case 5:return U.next=7,Q(f);case 7:case"end":return U.stop()}},j)}));return function(f){return v.apply(this,arguments)}}(),tt=L.status,et=L.type,at=function(j){N(j)};return Object(D.useEffect)(function(){document.title="UPay \u6CE8\u518C"},[]),Object(a.jsxs)("div",{className:d.a.container,_nk:"".concat(_,"21"),children:[Object(a.jsx)("div",{hidden:!R.a.i18n,style:{padding:"20px 40px"},className:"flex-e-c cp","data-lang":!0,_nk:"".concat(_,"22"),children:u.a&&Object(a.jsx)($.a,{color:"#fff",_nk:"".concat(_,"31")})}),Object(a.jsx)("div",{className:d.a.content,_nk:"".concat(_,"23"),children:Object(a.jsxs)("div",{className:d.a.main,_nk:"".concat(_,"24"),children:[Object(a.jsx)("div",{className:d.a.titleBox,_nk:"".concat(_,"25"),children:Object(a.jsx)("span",{className:d.a.title,_nk:"".concat(_,"41"),children:r.a.text("reg_tip9")})}),Object(a.jsxs)(A.a,{initialValues:{autoLogin:!0},submitter:{searchConfig:{submitText:r.a.text("reg_tip11")},render:function(j,f){return f.pop()},submitButtonProps:{loading:G,size:"large",style:{width:"100%"}}},onFinish:function(){var v=Object(b.a)(Object(p.a)().mark(function j(f){return Object(p.a)().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,q(f);case 2:case"end":return l.stop()}},j)}));return function(j){return v.apply(this,arguments)}}(),_nk:"".concat(_,"51"),children:[K==="account"&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(n.a,{name:"name",placeholder:r.a.text("reg_tips139"),rules:[{required:!0,message:r.a.text("reg_tips139")}],_nk:"".concat(_,"61")}),Object(a.jsx)(n.a.Password,{name:"password",placeholder:r.a.text("reg_tip3"),rules:[{required:!0,message:r.a.text("reg_tip3")},function(){return{validator:function(j,f){var B=/^[a-zA-Z0-9._]{6,15}$/,l;return B.test(f)||(l="\u8BF7\u8F93\u5165\u5B57\u6BCD\u6570\u5B57\u7EC4\u5408\u76846-15\u4F4D\u5BC6\u7801"),l&&l.length>0?Promise.reject(l):Promise.resolve()}}}],_nk:"".concat(_,"71")}),Object(a.jsx)(n.a.Password,{name:"rePassword",placeholder:r.a.text("reg_tip10"),rules:[{required:!0,message:r.a.text("reg_tip10")},function(v){return{validator:function(f,B){var l;return v.getFieldValue("password")!==B&&(l=r.a.text("reg_tips130")),l&&l.length>0?Promise.reject(l):Promise.resolve()}}}],_nk:"".concat(_,"72")}),Object(a.jsx)(c.a.Item,{_nk:"".concat(_,"73"),children:Object(a.jsxs)("div",{className:"flex-sb-s mb0",_nk:"".concat(_,"26"),children:[Object(a.jsx)(n.a,{valueType:"number",name:"captcha",style:{marginBottom:"0"},placeholder:r.a.text("reg_tip5"),rules:[{required:!0,message:r.a.text("reg_tip5")}],_nk:"".concat(_,"62")}),Object(a.jsx)(o.default,{onRef:M,width:120,height:42,length:4,change:at,_nk:"".concat(_,"81")})]})})]}),tt==="error"&&et==="mobile"&&Object(a.jsx)(V,{content:"\u9A8C\u8BC1\u7801\u9519\u8BEF",_nk:"".concat(_,"91")})]}),Object(a.jsxs)("div",{className:"flex-sb-c",style:{marginTop:24},_nk:"".concat(_,"27"),children:[Object(a.jsx)("a",{href:"https://upay.ink/",target:"_blank",_nk:"".concat(_,"a1"),children:r.a.text("reg_tip7")}),Object(a.jsx)("a",{onClick:function(){return u.c.push("/user/login")},_nk:"".concat(_,"a2"),children:r.a.text("reg_tips131")})]})]})})]})};m.default=S},og4B:function(y,m,t){"use strict";var w=t("qVdP"),c=t("jsC+"),W=t("lUTK"),O=t("BvKs"),p=t("tJVT"),b=t("tL7X"),x=t("B7OH"),T=t("q1tI"),g=t.n(T),I=t("IQRO"),R=t.n(I),r=t("9kvl"),A=t("ZPOE"),n=t("nKUr"),D=t.n(n),i="mTWg",u=function(d){var o=d.color,$=t("ibdd"),a=t("dm4i"),z=Object(T.useState)(""),_=Object(p.a)(z,2),V=_[0],S=_[1],J=Object(T.useState)(),M=Object(p.a)(J,2),e=M[0],F=M[1];Object(T.useEffect)(function(){var s,C=((s=JSON.parse(x.d.get()))===null||s===void 0?void 0:s.roleId)||0;F(C)},[e]),Object(T.useEffect)(function(){S(b.a.getLocal())},[V]);var H=Object(T.useCallback)(function(s){var C=s.key;Object(r.f)(C==="en"?"en-US":"zh-CN")},[]),N=Object(n.jsxs)(O.a,{className:R.a.menu,selectedKeys:[],onClick:H,_nk:"".concat(i,"11"),children:[Object(n.jsx)(O.a.Item,{_nk:"".concat(i,"21"),children:Object(n.jsx)("div",{className:"flex-s-c",_nk:"".concat(i,"31"),children:"\u7B80\u4F53\u4E2D\u6587"})},"cn"),Object(n.jsx)(O.a.Item,{_nk:"".concat(i,"22"),children:Object(n.jsx)("div",{className:"flex-s-c",_nk:"".concat(i,"32"),children:"English"})},"en")]});return e===2||!Object(x.e)()?Object(n.jsx)(c.a,{overlay:N,overlayClassName:R.a.container,_nk:"".concat(i,"41"),children:Object(n.jsxs)("span",{className:"".concat(R.a.action," ").concat(R.a.account," flex-s-c"),_nk:"".concat(i,"51"),children:[Object(n.jsx)("img",{style:{width:"16px",height:"16px",marginRight:"8px"},src:o?a:$,alt:"cn",_nk:"".concat(i,"61")}),Object(n.jsx)("span",{style:{color:o||""},className:"".concat(R.a.name," anticon"),_nk:"".concat(i,"52"),children:A.a.i18n&&V==="zh-CN"?"\u7B80\u4F53\u4E2D\u6587":"English"})]})}):""};m.a=u},tOgl:function(y,m,t){y.exports={container:"container___3u4qc",lang:"lang___3VyRW",content:"content___1k5Ro",top:"top___1x2PK",header:"header___3Kw-q",logo:"logo___2aK9c",titleBox:"titleBox___3T_HW",title:"title___1Izp8","title-desc":"title-desc___1q-ns",desc:"desc___vFX8U",main:"main___19HXK",icon:"icon___14_b2",other:"other____-JZS",register:"register___3QsXc",prefixIcon:"prefixIcon___2x9jr"}},vty2:function(y,m){var t="v3EN"}}]);

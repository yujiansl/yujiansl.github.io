(window.webpackJsonp=window.webpackJsonp||[]).push([[12,105],{IQRO:function(j,d,t){j.exports={container:"container___1uJsr",menu:"menu___1q5Bj",right:"right___31nBQ",action:"action___3BVYh",search:"search___Banr6",account:"account___2y9w6",avatar:"avatar___WyhZy",dark:"dark___1Nivb"}},"Tb/n":function(j,d,t){"use strict";t.r(d);var w=t("tJVT"),l=t("q1tI"),K=t.n(l),f=t("nKUr"),O=t.n(f),U="13Vp",x=function(g){var I="ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890",R=6,n=50,B=g.width,r=B===void 0?120:B,D=g.height,i=D===void 0?40:D,c=g.letters,v=c===void 0?I:c,u=g.length,o=u===void 0?4:u,$=g.minFontSize,a=$===void 0?20:$,z=g.maxFontSize,_=z===void 0?30:z,V=g.change,W=Object(l.useRef)(null),J=Object(l.useState)(),M=Object(w.a)(J,2),e=M[0],F=M[1];Object(l.useEffect)(function(){F(W.current.getContext("2d"))},[W]),Object(l.useEffect)(function(){e&&S()},[e]);var H=function(){S()};Object(l.useImperativeHandle)(g.onRef,function(){return{drawCodeImg:S}});var S=function(){e.fillStyle=C(200,230),e.fillRect(0,0,r,i),G(),Z(),Y()},s=function(m,h){return Math.floor(Math.random()*(h-m)+m)},C=function(m,h){return"rgb(".concat(s(m,h),", ").concat(s(m,h),", ").concat(s(m,h),")")},G=function(){for(var m="",h=0;h<o;h++){var N=s(a,_),A=_-a+6,Q=(r-A*o)/(o+1),q=(h+1)*Q+A*h,tt=s(22,i),et=s(-40,40),at=s(0,v.length),P=v[at];e.textBaseline="alphabetic",e.font="".concat(N,"px Simhei"),e.fillStyle=C(60,150),e.save(),e.translate(q,tt),e.rotate(et*Math.PI/180),e.fillText(P,0,0),e.restore(),m+=P}V(m)},Z=function(){for(var m=0;m<R;m++){var h=s(0,e.canvas.clientWidth),N=s(0,e.canvas.clientHeight),A=s(0,e.canvas.clientWidth),Q=s(0,e.canvas.clientHeight);e.beginPath(),e.moveTo(h,N),e.lineTo(A,Q),e.lineWidth=1,e.strokeStyle=C(150,250),e.stroke()}},Y=function(){for(var m=0;m<n;m++){var h=s(0,e.canvas.clientWidth),N=s(0,e.canvas.clientHeight),A=s(1,2);e.beginPath(),e.arc(h,N,A,0,2*Math.PI),e.fillStyle=C(100,200),e.fill()}},X={width:r,height:i,border:"1px solid #d9d9d9"};return Object(f.jsx)("div",{style:X,_nk:"".concat(U,"11"),children:Object(f.jsx)("canvas",{onClick:H,ref:W,width:r-2,height:i-2,_nk:"".concat(U,"21")})})};d.default=x},Z55w:function(j,d,t){"use strict";t.d(d,"logout",function(){return g}),t.d(d,"login",function(){return R}),t.d(d,"register",function(){return B});var w=t("k1fw"),l=t("qLMh"),K=t("9og8"),f=t("9kvl"),O=t("B7OH"),U=t("vty2"),x=t.n(U),T="2bjP";function g(){return I.apply(this,arguments)}function I(){return I=Object(K.a)(Object(l.a)().mark(function c(){var v;return Object(l.a)().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return v=O.c.get(),o.abrupt("return",Object(f.e)("oauth2/revoke",{method:"POST",headers:{Authorization:"Basic dWk6dWk="},params:{token:v}}));case 2:case"end":return o.stop()}},c)})),I.apply(this,arguments)}function R(c){return n.apply(this,arguments)}function n(){return n=Object(K.a)(Object(l.a)().mark(function c(v){return Object(l.a)().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",Object(f.e)("/v1/api/open/auth/login",{method:"POST",headers:{},data:Object(w.a)({},v)}));case 1:case"end":return o.stop()}},c)})),n.apply(this,arguments)}function B(c){return r.apply(this,arguments)}function r(){return r=Object(K.a)(Object(l.a)().mark(function c(v){return Object(l.a)().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",Object(f.e)("/v1/api/open/auth/signup",{method:"POST",headers:{},data:Object(w.a)({},v)}));case 1:case"end":return o.stop()}},c)})),r.apply(this,arguments)}function D(){return i.apply(this,arguments)}function i(){return i=Object(K.a)(Object(l.a)().mark(function c(){return Object(l.a)().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",Object(f.e)("system/menu/router",{method:"GET"}));case 1:case"end":return u.stop()}},c)})),i.apply(this,arguments)}},dm4i:function(j,d,t){j.exports=t.p+"static/images/lang-white.svg"},ibdd:function(j,d,t){j.exports=t.p+"static/images/lang.svg"},jwAW:function(j,d,t){"use strict";t.r(d);var w=t("y8nQ"),l=t("Vl3Y"),K=t("miYZ"),f=t("tsqr"),O=t("qLMh"),U=t("9og8"),x=t("tJVT"),T=t("fOrg"),g=t("+KLJ"),I=t("Z55w"),R=t("ZPOE"),n=t("tL7X"),B=t("VMEa"),r=t("Qurx"),D=t("q1tI"),i=t.n(D),c=t("9kvl"),v=t("tOgl"),u=t.n(v),o=t("Tb/n"),$=t("og4B"),a=t("nKUr"),z=t.n(a),_="LALo",V=function(M){var e=M.content;return Object(a.jsx)(g.a,{style:{marginBottom:24},message:e,type:"error",showIcon:!0,_nk:"".concat(_,"11")})},W=function(){var M=i.a.createRef(),e=Object(D.useState)(""),F=Object(x.a)(e,2),H=F[0],S=F[1];n.a.setIntl(Object(c.g)());var s=Object(D.useState)(!1),C=Object(x.a)(s,2),G=C[0],Z=C[1],Y=Object(D.useState)({}),X=Object(x.a)(Y,2),L=X[0],m=X[1],h=Object(D.useState)("account"),N=Object(x.a)(h,1),A=N[0],Q=function(){var P=Object(U.a)(Object(O.a)().mark(function y(p){return Object(O.a)().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return Z(!0),E.abrupt("return",Object(I.register)({name:p.name,rePassword:p.rePassword,password:"".concat(p.password)}).then(Object(U.a)(Object(O.a)().mark(function b(){return Object(O.a)().wrap(function(_t){for(;;)switch(_t.prev=_t.next){case 0:Z(!1),n.a.text("reg_tips133"),c.c.push("/user/login");case 3:case"end":return _t.stop()}},b)}))).catch(function(){var b;n.a.text("reg_tips132"),(b=M.current)===null||b===void 0||b.drawCodeImg(),Z(!1)}));case 2:case"end":return E.stop()}},y)}));return function(p){return P.apply(this,arguments)}}(),q=function(){var P=Object(U.a)(Object(O.a)().mark(function y(p){var k;return Object(O.a)().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:if(console.log(p.captcha.toString().toUpperCase(),H,77777),!(p.captcha.toString().toUpperCase()!==H)){b.next=5;break}return f.default.error("\u8F93\u5165\u7684\u9A8C\u8BC1\u7801\u9519\u8BEF"),(k=M.current)===null||k===void 0||k.drawCodeImg(),b.abrupt("return");case 5:return b.next=7,Q(p);case 7:case"end":return b.stop()}},y)}));return function(p){return P.apply(this,arguments)}}(),tt=L.status,et=L.type,at=function(y){S(y)};return Object(D.useEffect)(function(){document.title="UPay \u6CE8\u518C"},[]),Object(a.jsxs)("div",{className:u.a.container,_nk:"".concat(_,"21"),children:[Object(a.jsx)("div",{hidden:!R.b.i18n,style:{padding:"20px 40px"},className:"flex-e-c cp","data-lang":!0,_nk:"".concat(_,"22"),children:c.a&&Object(a.jsx)($.a,{color:"#fff",_nk:"".concat(_,"31")})}),Object(a.jsx)("div",{className:u.a.content,_nk:"".concat(_,"23"),children:Object(a.jsxs)("div",{className:u.a.main,_nk:"".concat(_,"24"),children:[Object(a.jsx)("div",{className:u.a.titleBox,_nk:"".concat(_,"25"),children:Object(a.jsx)("span",{className:u.a.title,_nk:"".concat(_,"41"),children:n.a.text("reg_tip9")})}),Object(a.jsxs)(B.a,{initialValues:{autoLogin:!0},submitter:{searchConfig:{submitText:n.a.text("reg_tip11")},render:function(y,p){return p.pop()},submitButtonProps:{loading:G,size:"large",style:{width:"100%"}}},onFinish:function(){var P=Object(U.a)(Object(O.a)().mark(function y(p){return Object(O.a)().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,q(p);case 2:case"end":return E.stop()}},y)}));return function(y){return P.apply(this,arguments)}}(),_nk:"".concat(_,"51"),children:[A==="account"&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(r.a,{name:"name",placeholder:n.a.text("reg_tips139"),rules:[{required:!0,message:n.a.text("reg_tips139")}],_nk:"".concat(_,"61")}),Object(a.jsx)(r.a.Password,{name:"password",placeholder:n.a.text("reg_tip3"),rules:[{required:!0,message:n.a.text("reg_tip3")}],_nk:"".concat(_,"71")}),Object(a.jsx)(r.a.Password,{name:"rePassword",placeholder:n.a.text("reg_tip10"),rules:[{required:!0,message:n.a.text("reg_tip10")},function(P){return{validator:function(p,k){var E;return P.getFieldValue("password")!==k&&(E=n.a.text("reg_tips130")),E&&E.length>0?Promise.reject(E):Promise.resolve()}}}],_nk:"".concat(_,"72")}),Object(a.jsx)(l.a.Item,{_nk:"".concat(_,"73"),children:Object(a.jsxs)("div",{className:"flex-sb-s mb0",_nk:"".concat(_,"26"),children:[Object(a.jsx)(r.a,{valueType:"number",name:"captcha",style:{marginBottom:"0"},placeholder:n.a.text("reg_tip5"),rules:[{required:!0,message:n.a.text("reg_tip5")}],_nk:"".concat(_,"62")}),Object(a.jsx)(o.default,{onRef:M,width:120,height:42,length:4,change:at,_nk:"".concat(_,"81")})]})})]}),tt==="error"&&et==="mobile"&&Object(a.jsx)(V,{content:"\u9A8C\u8BC1\u7801\u9519\u8BEF",_nk:"".concat(_,"91")})]}),Object(a.jsxs)("div",{className:"flex-sb-c",style:{marginTop:24},_nk:"".concat(_,"27"),children:[Object(a.jsx)("a",{href:"https://upay.ink/",target:"_blank",_nk:"".concat(_,"a1"),children:n.a.text("reg_tip7")}),Object(a.jsx)("a",{onClick:function(){return c.c.push("/user/login")},_nk:"".concat(_,"a2"),children:n.a.text("reg_tips131")})]})]})})]})};d.default=W},og4B:function(j,d,t){"use strict";var w=t("qVdP"),l=t("jsC+"),K=t("lUTK"),f=t("BvKs"),O=t("tJVT"),U=t("tL7X"),x=t("B7OH"),T=t("q1tI"),g=t.n(T),I=t("IQRO"),R=t.n(I),n=t("9kvl"),B=t("ZPOE"),r=t("nKUr"),D=t.n(r),i="mTWg",c=function(u){var o=u.color,$=t("ibdd"),a=t("dm4i"),z=Object(T.useState)(""),_=Object(O.a)(z,2),V=_[0],W=_[1],J=Object(T.useState)(),M=Object(O.a)(J,2),e=M[0],F=M[1];Object(T.useEffect)(function(){var s,C=((s=JSON.parse(x.d.get()))===null||s===void 0?void 0:s.roleId)||0;F(C)},[e]),Object(T.useEffect)(function(){W(U.a.getLocal())},[V]);var H=Object(T.useCallback)(function(s){var C=s.key;Object(n.f)(C==="en"?"en-US":"zh-CN")},[]),S=Object(r.jsxs)(f.a,{className:R.a.menu,selectedKeys:[],onClick:H,_nk:"".concat(i,"11"),children:[Object(r.jsx)(f.a.Item,{_nk:"".concat(i,"21"),children:Object(r.jsx)("div",{className:"flex-s-c",_nk:"".concat(i,"31"),children:"\u7B80\u4F53\u4E2D\u6587"})},"cn"),Object(r.jsx)(f.a.Item,{_nk:"".concat(i,"22"),children:Object(r.jsx)("div",{className:"flex-s-c",_nk:"".concat(i,"32"),children:"English"})},"en")]});return e===2||!Object(x.e)()?Object(r.jsx)(l.a,{overlay:S,overlayClassName:R.a.container,_nk:"".concat(i,"41"),children:Object(r.jsxs)("span",{className:"".concat(R.a.action," ").concat(R.a.account," flex-s-c"),_nk:"".concat(i,"51"),children:[Object(r.jsx)("img",{style:{width:"16px",height:"16px",marginRight:"8px"},src:o?a:$,alt:"cn",_nk:"".concat(i,"61")}),Object(r.jsx)("span",{style:{color:o||""},className:"".concat(R.a.name," anticon"),_nk:"".concat(i,"52"),children:B.b.i18n&&V==="zh-CN"?"\u7B80\u4F53\u4E2D\u6587":"English"})]})}):""};d.a=c},tOgl:function(j,d,t){j.exports={container:"container___3u4qc",lang:"lang___3VyRW",content:"content___1k5Ro",top:"top___1x2PK",header:"header___3Kw-q",logo:"logo___2aK9c",titleBox:"titleBox___3T_HW",title:"title___1Izp8","title-desc":"title-desc___1q-ns",desc:"desc___vFX8U",main:"main___19HXK",icon:"icon___14_b2",other:"other____-JZS",register:"register___3QsXc",prefixIcon:"prefixIcon___2x9jr"}},vty2:function(j,d){var t="v3EN"}}]);

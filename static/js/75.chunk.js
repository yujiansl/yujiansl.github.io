(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{RYba:function(C,l,t){"use strict";t.r(l);var o=t("14J3"),b=t("BMrR"),D=t("jCWc"),g=t("kPKH"),B=t("+L6B"),f=t("2/Rp"),A=t("5NDa"),u=t("5rEg"),c=t("y8nQ"),n=t("Vl3Y"),O=t("BoS7"),E=t("Sdc0"),y=t("Znn+"),P=t("ZTPi"),s=t("k1fw"),m=t("tJVT"),i=t("sUUX"),r=t.n(i),U=t("q1tI"),Z=t.n(U),G=t("2PG1"),x=t("e+sY"),J=t("NFKh"),F=t.n(J),z=t("GWEE"),H=t("pn+7"),e=t("nKUr"),nt=t.n(e),a="vQdj",ut=function(W){var M=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"HelloWorldUpay00",p=F.a.enc.Utf8.parse(M),w=F.a.enc.Utf8.parse(W),I=F.a.AES.encrypt(w,p,{mode:F.a.mode.ECB,padding:F.a.pad.Pkcs7});return I.ciphertext.toString().toLowerCase()};l.default=function(){var j=Z.a.useRef(null),W=Object(U.useState)({}),M=Object(m.a)(W,2),p=M[0],w=M[1],I=Object(U.useState)(!1),L=Object(m.a)(I,2),S=L[0],$=L[1],Q=Object(U.useState)("withdraw"),N=Object(m.a)(Q,2),K=N[0],X=N[1],q=Object(U.useState)(!1),k=Object(m.a)(q,2),V=k[0],T=k[1],Y=Object(U.useCallback)(function(){Object(x.a)().then(function(h){var d,_,R;(d=j.current)===null||d===void 0||d.setFieldsValue({canAutoWithdraw:((_=h.data)===null||_===void 0?void 0:_.canAutoWithdraw)===1,withdrawToAddress:h.data.withdrawToAddress,withdrawThreshold:h.data.withdrawThreshold}),$(((R=h.data)===null||R===void 0?void 0:R.canAutoWithdraw)!==1),w(h.data)})},[]),tt=function(d){T(!0),Object(x.b)(Object(s.a)(Object(s.a)({},d),{},{canAutoWithdraw:S?2:1,id:p.id})).then(function(){var _;(_=j.current)===null||_===void 0||_.resetFields(),Y()}).finally(function(){T(!1)})},et=function(d){T(!0),Object(x.e)({password:d.password,id:p.id,confirmPassword:d.confirmPassword}).then(function(){var _;(_=j.current)===null||_===void 0||_.resetFields(),z.a.logout()}).finally(function(){T(!1)})};Object(U.useEffect)(function(){Y()},[]);var at=function(){var d,_;(d=j.current)===null||d===void 0||d.resetFields(),(_=j.current)===null||_===void 0||_.setFieldsValue({canAutoWithdraw:(p==null?void 0:p.canAutoWithdraw)===1,withdrawToAddress:p.withdrawToAddress,withdrawThreshold:p.withdrawThreshold})};return Object(e.jsxs)(b.a,{className:r.a.content,_nk:"".concat(a,"11"),children:[Object(e.jsxs)(P.a,{activeKey:K,onChange:X,_nk:"".concat(a,"21"),children:[Object(e.jsx)(P.a.TabPane,{tab:"\u81EA\u52A8\u8F6C\u8D26",_nk:"".concat(a,"31")},"withdraw"),Object(e.jsx)(P.a.TabPane,{tab:"\u4FEE\u6539\u5BC6\u7801",_nk:"".concat(a,"32")},"pass")]}),K==="withdraw"&&Object(e.jsx)(g.a,{md:24,_nk:"".concat(a,"41"),children:Object(e.jsxs)(n.a,{layout:"vertical",ref:j,name:"control-ref",onFinish:tt,style:{width:"100%",maxWidth:"700px"},_nk:"".concat(a,"51"),children:[Object(e.jsx)(n.a.Item,{name:"canAutoWithdraw",label:"\u662F\u5426\u5F00\u542F\u81EA\u52A8\u8F6C\u8D26",_nk:"".concat(a,"33"),children:Object(e.jsx)(E.a,{checkedChildren:"\u5F00\u542F",unCheckedChildren:"\u5173\u95ED",checked:S,onChange:$,_nk:"".concat(a,"61")})}),Object(e.jsx)(n.a.Item,{name:"withdrawThreshold",label:"\u91D1\u989D\u9608\u503C\uFF08USDT\uFF09",rules:[{required:!0}],_nk:"".concat(a,"34"),children:Object(e.jsx)(u.a,{onBlur:function(){return Object(H.a)(j,"withdrawThreshold")},placeholder:"\u8BF7\u8F93\u5165\u91D1\u989D\u9608\u503C",_nk:"".concat(a,"71")})}),Object(e.jsx)("div",{className:"tips-danger",_nk:"".concat(a,"81"),children:"\u6CE8\uFF1A\u5F53\u4F59\u989D\u5927\u4E8E\u8BBE\u7F6E\u7684\u8F6C\u8D26\u91D1\u989D\u65F6\uFF0C\u81EA\u52A8\u8F6C\u8D26"}),Object(e.jsx)(n.a.Item,{name:"withdrawToAddress",label:"TRC\u8F6C\u8D26\u5730\u5740",rules:[{required:!0}],_nk:"".concat(a,"35"),children:Object(e.jsx)(u.a,{placeholder:"\u8BF7\u8F93\u5165\u8F6C\u8D26\u5730\u5740",_nk:"".concat(a,"72")})}),Object(e.jsx)(n.a.Item,{name:"confirmPassword",label:"\u786E\u8BA4\u5BC6\u7801",rules:[{required:!0}],_nk:"".concat(a,"36"),children:Object(e.jsx)(u.a.Password,{placeholder:"\u8BF7\u8F93\u5165\u786E\u8BA4\u5BC6\u7801",_nk:"".concat(a,"37")})}),Object(e.jsx)(n.a.Item,{_nk:"".concat(a,"38"),children:Object(e.jsxs)("div",{className:r.a.intro,_nk:"".concat(a,"82"),children:[Object(e.jsxs)("div",{className:r.a.title,_nk:"".concat(a,"83"),children:[Object(e.jsx)(G.a,{style:{marginRight:"10px"},_nk:"".concat(a,"91")}),"\u8BF4\u660E"]}),Object(e.jsx)("div",{_nk:"".concat(a,"84"),children:"1. \u5F00\u542F\u81EA\u52A8\u8F6C\u8D26\u540E\uFF0C\u5F53\u8D26\u6237\u4F59\u989D\u8FBE\u5230\u8BBE\u7F6E\u7684\u91D1\u989D\u9608\u503C\u65F6\uFF0C\u7CFB\u7EDF\u5C06\u4F1A\u81EA\u52A8\u5411\u6307\u5B9A\u7684\u5730\u5740\u8FDB\u884C\u8F6C\u8D26\u64CD\u4F5C\u3002"}),Object(e.jsx)("div",{_nk:"".concat(a,"85"),children:"2. \u7CFB\u7EDF\u6700\u4F4E\u8F6C\u8D26\u91D1\u989D\uFF1A 10 USDT\u3002"}),Object(e.jsx)("div",{_nk:"".concat(a,"86"),children:"3. \u8BF7\u786E\u4FDD\u8F93\u5165\u6B63\u786E\u7684\u8F6C\u8D26\u63A5\u6536\u5730\u5740\u3002"})]})}),Object(e.jsxs)(n.a.Item,{_nk:"".concat(a,"39"),children:[Object(e.jsx)(f.a,{loading:V,style:{marginRight:"10px"},type:"primary",className:r.a.btn,htmlType:"submit",_nk:"".concat(a,"a1"),children:"\u786E\u8BA4"}),Object(e.jsx)(f.a,{type:"default",className:r.a.btn,onClick:at,_nk:"".concat(a,"a2"),children:"\u91CD\u7F6E"})]})]})}),K==="pass"&&Object(e.jsx)(g.a,{md:24,_nk:"".concat(a,"42"),children:Object(e.jsxs)(n.a,{layout:"vertical",ref:j,name:"control-ref",onFinish:et,style:{width:"100%",maxWidth:"700px"},_nk:"".concat(a,"52"),children:[Object(e.jsx)(n.a.Item,{name:"confirmPassword",label:"\u65E7\u5BC6\u7801",rules:[{required:!0}],_nk:"".concat(a,"3a"),children:Object(e.jsx)(u.a.Password,{placeholder:"\u8BF7\u8F93\u5165\u65E7\u5BC6\u7801",_nk:"".concat(a,"3b")})}),Object(e.jsx)(n.a.Item,{name:"password",label:"\u65B0\u5BC6\u7801",rules:[{required:!0},function(){return{validator:function(d,_){var R=/^[a-zA-Z0-9._]{6,15}$/,v;return R.test(_)||(v="\u5BC6\u7801\u683C\u5F0F\u4E0D\u6B63\u786E!"),v&&v.length>0?Promise.reject(v):Promise.resolve()}}}],_nk:"".concat(a,"3c"),children:Object(e.jsx)(u.a.Password,{placeholder:"\u8BF7\u8F93\u5165\u65B0\u5BC6\u7801",_nk:"".concat(a,"3d")})}),Object(e.jsx)(n.a.Item,{name:"rePassword",label:"\u518D\u6B21\u65B0\u8F93\u5165\u5BC6\u7801",rules:[{required:!0},function(h){return{validator:function(_,R){var v;return h.getFieldValue("password")!==R&&(v="\u4E24\u6B21\u8F93\u5165\u7684\u5BC6\u7801\u4E0D\u4E00\u81F4!"),v&&v.length>0?Promise.reject(v):Promise.resolve()}}}],_nk:"".concat(a,"3e"),children:Object(e.jsx)(u.a.Password,{placeholder:"\u8BF7\u518D\u6B21\u8F93\u5165\u5BC6\u7801",_nk:"".concat(a,"3f")})}),Object(e.jsxs)(n.a.Item,{_nk:"".concat(a,"3g"),children:[Object(e.jsx)(f.a,{loading:V,style:{marginRight:"10px"},type:"primary",className:r.a.btn,htmlType:"submit",_nk:"".concat(a,"a3"),children:"\u786E\u8BA4"}),Object(e.jsx)(f.a,{type:"default",className:r.a.btn,htmlType:"submit",_nk:"".concat(a,"a4"),children:"\u91CD\u7F6E"})]})]})})]})}},"e+sY":function(C,l,t){"use strict";t.d(l,"c",function(){return B}),t.d(l,"a",function(){return A}),t.d(l,"d",function(){return c}),t.d(l,"b",function(){return O}),t.d(l,"e",function(){return y});var o=t("qLMh"),b=t("9og8"),D=t("czNd"),g="nfL4";function B(){return f.apply(this,arguments)}function f(){return f=Object(b.a)(Object(o.a)().mark(function s(){return Object(o.a)().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",Object(D.a)("/v1/api/agent/statistic",{method:"GET"}));case 1:case"end":return i.stop()}},s)})),f.apply(this,arguments)}function A(){return u.apply(this,arguments)}function u(){return u=Object(b.a)(Object(o.a)().mark(function s(){return Object(o.a)().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",Object(D.a)("/v1/api/agent/detail",{method:"POST"}));case 1:case"end":return i.stop()}},s)})),u.apply(this,arguments)}function c(s){return n.apply(this,arguments)}function n(){return n=Object(b.a)(Object(o.a)().mark(function s(m){return Object(o.a)().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",Object(D.a)("/v1/api/withdraw/agent/create",{method:"POST",data:m}));case 1:case"end":return r.stop()}},s)})),n.apply(this,arguments)}function O(s){return E.apply(this,arguments)}function E(){return E=Object(b.a)(Object(o.a)().mark(function s(m){return Object(o.a)().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",Object(D.a)("/v1/api/agent/update",{method:"POST",data:m}));case 1:case"end":return r.stop()}},s)})),E.apply(this,arguments)}function y(s){return P.apply(this,arguments)}function P(){return P=Object(b.a)(Object(o.a)().mark(function s(m){return Object(o.a)().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",Object(D.a)("/v1/api/agent/update",{method:"POST",data:m}));case 1:case"end":return r.stop()}},s)})),P.apply(this,arguments)}},"pn+7":function(C,l,t){"use strict";t.d(l,"b",function(){return B}),t.d(l,"a",function(){return f}),t.d(l,"c",function(){return A});var o=t("jrin"),b=t("miYZ"),D=t("tsqr"),g="TZQN";function B(u){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",n=document.createElement("textarea");n.readOnly=Boolean("readonly"),n.style.position="absolute",n.style.left="-9999px",n.value=u,document.body.appendChild(n),n.select(),n.setSelectionRange(0,n.value.length),document.execCommand("Copy"),document.body.removeChild(n),c||D.default.success("\u590D\u5236\u6210\u529F"),c&&Object.prototype.toString.call(c)==="[object Function]"&&c()}function f(u,c){var n,O,E=Math.abs((u==null||((n=u.current)===null||n===void 0)?void 0:n.getFieldValue(c))||0),y=Number(E.toFixed(4)).toString();u==null||((O=u.current)===null||O===void 0)||O.setFieldsValue(Object(o.a)({},c,y))}function A(u,c){var n,O,E,y,P=Math.abs((u==null||((n=u.current)===null||n===void 0||((O=n.getForm())===null||O===void 0))?void 0:O.getFieldValue(c))||0),s=Number(P.toFixed(4)).toString();u==null||((E=u.current)===null||E===void 0||((y=E.getForm())===null||y===void 0))||y.setFieldsValue(Object(o.a)({},c,s))}},sUUX:function(C,l,t){C.exports={content:"content___2_-h3",qr:"qr___1zi92",btn:"btn___3_bs7",text:"text___HKxlc",intro:"intro___s9ucY",title:"title___2Y7sL",tips:"tips___w6gon"}}}]);

(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{"+4Ct":function(B,u,e){"use strict";e.r(u);var t=e("qLMh"),f=e("miYZ"),E=e("tsqr"),_=e("9og8"),R=e("14J3"),l=e("BMrR"),m=e("k1fw"),d=e("jCWc"),P=e("kPKH"),p=e("5NDa"),b=e("5rEg"),v=e("tJVT"),s=e("4b2B"),o=e.n(s),c=e("Ag2N"),r=e("E9fh"),A=e("XlJJ"),i=e("q1tI"),J=e.n(i),Q=e("7LQ8"),F=e("vmhP"),K=e("/8vi"),w=e("e+sY"),y=e("nKUr"),X=e.n(y),a="2Teo";u.default=function(){var j=Object(i.useRef)(),$=Object(i.useRef)(),C=Object(i.useState)(),g=Object(v.a)(C,2),D=g[0],M=g[1],n=function(O){var h="";switch(O){case 0:h="\u5904\u7406\u4E2D";break;case 1:h="\u8BA2\u5355\u5B8C\u6210";break;case 2:h="\u8BA2\u5355\u8D85\u65F6";break;case 3:h="\u8BA2\u5355\u5931\u8D25";break;case 4:h="\u9000\u6B3E\u4E2D";break;case 5:h="\u9000\u6B3E\u6210\u529F";break;default:h="\u5904\u7406\u4E2D";break}return h},ne=function(O){var h="";return O===1?h="TRC20":O===2?h="ERC20":h="PYUSD",h},ie=[{title:"\u7F16\u53F7",dataIndex:"id",align:"center",order:2,hideInSearch:!0,width:"100px",ellipsis:!0},{title:"\u5546\u6237\u540D\u79F0",dataIndex:"merchant",align:"center",width:150,ellipsis:!0,renderText:function(O){return O.user.name},renderFormItem:function(){return Object(y.jsx)(b.a,{placeholder:"\u8BF7\u8F93\u5165\u5546\u6237\u540D\u79F0",_nk:"".concat(a,"11")})}},{title:"\u6240\u5C5E\u4EE3\u7406\u5546",dataIndex:"agent",align:"center",renderText:function(O){return O.user.name},renderFormItem:function(){return Object(y.jsx)(b.a,{placeholder:"\u8BF7\u8F93\u5165\u6240\u5C5E\u4EE3\u7406\u5546",_nk:"".concat(a,"12")})},width:150,ellipsis:!0},{title:"\u8BA2\u5355\u91D1\u989D\uFF08USDT\uFF09",dataIndex:"crypto",align:"center",hideInSearch:!0,ellipsis:!0,width:200},{title:"\u4F63\u91D1",dataIndex:"agentProfit",align:"center",ellipsis:!0,width:100},{title:"\u72B6\u6001",dataIndex:"status",align:"center",hideInSearch:!0,width:"100px",renderText:function(O){return n(O)}},{title:"\u94FE\u8DEF\u7C7B\u578B",dataIndex:"chainType",align:"center",width:"100px",renderText:function(O){return ne(O)},renderFormItem:function(){return Object(y.jsx)(F.a,{placeholder:"\u8BF7\u9009\u62E9\u94FE\u8DEF\u7C7B\u578B",type:3,_nk:"".concat(a,"21")})}},{title:"\u7CFB\u7EDF\u8BA2\u5355\u53F7",dataIndex:"orderNo",align:"center",width:150,ellipsis:!0},{title:"\u5546\u6237\u8BA2\u5355\u53F7",dataIndex:"merchantOrderNo",align:"center",width:200,ellipsis:!0,renderFormItem:function(){return Object(y.jsx)(b.a,{placeholder:"\u8BF7\u8F93\u5165\u5546\u6237\u8BA2\u5355\u53F7",_nk:"".concat(a,"13")})}},{title:"\u652F\u4ED8\u65F6\u95F4",valueType:"dateTime",dataIndex:"successTime",align:"center",width:200,renderFormItem:function(){return Object(y.jsx)(K.a,{_nk:"".concat(a,"31")})}},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"createdAt",valueType:"dateTime",align:"center",width:200,renderFormItem:function(){return Object(y.jsx)(K.a,{_nk:"".concat(a,"32")})}}],Y=Object(i.useState)({totalOrder:"",dailyStatistics:[],rate:"",todayCrypto:"",totalCrypto:"",usdtBalance:"",totalBrokerage:""}),L=Object(v.a)(Y,2),I=L[0],V=L[1],k=Object(i.useCallback)(function(){Object(w.c)().then(function(U){V(U.data)}).finally(function(){})},[]);Object(i.useEffect)(function(){k()},[]);function H(){}return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)(l.a,{_nk:"".concat(a,"41"),children:[Object(y.jsxs)(P.a,{className:["".concat(o.a.flexStart," ").concat(o.a.amount)].join(""),md:24,_nk:"".concat(a,"51"),children:[Object(y.jsxs)("div",{className:o.a.item,_nk:"".concat(a,"61"),children:[" \u603B\u8BA2\u5355\u91D1\u989D\uFF1A",I.totalCrypto]}),Object(y.jsxs)("div",{className:o.a.item,_nk:"".concat(a,"62"),children:[" \u603B\u6210\u529F\u7B14\u6570\uFF1A",I.totalOrder]}),Object(y.jsxs)("div",{className:o.a.item,_nk:"".concat(a,"63"),children:[" \u603B\u4F63\u91D1\uFF1A",I.totalBrokerage]})]}),Object(y.jsx)(P.a,{md:24,_nk:"".concat(a,"52"),children:Object(y.jsx)(c.default.Modal,Object(m.a)(Object(m.a)({},r.b),{},{rowKey:"userId",columns:ie,tableRef:j,formRef:$,handlerData:function(O,h){return h==="create"?Object(m.a)(Object(m.a)({},O),{},{pass:A.a.encrypt(O.pass)}):O},operateBar:[],operateBarProps:{width:0},toolBarActions:[],tableProps:{},formProps:{titleSuffix:"\u7528\u6237"},onStatusChange:H,_nk:"".concat(a,"71")}))})]}),Object(y.jsx)(Q.default.Avatar,{visible:D!==void 0,onVisibleChange:function(O){O||M(void 0)},onSave:function(){var U=Object(_.a)(Object(t.a)().mark(function O(h,Z){return Object(t.a)().wrap(function(W){for(;;)switch(W.prev=W.next){case 0:if(D){W.next=4;break}return E.default.error("\u8BF7\u6307\u5B9A\u8981\u66F4\u65B0\u5934\u50CF\u7684\u7528\u6237!"),M(void 0),W.abrupt("return",Promise.resolve());case 4:return W.abrupt("return",user.updateAvatar(D,h,Z).then(function(){return M(void 0)}));case 5:case"end":return W.stop()}},O)}));return function(O,h){return U.apply(this,arguments)}}(),_nk:"".concat(a,"72")})]})}},"/8vi":function(B,u,e){"use strict";var t=e("k1fw"),f=e("iQDF"),E=e("+eQT"),_=e("tL7X"),R=e("nKUr"),l=e.n(R),m="vHUN",d=E.a.RangePicker;u.a=function(P){var p=P.formatText,b=p===void 0?"YYYY-MM-DD":p,v=P.placeholderText,s=v===void 0?[_.a.text("reg_tips69"),_.a.text("reg_tips70")]:v;return Object(R.jsx)(d,Object(t.a)(Object(t.a)({},P),{},{placeholder:s,format:b,_nk:"".concat(m,"11")}))}},"4b2B":function(B,u,e){B.exports={content:"content___3HGTR",qr:"qr___3UBt-",btn:"btn___2qQPl",text:"text___1nAEq",intro:"intro___4TDj2",title:"title___3xB1Z",flexStart:"flexStart___2NmPm",amount:"amount___1r4VJ",item:"item___28-Qh"}},"7LQ8":function(B,u,e){"use strict";var t=e("J9WQ"),f=e("HgcE"),E=e.n(f),_="lNZJ";u.default=t.a},E9fh:function(B,u,e){"use strict";e.d(u,"e",function(){return t}),e.d(u,"b",function(){return f}),e.d(u,"a",function(){return c}),e.d(u,"d",function(){return E}),e.d(u,"c",function(){return _});var t={};e.r(t),e.d(t,"query",function(){return p});var f={};e.r(f),e.d(f,"query",function(){return s});var E={};e.r(E),e.d(E,"query",function(){return i}),e.d(E,"create",function(){return Q}),e.d(E,"edit",function(){return K}),e.d(E,"del",function(){return y});var _={};e.r(_),e.d(_,"query",function(){return j});var R=e("e+sY"),l=e("qLMh"),m=e("9og8"),d=e("9kvl"),P="au0B";function p(g){return b.apply(this,arguments)}function b(){return b=Object(m.a)(Object(l.a)().mark(function g(D){return Object(l.a)().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",Object(d.e)("/v1/api/withdraw/list",{method:"POST",data:D}));case 1:case"end":return n.stop()}},g)})),b.apply(this,arguments)}var v="ltpa";function s(g){return o.apply(this,arguments)}function o(){return o=Object(m.a)(Object(l.a)().mark(function g(D){return Object(l.a)().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",Object(d.e)("/v1/api/order/list",{method:"POST",data:D}));case 1:case"end":return n.stop()}},g)})),o.apply(this,arguments)}var c=e("qgU7"),r=e("czNd"),A="HtB+";function i(g){return J.apply(this,arguments)}function J(){return J=Object(m.a)(Object(l.a)().mark(function g(D){return Object(l.a)().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",Object(r.a)("/v1/api/agent/list",{method:"POST",data:D}));case 1:case"end":return n.stop()}},g)})),J.apply(this,arguments)}function Q(g){return F.apply(this,arguments)}function F(){return F=Object(m.a)(Object(l.a)().mark(function g(D){return Object(l.a)().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",Object(r.a)("/v1/api/agent/create",{method:"POST",data:D}));case 1:case"end":return n.stop()}},g)})),F.apply(this,arguments)}function K(g){return w.apply(this,arguments)}function w(){return w=Object(m.a)(Object(l.a)().mark(function g(D){return Object(l.a)().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",Object(r.a)("/v1/api/agent/update",{method:"POST",data:D}));case 1:case"end":return n.stop()}},g)})),w.apply(this,arguments)}function y(g){return X.apply(this,arguments)}function X(){return X=Object(m.a)(Object(l.a)().mark(function g(D){return Object(l.a)().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",Object(r.a)("/v1/api/agent/delete",{method:"POST",data:{id:D.id}}));case 1:case"end":return n.stop()}},g)})),X.apply(this,arguments)}var a="+NZr";function j(g){return $.apply(this,arguments)}function $(){return $=Object(m.a)(Object(l.a)().mark(function g(D){return Object(l.a)().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",Object(d.e)("/v1/api/agentbill/list",{method:"POST",data:D}));case 1:case"end":return n.stop()}},g)})),$.apply(this,arguments)}var C="Kjk4"},HgcE:function(B,u){var e="/78F"},J9WQ:function(B,u,e){"use strict";var t=e("14J3"),f=e("BMrR"),E=e("jCWc"),_=e("kPKH"),R=e("k1fw"),l=e("tJVT"),m=e("13Nf"),d=e("q1tI"),P=e("YQfW"),p=e("LvDl"),b=e("2qtc"),v=e("kLXV"),s=e("T2oS"),o=e("W9HT"),c=e("DZo9"),r=e("8z0m"),A=e("+L6B"),i=e("2/Rp"),J=e("7LQ8"),Q=e("tL7X"),F=e("z7Xi"),K=e("xvlK"),w=e("tUHX"),y=e("k5nK"),X=e("VA6q"),a=e("nKUr"),j="AOv/",$=200,C=200,g=function(Y){var L=Y.visible,I=Y.onVisibleChange,V=I===void 0?function(){}:I,k=Y.onSave,H=Object(d.useRef)(),U=Object(d.useState)([]),O=Object(l.a)(U,2),h=O[0],Z=O[1],ee=Object(d.useState)(),W=Object(l.a)(ee,2),te=W[0],le=W[1],ue=Object(d.useState)(!1),T=Object(l.a)(ue,2),se=T[0],ae=T[1],q=function(re,oe){if(!h||h.length===0){Q.a.error("cropper.avatar.select");return}H!=null&&H.current&&H.current[re](oe)};return Object(a.jsx)(v.a,{width:"800px",title:"\u5934\u50CF\u4E0A\u4F20",bodyStyle:{paddingBottom:0},visible:L,footer:Object(a.jsxs)(f.a,{_nk:"".concat(j,"21"),children:[Object(a.jsxs)(_.a,{xs:24,md:12,style:{textAlign:"left"},_nk:"".concat(j,"31"),children:[Object(a.jsx)(r.a,{accept:"image/*",fileList:h,showUploadList:!1,maxCount:1,onChange:function(re){return Z(re.fileList)},_nk:"".concat(j,"41"),children:Object(a.jsxs)(i.a,{_nk:"".concat(j,"51"),children:[Object(a.jsx)(F.a,{_nk:"".concat(j,"61")}),"\u9009\u62E9\u56FE\u7247"]})}),Object(a.jsx)(i.a,{style:{marginLeft:"8px"},onClick:function(){return q("zoom",.1)},_nk:"".concat(j,"52"),children:Object(a.jsx)(K.a,{_nk:"".concat(j,"71")})}),Object(a.jsx)(i.a,{onClick:function(){return q("zoom",-.1)},_nk:"".concat(j,"53"),children:Object(a.jsx)(w.a,{_nk:"".concat(j,"81")})}),Object(a.jsx)(i.a,{onClick:function(){return q("rotate",-90)},_nk:"".concat(j,"54"),children:Object(a.jsx)(y.a,{_nk:"".concat(j,"91")})}),Object(a.jsx)(i.a,{onClick:function(){return q("rotate",90)},_nk:"".concat(j,"55"),children:Object(a.jsx)(X.a,{_nk:"".concat(j,"a1")})})]}),Object(a.jsx)(_.a,{xs:24,md:12,_nk:"".concat(j,"32"),children:Object(a.jsx)(i.a,{type:"primary",loading:se,onClick:function(){if(!te){Q.a.error("cropper.avatar.select");return}k&&(ae(!0),setTimeout(function(){k(te,h[0]).finally(function(){return ae(!1)})},600))},_nk:"".concat(j,"56"),children:"\u4FDD\u5B58"})})]}),onCancel:function(){return V(!1)},_nk:"".concat(j,"11"),children:Object(a.jsx)(o.a,{spinning:se,_nk:"".concat(j,"b1"),children:Object(a.jsx)(J.default,{imgHeight:350,imgWidth:350,previewHeight:$,previewWidth:C,cr:H,value:h&&h.length>0?h[0].originFileObj:"",options:{minCropBoxHeight:200,minCropBoxWidth:200,autoCropArea:1,aspectRatio:1},onChange:le,_nk:"".concat(j,"c1")})})})},D=e("bwIe"),M="twNa",n={viewMode:2,background:!0,responsive:!0,autoCropArea:.3,checkOrientation:!1,zoomTo:.5,zoomable:!0,guides:!0,rotatable:!0,cropBoxResizable:!0,cropBoxMovable:!0,dragMode:"move",center:!0,minCropBoxHeight:10,minCropBoxWidth:10,initialAspectRatio:1,autoCrop:!0,highlight:!0},ne=function(L){var I=L.value,V=L.onChange,k=L.onUrlChange,H=L.options,U=L.imgWidth,O=U===void 0?400:U,h=L.imgHeight,Z=h===void 0?400:h,ee=L.previewWidth,W=ee===void 0?O:ee,te=L.previewHeight,le=te===void 0?Z:te,ue=L.cr,T=Object(d.useRef)(null),se=Object(d.useState)(),ae=Object(l.a)(se,2),q=ae[0],N=ae[1],re=Object(d.useMemo)(function(){return Object(p.debounce)(function(z){var x=z.getCroppedCanvas();V&&x.toBlob(function(S){return V(S||void 0)}),k&&k(x.toDataURL())},500)},[V,k]),oe=function(){var x,S=T==null||((x=T.current)===null||x===void 0)?void 0:x.cropper;S&&(V||k)&&re(S)};return Object(d.useImperativeHandle)(ue,function(){return{zoom:function(x){var S,G;T==null||((S=T.current)===null||S===void 0||((G=S.cropper)===null||G===void 0))||G.zoom(x)},rotate:function(x){var S,G;T==null||((S=T.current)===null||S===void 0||((G=S.cropper)===null||G===void 0))||G.rotate(x)},getCropper:function(){var x;return T==null||((x=T.current)===null||x===void 0)?void 0:x.cropper}}}),Object(d.useEffect)(function(){if(!I){N(void 0);return}typeof I=="string"?N(I):D.a.getBase64(I).then(function(z){N(z)})},[I]),Object(a.jsxs)(f.a,{style:{userSelect:"none",WebkitUserSelect:"none"},_nk:"".concat(M,"11"),children:[Object(a.jsx)(_.a,{xs:24,md:12,_nk:"".concat(M,"21"),children:Object(a.jsx)("div",{style:{width:"100%"},_nk:"".concat(M,"31"),children:Object(a.jsx)(m.a,Object(R.a)(Object(R.a)(Object(R.a)({},n),H),{},{preview:".lt-cropper-preview",style:{height:"".concat(Z,"px"),width:"".concat(O,"px"),backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAA3NCSVQICAjb4U/gAAAABlBMVEXMzMz////TjRV2AAAACXBIWXMAAArrAAAK6wGCiw1aAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABFJREFUCJlj+M/AgBVhF/0PAH6/D/HkDxOGAAAAAElFTkSuQmCC')"},src:q,crop:oe,ref:T,_nk:"".concat(M,"41")}))})}),Object(a.jsx)(_.a,{xs:24,md:12,style:{display:"flex",justifyContent:"center",alignItems:"center"},_nk:"".concat(M,"22"),children:Object(a.jsx)("div",{className:"lt-cropper-preview",style:{overflow:"hidden",display:"inline-block",boxSizing:"border-box",height:"".concat(le,"px"),width:"".concat(W,"px"),boxShadow:"0 0 4px #ccc",WebkitBoxShadow:"0 0 4px #ccc"},_nk:"".concat(M,"32")})})]})};ne.Avatar=g;var ie=u.a=ne},XlJJ:function(B,u,e){"use strict";e.d(u,"a",function(){return P});var t=e("fWQN"),f=e("mtLc"),E=e("NFKh"),_=e.n(E),R="0amg",l=function(){function p(){Object(t.a)(this,p)}return Object(f.a)(p,[{key:"encrypt",value:function(v){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"XwKsGlMcdPMEhR1B",o=_.a.enc.Utf8.parse(s),c=_.a.enc.Utf8.parse(v),r=_.a.AES.encrypt(c,o,{mode:_.a.mode.ECB,padding:_.a.pad.Pkcs7});return r.toString()}}]),p}(),m=function(){function p(){Object(t.a)(this,p),this.securityKey="==BallCat-Auth=="}return Object(f.a)(p,[{key:"encrypt",value:function(v){var s=_.a.enc.Utf8.parse(this.securityKey);return _.a.AES.encrypt(v,s,{iv:s,mode:_.a.mode.CBC,padding:_.a.pad.Pkcs7}).toString()}}]),p}(),d=new l,P=new m},bwIe:function(B,u,e){"use strict";var t=e("qLMh"),f=e("9og8"),E="jIV/";function _(d,P){return R.apply(this,arguments)}function R(){return R=Object(f.a)(Object(t.a)().mark(function d(P,p){var b,v,s;return Object(t.a)().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:b=p||new Date().getTime().toString(),window.navigator.msSaveOrOpenBlob?navigator.msSaveBlob(P,p):(v=URL.createObjectURL(P),s=document.createElement("a"),s.style.display="none",s.href=v,s.download=b,s.click(),URL.revokeObjectURL(s.href));case 2:case"end":return c.stop()}},d)})),R.apply(this,arguments)}function l(d){return m.apply(this,arguments)}function m(){return m=Object(f.a)(Object(t.a)().mark(function d(P){return Object(t.a)().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.abrupt("return",new Promise(function(v,s){var o=new FileReader;o.onload=function(){return v(o.result)},o.onerror=function(c){return s(c)},o.readAsDataURL(P)}));case 1:case"end":return b.stop()}},d)})),m.apply(this,arguments)}u.a={remoteFileDownload:_,getBase64:l}},"e+sY":function(B,u,e){"use strict";e.d(u,"c",function(){return R}),e.d(u,"a",function(){return m}),e.d(u,"d",function(){return P}),e.d(u,"b",function(){return b}),e.d(u,"e",function(){return s});var t=e("qLMh"),f=e("9og8"),E=e("czNd"),_="nfL4";function R(){return l.apply(this,arguments)}function l(){return l=Object(f.a)(Object(t.a)().mark(function c(){return Object(t.a)().wrap(function(A){for(;;)switch(A.prev=A.next){case 0:return A.abrupt("return",Object(E.a)("/v1/api/agent/statistic",{method:"GET"}));case 1:case"end":return A.stop()}},c)})),l.apply(this,arguments)}function m(){return d.apply(this,arguments)}function d(){return d=Object(f.a)(Object(t.a)().mark(function c(){return Object(t.a)().wrap(function(A){for(;;)switch(A.prev=A.next){case 0:return A.abrupt("return",Object(E.a)("/v1/api/agent/detail",{method:"POST"}));case 1:case"end":return A.stop()}},c)})),d.apply(this,arguments)}function P(c){return p.apply(this,arguments)}function p(){return p=Object(f.a)(Object(t.a)().mark(function c(r){return Object(t.a)().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",Object(E.a)("/v1/api/withdraw/agent/create",{method:"POST",data:r}));case 1:case"end":return i.stop()}},c)})),p.apply(this,arguments)}function b(c){return v.apply(this,arguments)}function v(){return v=Object(f.a)(Object(t.a)().mark(function c(r){return Object(t.a)().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",Object(E.a)("/v1/api/agent/update",{method:"POST",data:r}));case 1:case"end":return i.stop()}},c)})),v.apply(this,arguments)}function s(c){return o.apply(this,arguments)}function o(){return o=Object(f.a)(Object(t.a)().mark(function c(r){return Object(t.a)().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",Object(E.a)("/v1/api/agent/update",{method:"POST",data:r}));case 1:case"end":return i.stop()}},c)})),o.apply(this,arguments)}},qgU7:function(B,u,e){"use strict";e.r(u),e.d(u,"query",function(){return R}),e.d(u,"create",function(){return m}),e.d(u,"edit",function(){return P}),e.d(u,"del",function(){return b});var t=e("qLMh"),f=e("9og8"),E=e("9kvl"),_="y3pK";function R(s){return l.apply(this,arguments)}function l(){return l=Object(f.a)(Object(t.a)().mark(function s(o){return Object(t.a)().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",Object(E.e)("/v1/api/merchant/list",{method:"POST",data:o}));case 1:case"end":return r.stop()}},s)})),l.apply(this,arguments)}function m(s){return d.apply(this,arguments)}function d(){return d=Object(f.a)(Object(t.a)().mark(function s(o){return Object(t.a)().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",Object(E.e)("/v1/api/merchant/create",{method:"POST",data:o}));case 1:case"end":return r.stop()}},s)})),d.apply(this,arguments)}function P(s){return p.apply(this,arguments)}function p(){return p=Object(f.a)(Object(t.a)().mark(function s(o){return Object(t.a)().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",Object(E.e)("/v1/api/merchant/update",{method:"POST",data:o}));case 1:case"end":return r.stop()}},s)})),p.apply(this,arguments)}function b(s){return v.apply(this,arguments)}function v(){return v=Object(f.a)(Object(t.a)().mark(function s(o){return Object(t.a)().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",Object(E.e)("/v1/api/merchant/delete",{method:"POST",data:{id:o.id}}));case 1:case"end":return r.stop()}},s)})),v.apply(this,arguments)}},vmhP:function(B,u,e){"use strict";var t=e("k1fw"),f=e("OaEy"),E=e("2fM7"),_=e("tJVT"),R=e("q1tI"),l=e.n(R),m=e("nKUr"),d=e.n(m),P="ku+H",p=[{value:"1",label:"TRC20"},{value:"2",label:"ERC20"}],b=[{value:"1",label:"\u624B\u52A8\u8F6C\u8D26"},{value:"2",label:"API\u8F6C\u8D26"},{value:"3",label:"\u81EA\u52A8\u8F6C\u8D26"}],v=[{value:"1",label:"\u5904\u7406\u4E2D"},{value:"2",label:"\u8F6C\u8D26\u6210\u529F"},{value:"3",label:"\u8F6C\u8D26\u5931\u8D25"}],s=[{value:"1",label:"TRC20"},{value:"2",label:"ERC20"}],o=[{value:"1",label:"\u8BA2\u5355\u6536\u6B3E"},{value:"2",label:"\u63D0\u6B3E"},{value:"3",label:"\u63D0\u6B3E\u624B\u7EED\u8D39"},{value:"4",label:"\u4F59\u989D\u53D8\u52A8"},{value:"5",label:"\u4EE3\u4ED8\u5931\u8D25\u8FD4\u56DE\u91D1\u989D"},{value:"6",label:"\u4EE3\u4ED8\u5931\u8D25\u8FD4\u56DE\u624B\u7EED\u8D39"},{value:"7",label:"\u4E2A\u4EBA\u7801\u6536\u6B3E\u6263\u9664\u624B\u7EED\u8D39"},{value:"8",label:"ERC20\u63D0\u5E01\u624B\u7EED\u8D39"},{value:"9",label:"\u5546\u6237\u8865\u5355"}],c=[{value:"1",label:"\u8BA2\u5355\u4F63\u91D1"},{value:"2",label:"\u8F6C\u8D26"},{value:"3",label:"\u8F6C\u8D26\u624B\u7EED\u8D39"},{value:"4",label:"\u4F59\u989D\u53D8\u52A8"}],r=[{value:"2",label:"\u6B63\u5E38"},{value:"1",label:"\u7981\u7528"}],A=[{value:"1",label:"\u5165\u8D26"},{value:"2",label:"\u51FA\u8D26"}],i=[{value:"1",label:"\u8BA2\u5355"},{value:"2",label:"\u8F6C\u8D26"},{value:"3",label:"\u5145\u503C"}],J=[{value:"0",label:"\u5904\u7406\u4E2D"},{value:"1",label:"\u8BA2\u5355\u5B8C\u6210"},{value:"2",label:"\u8BA2\u5355\u8D85\u65F6"},{value:"3",label:"\u8BA2\u5355\u5931\u8D25"},{value:"4",label:"\u9000\u6B3E\u4E2D"},{value:"5",label:"\u9000\u6B3E\u6210\u529F"}],Q=[{value:"unknow",label:"unknow"},{value:"admin",label:"admin"},{value:"merchant",label:"merchant"},{value:"agent",label:"agent"}],F=[{value:"1",label:"\u8BA2\u5355"},{value:"2",label:"\u8BA2\u5355\u624B\u7EED\u8D39"},{value:"3",label:"\u8F6C\u8D26"},{value:"4",label:"\u8F6C\u8D26\u624B\u7EED\u8D39"},{value:"5",label:"\u4EE3\u4ED8"},{value:"6",label:"\u4EE3\u4ED8\u624B\u7EED\u8D39"},{value:"7",label:"\u5145\u503C"},{value:"8",label:"\u4F59\u989D\u53D8\u52A8"}];u.a=function(K){var w=K.allowClear,y=w===void 0?!0:w,X=K.type,a=Object(R.useState)([]),j=Object(_.a)(a,2),$=j[0],C=j[1];return Object(R.useEffect)(function(){switch(X){case 1:C(p);break;case 2:C(b);break;case 3:C(s);break;case 4:C(o);break;case 5:C(v);break;case 6:C(r);break;case 7:C(A);break;case 8:C(c);break;case 9:C(i);break;case 10:C(J);break;case 11:C(F);break;case 12:C(Q);break;default:C([])}},[X]),Object(m.jsx)(E.a,Object(t.a)(Object(t.a)({},K),{},{allowClear:y,style:{width:"100%"},options:$,_nk:"".concat(P,"11")}))}}}]);

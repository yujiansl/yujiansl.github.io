(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"0fbx":function(be,W,i){},Hn4i:function(be,W,i){"use strict";var ie=i("qLMh"),pe=i("+L6B"),K=i("2/Rp"),oe=i("y8nQ"),ue=i("Vl3Y"),A=i("q1tI"),_=i.n(A),ye=i("+wg6"),Oe=i("AqBC"),se=i("YIAu"),de=i("85Yc"),x=i("mWMg"),je=["onTableChange","maxLength","formItemProps","recordCreatorProps","rowKey","controlled","defaultValue"],ce=["record","position","creatorButtonText","newRecordType","parentKey"];function X(){return X=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},X.apply(this,arguments)}function H(e,r){return V(e)||me(e,r)||fe(e,r)||N()}function N(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function fe(e,r){if(!e)return;if(typeof e=="string")return G(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return G(e,r)}function G(e,r){(r==null||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function me(e,r){var n=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(n==null)return;var t=[],l=!0,m=!1,b,D;try{for(n=n.call(e);!(l=(b=n.next()).done)&&!(t.push(b.value),r&&t.length===r);l=!0);}catch(P){m=!0,D=P}finally{try{!l&&n.return!=null&&n.return()}finally{if(m)throw D}}return t}function V(e){if(Array.isArray(e))return e}function te(e,r){if(e==null)return{};var n=ve(e,r),t,l;if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(l=0;l<m.length;l++){if(t=m[l],r.indexOf(t)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(e,t))continue;n[t]=e[t]}}return n}function ve(e,r){if(e==null)return{};var n={},t=Object.keys(e),l,m;for(m=0;m<t.length;m++){if(l=t[m],r.indexOf(l)>=0)continue;n[l]=e[l]}return n}function ne(e,r,n,t,l,m,b){try{var D=e[m](b),P=D.value}catch(v){n(v);return}D.done?r(P):Promise.resolve(P).then(t,l)}function Re(e){return function(){var r=this,n=arguments;return new Promise(function(t,l){var m=e.apply(r,n);function b(P){ne(m,t,l,b,D,"next",P)}function D(P){ne(m,t,l,b,D,"throw",P)}b(void 0)})}}function k(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),n.push.apply(n,t)}return n}function $(e){for(var r=1;r<arguments.length;r++){var n=arguments[r]!=null?arguments[r]:{};r%2?k(Object(n),!0).forEach(function(t){Y(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Y(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}var J=_.a.createContext(void 0);function Q(e){var r=e.children,n=e.record,t=e.position,l=e.newRecordType,m=e.parentKey,b=Object(A.useContext)(J);return _.a.cloneElement(r,$($({},r.props),{},{onClick:function(){var D=Re(Object(ie.a)().mark(function v(d){var g,h,o,E;return Object(ie.a)().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,(g=(h=r.props).onClick)===null||g===void 0?void 0:g.call(h,d);case 2:if(E=a.sent,!(E===!1)){a.next=5;break}return a.abrupt("return");case 5:b==null||((o=b.current)===null||o===void 0)||o.addEditRecord(n,{position:t,newRecordType:l,parentKey:m});case 6:case"end":return a.stop()}},v)}));function P(v){return D.apply(this,arguments)}return P}()}))}function ae(e){var r,n=e.onTableChange,t=e.maxLength,l=e.formItemProps,m=e.recordCreatorProps,b=e.rowKey,D=e.controlled,P=e.defaultValue,v=te(e,je),d=Object(A.useRef)(),g=ue.a.useForm(),h=H(g,1),o=h[0];Object(A.useImperativeHandle)(v.actionRef,function(){return d.current});var E=Object(ye.a)(function(){return e.value||P||[]},{value:e.value,onChange:e.onChange}),c=H(E,2),a=c[0],p=c[1],w=_.a.useMemo(function(){return typeof b=="function"&&b?b:function(U,O){return U[b]||O}},[b]);Object(A.useEffect)(function(){if(!e.controlled)return;a.forEach(function(U,O){o.setFieldsValue(Y({},w(U,O),U))},{})},[a,e.controlled]);var S=m||{},Ee=S.record,Z=S.position,xe=S.creatorButtonText,he=S.newRecordType,_e=S.parentKey,re=te(S,ce),le=Z==="top",F=Object(A.useMemo)(function(){return t&&t<=(a==null?void 0:a.length)?!1:m!==!1&&_.a.createElement(Q,{record:Object(se.a)(Ee,a==null?void 0:a.length,a)||{},position:Z,parentKey:Object(se.a)(_e,a==null?void 0:a.length,a),newRecordType:he},_.a.createElement(K.a,X({type:"dashed",style:{display:"block",margin:"10px 0",width:"100%"},icon:_.a.createElement(Oe.a,null)},re),xe||"\u6DFB\u52A0\u4E00\u884C\u6570\u636E"))},[m,t,a==null?void 0:a.length]),ge=Object(A.useMemo)(function(){return F?le?{components:{header:{wrapper:function(O){var T,L=O.className,C=O.children;return _.a.createElement("thead",{className:L},C,_.a.createElement("tr",{style:{position:"relative"}},_.a.createElement("td",{colSpan:0,style:{visibility:"hidden"}},F),_.a.createElement("td",{style:{position:"absolute",left:0,width:"100%"},colSpan:(T=v.columns)===null||T===void 0?void 0:T.length},F)))}}}}:{tableViewRender:function(O,T){var L,C;return _.a.createElement(_.a.Fragment,null,(L=(C=e.tableViewRender)===null||C===void 0?void 0:C.call(e,O,T))!==null&&L!==void 0?L:T,F)}}:{}},[le,F]),z=$({form:o},e.editable);return((e==null?void 0:e.onValuesChange)||((r=e.editable)===null||r===void 0?void 0:r.onValuesChange)||e.controlled&&(e==null?void 0:e.onChange))&&(z.onValuesChange=function(U,O){var T,L,C;if((T=e.editable)===null||T===void 0||((L=T.onValuesChange)===null||L===void 0)||L.call(T,U,O),(C=e.onValuesChange)===null||C===void 0||C.call(e,O,U),e.controlled){var B;e==null||((B=e.onChange)===null||B===void 0)||B.call(e,O)}}),_.a.createElement(J.Provider,{value:d},_.a.createElement(x.a,X({search:!1,options:!1,pagination:!1,rowKey:b},v,ge,{tableLayout:"fixed",actionRef:d,onChange:n,dataSource:a,editable:z,onDataSourceChange:function(O){p(O)}})))}function M(e){var r=e.name,n=e.formItemProps;return r?_.a.createElement(ue.a.Item,X({style:{maxWidth:"100%"}},n,{name:e.name}),_.a.createElement(_.a.Fragment,null,_.a.createElement(de.a,{shouldUpdate:!0,name:e.name,isList:!0},function(t){return _.a.createElement(ae,X({},e,{value:t.value,onChange:t.onChange}))}))):_.a.createElement(ae,e)}M.RecordCreator=Q,W.a=M},uQfo:function(be,W,i){"use strict";i.r(W);var ie=i("2qtc"),pe=i("kLXV"),K=i("qLMh"),oe=i("9og8"),ue=i("y8nQ"),A=i("Vl3Y"),_=i("EFp3"),ye=i("0fbx"),Oe=i("OaEy"),se=i("R9oj"),de=i("5RzL"),x=i("k1fw"),je=i("tU7J"),ce=i("wFql"),X=i("miYZ"),H=i("tsqr"),N=i("tJVT"),fe=i("+Mfq"),G=i("D4bG"),me=i("Ag2N"),V=i("IfEj"),te=i("ZPOE"),ve=i("tL7X"),ne=i("oBTY"),Re="u6lJ";function k(v,d){for(var g=arguments.length>2&&arguments[2]!==void 0?arguments[2]:function(S){return S},h=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"id",o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:"parentId",E=arguments.length>5&&arguments[5]!==void 0?arguments[5]:"children",c=[],a=0;a<v.length;){var p=g(v[a]);if(p[o]===d){v.splice(a,1);var w=k(v,p[h],g,h,o,E);p[E]=w.length>0?w:void 0,p.permissionNodes&&p.permissionNodes.length&&(p.children=k(p.permissionNodes,p[h],g,h,o,E)),c.push(p),a=0}else a+=1}return c}function $(v){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:function(c){return c},g=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"id",h=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"name",o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:"children",E=[];return v.forEach(function(c){var a=Object(x.a)({label:c[h],value:c[g]},d(c));c[o]&&c[o]instanceof Array?a[o]=$(c[o],d,g,h,o):a[o]=void 0,E.push(a)}),E.length>0?E:void 0}function Y(v){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:function(c){return c},g=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"id",h=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"name",o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:"children",E=[];return v.forEach(function(c){var a=Object(x.a)({title:c[h],key:c[g]},d(c));c[o]&&c[o]instanceof Array?a[o]=Y(c[o],d,g,h,o):a[o]=void 0,E.push(a)}),E.length>0?E:void 0}function J(v){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:function(){return!0},g=arguments.length>2&&arguments[2]!==void 0?arguments[2]:function(){return!0},h=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"children",o=[];return v.forEach(function(E){var c=d(E),a=J(E[h]||[],d,g,h);a=a&&a.length>0?a:void 0;var p=Object(x.a)({},E);c?(p[h]=a,o.push(p)):a&&a.length>0&&(g(E,a)?(p[h]=a,o.push(p)):o.push.apply(o,Object(ne.a)(a)))}),o}var Q={ofList:k,toTreeSelectData:$,toTreeData:Y,treeFilter:J},ae=i("+3bv"),M=i("Qurx"),e=i("5qq5"),r=i("Hn4i"),n=i("q1tI"),t=i("nKUr"),l="dbtN",m=function(d){return d.type===2||d===2},b=function(d){return d.type===1||d===1},D=function(d){return d.type===0||d===0},P=W.default=function(){var v=Object(n.useRef)(),d=Object(n.useRef)(),g=Object(n.useRef)(),h=Object(n.useState)(void 0),o=Object(N.a)(h,2),E=o[0],c=o[1],a=Object(n.useState)([{value:0,label:"\u3010\u6839\u76EE\u5F55\u30110",children:[]}]),p=Object(N.a)(a,2),w=p[0],S=p[1],Ee=Object(n.useState)(!0),Z=Object(N.a)(Ee,2),xe=Z[0],he=Z[1],_e=Object(n.useState)(!1),re=Object(N.a)(_e,2),le=re[0],F=re[1],ge=Object(n.useState)(void 0),z=Object(N.a)(ge,2),U=z[0],O=z[1],T=Object(n.useState)([]),L=Object(N.a)(T,2),C=L[0],B=L[1],De=function(u){if(u&&u.length>0){var f;(f=d.current)===null||f===void 0||f.hidden(),O(u),B([]),F(!0),V.i18n.listByCode(u).then(function(s){var y=s.data;y.length>0?B(y):(H.default.warning("\u672A\u627E\u5230\u5BF9\u5E94\u7684\u56FD\u9645\u5316\u6570\u636E!"),F(!1))})}else H.default.error("\u8BF7\u8F93\u5165\u83DC\u5355\u540D\u79F0!")},Ue=[{title:function(u,f){return f==="table"?"ID":"\u83DC\u5355ID"},dataIndex:"id",ellipsis:!0,width:150},{title:"\u83DC\u5355\u540D\u79F0",dataIndex:"name",hideInTable:!0},{title:"\u83DC\u5355\u540D\u79F0",dataIndex:"i18nTitle",width:250,hideInSearch:!0,render:function(u,f){var s=te.a.i18n&&f.i18nTitle||f.title;return Object(t.jsxs)("div",{style:{display:"flex",flexWrap:"nowrap",justifyContent:"space-between",alignItems:"center"},_nk:"".concat(l,"11"),children:[Object(t.jsxs)(ce.a.Text,{ellipsis:{tooltip:s},_nk:"".concat(l,"21"),children:[f.icon&&Object(t.jsx)(G.b,{type:f.icon,style:{marginRight:"5px"},_nk:"".concat(l,"31")}),s]}),!m(f)&&Object(t.jsx)(ae.a,{style:{marginLeft:"5px"},onClick:function(){return De(f.title)},_nk:"".concat(l,"41")})]})}},{title:"\u6743\u9650\u6807\u8BC6",dataIndex:"name",width:150,copyable:!0,ellipsis:!0,hideInSearch:!0},{title:"\u8DEF\u7531\u5730\u5740",dataIndex:"webRoute",width:120,ellipsis:!0},{title:"\u8D44\u6E90\u8DEF\u5F84",dataIndex:"wenResource",ellipsis:!0,hideInSearch:!0},{title:"\u6392\u5E8F",dataIndex:"sort",width:50,hideInSearch:!0},{title:"\u72B6\u6001",dataIndex:"status",width:50,hideInSearch:!0,renderFormItem:function(u){return u===2?"\u542F\u7528":"\u672A\u542F\u7528"}},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"createTime",width:150,valueType:"dateTime",hideInSearch:!0}];return Object(t.jsxs)(t.Fragment,{children:[Object(t.jsxs)(me.default.Modal,Object(x.a)(Object(x.a)({},V.adminMenu),{},{title:"\u83DC\u5355\u6743\u9650",rowKey:"id",columns:Ue,onStatusChange:c,toolBarActions:[{type:"create",permission:""}],formRef:d,tableRef:g,operateBar:[function(R,u){return Object(t.jsx)(fe.default.A,{domKey:"auth-record-add-".concat(u.id),text:"\u6DFB\u52A0",permission:"",onClick:function(){var s,y=Math.min(u.type+1,2),I=m(u)?u.parentId:u.id;(s=d.current)===null||s===void 0||s.create({parentId:I,type:y})},_nk:"".concat(l,"23")},"menu-item-add-".concat(u.id))},{type:"edit",permission:""},{type:"del",permission:""}],handlerData:function(u,f){return f==="create"?Object(x.a)(Object(x.a)({},u),{},{parentId:u.parentId.toString(),sort:Number(u.sort)}):f==="edit"?Object(x.a)(Object(x.a)({},u),{},{parentId:u.parentId.toString(),sort:Number(u.sort)}):u},formData:function(u){return Object(x.a)(Object(x.a)({},u),{},{originalId:u.id,i18nMessages:[]})},perStatusChange:function(){he(!0)},tableProps:{pagination:!1,params:{isSort:!0},formRef:v,expandable:{expandIconColumnIndex:1},postData:function(u){var f=Q.ofList(u,"0",function(s){return s.label="\u3010".concat(s.title||"\u672A\u5B9A\u4E49","\u3011").concat(s.id),s.value=s.id,m(s)&&(s.disabled=!0),s});return w[0].children=f,S(w),Q.treeFilter(f,function(s){var y,I=(y=v.current)===null||y===void 0?void 0:y.getFieldsValue(),j=!0;return j&&I.id&&(j=String(s.id)===I.id),j&&I.path&&I.path.length>0&&(j=s.path===I.path),j&&I.title&&(j=s.i18nTitle&&s.i18nTitle.indexOf(I.title)>-1||s.title&&s.title.indexOf(I.title)>-1),j},function(s,y){return m(y[0])})}},formProps:{titleSuffix:""},_nk:"".concat(l,"22"),children:[Object(t.jsx)(M.a,{rules:E==="edit"?[{required:!0,message:"\u8868\u5355\u6570\u636E\u5F02\u5E38. \u8BF7\u5173\u95ED\u540E\u91CD\u8BD5"}]:void 0,name:"id",hidden:!0,_nk:"".concat(l,"51")}),Object(t.jsx)(A.a.Item,{label:"\u4E0A\u7EA7\u83DC\u5355",name:"parentId",initialValue:0,_nk:"".concat(l,"24"),children:Object(t.jsx)(de.a,{treeData:w,treeDefaultExpandedKeys:[0],dropdownStyle:{maxHeight:"350px",overflow:"auto"},_nk:"".concat(l,"61")})}),Object(t.jsx)(e.a.Group,{name:"level",label:"\u83DC\u5355\u7C7B\u578B",initialValue:1,options:[{label:"\u83DC\u5355",value:1},{label:"\u9875\u9762",value:2},{label:"\u8DEF\u7531",value:3}],_nk:"".concat(l,"25")}),Object(t.jsx)(e.a.Group,{name:"status",label:"\u662F\u5426\u542F\u7528",initialValue:2,options:[{label:"\u542F\u7528",value:2},{label:"\u672A\u542F\u7528",value:1}],_nk:"".concat(l,"26")}),Object(t.jsx)(M.a,{rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u83DC\u5355\u540D\u79F0"}],name:"title",label:"\u83DC\u5355\u540D\u79F0",_nk:"".concat(l,"52")}),Object(t.jsx)(M.a,{rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u83DC\u5355\u94FE\u63A5"}],name:"webRoute",label:"\u83DC\u5355\u94FE\u63A5",_nk:"".concat(l,"53")}),Object(t.jsx)(M.a,{name:"sort",label:"\u83DC\u5355\u6392\u5E8F",_nk:"".concat(l,"54")}),Object(t.jsx)(A.a.Item,{name:"icon",label:"\u83DC\u5355\u56FE\u6807",_nk:"".concat(l,"27"),children:Object(t.jsx)(G.a,{_nk:"".concat(l,"71")})}),Object(t.jsx)(M.a,{name:"webResource",label:"\u8D44\u6E90\u8DEF\u5F84",_nk:"".concat(l,"55")}),Object(t.jsx)(M.a,{name:"api",label:"\u63A5\u53E3",_nk:"".concat(l,"56")}),Object(t.jsx)(M.a,{name:"name",label:"\u6743\u9650\u6807\u8BC6",_nk:"".concat(l,"57")})]})),Object(t.jsx)(pe.a,{title:"\u56FD\u9645\u5316\u6807\u8BC6: ".concat(U),visible:le,onCancel:function(){return F(!1)},onOk:function(){return F(!1)},footer:!1,_nk:"".concat(l,"81"),children:Object(t.jsx)(r.a,{rowKey:"id",recordCreatorProps:!1,value:C,onChange:B,loading:C.length===0,cardProps:{bodyStyle:{padding:0}},bordered:!0,editable:{actionRender:function(u,f,s){return[s.save,s.cancel]},onSave:function(){var R=Object(oe.a)(Object(K.a)().mark(function f(s,y){return Object(K.a)().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return j.next=2,V.i18n.edit(y).then(function(){var q;ve.a.success("global.operation.success"),(q=g.current)===null||q===void 0||q.reload()}).catch(Object(oe.a)(Object(K.a)().mark(function q(){var Pe,Te;return Object(K.a)().wrap(function(ee){for(;;)switch(ee.prev=ee.next){case 0:return ee.next=2,V.i18n.listByCode(y.code);case 2:Pe=ee.sent,Te=Pe.data,B(Te);case 5:case"end":return ee.stop()}},q)})));case 2:case"end":return j.stop()}},f)}));function u(f,s){return R.apply(this,arguments)}return u}()},columns:[{title:"\u8BED\u8A00",dataIndex:"languageTag",width:80,editable:!1},{title:"\u6587\u672C",dataIndex:"message",formItemProps:{rules:[{required:!0,message:"\u6587\u672C\u5185\u5BB9\u4E0D\u80FD\u4E3A\u7A7A!"}]}},{title:"\u64CD\u4F5C",width:150,valueType:"option",render:function(u,f,s,y){return Object(t.jsx)("a",{onClick:function(){var j;return y==null||((j=y.startEditable)===null||j===void 0)?void 0:j.call(y,f.id)},_nk:"".concat(l,"a1"),children:"\u7F16\u8F91"},"editable-".concat(f.id))}}],_nk:"".concat(l,"91")})})]})}}}]);

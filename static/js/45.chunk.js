(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{PKFI:function(R,p,t){"use strict";var P=t("oBTY"),h=t("k1fw"),b="u6lJ";function E(s,d){for(var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:function(y){return y},u=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"id",e=arguments.length>4&&arguments[4]!==void 0?arguments[4]:"parentId",r=arguments.length>5&&arguments[5]!==void 0?arguments[5]:"children",n=[],a=0;a<s.length;){var l=o(s[a]);if(l[e]===d){s.splice(a,1);var f=E(s,l[u],o,u,e,r);l[r]=f.length>0?f:void 0,l.permissionNodes&&l.permissionNodes.length&&(l.children=E(l.permissionNodes,l[u],o,u,e,r)),n.push(l),a=0}else a+=1}return n}function O(s){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:function(n){return n},o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"id",u=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"name",e=arguments.length>4&&arguments[4]!==void 0?arguments[4]:"children",r=[];return s.forEach(function(n){var a=Object(h.a)({label:n[u],value:n[o]},d(n));n[e]&&n[e]instanceof Array?a[e]=O(n[e],d,o,u,e):a[e]=void 0,r.push(a)}),r.length>0?r:void 0}function g(s){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:function(n){return n},o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"id",u=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"name",e=arguments.length>4&&arguments[4]!==void 0?arguments[4]:"children",r=[];return s.forEach(function(n){var a=Object(h.a)({title:n[u],key:n[o]},d(n));n[e]&&n[e]instanceof Array?a[e]=g(n[e],d,o,u,e):a[e]=void 0,r.push(a)}),r.length>0?r:void 0}function c(s){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:function(){return!0},o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:function(){return!0},u=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"children",e=[];return s.forEach(function(r){var n=d(r),a=c(r[u]||[],d,o,u);a=a&&a.length>0?a:void 0;var l=Object(h.a)({},r);n?(l[u]=a,e.push(l)):a&&a.length>0&&(o(r,a)?(l[u]=a,e.push(l)):e.push.apply(e,Object(P.a)(a)))}),e}p.a={ofList:E,toTreeSelectData:O,toTreeData:g,treeFilter:c}},lMdx:function(R,p,t){"use strict";t.r(p);var P=t("y8nQ"),h=t("Vl3Y"),b=t("nRaC"),E=t("5RzL"),O=t("miYZ"),g=t("tsqr"),c=t("k1fw"),s=t("tJVT"),d=t("+Mfq"),o=t("ZqYi"),u=t("Ag2N"),e=t("Bmqs"),r=t("PKFI"),n=t("Xcxh"),a=t("Qurx"),l=t("BiO0"),f=t("q1tI"),y=t.n(f),_=t("nKUr"),U=t.n(_),i="VVaT",I=[{title:"\u7EC4\u7EC7\u540D\u79F0",dataIndex:"name",hideInTable:!0},{title:"\u7EC4\u7EC7\u673A\u6784\u5C42\u7EA7",width:250,dataIndex:"name",hideInSearch:!0},{title:"\u6392\u5E8F",width:80,dataIndex:"sort",hideInSearch:!0},{title:"\u5907\u6CE8",dataIndex:"remarks",ellipsis:!0,hideInSearch:!0},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"createTime",width:150,hideInSearch:!0}];p.default=function(){var M=Object(f.useRef)(),C=Object(f.useState)([{value:0,label:"\u6839\u76EE\u5F55",children:[]}]),j=Object(s.a)(C,2),v=j[0],F=j[1];return Object(_.jsxs)(u.default.Modal,Object(c.a)(Object(c.a)({},e.organization),{},{query:function(){return e.organization.query({}).then(function(m){var D;return Object(c.a)(Object(c.a)({},m),{},{data:{records:m.data,total:((D=m.data)===null||D===void 0?void 0:D.length)||0}})})},title:"\u7EC4\u7EC7\u67B6\u6784",rowKey:"id",columns:I,tableRef:M,toolBarActions:[Object(_.jsx)(d.default.Button,{permission:"system:organization:revised",text:"\u6821\u6B63\u5C42\u7EA7\u6DF1\u5EA6",type:"primary",icon:Object(_.jsx)(n.a,{_nk:"".concat(i,"21")}),danger:!0,confirm:{title:"\u786E\u8BA4\u8FDB\u884C\u6821\u6B63\u64CD\u4F5C?",overlayStyle:{width:"200px"}},onClick:function(){e.organization.revised().then(function(){var m;g.default.success("\u6821\u6B63\u5B8C\u6210!"),(m=M.current)===null||m===void 0||m.reload()})},_nk:"".concat(i,"12")}),{type:"create",permission:"system:organization:add"}],operateBar:[{type:"edit",permission:"system:organization:edit"},{type:"del",permission:"system:organization:del"}],tableProps:{pagination:!1,postData:function(m){return v[0].children=r.a.toTreeSelectData(m),F(v),v[0].children}},formProps:{titleSuffix:"\u7EC4\u7EC7"},_nk:"".concat(i,"11"),children:[Object(_.jsx)(a.a,{name:"id",hidden:!0,_nk:"".concat(i,"31")}),Object(_.jsx)(h.a.Item,{label:"\u7236\u7EA7\u7EC4\u7EC7",name:"parentId",initialValue:0,rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u7236\u7EA7\u7EC4\u7EC7"}],_nk:"".concat(i,"13"),children:Object(_.jsx)(E.a,{treeDefaultExpandAll:!0,treeData:v,dropdownStyle:{maxHeight:"400px",overflow:"auto"},_nk:"".concat(i,"41")})}),Object(_.jsx)(a.a,{name:"name",label:"\u7EC4\u7EC7\u540D\u79F0",rules:[{required:!0,message:"\u8BF7\u586B\u5199\u7EC4\u7EC7\u540D\u79F0"}],_nk:"".concat(i,"32")}),Object(_.jsx)(o.FormNumber,{min:0,initialValue:1,name:"sort",label:"\u6392\u5E8F",placeholder:"\u6309\u6570\u503C\u7531\u5C0F\u5230\u5927\u5347\u5E8F",_nk:"".concat(i,"51")}),Object(_.jsx)(l.a,{name:"remarks",label:"\u5907\u6CE8",rules:[{max:512,message:"\u5907\u6CE8\u6700\u591A\u53EF\u4EE5\u586B\u5199512\u4E2A\u5B57\u7B26!"}],_nk:"".concat(i,"61")})]}))}}}]);

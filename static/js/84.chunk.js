(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{FqrS:function(f,E,t){"use strict";t.r(E);var g=t("14J3"),M=t("BMrR"),F=t("+L6B"),h=t("2/Rp"),S=t("y8nQ"),l=t("Vl3Y"),Z=t("5NDa"),D=t("5rEg"),J=t("miYZ"),b=t("tsqr"),i=t("k1fw"),y=t("rAM+"),U=t("tJVT"),V=t("Znn+"),v=t("ZTPi"),u=t("q1tI"),B=t.n(u),A=t("lZ09"),P=t.n(A),p=t("IfEj"),_=t("nKUr"),N=t.n(_),n="M1qw",C=v.a.TabPane,x={labelCol:{div:8},wrapperCol:{div:16}};E.default=function(){var T=Object(u.useState)(),j=Object(U.a)(T,2),R=j[0],I=j[1],d=B.a.useRef(null),O=Object(u.useCallback)(function(){p.riskList.query({equal:{group:"site"}}).then(function(m){var e;console.log(m,"res");var r={},a=Object(y.a)(m.data||[]),s;try{for(a.s();!(s=a.n()).done;){var o=s.value;r[o.id]=o.value}}catch(c){a.e(c)}finally{a.f()}I(r),(e=d.current)===null||e===void 0||e.setFieldsValue(Object(i.a)({},r))})},[]);Object(u.useEffect)(function(){O()},[O]);var L=function(e){console.log(e,"values");var r=[];for(var a in e)e[a]!==R[a]&&a!=="confirmPassword"&&r.push({id:a,value:e[a]});p.riskList.submit({confirmPassword:e.confirmPassword,changeSet:r}).then(function(s){console.log(s,"res"),b.default.success("\u4FEE\u6539\u6210\u529F"),O()})},K=function(){var e,r;(e=d.current)===null||e===void 0||e.resetFields();var a={},s=Object(y.a)(R||[]),o;try{for(s.s();!(o=s.n()).done;){var c=o.value;a[c.id]=c.value}}catch(W){s.e(W)}finally{s.f()}(r=d.current)===null||r===void 0||r.setFieldsValue(Object(i.a)({},a))};return Object(_.jsx)(M.a,{className:P.a.content,_nk:"".concat(n,"11"),children:Object(_.jsx)(v.a,{style:{width:"100%"},defaultActiveKey:"1",_nk:"".concat(n,"21"),children:Object(_.jsx)(C,{tab:"\u7F51\u5740\u8BBE\u7F6E",_nk:"".concat(n,"31"),children:Object(_.jsxs)(l.a,Object(i.a)(Object(i.a)({},x),{},{layout:"vertical",ref:d,name:"control-ref",onFinish:L,style:{width:"100%",maxWidth:"700px"},_nk:"".concat(n,"41"),children:[Object(_.jsx)(l.a.Item,{help:"",name:"4",label:"\u7AD9\u70B9\u540D\u79F0",rules:[{required:!0}],_nk:"".concat(n,"51"),children:Object(_.jsx)(D.a,{placeholder:"\u8BF7\u8F93\u5165\u7AD9\u70B9\u540D\u79F0",_nk:"".concat(n,"61")})}),Object(_.jsx)("div",{className:[P.a.tips," ",P.a["tips-danger"]].join(""),_nk:"".concat(n,"71"),children:"\u586B\u5199\u7AD9\u70B9\u540D\u79F0"}),Object(_.jsx)(l.a.Item,{help:"",name:"confirmPassword",label:"\u786E\u8BA4\u5BC6\u7801",rules:[{required:!0}],_nk:"".concat(n,"52"),children:Object(_.jsx)(D.a.Password,{placeholder:"\u8BF7\u8F93\u5165\u786E\u8BA4\u5BC6\u7801",_nk:"".concat(n,"53")})}),Object(_.jsxs)(l.a.Item,{_nk:"".concat(n,"54"),children:[Object(_.jsx)(h.a,{type:"primary",style:{marginRight:"10px"},htmlType:"submit",_nk:"".concat(n,"81"),children:"\u63D0\u4EA4"}),Object(_.jsx)(h.a,{htmlType:"button",onClick:K,_nk:"".concat(n,"82"),children:"\u91CD\u7F6E"})]})]}))},"1")})})}},lZ09:function(f,E,t){f.exports={content:"content___1FmU0",tips:"tips___2Pm7v","tips-danger":"tips-danger___7iCfv"}}}]);

(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{UAM6:function(L,h,_){"use strict";_.r(h);var K=_("14J3"),U=_("BMrR"),W=_("+L6B"),F=_("2/Rp"),g=_("7Kak"),O=_("9yH6"),N=_("y8nQ"),t=_("Vl3Y"),S=_("5NDa"),a=_("5rEg"),H=_("miYZ"),p=_("tsqr"),m=_("k1fw"),P=_("rAM+"),C=_("tJVT"),v=_("lZ09"),n=_.n(v),D=_("q1tI"),x=_.n(D),B=_("IfEj"),E=_("pn+7"),u=_("nKUr"),J=_.n(u),e="L6M8",y={labelCol:{div:8},wrapperCol:{div:16}};h.default=function(){var A=Object(D.useState)(),f=Object(C.a)(A,2),b=f[0],M=f[1],c=x.a.useRef(null),R=Object(D.useCallback)(function(){B.riskList.query({equal:{group:"riskconfig"}}).then(function(o){var l,s={},r=Object(P.a)(o.data||[]),d;try{for(r.s();!(d=r.n()).done;){var i=d.value;s[i.id]=i.value}}catch(j){r.e(j)}finally{r.f()}M(s),(l=c.current)===null||l===void 0||l.setFieldsValue(Object(m.a)({},s))})},[]);Object(D.useEffect)(function(){R()},[]);var T=function(l){var s=[];for(var r in l)l[r]!==b[r]&&r!=="confirmPassword"&&s.push({id:r,value:l[r]});B.riskList.submit({confirmPassword:l.confirmPassword,changeSet:s}).then(function(d){p.default.success("\u4FEE\u6539\u6210\u529F"),R()})},I=function(){var l,s;(l=c.current)===null||l===void 0||l.resetFields();var r={},d=Object(P.a)(b||[]),i;try{for(d.s();!(i=d.n()).done;){var j=i.value;r[j.id]=j.value}}catch(k){d.e(k)}finally{d.f()}(s=c.current)===null||s===void 0||s.setFieldsValue(Object(m.a)({},r))};return Object(u.jsx)(U.a,{className:n.a.content,_nk:"".concat(e,"11"),children:Object(u.jsxs)(t.a,Object(m.a)(Object(m.a)({},y),{},{layout:"vertical",ref:c,name:"control-ref",onFinish:T,style:{width:"100%",maxWidth:"700px"},_nk:"".concat(e,"21"),children:[Object(u.jsx)(t.a.Item,{help:"",name:"18",label:"\u5546\u6237\u9ED8\u8BA4\u8D39\u7387",rules:[{required:!0}],_nk:"".concat(e,"31"),children:Object(u.jsx)(a.a,{placeholder:"\u8BF7\u8F93\u5165\u5546\u6237\u9ED8\u8BA4\u8D39\u7387",_nk:"".concat(e,"41")})}),Object(u.jsx)("div",{className:[n.a.tips," ",n.a["tips-danger"]].join(""),_nk:"".concat(e,"51"),children:"\u6CE8\uFF1A\u6536\u6B3E\u8D39\u7387\u4E3A\u5343\u5206\u4F4D\uFF0C\u4F8B\u5982\uFF1A\u5343\u5206\u4E4B\u4E09\u5219\u586B\u51990.003"}),Object(u.jsx)(t.a.Item,{help:"",name:"30",label:"TRC20\u8F6C\u8D26\u5730\u5740",rules:[{required:!0}],_nk:"".concat(e,"32"),children:Object(u.jsx)(a.a,{placeholder:"\u8BF7\u586B\u5199TRC20\u8F6C\u8D26\u5730\u5740",_nk:"".concat(e,"42")})}),Object(u.jsx)(t.a.Item,{help:"",name:"23",label:"TRC20\u8F6C\u8D26\u624B\u7EED\u8D39",rules:[{required:!0}],_nk:"".concat(e,"33"),children:Object(u.jsx)(a.a,{type:"number",onBlur:function(){return Object(E.a)(c,"23")},placeholder:"\u8BF7\u586B\u5199TRC20\u8F6C\u8D26\u624B\u7EED\u8D39",_nk:"".concat(e,"43")})}),Object(u.jsx)("div",{className:n.a.tips,_nk:"".concat(e,"52"),children:"\u5355\u4F4D\uFF1AUSDT\uFF0C\u6309\u7B14\u6536\u8D39"}),Object(u.jsx)(t.a.Item,{help:"",name:"31",label:"ERC20\u8F6C\u8D26\u5730\u5740",rules:[{required:!0}],_nk:"".concat(e,"34"),children:Object(u.jsx)(a.a,{placeholder:"\u8BF7\u586B\u5199ERC20\u8F6C\u8D26\u5730\u5740",_nk:"".concat(e,"44")})}),Object(u.jsx)(t.a.Item,{help:"",name:"24",label:"ERC20\u8F6C\u8D26\u624B\u7EED\u8D39",rules:[{required:!0}],_nk:"".concat(e,"35"),children:Object(u.jsx)(a.a,{type:"number",onBlur:function(){return Object(E.a)(c,"24")},placeholder:"\u8BF7\u586B\u5199ERC20\u8F6C\u8D26\u624B\u7EED\u8D39",_nk:"".concat(e,"45")})}),Object(u.jsx)("div",{className:n.a.tips,_nk:"".concat(e,"53"),children:"\u5355\u4F4D\uFF1AUSDT\uFF0C\u6309\u7B14\u6536\u8D39"}),Object(u.jsx)(t.a.Item,{help:"",name:"27",label:"\u6263\u8D39\u6A21\u5F0F",rules:[{required:!0}],_nk:"".concat(e,"36"),children:Object(u.jsxs)(O.a.Group,{_nk:"".concat(e,"37"),children:[Object(u.jsx)(O.a,{value:"1",_nk:"".concat(e,"61"),children:" \u6309\u8D39\u7387\u6263\u8D39 "}),Object(u.jsx)(O.a,{value:"2",_nk:"".concat(e,"62"),children:" \u6309\u7B14\u6570\u6263\u8D39 "})]})}),Object(u.jsx)(t.a.Item,{help:"",name:"26",label:"\u6BCF\u7B14\u6700\u4F4E\u624B\u7EED\u8D39",rules:[{required:!0}],_nk:"".concat(e,"38"),children:Object(u.jsx)(a.a,{type:"number",onBlur:function(){return Object(E.a)(c,"26")},placeholder:"\u8BF7\u586B\u5199ERC20\u8F6C\u8D26\u624B\u7EED\u8D39",_nk:"".concat(e,"46")})}),Object(u.jsx)("div",{className:n.a.tips,_nk:"".concat(e,"54"),children:"\u5355\u4F4D\uFF1AUSDT\uFF0C\u6309\u7B14\u6536\u8D39"}),Object(u.jsx)(t.a.Item,{help:"",name:"12",label:"\u8BA2\u5355\u6700\u5C0F\u91D1\u989D",rules:[{required:!0}],_nk:"".concat(e,"39"),children:Object(u.jsx)(a.a,{type:"number",onBlur:function(){return Object(E.a)(c,"12")},placeholder:"\u8BF7\u586B\u5199\u8BA2\u5355\u6700\u5C0F\u91D1\u989D",_nk:"".concat(e,"47")})}),Object(u.jsx)("div",{className:n.a.tips,_nk:"".concat(e,"55"),children:"\u5355\u4F4D\uFF1AUSDT"}),Object(u.jsx)(t.a.Item,{help:"",name:"10",label:"\u8BA2\u5355\u6700\u5927\u91D1\u989D",rules:[{required:!0}],_nk:"".concat(e,"3a"),children:Object(u.jsx)(a.a,{type:"number",onBlur:function(){return Object(E.a)(c,"10")},placeholder:"\u8BF7\u586B\u5199\u8BA2\u5355\u6700\u5927\u91D1\u989D",_nk:"".concat(e,"48")})}),Object(u.jsx)("div",{className:n.a.tips,_nk:"".concat(e,"56"),children:"\u5355\u4F4D\uFF1AUSDT"}),Object(u.jsx)(t.a.Item,{help:"",name:"14",label:"\u4EE3\u4ED8\u6700\u5C0F\u91D1\u989D",rules:[{required:!0}],_nk:"".concat(e,"3b"),children:Object(u.jsx)(a.a,{type:"number",onBlur:function(){return Object(E.a)(c,"14")},placeholder:"\u8BF7\u586B\u5199\u4EE3\u4ED8\u6700\u5C0F\u91D1\u989D",_nk:"".concat(e,"49")})}),Object(u.jsx)("div",{className:n.a.tips,_nk:"".concat(e,"57"),children:"\u5355\u4F4D\uFF1AUSDT"}),Object(u.jsx)(t.a.Item,{help:"",name:"15",label:"\u4EE3\u4ED8\u6700\u5927\u91D1\u989D",rules:[{required:!0}],_nk:"".concat(e,"3c"),children:Object(u.jsx)(a.a,{type:"number",onBlur:function(){return Object(E.a)(c,"15")},placeholder:"\u8BF7\u586B\u5199\u4EE3\u4ED8\u6700\u5927\u91D1\u989D",_nk:"".concat(e,"4a")})}),Object(u.jsx)("div",{className:n.a.tips,_nk:"".concat(e,"58"),children:"\u5355\u4F4D\uFF1AUSDT"}),Object(u.jsx)(t.a.Item,{help:"",name:"13",label:"\u8BA2\u5355\u8D85\u65F6\u65F6\u95F4",rules:[{required:!0}],_nk:"".concat(e,"3d"),children:Object(u.jsx)(a.a,{placeholder:"\u8BF7\u586B\u5199\u8BA2\u5355\u8D85\u65F6\u65F6\u95F4",_nk:"".concat(e,"4b")})}),Object(u.jsx)("div",{className:n.a.tips,_nk:"".concat(e,"59"),children:"\u5355\u4F4D\uFF1A\u5206\u949F"}),Object(u.jsx)(t.a.Item,{help:"",name:"16",label:"TRX\u8F6C\u8D26\u6700\u4F4E\u80FD\u91CF",rules:[{required:!0}],_nk:"".concat(e,"3e"),children:Object(u.jsx)(a.a,{placeholder:"\u8BF7\u586B\u5199TRX\u8F6C\u8D26\u6700\u4F4E\u80FD\u91CF",_nk:"".concat(e,"4c")})}),Object(u.jsx)("div",{className:n.a.tips,_nk:"".concat(e,"5a"),children:"\u5355\u4F4D\uFF1ATRX"}),Object(u.jsx)(t.a.Item,{help:"",name:"17",label:"ETH\u8F6C\u8D26\u6700\u4F4E\u80FD\u91CF",rules:[{required:!0}],_nk:"".concat(e,"3f"),children:Object(u.jsx)(a.a,{placeholder:"\u8BF7\u586B\u5199ETH\u8F6C\u8D26\u6700\u4F4E\u80FD\u91CF",_nk:"".concat(e,"4d")})}),Object(u.jsx)("div",{className:n.a.tips,_nk:"".concat(e,"5b"),children:"\u5355\u4F4D\uFF1AETH"}),Object(u.jsx)(t.a.Item,{help:"",name:"confirmPassword",label:"\u786E\u8BA4\u5BC6\u7801",rules:[{required:!0}],_nk:"".concat(e,"3g"),children:Object(u.jsx)(a.a.Password,{placeholder:"\u8BF7\u8F93\u5165\u786E\u8BA4\u5BC6\u7801",_nk:"".concat(e,"3h")})}),Object(u.jsxs)(t.a.Item,{_nk:"".concat(e,"3i"),children:[Object(u.jsx)(F.a,{type:"primary",style:{marginRight:"10px"},htmlType:"submit",_nk:"".concat(e,"71"),children:"\u63D0\u4EA4"}),Object(u.jsx)(F.a,{htmlType:"button",onClick:I,_nk:"".concat(e,"72"),children:"\u91CD\u7F6E"})]})]}))})}}}]);

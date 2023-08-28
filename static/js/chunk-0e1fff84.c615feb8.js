(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0e1fff84"],{"4c8a":function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return n}));var r=function(e,t,a){var r=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;""!==t&&t?r.test(t)?a():a(new Error("请输入正确的邮箱地址")):a(new Error("請輸入郵箱"))},n=function(e,t,a){var r=/^[0-9a-zA-Z!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]{6,30}$/;""!==t&&t?r.test(t)?a():a(new Error("请输入6～30位数字、字母或标点符号")):a(new Error("請輸入密碼"))}},5117:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("Breadcrumb"),a("div",{staticClass:"top-box flex p-2 jc-sb m-2"},[a("a-button",{attrs:{type:"primary"},on:{click:function(t){e.addMer.show=!0}}},[e._v("添加商户")]),a("a-modal",{attrs:{title:"添加商户",visible:e.addMer.show,"confirm-loading":e.addMer.loading},on:{ok:e.handleOk,cancel:e.handleCancel}},[a("template",{slot:"footer"},[a("div",{staticClass:"flex jc-fs ai-c"},[a("a-button",{key:"submit",staticClass:"ok-btn",attrs:{loading:e.addMer.loading,type:"primary"},on:{click:e.handleOk}},[e._v(" 确认 ")]),a("a-button",{staticClass:"cancel-btn",attrs:{type:"primary"},on:{click:e.reset}},[e._v(" 重置 ")])],1)]),a("a-form",{ref:"form",attrs:{form:e.form}},[a("a-form-item",{attrs:{"label-col":e.formItemLayout.labelCol,"wrapper-col":e.formItemLayout.wrapperCol,label:"商户名称"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["merchantName",{rules:[{required:!0,message:"请输入商户名称",trigger:"blur"},{min:4,max:16,message:"商户名称应在4-16个字符",trigger:"blur"}]}],expression:"[\n        'merchantName',\n        { rules: [{ required: true, message:'请输入商户名称',trigger:'blur' },{min:4,max:16,message: '商户名称应在4-16个字符',trigger:'blur'}] },\n      ]"}],attrs:{placeholder:"请输入商户名称"}})],1),a("a-form-item",{attrs:{"label-col":e.formItemLayout.labelCol,"wrapper-col":e.formItemLayout.wrapperCol,label:"邮箱"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["email",{rules:[{required:!0,validator:e.validateEmail,trigger:"blur"}]}],expression:"[\n        'email',\n        { rules: [{ required: true, validator:validateEmail,trigger:'blur' }] },\n      ]"}],attrs:{placeholder:"请输入邮箱"}})],1),a("a-form-item",{attrs:{"label-col":e.formItemLayout.labelCol,"wrapper-col":e.formItemLayout.wrapperCol,label:"密码"}},[a("a-input-password",{directives:[{name:"decorator",rawName:"v-decorator",value:["password",{rules:[{required:!0,validator:e.validatePass,trigger:"blur"}]}],expression:"[\n        'password',\n        { rules: [{ required: true, validator:validatePass,trigger:'blur'  }] },\n      ]"}],attrs:{placeholder:"请输入密码"}})],1),a("a-form-item",{attrs:{"label-col":e.formItemLayout.labelCol,"wrapper-col":e.formItemLayout.wrapperCol,label:"确认密码"}},[a("a-input-password",{directives:[{name:"decorator",rawName:"v-decorator",value:["rePassword",{rules:[{required:!0,validator:e.reValidPwd,trigger:"blur"}]}],expression:"[\n        'rePassword',\n        { rules: [{ required: true, validator:reValidPwd,trigger:'blur'  }] },\n      ]"}],attrs:{placeholder:"请再次输入密码"}})],1)],1)],2)],1),a("div",{staticClass:"top-box p-2 mx-1"},[a("div",{staticClass:"merchant-table-title"},[e._v("商户列表")]),a("a-table",{attrs:{loading:e.tableLoading,rowKey:function(e){return e.id},columns:e.columns,"data-source":e.tableData,pagination:e.pagination,bordered:""},on:{change:e.tableChange},scopedSlots:e._u([{key:"action",fn:function(t,r,n){return a("div",{},[e.balanceArr[n].ccy?a("div",{},[e._v(" "+e._s(e.getPriceSeparator((e.balanceArr[n].balance||0)/e.balanceArr[n].multiply)+" ")+" "+e._s(e.balanceArr[n].ccy)+" "),a("a-button",{staticClass:"ml-2",attrs:{loading:e.balanceArr[n].loading,type:"primary"},on:{click:function(t){return e.checkBalance(r,n)}}},[e._v("刷新 ")])],1):a("a-button",{attrs:{loading:e.balanceArr[n].loading,type:"primary"},on:{click:function(t){return e.checkBalance(r,n)}}},[e._v("查看 ")])],1)}},{key:"merchantName",fn:function(t,r){return a("a",{on:{click:function(t){return e.toDetail(r)}}},[e._v(e._s(t))])}},{key:"isEnabled",fn:function(t,r){return a("div",{},[a("a-switch",{attrs:{checked:"1"==t,"checked-children":"正常","un-checked-children":"禁用","default-checked":""},on:{change:function(t){return e.changeMerStatus(r)}}})],1)}}])})],1)],1)},n=[],o=(a("a630"),a("3ca3"),a("96cf"),a("1da1")),c=a("4703"),i=a("4c8a"),s=a("7878"),l=a("635f"),u=[{title:"商户名",dataIndex:"merchantName",width:200,fixed:"left",scopedSlots:{customRender:"merchantName"}},{title:"商户余额",dataIndex:"action",width:350,scopedSlots:{customRender:"action"},merchant:!0},{title:"状态",dataIndex:"isEnabled",width:100,scopedSlots:{customRender:"isEnabled"},merchant:!0},{title:"注册时间",dataIndex:"createdAt",scopedSlots:{customRender:"createdAt"},width:200}],d={name:"Detail",components:{Breadcrumb:l["a"]},data:function(){var e=this,t={labelCol:{span:24},wrapperCol:{span:24}},a={labelCol:{span:24},wrapperCol:{span:8,offset:4}},r=function(t,a,r){var n=e.form.getFieldsValue();a?a===n.password?r():r(new Error("两次输入的密码不一致")):r(new Error("请输入密码"))};return{addMer:{show:!1,loading:!1},tableData:[],pagination:{total:1,current:1,pageNumber:1,pageSize:10},tableLoading:!1,balanceArr:[],currentMerchant:localStorage.getItem("user-info"),cashNum:"",columns:u,tradeOrderStatics:{},currentBalance:{balance:0},currentMerchantDetail:{},userInfo:{},formItemLayout:t,validatePass:i["b"],reValidPwd:r,formTailLayout:a,validateEmail:i["a"],form:this.$form.createForm(this,{name:"dynamic_rule"})}},mounted:function(){this.getTable()},methods:{getPriceSeparator:s["getPriceSeparator"],tableChange:function(e){this.pagination.current=e.current,this.getTable()},checkBalance:function(e,t){var a=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,a.$set(a.balanceArr,t,{loading:!0}),r.next=4,Object(c["f"])(e.id);case 4:n=r.sent,n.data.items?a.$set(a.balanceArr,t,{ccy:n.data.items[0].currency,balance:n.data.items[0].balance,multiply:n.data.items[0].multiply,loading:!1}):(a.$set(a.balanceArr,t,{ccy:"",balance:"",multiply:"1",loading:!1}),a.$message.error("该商户无余额")),r.next=10;break;case 8:r.prev=8,r.t0=r["catch"](0);case 10:case"end":return r.stop()}}),r,null,[[0,8]])})))()},changeMerStatus:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,r={enabled:"0"===e.isEnabled?"1":"0"},a.next=4,Object(c["b"])(r,e.id);case 4:return a.next=6,t.getTable();case 6:a.next=10;break;case 8:a.prev=8,a.t0=a["catch"](0);case 10:case"end":return a.stop()}}),a,null,[[0,8]])})))()},toDetail:function(e){this.$router.push({path:"/detail",query:{id:e.id}})},handleOk:function(){var e=this;this.form.validateFields(function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(a){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a){t.next=18;break}return r=e.form.getFieldsValue(),n={email:r.email,merchantName:r.merchantName,password:r.password},e.addMer.loading=!0,t.prev=4,t.next=7,Object(c["a"])(n);case 7:e.$message.success("商户创建成功"),e.addMer.loading=!1,e.addMer.show=!1,e.getTable(),e.form.resetFields(),t.next=18;break;case 14:t.prev=14,t.t0=t["catch"](4),e.$message.error("商户创建失败，请稍后再试"),e.addMer.loading=!1;case 18:case"end":return t.stop()}}),t,null,[[4,14]])})));return function(e){return t.apply(this,arguments)}}())},handleCancel:function(){this.addMer.show=!1},reset:function(){this.form.resetFields()},getTable:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a={paging:{pageNumber:e.pagination.current,pageSize:e.pagination.pageSize},searchItems:[],sorting:{columnNames:["createdAt"],direction:"desc"}},e.balanceArr=Array.from(Array(10),(function(){return{loading:!1}})),e.tableLoading=!0,t.prev=3,t.next=6,Object(c["i"])(a);case 6:r=t.sent,e.tableData=Object(s["tableRowFormat"])(r).data.list,e.pagination.total=r.data.paging.totalCount,e.tableLoading=!1,t.next=15;break;case 12:t.prev=12,t.t0=t["catch"](3),e.tableLoading=!1;case 15:case"end":return t.stop()}}),t,null,[[3,12]])})))()}}},m=d,p=(a("7019"),a("0c7c")),f=Object(p["a"])(m,r,n,!1,null,"082fcd94",null);t["default"]=f.exports},"635f":function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"bg-w pt-2 pl-3"},[a("a-breadcrumb",[a("a-breadcrumb-item",[a("a",{on:{click:e.toHome}},[e._v("首頁")])]),a("a-breadcrumb-item",[a("a",{on:{click:e.toPage1}},[e._v(e._s(e.secondMenu.name))])]),a("a-breadcrumb-item",[e.thirdMenu.path?a("a",[e._v(e._s(e.thirdMenu.name))]):e._e()])],1),a("div",{staticClass:"py-1 fw-b fs-18 fc-bl"},[e._v(e._s(e.title))])],1)},n=[],o=(a("b0c0"),a("ac1f"),a("1276"),a("53ca")),c=a("a09f"),i={name:"Breadcrumb",props:{title:{type:String,default:""}},data:function(){return{name1:"",name2:"",path1:"",path2:"",secondMenu:{},thirdMenu:{}}},created:function(){this.init()},methods:{init:function(){var e=this.$route.path,t=e.split("/").length,a=e.split("/");2===t?(this.secondMenu.path="",this.secondMenu.name=this.getName(a[1])):(this.secondMenu.path="/"+a[1]+"/"+a[2],this.secondMenu.name=this.getName(this.secondMenu.path),this.thirdMenu.path=e,this.thirdMenu.name="商户详情")},getName:function(e){return"object"===Object(o["a"])(c["a"][e])?c["a"][e].name:""},toHome:function(){var e=this.$store.getters["account/roles"][0].id||"merchant",t=this.$route.path,a="merchant"===e?"/index":"/adminIndex";t!==a&&this.$router.push({path:a})},toPage1:function(){this.secondMenu.path&&this.$router.push({path:this.secondMenu.path})}}},s=i,l=(a("d54b"),a("0c7c")),u=Object(l["a"])(s,r,n,!1,null,"69611da6",null);t["a"]=u.exports},7019:function(e,t,a){"use strict";var r=a("d806"),n=a.n(r);n.a},7037:function(e,t,a){function r(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=r=function(e){return typeof e}:e.exports=r=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(t)}a("a4d3"),a("e01a"),a("d28b"),a("d3b7"),a("3ca3"),a("ddb0"),e.exports=r},7878:function(e,t,a){a("99af"),a("4160"),a("c975"),a("a15b"),a("d81d"),a("b64b"),a("ac1f"),a("5319"),a("159b");var r=a("7037");function n(e,t){t=t||1;for(var a="\n",o="  ",c="",i=0;i<t;i++)c+=o;var s=!1,l=!1,u="",d="{",m="}";Array.isArray(e)?(s=!0,d="[",m="]",u=e.map((function(o,i){var s="";return"function"==typeof o||("object"==r(o)?(l=!0,s="".concat(a).concat(c).concat(n(o,t+1),",")):"number"==typeof o&&!isNaN(o)||"boolean"==typeof o?s="".concat(o,","):"string"==typeof o&&(s="'".concat(o,"',"))),i==e.length-1?s=s.substring(0,s.length-1):l=!1,s})).join("")):"function"!=typeof e&&"object"==r(e)&&(u=Object.keys(e).map((function(o,i,s){var l=e[o],u="";return"function"==typeof l||("object"==r(l)?u="".concat(a).concat(c).concat(o,": ").concat(n(l,t+1),","):"number"==typeof l&&!isNaN(l)||"boolean"==typeof l?u="".concat(a).concat(c).concat(o,": ").concat(l,","):"string"==typeof l&&(u="".concat(a).concat(c).concat(o,": '").concat(l,"',"))),i==s.length-1&&(u=u.substring(0,u.length-1)),u})).join(""));var p=o.length;return c.length>=p&&(c=c.substring(0,c.length-p)),s&&!l||(m=a+c+m),"".concat(d).concat(u).concat(m)}function o(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!e)return"0";if(e){var a=e+"";if(-1!==a.indexOf(".")){var r=a.substring(0,a.indexOf(".")).replace(/\B(?=(?:\d{3})+$)/g,","),n=a.substring(a.length,a.indexOf("."));1===n.length?n+="00":2===n.length&&(n+="0");var o=r+n;return o}var c=a.replace(/\B(?=(?:\d{3})+$)/g,",");return c+(t?".00":"")}return t?"0.00":"0"}function c(e){var t=e.data.rows||[],a=[];return t.forEach((function(e){var t={};for(var r in e)t[r]=e[r].text||e[r].value,"timezone"===r&&(t["timeValue"]=e[r].value||"0");a.push(t)})),e.data.list=a,e}e.exports={formatConfig:n,getPriceSeparator:o,tableRowFormat:c}},b6e8:function(e,t,a){},d54b:function(e,t,a){"use strict";var r=a("b6e8"),n=a.n(r);n.a},d806:function(e,t,a){}}]);
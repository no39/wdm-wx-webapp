webpackJsonp([3],{"KFy/":function(t,e,i){"use strict";e.b=function(t){return Object(a.a)({url:"ips/medicalRecord",method:"put",data:t})},e.a=function(t){return Object(a.a)({url:"ips/medicalRecord/list/patient/"+t.pageNum+"/"+t.pageSize,method:"get",params:t})};var a=i("vLgD")},Oi8u:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("Dd8w"),n=i.n(a),s=i("fUgm"),o=i("KFy/"),r={name:"history",data:function(){return{show:!1,list:[]}},computed:n()({},Object(s.b)(["info"])),mounted:function(){this.getMedicalRecordPatientList()},methods:{getMedicalRecordPatientList:function(){var t=this,e={examinationId:"",examinationStatus:"100",patientId:this.info.id,pageNum:1,pageSize:10};this.show=!0,Object(o.a)(e).then(function(e){t.show=!1,200==e.code&&(t.list=e.dataList)})},handelReport:function(t){this.$router.push({path:"/home",query:{id:t}})},onClickLeft:function(){this.$router.go(-1)}}},c={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"app-container"},[i("van-nav-bar",{staticClass:"bar",attrs:{fixed:"",placeholder:"",title:"报告列表","left-text":"返回","left-arrow":""},on:{"click-left":t.onClickLeft}}),t._v(" "),i("div",{staticClass:"list-box"},t._l(t.list,function(e,a){return i("div",{key:a,staticClass:"list-item flex-wrap",on:{click:function(i){return t.handelReport(e.id)}}},[i("div",[t._v(" "+t._s(e.realName))]),t._v(" "),i("div",[t._v(" "+t._s(e.createTime))]),t._v(" "),i("van-icon",{attrs:{name:"arrow"}})],1)}),0),t._v(" "),i("van-overlay",{attrs:{show:t.show},on:{click:function(e){t.show=!1}}},[i("div",{staticClass:"wrapper"},[i("van-loading",{staticClass:"block",attrs:{size:"50px",vertical:"",type:"spinner"}},[t._v(" 加载中...")])],1)])],1)},staticRenderFns:[]};var l=i("VU/8")(r,c,!1,function(t){i("ul3T")},"data-v-709fabe3",null);e.default=l.exports},ul3T:function(t,e){}});
//# sourceMappingURL=3.74adec28a8b989cfb6fb.js.map
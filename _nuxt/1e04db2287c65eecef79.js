(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{192:function(t,e,n){var a=n(403);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,n(26).default)("4eeae302",a,!0,{sourceMap:!1})},402:function(t,e,n){"use strict";var a=n(192);n.n(a).a},403:function(t,e,n){(t.exports=n(25)(!1)).push([t.i,"\ntr {\n\theight: 32px !important;\n}\ntd, th {\n\tpadding: 0 0 0 8px !important;\n\theight: 32px !important\n}\ntd:last-child, th:last-child {\n\tpadding: 0 8px !important;\n}\n.row-header {\n\twidth: 100px;\n\twhite-space: nowrap;\n}\n",""])},425:function(t,e,n){"use strict";n.r(e);n(136),n(38),n(27);var a,i=n(3),s=n.n(i),r=n(132),c=n.n(r),o=n(141),u=n(133),l=n(142),p={data:function(){return{headers:[{text:"Case",align:"left",value:"index"},{text:"Count",align:"right",value:"count"},{text:"Time",align:"right",value:"averageTime"},{text:"Insp.",align:"right",value:"averageInspection"},{text:"Exec.",align:"right",value:"averageExecution"}],stats:[],cases:o.a.map(function(t){var e=c()(t,2);return{name:e[0],id:e[1],count:0,averageTime:0,averageInspection:0,averageExecution:0}})}},computed:{},mounted:(a=s()(regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(l.d)();case 2:this.stats=t.sent,this.cases=this.cases.map(function(t,n){var a=t.name,i=t.id,s=e.stats.find(function(t){return t.id===n}),r=s?s.times/s.count:1/0,c=s?s.inspectionTimes/s.count:1/0,o=s?s.executionTimes/s.count:1/0;return{index:n,name:a,id:i,count:s?s.count:0,averageTime:r,averageTimeText:Object(u.f)(r),averageInspection:c,averageInspectionText:Object(u.f)(c),averageExecution:o,averageExecutionText:Object(u.f)(o)}});case 4:case"end":return t.stop()}},t,this)})),function(){return a.apply(this,arguments)}),head:function(){return{title:"CLL Stats"}}},d=(n(402),n(14)),v=Object(d.a)(p,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:"","grid-list-md":"","text-xs-center":""}},[n("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.cases,"hide-actions":""},scopedSlots:t._u([{key:"items",fn:function(e){return[n("th",{staticClass:"row-header text-xs-left"},[null===e.item.id?n("span",[t._v(t._s(e.item.name))]):n("a",{attrs:{href:"http://algdb.net/puzzle/333/cmll/"+e.item.id,target:"_blank",rel:"noopener"}},[t._v("\n\t\t\t\t\t"+t._s(e.item.name)+"\n\t\t\t\t")])]),t._v(" "),n("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.count))]),t._v(" "),n("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.averageTimeText))]),t._v(" "),n("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.averageInspectionText))]),t._v(" "),n("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.averageExecutionText))])]}}])})],1)},[],!1,null,null,null);v.options.__file="cll.vue";e.default=v.exports}}]);
(this.webpackJsonptodolistbetter=this.webpackJsonptodolistbetter||[]).push([[0],{40:function(t,e,a){t.exports=a(51)},49:function(t,e,a){},50:function(t,e,a){},51:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),o=a(21),l=a.n(o),s=a(9),i=a(10),c=a(12),u=a(11),d=a(7),m=a(56),p=a(54),f=a(34),h=a(53),g=function(t){Object(c.a)(a,t);var e=Object(u.a)(a);function a(t){var n;return Object(s.a)(this,a),(n=e.call(this,t)).state={todo_to_add:"",status:"urgent",date:(new Date).getDate()+"/"+((new Date).getMonth()+1)+"/"+(new Date).getFullYear()},n.date=r.a.createRef(),n.handleSubmit=n.handleSubmit.bind(Object(d.a)(n)),n.makeid=n.makeid.bind(Object(d.a)(n)),n}return Object(i.a)(a,[{key:"add",value:function(t,e,a){localStorage?(localStorage.setItem(this.makeid(30),JSON.stringify({texto:t,status:e,date:a})),window.location.reload()):alert("Your browser does not support localStorage")}},{key:"makeid",value:function(t){for(var e="",a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=a.length,r=0;r<t;r++)e+=a.charAt(Math.floor(Math.random()*n));return e}},{key:"handleSubmit",value:function(t,e,a,n){n.preventDefault(),void 0!==t&&0!==t.length&&this.add(t,e,a)}},{key:"render",value:function(){var t=this;return r.a.createElement(m.a,{bg:"dark",variant:"dark"},r.a.createElement(m.a.Brand,null,"React To-do List"),r.a.createElement(p.a,{inline:!0},r.a.createElement(f.a,{onChange:function(e){return t.setState({todo_to_add:e.target.value})},type:"text",placeholder:"Write here",className:"mr-sm-2"}),r.a.createElement(f.a,{as:"select",custom:!0,onChange:function(e){t.setState({status:e.target.value})}},r.a.createElement("option",{id:"urgent",value:"urgent"},"Urgent"),r.a.createElement("option",{id:"medium",value:"medium"},"Medium"),r.a.createElement("option",{id:"noturgent",value:"noturgent"},"Not urgent")),r.a.createElement(f.a,{style:{marginLeft:"10px"},value:this.state.date,type:"text",id:"date",placeholder:"DD/MM/YYYY",ref:this.date,onChange:function(e){var a=t.date.current.value;(null!==a.match(/^\d{2}$/)||null!==a.match(/^\d{2}\/\d{2}$/))&&(t.date.current.value=a+"/"),t.setState({date:e.target.value})},maxLength:"10"}),r.a.createElement(h.a,{style:{marginLeft:"10px"},variant:"outline-success",onClick:function(e){t.handleSubmit(t.state.todo_to_add,t.state.status,t.state.date,e)}},"Add To-do")))}}]),a}(n.Component),y=a(35),v=a(55),b=a(57),E=a(16),x=a.n(E),k=(a(49),function(t){Object(c.a)(a,t);var e=Object(u.a)(a);function a(t){var n;return Object(s.a)(this,a),(n=e.call(this,t)).state={dateContext:x()(),today:x()(),showMonthPopup:!1,showYearPopup:!1,selectedDate:""},n.year=function(){return n.state.dateContext.format("Y")},n.month=function(){return n.state.dateContext.format("MMMM")},n.monthNumber=function(){return n.state.dateContext.format("M")},n.daysInMonth=function(){return n.state.dateContext.daysInMonth()},n.currentDate=function(){return n.state.dateContext.get("date")},n.currentDay=function(){return n.state.dateContext.format("D")},n.firstDayOfMonth=function(){return x()(n.state.dateContext).startOf("month").format("d")},n.weekdays=x.a.weekdays(),n.weekdaysShort=x.a.weekdaysShort(),n.months=x.a.months(),n}return Object(i.a)(a,[{key:"render",value:function(){for(var t=this,e=this.weekdaysShort.map((function(t){return r.a.createElement("td",{key:t,className:"week-day"},t)})),a=[],n=0;n<this.firstDayOfMonth();n++)a.push(r.a.createElement("td",{key:80*n,className:"emptySlot"},""));this.handleSelectedDateChange=function(e){e==t.state.selectedDate?t.setState({selectedDate:""}):t.setState({selectedDate:e})};for(var o=[],l=function(e){var a=e==t.currentDay()?"day current-day":"day";t.props.tasks&&t.props.tasks.map((function(n,r){n&&n.match(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/)&&parseInt(n.split("/")[0])==parseInt(e)&&parseInt(n.split("/")[1])==parseInt(t.monthNumber())&&parseInt(n.split("/")[2])==parseInt(t.year())&&(a.includes(" taskday")||(a+=" taskday"))})),o.push(r.a.createElement("td",{key:e,className:a},r.a.createElement("span",{style:{cursor:"pointer",fontWeight:t.state.selectedDate.split("/")[0]==e&&t.state.selectedDate.split("/")[1]==t.monthNumber()&&t.state.selectedDate.split("/")[2]==t.year()?"900":"200"},onClick:function(){t.props.onClickDay("".concat(e,"/").concat(t.monthNumber(),"/").concat(t.year())),t.handleSelectedDateChange("".concat(e,"/").concat(t.monthNumber(),"/").concat(t.year()))}},e)))},s=1;s<=this.daysInMonth();s++)l(s);var i=[].concat(a,o),c=[],u=[];i.forEach((function(t,e){if(e%7!==0)u.push(t);else{var a=u.slice();if(c.push(a),(u=[]).push(t),e===i.length-1){var n=u.slice();c.push(n)}}}));var d=c.map((function(t,e){return r.a.createElement("tr",{key:100*e},t)}));return r.a.createElement("div",{className:"calendar-container"},r.a.createElement("table",{className:"calendar"},r.a.createElement("thead",null,r.a.createElement("tr",{className:"calendar-header"})),r.a.createElement("tbody",null,r.a.createElement("tr",null,e),d)))}}]),a}(n.Component)),S=function(t){Object(c.a)(a,t);var e=Object(u.a)(a);function a(t){var n;return Object(s.a)(this,a),(n=e.call(this,t)).allDates=function(){for(var t=[],e=Object.keys(localStorage),a=e.length;a--;)try{var n=JSON.parse(localStorage[e[a]]);n.date&&t.push(n.date)}catch(r){}return t},n.numberOfTasks=function(){return Object.keys(localStorage).length},n.wrapURLs=function(t,e){var a=!0===e||null==e?"_blank":"";return t.replace(/(?:(?:https?|ftp):\/\/)?(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\x{00a1}\-\x{ffff}0-9]+-?)*[a-z\x{00a1}\-\x{ffff}0-9]+)(?:\.(?:[a-z\x{00a1}\-\x{ffff}0-9]+-?)*[a-z\x{00a1}\-\x{ffff}0-9]+)*(?:\.(?:[a-z\x{00a1}\-\x{ffff}]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?/gi,(function(t){return'<a href="'+(/^(?:(?:https?|ftp):\/\/)/i.test(t)?t:"http://"+t)+'" target="'+a+'">'+t+"</a>"}))},n.renderTodo=function(t,e){var a=function(t,e){return e?n.wrapURLs(t)+"(".concat(e,")"):n.wrapURLs(t)};return t.status?r.a.createElement(v.a.Item,{className:"todo",key:e},r.a.createElement("div",{style:{display:"flex",flexDirection:"row"},className:"align"},r.a.createElement("span",{dangerouslySetInnerHTML:{__html:a(t.texto,t.date)}}),function(t){switch(t){case"urgent":return r.a.createElement("div",{style:{marginLeft:"30px",backgroundColor:"rgb(179, 0, 0)",width:"30px",height:"30px",borderRadius:"50%"}});case"medium":return r.a.createElement("div",{style:{marginLeft:"30px",backgroundColor:"rgb(209, 209, 0)",width:"30px",height:"30px",borderRadius:"50%"}});case"noturgent":return r.a.createElement("div",{style:{marginLeft:"30px",backgroundColor:"rgb(5, 160, 44)",width:"30px",height:"30px",borderRadius:"50%"}})}}(t.status),function(e){switch(e){case"urgent":return r.a.createElement(f.a,{style:{width:"100px",marginLeft:"30px"},as:"select",custom:!0,onChange:function(e){n.changeStatus(t.id,e.target.value),window.location.reload()}},r.a.createElement("option",{selected:!0,id:"urgent",value:"urgent"},"Urgent"),r.a.createElement("option",{id:"medium",value:"medium"},"Medium"),r.a.createElement("option",{id:"noturgent",value:"noturgent"},"Not urgent"));case"medium":return r.a.createElement(f.a,{style:{width:"100px",marginLeft:"30px"},as:"select",custom:!0,onChange:function(e){n.changeStatus(t.id,e.target.value),window.location.reload()}},r.a.createElement("option",{id:"urgent",value:"urgent"},"Urgent"),r.a.createElement("option",{selected:!0,id:"medium",value:"medium"},"Medium"),r.a.createElement("option",{id:"noturgent",value:"noturgent"},"Not urgent"));case"noturgent":return r.a.createElement(f.a,{style:{width:"100px",marginLeft:"30px"},as:"select",custom:!0,onChange:function(e){n.changeStatus(t.id,e.target.value),window.location.reload()}},r.a.createElement("option",{id:"urgent",value:"urgent"},"Urgent"),r.a.createElement("option",{id:"medium",value:"medium"},"Medium"),r.a.createElement("option",{selected:!0,id:"noturgent",value:"noturgent"},"Not urgent"))}}(t.status)),r.a.createElement(h.a,{className:"delete_button",variant:"danger",style:{float:"right"},onClick:function(){n.del(t.id)}},"X")):r.a.createElement(v.a.Item,{className:"todo",key:e},r.a.createElement("span",{dangerouslySetInnerHTML:{__html:a(t.texto,t.date)}}),r.a.createElement(h.a,{className:"delete_button",variant:"danger",style:{float:"right"},onClick:function(){n.del(t.id)}},"X"))},n.applyFilter=function(t){t==n.state.filterDate?n.setState({filterDate:"",applyFilter:!1},(function(){n.setState({todos:n.allStorage()})})):n.setState({filterDate:t,applyFilter:!0},(function(){n.setState({todos:n.allStorage()})}))},n.state={todos:[],applyFilter:!1,filterDate:"",allDates:n.allDates()},n.allStorage=n.allStorage.bind(Object(d.a)(n)),n.renderTodo=n.renderTodo.bind(Object(d.a)(n)),n.applyFilter=n.applyFilter.bind(Object(d.a)(n)),n.allDates=n.allDates.bind(Object(d.a)(n)),n.wrapURLs=n.wrapURLs.bind(Object(d.a)(n)),n}return Object(i.a)(a,[{key:"allStorage",value:function(){for(var t=[],e=Object.keys(localStorage),a=e.length;a--;)try{var n=JSON.parse(localStorage.getItem(e[a]));this.state.applyFilter?parseInt(this.state.filterDate.split("/")[0])==parseInt(n.date.split("/")[0])&&parseInt(this.state.filterDate.split("/")[1])==parseInt(n.date.split("/")[1])&&parseInt(this.state.filterDate.split("/")[2])==parseInt(n.date.split("/")[2])&&t.push({id:e[a],texto:n.texto,status:n.status,date:n.date}):t.push({id:e[a],texto:n.texto,status:n.status,date:n.date})}catch(l){try{var r=JSON.parse(localStorage.getItem(e[a]));this.state.applyFilter?this.state.filterDate==r.date&&t.push({id:e[a],texto:r.texto,status:r.status,date:r.date}):t.push({id:e[a],texto:r.texto,status:r.status,date:r.date})}catch(s){var o=localStorage.getItem(e[a]);t.push({id:e[a],texto:o})}}return t}},{key:"componentDidMount",value:function(){localStorage&&this.setState({todos:this.allStorage()})}},{key:"del",value:function(t){localStorage.removeItem(t),window.location.reload()}},{key:"changeStatus",value:function(t,e){var a=JSON.parse(localStorage.getItem(t));a.status=e,a=JSON.stringify(a),localStorage.setItem(t,a)}},{key:"render",value:function(){var t=this;return r.a.createElement("div",{className:"todos"},r.a.createElement("div",{style:Object(y.a)({display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",textAlign:"center"},"alignItems","center"),className:"center"},r.a.createElement("h6",{style:{padding:"20px"}},"Any doubts or suggestions please contact ",r.a.createElement("span",{style:{fontWeight:"900"}},"potato.clicker28@gmail.com")),r.a.createElement("h3",{style:{padding:"20px"}},this.numberOfTasks()," tasks ramaining"),r.a.createElement(k,{tasks:this.state.allDates,onClickDay:this.applyFilter}),r.a.createElement(b.a,{variant:"info"},"UPDATE: Now if you click on a day, instead of showing a tooltip, it filters all tasks by date")),r.a.createElement(v.a,null,this.state.todos.map((function(e,a){return t.renderTodo(e,a)}))))}}]),a}(n.Component),D=(a(50),function(t){Object(c.a)(a,t);var e=Object(u.a)(a);function a(t){var n;return Object(s.a)(this,a),(n=e.call(this,t)).state={todos:[]},n}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(g,null),r.a.createElement(S,null))}}]),a}(n.Component));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(D,null)),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.fa8dcd62.chunk.js.map
(this.webpackJsonphosting=this.webpackJsonphosting||[]).push([[0],{148:function(e,t,a){e.exports=a(297)},153:function(e,t,a){},154:function(e,t,a){},297:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(4),c=a.n(l),o=(a(153),a(23)),s=a(24),i=a(26),u=a(25),m=a(27),h=a(112),d=a(43),p=a(79),b=(a(154),a(64)),f=a.n(b),E=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleclick=a.handleclick.bind(Object(p.a)(a)),a.state={data:!1},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){f()(window).on("scroll",(function(){f()(window).scrollTop()>50?f()("header").addClass("active"):f()("header").removeClass("active")}))}},{key:"handleclick",value:function(){console.log("hello"),this.setState({data:!0}),this.props.showmodal(this.state.data)}},{key:"render",value:function(){return r.a.createElement("header",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"logo"},r.a.createElement("h1",null,r.a.createElement("a",{href:"/"}," Innovaccer"))),r.a.createElement("input",{type:"checkbox",id:"sidebar-toggle",hidden:!0}),r.a.createElement("label",{htmlFor:"sidebar-toggle",className:"hamburger"},r.a.createElement("span",null)),r.a.createElement("div",{className:"sidebar"},r.a.createElement("nav",{className:"sidebar-nav"},r.a.createElement("ul",null,r.a.createElement("li",null," ",r.a.createElement("a",{href:"/"}," Summergeek-Task")))),r.a.createElement("div",{className:"accent"})),r.a.createElement("div",{className:"sidebar-shadow",id:"sidebar-shadow"}),r.a.createElement("nav",{className:"desktop-nav"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"/"}," Summergeek-Task"))))))}}]),t}(n.Component),k=a(300),v=a(302),O=a(298),g=a(299),j=a(117),y=(k.a.Option,function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault(),a.props.form.validateFields((function(e,t){v.a.open({message:"Processing Form details",description:"Processing Your details.",onClick:function(){console.log("Notification Clicked!")}}),e?(console.error("An error occurred. Error:\n".concat(e)),a.props.checkStatus(!1)):(t.checkInTime=new Date,a.props.sendValuesToServer(t).then((function(e){v.a.open({message:"Checked-In",description:"User Checked-In",onClick:function(){console.log("Notification Clicked!")}}),a.props.checkStatus(!0)})).catch((function(e){console.error("An error occurred. Error:\n".concat(e))})))}))},a.handleSelectChange=function(e){console.log(e),a.props.form.setFieldsValue({note:"Hi, ".concat("male"===e?"man":"lady","!")})},a.state={status:!1},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator;return r.a.createElement(O.a,{labelCol:{span:5},wrapperCol:{span:12},onSubmit:this.handleSubmit},r.a.createElement("h3",null,"Visitor's Info"),r.a.createElement(O.a.Item,{label:"Name"},e("name",{rules:[{required:!0,message:"Please input visitor Name!"}]})(r.a.createElement(g.a,null))),r.a.createElement(O.a.Item,{label:"Phone Number"},e("phoneNumber",{rules:[{required:!0,message:"Please input visitor Phone Number!"}]})(r.a.createElement(g.a,null))),r.a.createElement(O.a.Item,{label:"Email"},e("email",{rules:[{required:!0,message:"Please input visitor Email!"}]})(r.a.createElement(g.a,null))),r.a.createElement(O.a.Item,{label:"Address Visited"},e("address",{rules:[{required:!0,message:"Please input Address Visited!"}]})(r.a.createElement(g.a,null))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h3",null,"Host's Info"),r.a.createElement(O.a.Item,{label:"Host Name"},e("hostName",{rules:[{required:!0,message:"Please input Host Name!"}]})(r.a.createElement(g.a,null))),r.a.createElement(O.a.Item,{label:"Phone Number Host"},e("phoneNumberHost",{rules:[{required:!0,message:"Please input Host Phone Number!"}]})(r.a.createElement(g.a,null))),r.a.createElement(O.a.Item,{label:"Email Host"},e("emailHost",{rules:[{required:!0,message:"Please input Host Email!"}]})(r.a.createElement(g.a,null))),r.a.createElement(O.a.Item,{wrapperCol:{span:12,offset:5}},r.a.createElement(j.a,{type:"primary",htmlType:"submit"},"Check-In")))}}]),t}(n.Component)),C=O.a.create({name:"coordinated"})(y),I=a(304),N=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"executeOnClick",value:function(e,t){var a=this;this.props.sendNumber(e,t).then((function(e){v.a.open({message:"Checked-Out",description:"User Checked-Out",onClick:function(){console.log("Notification Clicked!")}}),console.log("out yo"),a.props.checkStatusCheckOut(!0)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this,t=this.props.values,a=t.name,l=t.email,c=t.phoneNumber,o=t.address,s=t.hostName,i=t.checkInTime;return i=JSON.stringify(i),r.a.createElement(n.Fragment,null,r.a.createElement(I.a,{title:"User Info",bordered:!0},r.a.createElement(I.a.Item,{label:"Name"},a),r.a.createElement(I.a.Item,{label:"Email-ID"},l),r.a.createElement(I.a.Item,{label:"Address Visited"},o),r.a.createElement(I.a.Item,{label:"Host Name"},s),r.a.createElement(I.a.Item,{label:"Phone Number",span:2},c),r.a.createElement(I.a.Item,{label:"Check-In Time",span:2},i)),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(j.a,{onClick:function(){e.executeOnClick(c,i)}},"Check-Out"))}}]),t}(n.Component),S=a(303),w=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(S.a,{status:"success",title:"Successfully Recorded Event",extra:[r.a.createElement("a",{href:"/"},r.a.createElement(j.a,{type:"primary",key:"console"},"Go Console"))]}))}}]),t}(n.Component);var P=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={status:!1,checkOutStatus:!1,values:{}},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"_sendNumber",value:function(e,t){return console.log(e,t),function(e,t){if(e&&t){var a={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"}};return a.body=JSON.stringify({phoneNumber:e,checkInTime:t}),fetch("https://still-beyond-30740.herokuapp.com/api/handleCheckOutInfo",a).then((function(e){return console.log(e),e.json()})).then((function(e){if(e)return console.log(JSON.stringify(e,null,4)),{isVisitorCheckedOut:!0};throw"Issue with response."})).catch((function(e){return console.error("An error occurred. Error:\n".concat(e)),{isVisitorCheckedOut:!1}}))}return Promise.reject("Issue with phone-number or checkInTime.")}(e,t)}},{key:"_checkStatusCheckOut",value:function(e){console.log("Mhm. "+e),this.setState({checkOutStatus:e})}},{key:"_checkStatus",value:function(e){console.log("Mhm. "+e),this.setState({status:e})}},{key:"_sendValuesToServer",value:function(e){return this.setState({values:e}),function(e){if(e){var t={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"}};return t.body=JSON.stringify(e),console.log(t),fetch("https://still-beyond-30740.herokuapp.com/api/handleCheckInInfo",t).then((function(e){return e.json()})).then((function(e){if(e)return console.log(JSON.stringify(e,null,4)),{isVisitorInfoSaved:!0};throw"Issue with response."})).catch((function(e){return console.error("An error occurred. Error:\n".concat(e)),{isVisitorInfoSaved:!1}}))}return Promise.reject("Issue with values.")}(e)}},{key:"render",value:function(){var e,t=this.state,a=t.status,l=t.checkOutStatus;return a&&!l?e=r.a.createElement("main",null,r.a.createElement(N,{values:this.state.values,sendNumber:this._sendNumber.bind(this),checkStatusCheckOut:this._checkStatusCheckOut.bind(this)})):a||l?a&&l&&(e=r.a.createElement("main",null,r.a.createElement(w,null))):e=r.a.createElement("main",null,r.a.createElement(C,{sendValuesToServer:this._sendValuesToServer.bind(this),checkStatus:this._checkStatus.bind(this)})),r.a.createElement(n.Fragment,null,r.a.createElement(E,null),e)}}]),t}(n.Component),T=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(h.a,null,r.a.createElement(d.a,{exact:!0,path:"/",component:P})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[148,1,2]]]);
//# sourceMappingURL=main.75e6227e.chunk.js.map
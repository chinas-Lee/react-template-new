(this["webpackJsonpreact-template"]=this["webpackJsonpreact-template"]||[]).push([[5],{183:function(e,t,r){"use strict";r.r(t);r(93);var a=r(117),n=r(7),o=r.n(n),s=(r(90),r(91)),c=r(19),i=r(9),u=r(10),l=r(12),f=r(11),p=r(24),g=r(13),m=r(0),b=r.n(m),h=r(15),d=r(92),v=r(25),j=r(17),T=r(28),O=r(75),k=function(e){function t(e){var r;return Object(i.a)(this,t),(r=Object(l.a)(this,Object(f.a)(t).call(this,e))).state={demo:"demo",params:Object(T.a)(r.props.location.search,"type")},r.login=r.login.bind(Object(p.a)(r)),r.getUserInfo=r.getUserInfo.bind(Object(p.a)(r)),r}return Object(g.a)(t,e),Object(u.a)(t,[{key:"login",value:function(){var e=Object(c.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(d.b)({passWord:"",rand:"1234",username:"demo"});case 3:t=e.sent,console.log(t),s.a.success("\u767b\u5f55\u6210\u529f",O.a.clearToastTime),(0,this.props.setToken)(t),Object(j.f)("token",t),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,this,[[0,11]])})));return function(){return e.apply(this,arguments)}}()},{key:"getUserInfo",value:function(){var e=Object(c.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(d.a)();case 3:t=e.sent,console.log(t),s.a.success("\u83b7\u53d6\u7528\u6237\u4fe1\u606f\u6210\u529f",O.a.clearToastTime),(0,this.props.setUserData)(t),Object(j.f)("userData",t),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,this,[[0,11]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return b.a.createElement("div",null,b.a.createElement(a.a,{className:"text-ellipsis",onClick:this.login},"\u70b9\u6211\u767b\u5f55"),b.a.createElement("div",{className:"example"}),b.a.createElement(a.a,{className:"text-ellipsis",onClick:this.getUserInfo},"\u70b9\u6211\u83b7\u53d6\u7528\u6237\u4fe1\u606f"))}}]),t}(b.a.Component);t.default=Object(h.b)((function(e){return{userData:e.userData}}),(function(e,t){return{setToken:function(t){e(Object(v.b)(t))},setUserData:function(t){e(Object(v.c)(t))}}}))(k)},75:function(e,t,r){"use strict";var a={projectInfo:{V:"5.1.1",DEFAULT_TOKEN:"E07657CD6002B363",DC:"h5",OSV:navigator.userAgent,PT:"pt"},reqErrorMsg:"\u7f51\u7edc\u8bf7\u6c42\u9519\u8bef\uff0c\u8bf7\u91cd\u8bd5",clearToastTime:2};t.a=a},92:function(e,t,r){"use strict";r(90);var a=r(91),n=r(108),o=r.n(n);o.a.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),o.a.interceptors.response.use((function(e){return e||Promise.reject(e)}),(function(e){return Promise.reject(e)}));var s=o.a,c=r(75),i={basicApi:"http://115.159.89.138:8000"},u=r(17),l=function(){var e="";try{(e=Object(u.a)("sn")||"")||(e="web_".concat(Math.random().toString(36).substr(2,15)),Object(u.e)("sn",e))}catch(t){console.log(t)}return e},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"post",n=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];return new Promise((function(o,f){var p=sessionStorage.getItem("token")||"",g=i.basicApi+t;if(n&&!p)return a.a.info("\u8bf7\u5148\u767b\u5f55",c.a.clearToastTime),setTimeout((function(){window.location.href=window.location.origin+"/#/login"}),1e3),!1;var m,b={pt:c.a.projectInfo.PT,dc:c.a.projectInfo.DC,did:l(),osv:c.a.projectInfo.OSV,v:c.a.projectInfo.V,Authorization:p};switch(r){case"get":m=s.get(g,{params:e,headers:b});break;case"post":m=s.post(g,e,{headers:b})}m.then((function(e){var t=e.data||{};switch(t||(a.a.info(c.a.reqErrorMsg,c.a.clearToastTime),f(c.a.reqErrorMsg)),+t.code){case 0:o(t.data);break;case-1:a.a.info(t.msg||c.a.reqErrorMsg,c.a.clearToastTime),f(t.msg||c.a.reqErrorMsg);break;case-2:Object(u.d)("userData"),window.location.href=window.location.origin+"/#/login";break;default:a.a.info(t.msg||c.a.reqErrorMsg,c.a.clearToastTime),f(t.msg||c.a.reqErrorMsg)}}),(function(e){console.log(e),a.a.info(c.a.reqErrorMsg,c.a.clearToastTime),f(c.a.reqErrorMsg)})).catch((function(e){console.log(e),a.a.info(c.a.reqErrorMsg,c.a.clearToastTime),f(c.a.reqErrorMsg)}))}))};r.d(t,"b",(function(){return p})),r.d(t,"a",(function(){return g}));var p=function(e){return f(e,"/user/login","post",!1)},g=function(e){return f(e,"/user/userCenter/pt/getUserInfo","get",!0)}}}]);
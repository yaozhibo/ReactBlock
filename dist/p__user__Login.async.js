(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[19],{Odk5:function(e,t,a){"use strict";var n=a("g09b"),o=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("/xke");var s,l,u,r=n(a("TeRw")),i=n(a("p0pE")),d=n(a("eHn4")),c=n(a("2Taf")),f=n(a("vZ4D")),p=n(a("l4Ni")),h=n(a("ujKo")),m=n(a("MhPg")),g=o(a("q1tI")),w=a("FvIY"),v=a("MuoO"),b=a("8+Sn"),y=(s=(0,v.connect)(function(e){var t=e.loginUsers;return{loginUsers:t}}),s((u=function(e){function t(e){var a;return(0,c.default)(this,t),a=(0,p.default)(this,(0,h.default)(t).call(this,e)),a.state={account:"",password:"",btnStatus:!1},a.handleChange=function(e,t){var n=t.name,o=t.value;return a.setState((0,d.default)({},n,o))},a.handleSubmit=function(){var e=a.props.dispatch,t=a.state,n=t.account,o=t.password,s={account:n,password:o};a.setState({btnStatus:!0}),e({type:"loginUsers/submitLogin",payload:(0,i.default)({},s),callback:function(e){1e4===e.data.status?(a.setState({account:"",password:""}),(0,b.setCookie)("yjyd_app_session",e.data.data.yjyd_app_session,365),(0,b.setCookie)("user",JSON.stringify(e.data.data.user),365),r.default.success({message:e.data.info,duration:2,onClose:function(){window.location.href="/"}})):a.setState({btnStatus:!1})}})},(0,b.checkCookie)("yjyd_app_session")&&(window.location.href="/"),a}return(0,m.default)(t,e),(0,f.default)(t,[{key:"render",value:function(){var e=this.state,t=e.account,n=e.password,o=e.btnStatus;return g.default.createElement(w.Grid,{textAlign:"center"},g.default.createElement(w.Grid.Column,{style:{maxWidth:450}},g.default.createElement(w.Header,{as:"h2",style:{color:"#0f0f0f"},textAlign:"center"},g.default.createElement(w.Image,{src:a("aYvH")}),"\u60a8\u6b63\u5728\u767b\u9646..."),g.default.createElement(w.Form,{size:"large",onSubmit:this.handleSubmit},g.default.createElement(w.Segment,{stacked:!0},g.default.createElement(w.Form.Input,{name:"account",fluid:!0,icon:"user",iconPosition:"left",placeholder:"\u8bf7\u8f93\u5165\u60a8\u7684\u8d26\u53f7\uff1a\u90ae\u7bb1\u6216\u8005\u7528\u6237\u540d",onChange:this.handleChange,value:t}),g.default.createElement(w.Form.Input,{name:"password",fluid:!0,icon:"lock",iconPosition:"left",placeholder:"\u8bf7\u8f93\u5165\u60a8\u7684\u5bc6\u7801",type:"password",onChange:this.handleChange,value:n}),0==o?g.default.createElement(w.Button,{color:"twitter",fluid:!0,size:"large"},"\u63d0\u4ea4"):g.default.createElement(w.Button,{color:"twitter",fluid:!0,size:"large",loading:!0,disabled:!0},"\u63d0\u4ea4"))),g.default.createElement(w.Message,null,"\u8fd8\u6ca1\u6ce8\u518c\uff1f ",g.default.createElement("a",{href:"/user/register"},"\u7acb\u5373\u6ce8\u518c"))))}}]),t}(g.PureComponent),l=u))||l),S=y;t.default=S}}]);
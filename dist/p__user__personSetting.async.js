(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[29],{"7iqL":function(e,t,a){"use strict";var l=a("g09b"),n=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("/xke");var r,u,d,o=l(a("TeRw")),s=l(a("p0pE")),c=l(a("2Taf")),i=l(a("vZ4D")),f=l(a("l4Ni")),m=l(a("ujKo")),p=l(a("MhPg")),h=n(a("q1tI")),v=a("FvIY"),E=a("MuoO"),g=a("8+Sn"),b=(r=(0,E.connect)(function(e){var t=e.personManager;return{personManager:t}}),r((d=function(e){function t(){var e,a;(0,c.default)(this,t);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return a=(0,f.default)(this,(e=(0,m.default)(t)).call.apply(e,[this].concat(n))),a.state={data:{old_password:"",new_password:"",new_password_confirmation:""},btnStatus:!1},a.submitNewPassword=function(){var e=a.props.dispatch,t=a.state.data,l=(0,s.default)({},t);a.setState({btnStatus:!0}),e({type:"personManager/resetPassword",payload:l,callback:function(e){a.setState({btnStatus:!1}),1e4===e.status&&((0,g.removeCookie)("yjyd_app_session"),(0,g.removeCookie)("user"),o.default.success({message:e.info,duration:2,onClose:function(){window.location.href="/user/login"}}))}})},a.handleChange=function(e,t){var l=t.name,n=t.value,r=a.state.data;r[l]=n,a.setState({data:r})},a}return(0,p.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){return h.default.createElement(v.Form,{size:"small"},h.default.createElement(v.Form.Field,null,h.default.createElement("label",null,"\u65e7\u5bc6\u7801"),h.default.createElement(v.Form.Input,{name:"old_password",placeholder:"\u8bf7\u8f93\u5165\u60a8\u7684\u65e7\u5bc6\u7801",onChange:this.handleChange})),h.default.createElement(v.Form.Field,null,h.default.createElement("label",null,"\u65b0\u5bc6\u7801"),h.default.createElement(v.Form.Input,{name:"new_password",placeholder:"\u8bf7\u8f93\u5165\u60a8\u7684\u65b0\u5bc6\u7801",onChange:this.handleChange})),h.default.createElement(v.Form.Field,null,h.default.createElement("label",null,"\u786e\u8ba4\u65b0\u5bc6\u7801"),h.default.createElement(v.Form.Input,{name:"new_password_confirmation",placeholder:"\u8bf7\u786e\u8ba4\u60a8\u7684\u65b0\u5bc6\u7801",onChange:this.handleChange})),h.default.createElement(v.Button,{type:"submit",onClick:this.submitNewPassword},"\u4fdd\u5b58"))}}]),t}(h.PureComponent),u=d))||u),F=b;t.default=F},"97xQ":function(e,t,a){"use strict";var l=a("g09b"),n=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("DZo9");var r=l(a("8z0m"));a("miYZ");var u=l(a("tsqr"));a("/xke");var d,o,s,c=l(a("TeRw")),i=l(a("2Taf")),f=l(a("vZ4D")),m=l(a("l4Ni")),p=l(a("ujKo")),h=l(a("MhPg")),v=n(a("q1tI")),E=a("FvIY"),g=a("MuoO"),b=a("8+Sn"),F=l(a("uwec")),y=(d=(0,g.connect)(function(e){var t=e.personSetting;return{personSetting:t}}),d((s=function(e){function t(){var e,a;(0,i.default)(this,t);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return a=(0,m.default)(this,(e=(0,p.default)(t)).call.apply(e,[this].concat(n))),a.state={user:{username:"",email:"",nickname:"",avatar:"",isIni:!0},btnStatus:!1},a.handleChange=function(e,t){var l=t.name,n=t.value,r=a.state.user;r[l]=n,a.setState({user:r})},a.handleSubmit=function(){var e=a.props.dispatch,t=a.state.user,l={nickname:t.nickname};a.setState({btnStatus:!0}),e({type:"personSetting/submitBasicSett",payload:l,callback:function(e){if(a.setState({btnStatus:!1}),1e4===e.status){var t=JSON.parse((0,b.getCookie)("user"));t.nickname=e.data.nickname,(0,b.setCookie)("user",JSON.stringify(t),365),c.default.success({message:e.info})}}})},a.handleUploadedAvatar=function(e){var t=a.state.user;t.avatar=e,a.setState({user:t});var l=JSON.parse((0,b.getCookie)("user"));l.avatar=e,(0,b.setCookie)("user",JSON.stringify(l),365)},a}return(0,h.default)(t,e),(0,f.default)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.dispatch;t({type:"personSetting/fetchUser",payload:{},callback:function(t){e.setState({user:t.data,isIni:!1})}})}},{key:"render",value:function(){var e=this.state,t=e.user,a=e.isIni,l=this,n={name:"avatar",action:"/api/user/uploadAvatar",headers:{Key:"6c0d64c70a5df6bee51088964d7894e0",Accept:"application/vnd.YiDong.v2+json",AppSession:(0,b.getCookie)("yjyd_app_session")},onChange:function(e){if("done"===e.file.status){var t=e.file.response;1e4===t.status?(l.handleUploadedAvatar(t.data.path),u.default.success("".concat(e.file.name," \u4e0a\u4f20\u6210\u529f"))):u.default.error("".concat(e.file.name," \u4e0a\u4f20\u5931\u8d25"))}else"error"===e.file.status&&u.default.error("".concat(e.file.name," \u4e0a\u4f20\u5931\u8d25"))}};return null==a?v.default.createElement("div",null,v.default.createElement(E.Placeholder,{style:{height:120,width:120}},v.default.createElement(E.Placeholder.Image,null)),v.default.createElement(E.Placeholder,null,v.default.createElement(E.Placeholder.Paragraph,null,v.default.createElement(E.Placeholder.Line,null),v.default.createElement(E.Placeholder.Line,null),v.default.createElement(E.Placeholder.Line,null),v.default.createElement(E.Placeholder.Line,null),v.default.createElement(E.Placeholder.Line,null)),v.default.createElement(E.Placeholder.Paragraph,null,v.default.createElement(E.Placeholder.Line,null),v.default.createElement(E.Placeholder.Line,null),v.default.createElement(E.Placeholder.Line,null)))):v.default.createElement(F.default,null,v.default.createElement(E.Form,{size:"small"},v.default.createElement(E.Form.Group,{inline:!0},v.default.createElement(E.Form.Field,null,v.default.createElement("label",null,v.default.createElement(E.Image,{src:t.avatar,style:{width:"150px",height:"150px"}}))),v.default.createElement(E.Form.Field,null,v.default.createElement(r.default,n,v.default.createElement(E.Button,null,"\u66f4\u6362\u5934\u50cf")))),v.default.createElement(E.Form.Field,null,v.default.createElement("label",null,"\u6635\u79f0"),v.default.createElement(E.Form.Input,{name:"nickname",placeholder:"\u8bf7\u8f93\u5165\u60a8\u7684\u6635\u79f0",value:t.nickname,onChange:this.handleChange})),v.default.createElement(E.Form.Field,null,v.default.createElement("label",null,"\u7528\u6237\u540d\uff08\u6682\u4e0d\u652f\u6301\u66f4\u6539\uff09"),v.default.createElement(E.Form.Input,{name:"email",value:t.username,disabled:!0})),v.default.createElement(E.Form.Field,null,v.default.createElement("label",null,"\u90ae\u7bb1\uff08\u6682\u4e0d\u652f\u6301\u66f4\u6539\uff09"),v.default.createElement(E.Form.Input,{name:"email",value:t.email,disabled:!0})),v.default.createElement(E.Button,{type:"submit",onClick:this.handleSubmit},"\u4fdd\u5b58")))}}]),t}(v.Component),o=s))||o),C=y;t.default=C},"KG+z":function(e,t,a){"use strict";var l=a("tAuX"),n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("2Taf")),u=n(a("vZ4D")),d=n(a("l4Ni")),o=n(a("ujKo")),s=n(a("MhPg")),c=l(a("q1tI")),i=a("FvIY"),f=n(a("97xQ")),m=n(a("XOO5")),p=n(a("7iqL")),h=function(e){function t(){return(0,r.default)(this,t),(0,d.default)(this,(0,o.default)(t).apply(this,arguments))}return(0,s.default)(t,e),(0,u.default)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=[{menuItem:"\u57fa\u7840\u8bbe\u7f6e",render:function(){return c.default.createElement(i.Tab.Pane,null,c.default.createElement(f.default,null))}},{menuItem:"\u4e2a\u4eba\u8d44\u6599",render:function(){return c.default.createElement(i.Tab.Pane,null,c.default.createElement(m.default,null))}},{menuItem:"\u5b89\u5168\u7ba1\u7406",render:function(){return c.default.createElement(i.Tab.Pane,null,c.default.createElement(p.default,null))}}];return c.default.createElement(i.Tab,{menu:{fluid:!0,vertical:!0},menuPosition:"left",panes:e})}}]),t}(c.PureComponent),v=h;t.default=v},XOO5:function(e,t,a){"use strict";var l=a("g09b"),n=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("cWXX");var r=l(a("/ezw"));a("DZo9");var u=l(a("8z0m"));a("miYZ");var d=l(a("tsqr"));a("/xke");var o,s,c,i=l(a("TeRw")),f=l(a("p0pE")),m=l(a("2Taf")),p=l(a("vZ4D")),h=l(a("l4Ni")),v=l(a("ujKo")),E=l(a("MhPg")),g=n(a("q1tI")),b=a("FvIY"),F=a("MuoO"),y=a("8+Sn"),C=l(a("uwec")),w=(o=(0,F.connect)(function(e){var t=e.personProfiles;return{personProfiles:t}}),o((c=function(e){function t(){var e,a;(0,m.default)(this,t);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return a=(0,h.default)(this,(e=(0,v.default)(t)).call.apply(e,[this].concat(n))),a.state={user:{real_name:"",age:"",person_site:"",descr:"",wechat_qrcode:""},btnStatus:!1,isLoading:!0},a.handleSubmit=function(){var e=a.props.dispatch,t=a.state.user,l=(0,f.default)({},t);a.setState({btnStatus:!0}),e({type:"personProfiles/updateUserProfile",payload:l,callback:function(e){a.setState({btnStatus:!1}),1e4===e.status&&i.default.success({message:e.info})}})},a.handleChange=function(e,t){var l=t.name,n=t.value,r=a.state.user;r[l]=n,a.setState({user:r})},a.handleUploadedWechatQRCode=function(e){var t=a.state.user;t.wechat_qrcode=e,a.setState({user:t})},a}return(0,E.default)(t,e),(0,p.default)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.dispatch;t({type:"personProfiles/fetch",payload:{},callback:function(t){1e4===t.status&&e.setState({user:t.data,isLoading:!1})}})}},{key:"render",value:function(){var e=this.state,t=e.user,a=e.isLoading,l=this,n={name:"wechatQRCode",action:"/api/user/uploadWechatQRCode",headers:{Key:"6c0d64c70a5df6bee51088964d7894e0",Accept:"application/vnd.YiDong.v2+json",AppSession:(0,y.getCookie)("yjyd_app_session")},onChange:function(e){if("done"===e.file.status){var t=e.file.response;1e4===t.status?(l.handleUploadedWechatQRCode(t.data.path),d.default.success("".concat(e.file.name," \u4e0a\u4f20\u6210\u529f"))):d.default.error("".concat(e.file.name," \u4e0a\u4f20\u5931\u8d25"))}else"error"===e.file.status&&d.default.error("".concat(e.file.name," \u4e0a\u4f20\u5931\u8d25"))}};return g.default.createElement(r.default,{loading:a},g.default.createElement("h2",null,"\u4e2a\u4eba\u8d44\u6599\u4f1a\u5728\u4e2a\u4eba\u4e2d\u5fc3\u5c55\u793a"),g.default.createElement(C.default,null,g.default.createElement(b.Form,{size:"small"},g.default.createElement(b.Form.Field,null,g.default.createElement("label",null,"\u771f\u540d"),g.default.createElement(b.Form.Input,{name:"real_name",placeholder:"\u8bf7\u8f93\u5165\u60a8\u7684\u771f\u540d",value:t.real_name?t.real_name:"",onChange:this.handleChange})),g.default.createElement(b.Form.Field,null,g.default.createElement("label",null,"\u5e74\u9f84"),g.default.createElement(b.Form.Input,{name:"age",value:t.age?t.age:"",onChange:this.handleChange,placeholder:"\u8bf7\u8f93\u5165\u60a8\u7684\u5e74\u9f84"})),g.default.createElement(b.Form.Field,null,g.default.createElement("label",null,"\u4e2a\u4eba\u7f51\u7ad9"),g.default.createElement(b.Form.Input,{name:"person_site",value:t.person_site?t.person_site:"",onChange:this.handleChange,placeholder:"\u8bf7\u8f93\u5165\u60a8\u7684\u4e2a\u4eba\u7ad9\u70b9"})),g.default.createElement(b.Form.Field,null,g.default.createElement("label",null,"\u7b80\u4ecb"),g.default.createElement(b.Form.Input,{name:"descr",value:t.descr?t.descr:"",onChange:this.handleChange,placeholder:"\u8bf7\u8f93\u5165\u60a8\u7684\u4e2a\u6027\u7b7e\u540d"})),g.default.createElement(b.Form.Group,{inline:!0},g.default.createElement(b.Form.Field,null,g.default.createElement("label",null,t.wechat_qrcode?g.default.createElement(b.Image,{src:t.wechat_qrcode,style:{width:"150px",height:"150px"},alt:"\u5fae\u4fe1\u4e8c\u7ef4\u7801"}):"\u6682\u672a\u4e0a\u4f20")),g.default.createElement(b.Form.Field,null,g.default.createElement(u.default,n,g.default.createElement("a",null,"\u4e0a\u4f20\u5fae\u4fe1\u4e8c\u7ef4\u7801")))),g.default.createElement(b.Button,{type:"submit",onClick:this.handleSubmit},"\u4fdd\u5b58"))))}}]),t}(g.Component),s=c))||s),S=w;t.default=S}}]);
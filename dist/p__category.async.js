(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{PbE3:function(e,t,a){"use strict";var l=a("g09b"),n=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("cWXX");var r=l(a("/ezw"));a("Mwp2");var u=l(a("VXEj"));a("/zsF");var i=l(a("PArb"));a("14J3");var c=l(a("BMrR"));a("jCWc");var d=l(a("kPKH")),o=l(a("p0pE")),f=l(a("2Taf")),s=l(a("vZ4D")),p=l(a("l4Ni")),m=l(a("ujKo")),v=l(a("MhPg"));a("OaEy");var g,h,E,S=l(a("2fM7")),y=n(a("q1tI")),D=l(a("EDuE")),w=a("MuoO"),b=l(a("+rLt")),k=l(a("mOP9")),A=l(a("usdK")),M=S.default.Option,C=(g=(0,w.connect)(function(e){var t=e.categories;return{categories:t}}),g((E=function(e){function t(){var e,a;(0,f.default)(this,t);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return a=(0,p.default)(this,(e=(0,m.default)(t)).call.apply(e,[this].concat(n))),a.state={loadingSpin:!0,dataDivState:!1,version:"2019"},a.toggleDataDivStateAndSpinState=function(e){a.setState({dataDivState:e,loadingSpin:e})},a.handleChange=function(e){var t=a.props.location.query,l=t.name,n={artc_catgr_name:l,version:e};a.setState({version:e}),A.default.push("".concat(window.location.pathname,"?name=").concat(l,"&version=").concat(e));var r=a.props.dispatch;a.toggleDataDivStateAndSpinState(!0),r({type:"categories/fetch",payload:(0,o.default)({},n),callback:function(){a.toggleDataDivStateAndSpinState(!1)}})},a}return(0,v.default)(t,e),(0,s.default)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.location.query,a=t.name,l=t.version;null==l&&(l=this.state.version);var n={artc_catgr_name:a,version:l};this.setState({version:l});var r=this.props.dispatch;this.toggleDataDivStateAndSpinState(!0),r({type:"categories/fetch",payload:(0,o.default)({},n),callback:function(t){1e4===t.status&&(document.title="".concat(t.data.category.name,"\u6742\u5fd7 --\u6cb8\u70b9")),e.toggleDataDivStateAndSpinState(!1)}})}},{key:"render",value:function(){var e=this.props.categories,t=e.list,a=e.category,l=this.state,n=l.loadingSpin,o=l.dataDivState;return y.default.createElement(r.default,{loading:n,active:!0},y.default.createElement("div",{className:D.default.category,hidden:o},null==a?(0,b.default)({type:"error",title:"\u65e0\u6b64\u5185\u5bb9",msg:"\u8bf7\u786e\u8ba4\u8f93\u5165..."}):y.default.createElement(c.default,{type:"flex",justify:"center"},y.default.createElement(c.default,{style:{minWidth:"90%"},className:D.default.listContainer},y.default.createElement(c.default,{gutter:16,type:"flex",align:"middle"},y.default.createElement(d.default,{lg:8},y.default.createElement("img",{src:a.cover,style:{width:"200px",padding:"10px"},alt:""})),y.default.createElement(d.default,{lg:10},y.default.createElement("h5",null,"\u5f80\u671f\uff1a",y.default.createElement(S.default,{defaultValue:this.state.version,style:{maxWidth:120},onChange:this.handleChange,size:"small"},y.default.createElement(M,{value:"2019"},"2019"),y.default.createElement(M,{value:"2018"},"2018"),y.default.createElement(M,{value:"2017"},"2017"),y.default.createElement(M,{value:"2016"},"2016"))),y.default.createElement("h5",null,"\u540d\u79f0\uff1a",a.name),y.default.createElement("h5",null,"\u63cf\u8ff0\uff1a",a.description))),y.default.createElement(i.default,null),y.default.createElement(c.default,null,y.default.createElement(u.default,{itemLayout:"vertical",size:"large",pagination:{onChange:function(e){console.log(e)},pageSize:10},dataSource:t,renderItem:function(e){return y.default.createElement(u.default.Item,{key:e.title,extra:y.default.createElement("p",null,e.created_at)},y.default.createElement(u.default.Item.Meta,{title:y.default.createElement(k.default,{to:"/article?category=".concat(a.slug,"&slug=").concat(e.slug)},e.title),description:y.default.createElement("div",null,y.default.createElement("p",null,"\u4f5c\u8005\uff1a",e.author)," ")}))}}))))))}}]),t}(y.PureComponent),h=E))||h),P=C;t.default=P}}]);
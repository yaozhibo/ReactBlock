(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{"b3/Y":function(e,t,n){"use strict";var a=n("g09b"),i=n("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("/xke");var l=a(n("TeRw")),o=a(n("p0pE")),r=a(n("eHn4")),d=a(n("2Taf")),u=a(n("vZ4D")),s=a(n("l4Ni")),c=a(n("ujKo")),m=a(n("MhPg")),f=i(n("q1tI")),p=n("FvIY"),h=a(n("6/sb")),g=a(n("DlQD")),v=a(n("FIf5"));n("sRa1"),n("UN7h"),n("kSOh");var b,w,k,y=n("MuoO"),S=a(n("FC5H")),C=n("8+Sn"),E=(b=(0,y.connect)(function(e){var t=e.posts;return{posts:t}}),b((k=function(e){function t(e){var n;return(0,d.default)(this,t),n=(0,s.default)(this,(0,c.default)(t).call(this,e)),n.state={title:"",btnStatus:!1},n.handleChange=function(e,t){var a=t.name,i=t.value;n.setState((0,r.default)({},a,i))},n.handleSubmit=function(){var e=n.props.dispatch,t=n.state.title,a=n.smde.value(),i=n.smde.markdown(a),r={title:t,content:a,htmlContent:i};n.setState({btnStatus:!0}),e({type:"posts/create",payload:(0,o.default)({},r),callback:function(e){1e4===e.status?l.default.success({message:e.info,duration:2,onClose:function(){n.setState({title:""}),n.smde.value(""),n.smde.clearAutosavedValue(),window.location.href="/block"}}):n.setState({btnStatus:!1})}})},n.smde=null,n}return(0,m.default)(t,e),(0,u.default)(t,[{key:"componentDidMount",value:function(){document.getElementById("markdownEditor").parentNode.addEventListener("click",function(e){return e.stopPropagation()}),this.smde=new h.default({toolbar:["bold","italic","heading","horizontal-rule","|","quote","code","image","link","table","preview","fullscreen","side-by-side",{name:"guide",action:function(e){window.open("http://www.nanoparticles.cn/post/0HWneKy1q4L8")},className:"fa fa-cog fa-spin",title:"\u7f16\u8f91\u5668\u4f7f\u7528\u6307\u5357"}],element:document.getElementById("markdownEditor").childElementCount,autofocus:!0,autosave:{enabled:!0,uniqueId:"postEditor",delay:1e3},initialValue:"",indentWithTabs:!1,placeholder:"## \u8f93\u5165\u5185\u5bb9...\u2728\ud83d\udc22\ud83d\ude80\u2728",renderingConfig:{singleLineBreaks:!1,codeSyntaxHighlighting:!0},insertTexts:{horizontalRule:["","\n\n-----\n\n"],image:["![](http://",")"],link:["[","](http://)"],table:["","\n\n| Column 1 | Column 2 | Column 3 |\n| -------- | -------- | -------- |\n| Text     | Text      | Text     |\n\n"]},previewRender:function(e){var t=(0,g.default)(e,{renderer:new g.default.Renderer,gfm:!0,pedantic:!1,sanitize:!1,tables:!0,breaks:!0,smartLists:!0,smartypants:!0,highlight:function(e,t){if(t&&v.default.getLanguage(t))try{return v.default.highlight(t,e).value}catch(e){}try{return e=v.default.highlightAuto(e).value,e}catch(e){}return""}});return t},spellChecker:!1,styleSelectedText:!1}),S.default.editors.codemirror4.attach(this.smde.codemirror,{uploadUrl:"/api/post/upload",progressText:"![\u6b63\u5728\u4e0a\u4f20...]()",urlText:"![]({filename})",errorText:"\u4e0a\u4f20\u6587\u4ef6\u5931\u8d25",jsonFieldName:"img",uploadFieldName:"img",extraParams:{asd:"asdas"},extraHeaders:{Key:"6c0d64c70a5df6bee51088964d7894e0",Accept:"application/vnd.YiDong.v2+json",AppSession:(0,C.getCookie)("yjyd_app_session")}})}},{key:"render",value:function(){var e=this.state,t=e.title,n=e.btnStatus;return f.default.createElement(p.Form,{size:"large",onSubmit:this.handleSubmit},f.default.createElement(p.Form.Input,{name:"title",fluid:!0,placeholder:"## \u8f93\u5165\u6807\u9898",onChange:this.handleChange,value:t}),f.default.createElement("div",{id:"editorContaienr"},f.default.createElement("textarea",{id:"markdownEditor",name:"content"})),f.default.createElement(p.Button,{color:"twitter",size:"small",loading:n,disabled:n,type:"submit"},"\u63d0\u4ea4"))}}]),t}(f.PureComponent),w=k))||w),x=E;t.default=x}}]);
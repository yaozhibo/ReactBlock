(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{"b3/Y":function(e,t,a){"use strict";var n=a("g09b"),l=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("/xke");var i=n(a("TeRw")),o=n(a("p0pE")),d=n(a("eHn4")),r=n(a("2Taf")),u=n(a("vZ4D")),s=n(a("l4Ni")),c=n(a("ujKo")),m=n(a("MhPg")),f=l(a("q1tI")),p=a("FvIY"),h=n(a("6/sb")),g=n(a("DlQD")),v=n(a("FIf5"));a("sRa1"),a("UN7h"),a("kSOh");var b,k,w,y=a("MuoO"),S=n(a("FC5H")),C=a("8+Sn"),E=(b=(0,y.connect)(function(e){var t=e.posts;return{posts:t}}),b((w=function(e){function t(e){var a;return(0,r.default)(this,t),a=(0,s.default)(this,(0,c.default)(t).call(this,e)),a.state={title:"",btnStatus:!1},a.handleChange=function(e,t){var n=t.name,l=t.value;a.setState((0,d.default)({},n,l))},a.handleSubmit=function(){var e=a.props.dispatch,t=a.state.title,n=a.smde.value(),l=a.smde.markdown(n),d={title:t,content:n,htmlContent:l};a.setState({btnStatus:!0}),e({type:"posts/create",payload:(0,o.default)({},d),callback:function(e){1e4===e.status?i.default.success({message:e.info,duration:2,onClose:function(){a.setState({title:""}),a.smde.value(""),a.smde.clearAutosavedValue(),window.location.href="/block"}}):a.setState({btnStatus:!1})}})},a.smde=null,a}return(0,m.default)(t,e),(0,u.default)(t,[{key:"componentDidMount",value:function(){document.getElementById("markdownEditor").parentNode.addEventListener("click",function(e){return e.stopPropagation()}),this.smde=new h.default({toolbar:["bold","italic","heading","|","quote","code","image","link","table","preview","fullscreen","side-by-side","guide"],element:document.getElementById("markdownEditor").childElementCount,autofocus:!0,autosave:{enabled:!0,uniqueId:"postEditor",delay:1e3},initialValue:"",indentWithTabs:!1,placeholder:"## \u8f93\u5165\u5185\u5bb9...\u2728\ud83d\udc22\ud83d\ude80\u2728",renderingConfig:{singleLineBreaks:!1,codeSyntaxHighlighting:!0},insertTexts:{horizontalRule:["","\n\n-----\n\n"],image:["![](http://",")"],link:["[","](http://)"],table:["","\n\n| Column 1 | Column 2 | Column 3 |\n| -------- | -------- | -------- |\n| Text     | Text      | Text     |\n\n"]},previewRender:function(e){var t=(0,g.default)(e,{renderer:new g.default.Renderer,gfm:!0,pedantic:!1,sanitize:!1,tables:!0,breaks:!0,smartLists:!0,smartypants:!0,highlight:function(e,t){if(t&&v.default.getLanguage(t))try{return v.default.highlight(t,e).value}catch(e){}try{return e=v.default.highlightAuto(e).value,e}catch(e){}return""}});return t},spellChecker:!1,styleSelectedText:!1}),S.default.editors.codemirror4.attach(this.smde.codemirror,{uploadUrl:"/api/post/upload",progressText:"![\u6b63\u5728\u4e0a\u4f20...]()",urlText:"![]({filename})",errorText:"\u4e0a\u4f20\u6587\u4ef6\u5931\u8d25",jsonFieldName:"img",uploadFieldName:"img",extraParams:{asd:"asdas"},extraHeaders:{Key:"6c0d64c70a5df6bee51088964d7894e0",Accept:"application/vnd.YiDong.v2+json",AppSession:(0,C.getCookie)("yjyd_app_session")}})}},{key:"render",value:function(){var e=this.state,t=e.title,a=e.btnStatus;return f.default.createElement(p.Form,{size:"large",onSubmit:this.handleSubmit},f.default.createElement(p.Form.Input,{name:"title",fluid:!0,placeholder:"## \u8f93\u5165\u6807\u9898",onChange:this.handleChange,value:t}),f.default.createElement("div",{id:"editorContaienr"},f.default.createElement("textarea",{id:"markdownEditor",name:"content"})),f.default.createElement(p.Button,{color:"twitter",size:"small",loading:a,disabled:a,type:"submit"},"\u63d0\u4ea4"))}}]),t}(f.PureComponent),k=w))||k),x=E;t.default=x}}]);
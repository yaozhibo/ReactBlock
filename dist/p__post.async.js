(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[17],{"7ea6":function(e,t,a){"use strict";var n=a("g09b"),l=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("cWXX");var o=n(a("/ezw"));a("/xke");var r=n(a("TeRw")),c=n(a("2Taf")),i=n(a("vZ4D")),u=n(a("l4Ni")),s=n(a("ujKo")),d=n(a("MhPg")),m=l(a("q1tI")),f=n(a("DlQD")),p=n(a("FIf5"));a("kSOh");var h=n(a("i8bK")),y=a("MuoO"),g=a("FvIY"),S=a("8+Sn"),v=n(a("q/M5")),E=n(a("yEr3"));a("Lzxq");var b,k,_,C=n(a("+rLt")),L=n(a("JeI0")),M=n(a("uwec")),T=(b=(0,y.connect)(function(e){var t=e.posts,a=e.comments;return{posts:t,comments:a}}),b((_=function(e){function t(){var e,a;(0,c.default)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return a=(0,u.default)(this,(e=(0,s.default)(t)).call.apply(e,[this].concat(l))),a.state={currUser:{username:""},editorState:E.default.createEditorState(null),outputHTML:"",subCommentBtnStatus:!1,isloading:!0,commentList:[],postDetail:{users:{},content:"",created_at:"",slug:"",title:""},isAuthor:!1},a.fetchComment=function(){var e=a.props,t=e.match,n=e.dispatch,l=t.params.slug,o=1;n({type:"comments/fetchCommentIndex",payload:{obj_id:l,obj_type:o},callback:function(e){1e4===e.status&&a.setState({commentList:e.data})}})},a.delCommentState=function(e){var t=a.state.commentList;t.splice(e,1),a.setState({commentList:t})},a.delReplyState=function(e,t){var n=a.state.commentList;n[e].has_replies.splice(t,1),a.setState({commentList:n})},a.handleCommentStateWithCreate=function(e){var t=a.state.commentList;t.unshift(e),a.setState({commentList:t})},a.handleReplyStateWithCreate=function(e,t){var n=a.state.commentList;n[t].has_replies.unshift(e),a.setState({commentList:n})},a.handleEditorChange=function(e){a.setState({editorState:e,outputHTML:e.toHTML()})},a.handleEditorSubmit=function(){var e=a.props,t=e.dispatch,n=e.match,l=n.params.slug,o=a.state.outputHTML,c=1;a.setState({subCommentBtnStatus:!0}),t({type:"comments/create",payload:{obj_id:l,content:o,obj_type:c},callback:function(e){1e4===e.status&&(r.default.success({message:"\u63d0\u4ea4\u6210\u529f"}),a.setState({outputHTML:null,editorState:E.default.createEditorState(null)}),a.handleCommentStateWithCreate(e.data)),a.setState({subCommentBtnStatus:!1})}})},a.handlePostLike=function(){var e=a.props,t=e.dispatch,n=e.match,l=n.params.slug;t({type:"likes/create",payload:{obj_id:l,obj_type:1},callback:function(e){if(1e4===e.status){r.default.success({message:e.info});var t=a.state.postDetail;t.appreciate+=1,t.users.appreciate+=1,a.setState({postDetail:t})}}})},a}return(0,d.default)(t,e),(0,i.default)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props,a=t.match,n=t.dispatch,l=a.params.slug;if((0,S.checkCookie)("user")){var o=JSON.parse((0,S.getCookie)("user"));this.setState({currUser:o})}n({type:"posts/fetch",payload:{slug:l},callback:function(t){if(1e4===t.status){e.setState({postDetail:t.data,isloading:!1});var a=e.state,n=a.currUser,l=a.postDetail;document.title="".concat(l.title," --\u6cb8\u70b9"),n.username===l.users.username&&e.setState({isAuthor:!0})}}})}},{key:"render",value:function(){var e=this,t=this.props.match,a=t.params.slug,n=this.state,l=n.isAuthor,r=n.editorState,c=n.outputHTML,i=n.isloading,u=n.commentList,s=n.postDetail,d=n.currUser,y=["emoji","code","link","text-color"];return s?m.default.createElement(o.default,{loading:i},m.default.createElement(g.Segment,null,l?m.default.createElement(g.Label,{as:"a",color:"orange",ribbon:"right",href:"/post/".concat(a,"/edit")},m.default.createElement(g.Icon,{name:"edit"}),"\u7f16\u8f91"):"",m.default.createElement("h1",null,s.title),m.default.createElement(g.Feed,null,m.default.createElement(g.Feed.Event,null,m.default.createElement(g.Feed.Label,null,m.default.createElement(g.Image,{src:s.users.avatar,alt:"\u5934\u50cf",avatar:!0})),m.default.createElement(g.Feed.Content,null,m.default.createElement(g.Feed.Summary,null,m.default.createElement(g.Feed.User,{href:"/user/".concat(s.users.username)},s.users.nickname),m.default.createElement(g.Feed.Date,null,s.users.descr)),m.default.createElement(g.Feed.Meta,null,m.default.createElement(g.Feed.Like,null,m.default.createElement(g.Icon,{name:"heartbeat"}),s.users.appreciate))))),m.default.createElement(M.default,null,m.default.createElement("div",{className:h.default.md_post,dangerouslySetInnerHTML:{__html:(0,f.default)(s.content,{renderer:new f.default.Renderer,gfm:!0,pedantic:!1,sanitize:!1,tables:!0,breaks:!0,smartLists:!0,smartypants:!0,highlight:function(e,t){if(t&&p.default.getLanguage(t))try{return p.default.highlight(t,e).value}catch(e){console.warn(e)}try{return e=p.default.highlightAuto(e).value,e}catch(e){console.warn(e)}return""}})}})),m.default.createElement(g.Grid,{textAlign:"center",style:{margin:"20px 0"}},m.default.createElement(g.Button,{as:"div",labelPosition:"right",size:"massive",onClick:this.handlePostLike},m.default.createElement(g.Button,{color:"red"},m.default.createElement(g.Icon,{name:"heart"}),"\u70b9\u8d5e"),m.default.createElement(g.Label,{as:"a",basic:!0,color:"red",pointing:"left"},s.appreciate)))),m.default.createElement(g.Segment,null,m.default.createElement(g.Form,{size:"small",onSubmit:this.handleEditorSubmit},m.default.createElement(E.default,{value:r,onChange:this.handleEditorChange,onSave:this.handleEditorSubmit,controls:y,contentStyle:{height:"150px"}}),m.default.createElement(g.Button,{content:"\u63d0\u4ea4",labelPosition:"left",icon:"edit",size:"mini",loading:this.state.subCommentBtnStatus,disabled:this.state.subCommentBtnStatus})),m.default.createElement("div",{dangerouslySetInnerHTML:{__html:c}}),m.default.createElement(L.default,{onContentVisible:function(){e.fetchComment()}},m.default.createElement(v.default,{dataSorce:u,postslug:a,delCommentState:function(t){return e.delCommentState(t)},delReplyState:function(t,a){return e.delReplyState(t,a)},createReplyState:function(t,a){return e.handleReplyStateWithCreate(t,a)},currUser:d})))):(0,C.default)({type:"error",title:"\u65e0\u6b64\u5185\u5bb9",msg:"\u8bf7\u786e\u8ba4\u8f93\u5165..."})}}]),t}(m.Component),k=_))||k),j=T;t.default=j},"q/M5":function(e,t,a){"use strict";var n=a("g09b"),l=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("Mwp2");var o=n(a("VXEj"));a("/xke");var r=n(a("TeRw")),c=n(a("2Taf")),i=n(a("vZ4D")),u=n(a("l4Ni")),s=n(a("ujKo")),d=n(a("MhPg"));a("2qtc");var m,f,p,h=n(a("kLXV")),y=l(a("q1tI")),g=a("FvIY"),S=n(a("szOG")),v=a("MuoO"),E=h.default.confirm,b=(m=(0,v.connect)(function(e){var t=e.comments,a=e.replies;return{comments:t,replies:a}}),m((p=function(e){function t(){var e,a;(0,c.default)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return a=(0,u.default)(this,(e=(0,s.default)(t)).call.apply(e,[this].concat(l))),a.state={visibleObj:null,replyObj:{to_uid:null,comment_id:null,reply_id:null,reply_type:null,to_nickname:null,currUser:{username:null}}},a.toggleVisibility=function(e){a.setState({visibleObj:e.target.name,replyObj:{to_uid:e.target.dataset.tousername,comment_id:e.target.dataset.commentid,reply_id:e.target.dataset.replyid,reply_type:e.target.dataset.replytype,to_nickname:e.target.dataset.tonickname}})},a.handleReplyStateWithCreateForPost=function(e,t){var n=a.props.createReplyState;n(e,t)},a}return(0,d.default)(t,e),(0,i.default)(t,[{key:"showDelCommentConfirm",value:function(e,t){var a=this.props,n=a.dispatch,l=a.delCommentState;E({title:"\ud83d\ude10\u60a8\u786e\u8ba4\u5220\u9664\u8fd9\u6761\u8bc4\u8bba\u4e48\uff1f",okText:"\u786e\u5b9a",okType:"danger",cancelText:"\u7b97\u4e86",onOk:function(){n({type:"comments/delete",payload:{comment_id:e},callback:function(e){1e4==e.status&&(r.default.success({message:"\u5220\u9664\u6210\u529f"}),l(t))}})}})}},{key:"showDelReplyConfirm",value:function(e,t,a){var n=this.props,l=n.dispatch,o=n.delReplyState;E({title:"\ud83d\ude10\u60a8\u786e\u8ba4\u5220\u9664\u8fd9\u6761\u56de\u590d\u4e48\uff1f",okText:"\u786e\u5b9a",okType:"danger",cancelText:"\u7b97\u4e86",onOk:function(){l({type:"replies/delete",payload:{reply_id:e},callback:function(e){1e4===e.status&&(r.default.success({message:"\u5220\u9664\u6210\u529f"}),o(t,a))}})}})}},{key:"render",value:function(){var e=this,t=this.props.dataSorce,a=this.props,n=a.postslug,l=a.currUser,r=this.state,c=r.visibleObj,i=r.replyObj;return y.default.createElement(o.default,{className:"comment-list",header:"".concat(t.length," \u8bc4\u8bba"),pagination:{onChange:function(e){},pageSize:10},itemLayout:"horizontal",dataSource:t,renderItem:function(t,a){return y.default.createElement(g.Comment.Group,{key:"commentgr_".concat(t.id)},y.default.createElement(g.Comment,{key:"comment_".concat(t.id)},y.default.createElement(g.Comment.Avatar,{as:"a",src:t.users.avatar,key:"commentavat_".concat(t.id)}),y.default.createElement(g.Comment.Content,{key:"commentcont_".concat(t.id)},y.default.createElement(g.Comment.Author,{as:"a",key:"commentauth_".concat(t.id)},t.users.nickname),y.default.createElement(g.Comment.Metadata,{key:"commentmeta_".concat(t.id)},y.default.createElement("span",null,t.created_at)),y.default.createElement(g.Comment.Text,{key:"commenttext_".concat(t.id)},y.default.createElement("div",{dangerouslySetInnerHTML:{__html:t.content}})),y.default.createElement(g.Comment.Actions,{key:"commentaction_".concat(t.id)},y.default.createElement("a",{onClick:e.toggleVisibility,name:"reply_area_".concat(t.id),"data-tousername":t.users.username,"data-commentid":t.id,"data-replyid":t.id,"data-replytype":1,"data-tonickname":t.users.nickname},"\u56de\u590d"),l.username===t.users.username?y.default.createElement("a",{onClick:function(){e.showDelCommentConfirm(t.id,a)}},"\u5220\u9664"):"")),y.default.createElement(g.Comment.Group,{key:"commentchildgr_".concat(t.id)},t.has_replies!==[]?t.has_replies.map(function(t,n){return y.default.createElement(g.Comment,{key:"commentchildgrcomme_".concat(t.id)},y.default.createElement(g.Comment.Avatar,{as:"a",src:t.users.avatar,key:"commentchildgravat_".concat(t.id)}),y.default.createElement(g.Comment.Content,{key:"commentchildgrcont_".concat(t.id)},y.default.createElement(g.Comment.Author,{as:"a",key:"commentchildauth_".concat(t.id)},t.users.nickname),y.default.createElement(g.Comment.Metadata,{key:"commentchildmeta_".concat(t.id)},y.default.createElement("span",null,t.created_at)),y.default.createElement(g.Comment.Text,{key:"commentchildgrtext_".concat(t.id)},y.default.createElement("div",{dangerouslySetInnerHTML:{__html:t.content}})),y.default.createElement(g.Comment.Actions,{key:"replychildaction_".concat(t.id)},y.default.createElement("a",{onClick:e.toggleVisibility,name:"reply_area_".concat(t.comment_id),"data-tousername":t.users.username,"data-commentid":t.comment_id,"data-replyid":t.id,"data-replytype":2,"data-tonickname":t.users.nickname},"\u56de\u590d"),l.username===t.users.username?y.default.createElement("a",{onClick:function(){e.showDelReplyConfirm(t.id,a,n)}},"\u5220\u9664"):"")))}):"")),c=="reply_area_".concat(t.id)?y.default.createElement(S.default,{visibleObj:c,name:"reply_area_".concat(t.id),replyObj:i,postslug:n,commentKey:a,handleReplyStateWithCreate:function(t,a){return e.handleReplyStateWithCreateForPost(t,a)}}):"")}})}}]),t}(y.Component),f=p))||f),k=b;t.default=k},szOG:function(e,t,a){"use strict";var n=a("g09b"),l=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("/xke");var o,r,c,i=n(a("TeRw")),u=n(a("p0pE")),s=n(a("2Taf")),d=n(a("vZ4D")),m=n(a("l4Ni")),f=n(a("ujKo")),p=n(a("MhPg")),h=l(a("q1tI")),y=a("FvIY"),g=n(a("yEr3")),S=a("MuoO"),v=(o=(0,S.connect)(function(e){var t=e.replies,a=e.comments;return{replies:t,comments:a}}),o((c=function(e){function t(e){var a;return(0,s.default)(this,t),a=(0,m.default)(this,(0,f.default)(t).call(this,e)),a.scrollToAnchor=function(e){if(e){var t=document.getElementById(e);t&&t.scrollIntoView()}},a.handleEditorChange=function(e){a.setState({editorState:e,outputHTML:e.toHTML()})},a.handleEditorSubmit=function(){var e=a.props,t=e.dispatch,n=e.replyObj,l=e.commentKey,o=e.handleReplyStateWithCreate,r=a.state.outputHTML;a.setState({subReplyBtnStatus:!0}),t({type:"replies/create",payload:(0,u.default)({content:r},n),callback:function(e){1e4===e.status&&(i.default.success({message:"\u63d0\u4ea4\u6210\u529f"}),a.setState({outputHTML:null,editorState:g.default.createEditorState(null)}),o(e.data,l)),a.setState({subReplyBtnStatus:!1})}})},a.state={replyObj:e.replyObj,editorState:g.default.createEditorState("<a>@".concat(e.replyObj.to_nickname," </a>")),subReplyBtnStatus:!1,outputHTML:""},a}return(0,p.default)(t,e),(0,d.default)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({editorState:g.default.createEditorState("<a>@".concat(e.replyObj.to_nickname," </a>"))})}},{key:"componentDidMount",value:function(){this.scrollToAnchor("ReplyAnchor")}},{key:"render",value:function(){var e=this.state.editorState,t=["emoji","code","link","text-color"];return h.default.createElement("div",{id:"ReplyAnchor"},h.default.createElement(y.Segment,null,h.default.createElement(y.Form,{size:"small",onSubmit:this.handleEditorSubmit},h.default.createElement(g.default,{value:e,onChange:this.handleEditorChange,onSave:this.handleEditorSubmit,controls:t,contentStyle:{height:"150px"}}),h.default.createElement(y.Button,{content:"\u63d0\u4ea4",labelPosition:"left",icon:"edit",size:"mini",loading:this.state.subReplyBtnStatus,disabled:this.state.subReplyBtnStatus}))))}}]),t}(h.Component),r=c))||r),E=v;t.default=E}}]);
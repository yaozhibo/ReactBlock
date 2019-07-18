import React, { Component } from 'react';
import marked from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark-reasonable.css';
import style from './post.css';
import { connect } from 'dva';
import { notification, Skeleton } from 'antd';
import { Feed, Icon, Label, Form, Button, Segment, Grid, Image } from 'semantic-ui-react';
import { getCookie, checkCookie } from '@/utils/cookie';
import CommentList from './commentList';
import BraftEditor from 'braft-editor';
// 引入编辑器样式
import 'braft-editor/dist/index.css';
import ResultDiv from '@/components/ResultDiv';
import LazyLoad from 'react-lazy-load';
import ZoomPic from '@/components/ZoomPic';

@connect(({ posts, comments }) => ({
  posts,
  comments,
}))
class Post extends Component {
  state = {
    currUser: {
      username: '',
    },
    // 创建一个空的 editorState 作为 BraftEditor 初始值
    editorState: BraftEditor.createEditorState(null),
    outputHTML: '',
    subCommentBtnStatus: false,
    isloading: true,
    commentList: [],
    postDetail: {
      users: {},
      content: '',
      created_at: '',
      slug: '',
      title: '',
    },
    isAuthor: false,
    loadingComment: false,
  };

  componentDidMount() {
    const { match, dispatch } = this.props;
    const slug = match.params.slug;

    if (checkCookie('user')) {
      const user = JSON.parse(getCookie('user'));
      this.setState({
        currUser: user,
      });
    }
    dispatch({
      type: 'posts/fetch',
      payload: { slug },
      callback: res => {
        if (res.status === 10000) {
          this.setState({
            postDetail: res.data,
            isloading: false,
          });
          const { currUser, postDetail } = this.state;
          document.title = `${postDetail.title} --粒子空间`;
          if (currUser.username === postDetail.users.username) {
            this.setState({
              isAuthor: true,
            });
          }
        }
      },
    });
  }

  fetchComment = () => {
    const { match, dispatch } = this.props;
    const slug = match.params.slug;
    const objType = 1; // 1 代表 post
    this.setState({
      loadingComment: true,
    });

    dispatch({
      type: 'comments/fetchCommentIndex',
      payload: {
        obj_id: slug,
        obj_type: objType,
      },
      callback: res => {
        if (res.status === 10000) {
          this.setState({
            commentList: res.data,
          });
        }
        this.setState({
          loadingComment: false,
        });
      },
    });
  };

  // 处理删除评论
  delCommentState = key => {
    const { commentList } = this.state;
    commentList.splice(key, 1);
    this.setState({
      commentList,
    });
  };

  //处理删除回复
  delReplyState = (comment_key, reply_key) => {
    const { commentList } = this.state;
    commentList[comment_key].has_replies.splice(reply_key, 1);
    this.setState({
      commentList,
    });
  };

  //处理创建评论
  handleCommentStateWithCreate = item => {
    const { commentList } = this.state;
    commentList.unshift(item);
    this.setState({
      commentList,
    });
  };

  //处理创建恢复
  handleReplyStateWithCreate = (item, commentKey) => {
    const { commentList } = this.state;
    commentList[commentKey].has_replies.unshift(item);
    this.setState({
      commentList,
    });
  };

  // 评论框改变事件
  handleEditorChange = editorState => {
    this.setState({
      editorState: editorState,
      outputHTML: editorState.toHTML(),
    });
  };

  // 评论框提交事件
  handleEditorSubmit = () => {
    const { dispatch, match } = this.props;
    const { slug } = match.params;
    const content = this.state.outputHTML;
    const objType = 1; // 评论数据表中 1 代表 post

    this.setState({
      subCommentBtnStatus: true,
    });
    dispatch({
      type: 'comments/create',
      payload: {
        obj_id: slug,
        content,
        obj_type: objType,
      },
      callback: response => {
        if (response.status === 10000) {
          notification.success({
            message: '提交成功',
          });
          this.setState({
            outputHTML: null,
            editorState: BraftEditor.createEditorState(null),
          });
          this.handleCommentStateWithCreate(response.data);
        }
        this.setState({
          subCommentBtnStatus: false,
        });
      },
    });
  };

  handlePostLike = () => {
    const { dispatch, match } = this.props;
    const { slug } = match.params;

    dispatch({
      type: 'likes/create',
      payload: { obj_id: slug, obj_type: 1 },
      callback: res => {
        if (res.status === 10000) {
          notification.success({
            message: res.info,
          });
          const { postDetail } = this.state;
          postDetail.appreciate += 1;
          postDetail.users.appreciate += 1;
          this.setState({
            postDetail,
          });
        }
      },
    });
  };

  render() {
    const { match } = this.props;
    const slug = match.params.slug;
    const {
      isAuthor,
      editorState,
      outputHTML,
      isloading,
      commentList,
      postDetail,
      currUser,
      loadingComment,
    } = this.state;
    const BraftControls = ['emoji', 'code', 'link', 'text-color'];

    if (!postDetail) {
      return ResultDiv({ type: 'error', title: '无此内容', msg: '请确认输入...' });
    }

    return (
      <Skeleton loading={isloading}>
        <Segment>
          {isAuthor ? (
            <Label as="a" color="orange" ribbon="right" href={`/post/${slug}/edit`}>
              <Icon name="edit" />
              编辑
            </Label>
          ) : (
            ''
          )}

          <h1>{postDetail.title}</h1>
          <Feed>
            <Feed.Event>
              <Feed.Label>
                <Image src={postDetail.users.avatar} alt="头像" avatar />
              </Feed.Label>
              <Feed.Content>
                <Feed.Summary>
                  <Feed.User href={`/user/${postDetail.users.username}`}>
                    {postDetail.users.nickname}
                  </Feed.User>
                  <Feed.Date>{postDetail.users.descr}</Feed.Date>
                </Feed.Summary>
                <Feed.Meta>
                  <Feed.Like>
                    <Icon name="heartbeat" />
                    {postDetail.users.appreciate}
                  </Feed.Like>
                </Feed.Meta>
              </Feed.Content>
            </Feed.Event>
          </Feed>
          <ZoomPic>
            <div
              className={style.md_post}
              dangerouslySetInnerHTML={{
                __html: marked(postDetail.content, {
                  renderer: new marked.Renderer(),
                  gfm: true,
                  pedantic: false,
                  sanitize: false,
                  tables: true,
                  breaks: true,
                  smartLists: true,
                  smartypants: true,
                  highlight: function(str, lang) {
                    if (lang && hljs.getLanguage(lang)) {
                      try {
                        return hljs.highlight(lang, str).value;
                      } catch (err) {
                        console.warn(err);
                      }
                    }
                    try {
                      str = hljs.highlightAuto(str).value;
                      return str;
                    } catch (err) {
                      console.warn(err);
                    }
                    return ''; // use external default escaping
                  },
                }),
              }}
            />
          </ZoomPic>
          <Grid textAlign="center" style={{ margin: '20px 0' }}>
            <Button as="div" labelPosition="right" size="massive" onClick={this.handlePostLike}>
              <Button color="red">
                <Icon name="heart" />
                点赞
              </Button>
              <Label as="a" basic color="red" pointing="left">
                {postDetail.appreciate}
              </Label>
            </Button>
          </Grid>
        </Segment>

        <Segment>
          <Form size="small" onSubmit={this.handleEditorSubmit}>
            <BraftEditor
              value={editorState}
              onChange={this.handleEditorChange}
              onSave={this.handleEditorSubmit}
              controls={BraftControls}
              contentStyle={{ height: '150px' }}
            />

            <Button
              content="提交"
              labelPosition="left"
              icon="edit"
              size="mini"
              loading={this.state.subCommentBtnStatus}
              disabled={this.state.subCommentBtnStatus}
            />
          </Form>
          <div
            dangerouslySetInnerHTML={{
              __html: outputHTML,
            }}
          />
          <LazyLoad
            onContentVisible={() => {
              this.fetchComment();
            }}
          >
            <CommentList
              loadingComment={loadingComment}
              dataSorce={commentList}
              postslug={slug}
              delCommentState={key => this.delCommentState(key)}
              delReplyState={(comment_key, reply_key) => this.delReplyState(comment_key, reply_key)}
              createReplyState={(item, commentKey) =>
                this.handleReplyStateWithCreate(item, commentKey)
              }
              currUser={currUser}
            />
          </LazyLoad>
        </Segment>
      </Skeleton>
    );
  }
}
export default Post;

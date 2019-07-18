import React, { Component } from 'react';
import { Comment } from 'semantic-ui-react';
import { List, Modal, notification } from 'antd';
import ReplyEditor from './ReplyEditor';
import { connect } from 'dva';

const { confirm } = Modal;

@connect(({ comments, replies }) => ({
  comments,
  replies,
}))
class CommentList extends Component {
  state = {
    visibleObj: null,
    replyObj: {
      to_uid: null,
      comment_id: null,
      reply_id: null,
      reply_type: null,
      to_nickname: null,
      currUser: {
        username: null,
      },
    },
  };

  toggleVisibility = e => {
    this.setState({
      visibleObj: e.target.name,
      replyObj: {
        to_uid: e.target.dataset.tousername,
        comment_id: e.target.dataset.commentid,
        reply_id: e.target.dataset.replyid,
        reply_type: e.target.dataset.replytype,
        to_nickname: e.target.dataset.tonickname,
      },
    });
  };

  showDelCommentConfirm(commentId, k) {
    const { dispatch, delCommentState } = this.props;
    confirm({
      title: '😐您确认删除这条评论么？',
      okText: '确定',
      okType: 'danger',
      cancelText: '算了',
      onOk() {
        dispatch({
          type: 'comments/delete',
          payload: {
            comment_id: commentId,
          },
          callback: res => {
            if (res.status == 10000) {
              notification.success({
                message: '删除成功',
              });
              delCommentState(k);
            }
          },
        });
      },
    });
  }

  showDelReplyConfirm(replyId, comment_k, reply_k) {
    const { dispatch, delReplyState } = this.props;
    confirm({
      title: '😐您确认删除这条回复么？',
      okText: '确定',
      okType: 'danger',
      cancelText: '算了',
      onOk() {
        dispatch({
          type: 'replies/delete',
          payload: {
            reply_id: replyId,
          },
          callback: res => {
            if (res.status === 10000) {
              notification.success({
                message: '删除成功',
              });
              delReplyState(comment_k, reply_k);
            }
          },
        });
      },
    });
  }

  handleReplyStateWithCreateForPost = (item, commentKey) => {
    const { createReplyState } = this.props;
    createReplyState(item, commentKey);
  };

  render() {
    const comments = this.props.dataSorce;
    const { postslug, currUser, loadingComment } = this.props;
    const { visibleObj, replyObj } = this.state;

    return (
      <List
        loading={loadingComment}
        className="comment-list"
        header={`${comments.length} 评论`}
        pagination={{
          onChange: page => {
            //
          },
          pageSize: 10,
        }}
        itemLayout="horizontal"
        dataSource={comments}
        renderItem={(item, c_k) => (
          <Comment.Group key={`commentgr_${item.id}`}>
            <Comment key={`comment_${item.id}`}>
              <Comment.Avatar as="a" src={item.users.avatar} key={`commentavat_${item.id}`} />
              <Comment.Content key={`commentcont_${item.id}`}>
                <Comment.Author as="a" key={`commentauth_${item.id}`}>
                  {item.users.nickname}
                </Comment.Author>
                <Comment.Metadata key={`commentmeta_${item.id}`}>
                  <span>{item.created_at}</span>
                </Comment.Metadata>
                <Comment.Text key={`commenttext_${item.id}`}>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: item.content,
                    }}
                  />
                </Comment.Text>
                <Comment.Actions key={`commentaction_${item.id}`}>
                  <a
                    onClick={this.toggleVisibility}
                    name={`reply_area_${item.id}`}
                    data-tousername={item.users.username}
                    data-commentid={item.id}
                    data-replyid={item.id}
                    data-replytype={1}
                    data-tonickname={item.users.nickname}
                  >
                    回复
                  </a>
                  {currUser.username === item.users.username ? (
                    <a
                      onClick={() => {
                        this.showDelCommentConfirm(item.id, c_k);
                      }}
                    >
                      删除
                    </a>
                  ) : (
                    ''
                  )}
                </Comment.Actions>
              </Comment.Content>
              <Comment.Group key={`commentchildgr_${item.id}`}>
                {item.has_replies !== []
                  ? item.has_replies.map((item, r_k) => {
                      return (
                        <Comment key={`commentchildgrcomme_${item.id}`}>
                          <Comment.Avatar
                            as="a"
                            src={item.users.avatar}
                            key={`commentchildgravat_${item.id}`}
                          />
                          <Comment.Content key={`commentchildgrcont_${item.id}`}>
                            <Comment.Author as="a" key={`commentchildauth_${item.id}`}>
                              {item.users.nickname}
                            </Comment.Author>
                            <Comment.Metadata key={`commentchildmeta_${item.id}`}>
                              <span>{item.created_at}</span>
                            </Comment.Metadata>
                            <Comment.Text key={`commentchildgrtext_${item.id}`}>
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: item.content,
                                }}
                              />
                            </Comment.Text>
                            <Comment.Actions key={`replychildaction_${item.id}`}>
                              <a
                                onClick={this.toggleVisibility}
                                name={`reply_area_${item.comment_id}`}
                                data-tousername={item.users.username}
                                data-commentid={item.comment_id}
                                data-replyid={item.id}
                                data-replytype={2}
                                data-tonickname={item.users.nickname}
                              >
                                回复
                              </a>
                              {currUser.username === item.users.username ? (
                                <a
                                  onClick={() => {
                                    this.showDelReplyConfirm(item.id, c_k, r_k);
                                  }}
                                >
                                  删除
                                </a>
                              ) : (
                                ''
                              )}
                            </Comment.Actions>
                          </Comment.Content>
                        </Comment>
                      );
                    })
                  : ''}
              </Comment.Group>
            </Comment>
            {visibleObj == `reply_area_${item.id}` ? (
              <ReplyEditor
                visibleObj={visibleObj}
                name={`reply_area_${item.id}`}
                replyObj={replyObj}
                postslug={postslug}
                commentKey={c_k}
                handleReplyStateWithCreate={(item, commentKey) =>
                  this.handleReplyStateWithCreateForPost(item, commentKey)
                }
              />
            ) : (
              ''
            )}
          </Comment.Group>
        )}
      />
    );
  }
}

export default CommentList;

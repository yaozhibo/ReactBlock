import React, { Component } from 'react';
import { List, Icon, notification, Modal } from 'antd';
import Link from 'umi/link';
import { connect } from 'dva';
import { Placeholder, Image } from 'semantic-ui-react';
import LazyLoad from 'react-lazy-load';

const { confirm } = Modal;

@connect(({ personPost }) => ({
  personPost,
}))
class PersonLikePost extends Component {
  state = {
    postList: [],
    loading: true,
  };
  componentDidMount() {
    const { dispatch, username } = this.props;
    dispatch({
      type: 'personPost/fetchPersonLikeIndex',
      payload: { username },
      callback: response => {
        if (response.data.status !== 10000) {
          return Error(404);
        }
        this.setState({
          postList: response.data.data,
          loading: false,
        });
      },
    });
  }

  handleCancelLike = (likeKey, likeId) => {
    const { dispatch } = this.props;
    const that = this;
    confirm({
      title: '😐您确认取消喜欢这篇文章么？',
      okText: '确定',
      okType: 'danger',
      cancelText: '算了',
      onOk() {
        dispatch({
          type: 'personPost/cancelLikePost',
          payload: {
            like_id: likeId,
            obj_type: 1,
          },
          callback: res => {
            console.log(res);
            if (res.status === 10000) {
              notification.success({
                message: res.info,
              });
              const { postList } = that.state;
              postList.splice(likeKey, 1);
              that.setState({
                postList,
              });
            }
          },
        });
      },
    });
  };

  render() {
    const { postList, loading } = this.state;
    const IconText = ({ type, text }) => (
      <span>
        <Icon type={type} style={{ marginRight: 8 }} />
        {text}
      </span>
    );
    return loading == true ? (
      <Placeholder fluid>
        <Placeholder.Header image>
          <Placeholder.Line />
          <Placeholder.Line />
        </Placeholder.Header>
        <Placeholder.Paragraph>
          <Placeholder.Line />
          <Placeholder.Line />
          <Placeholder.Line />
        </Placeholder.Paragraph>
      </Placeholder>
    ) : (
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: page => {
            //
          },
          pageSize: 10,
        }}
        dataSource={postList}
        renderItem={(item, likeKey) => (
          <List.Item
            key={item.post.title}
            actions={[
              <IconText type="eye-o" text={item.post.eyes} />,
              <IconText type="like-o" text={item.post.appreciate} />,
              <IconText type="message" text={item.post.comments} />,
              <a
                onClick={() => {
                  this.handleCancelLike(likeKey, item.id);
                }}
              >
                <Icon type="eye-invisible" />
                取消喜欢
              </a>,
            ]}
            extra={
              <LazyLoad width={150}>
                <Image
                  style={{ width: '150px', height: '150px' }}
                  alt="logo"
                  src={
                    item.cover == null
                      ? 'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png'
                      : item.cover
                  }
                  href={`/post/${item.slug}`}
                />
              </LazyLoad>
            }
          >
            <List.Item.Meta
              title={<Link to={`/post/${item.post.slug}`}>{item.post.title}</Link>}
              description={
                <div>
                  <p>{item.post.descr}</p>
                </div>
              }
            />
          </List.Item>
        )}
      />
    );
  }
}
export default PersonLikePost;

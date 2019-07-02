import React, { Component } from 'react';
import { connect } from 'dva';
import { List, Avatar, Icon, Skeleton } from 'antd';
import { Image } from 'semantic-ui-react';
import Link from 'umi/link';
import LazyLoad from 'react-lazy-load';

@connect(({ posts }) => ({
  posts,
}))
class Block extends Component {
  state = {
    loading: true,
  };

  componentDidMount() {
    const { dispatch } = this.props;

    dispatch({
      type: 'posts/fetchList',
      payload: null,
      callback: () => {
        this.setState({
          loading: false,
        });
      },
    });
  }
  render() {
    const IconText = ({ type, text }) => (
      <span>
        <Icon type={type} style={{ marginRight: 8 }} />
        {text}
      </span>
    );
    let {
      posts: { postList },
    } = this.props;

    const { loading } = this.state;

    return (
      <Skeleton loading={loading} active>
        <img
          src={require('@/assets/image/1e0ac634b426e61cc33fcc8fba5d185.png')}
          alt="冥王星"
          style={{ width: '100%' }}
        />
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
          renderItem={item => (
            <List.Item
              key={item.title}
              actions={[
                <IconText type="eye-o" text={item.eyes} />,
                <IconText type="like-o" text={item.appreciate} />,
                <IconText type="message" text={item.comments} />,
              ]}
              extra={
                <LazyLoad width={150}>
                  <Image
                    width={150}
                    style={{ maxHeight: '150px' }}
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
                avatar={
                  <a href={`/user/${item.users.username}`}>
                    <Avatar src={item.users.avatar} />
                  </a>
                }
                title={<Link to={`/post/${item.slug}`}>{item.title}</Link>}
                description={
                  <div>
                    <p>{item.descr}</p>
                  </div>
                }
              />
            </List.Item>
          )}
        />
      </Skeleton>
    );
  }
}
export default Block;

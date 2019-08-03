import React, { PureComponent } from 'react';

import { List, Avatar, Button, Skeleton } from 'antd';
import { setCookie, getCookie } from '@/utils/cookie';

import { connect } from 'dva';
const count = 10;
@connect(({ messages }) => ({
  messages,
}))
class Message extends PureComponent {
  state = {
    initLoading: true,
    loading: false,
    data: [],
    list: [],
    pagination: { count: 0, current: 0, pagiSize: 0, total: 0 },
  };

  componentDidMount() {
    this.getData({
      callback: res => {
        if (res.status === 10000) {
          this.setState({
            initLoading: false,
            data: res.data.list,
            list: res.data.list,
            pagination: { ...res.data.pagination },
          });
          const currUser = JSON.parse(getCookie('user'));
          currUser.notifications_count = 0;
          setCookie('user', JSON.stringify(currUser), 365);
        }
      },
      payload: {
        pageSize: count,
      },
    });
  }

  getData = ({ callback, payload }) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'messages/fetch',
      payload,
      callback,
    });
  };

  onLoadMore = () => {
    this.setState({
      loading: true,
      list: this.state.data.concat(
        [...new Array(count)].map(() => ({ loading: true, name: {}, from_user: {} }))
      ),
    });
    this.getData({
      callback: res => {
        const data = this.state.data.concat(res.data.list);
        this.setState(
          {
            data,
            list: data,
            loading: false,
            pagination: { ...res.data.pagination },
          },
          () => {
            // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
            // In real scene, you can using public method of react-virtualized:
            // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
            window.dispatchEvent(new Event('resize'));
          }
        );
      },
      payload: {
        pageSize: count,
        page: this.state.pagination.current + 1,
      },
    });
  };

  render() {
    const { initLoading, loading, list, pagination } = this.state;
    const loadMore =
      !initLoading && !loading ? (
        <div
          style={{
            textAlign: 'center',
            marginTop: 12,
            height: 32,
            lineHeight: '32px',
          }}
        >
          {pagination.current < pagination.total / pagination.pageSize ? (
            <Button onClick={this.onLoadMore}>加载更多</Button>
          ) : (
            ''
          )}
        </div>
      ) : null;

    return (
      <List
        className="demo-loadmore-list"
        loading={initLoading}
        itemLayout="horizontal"
        loadMore={loadMore}
        dataSource={list}
        locale={{ emptyText: '没有消息...' }}
        renderItem={item => {
          if (item.type === 1) {
            var itemTitle = (
              <span>
                {item.created_at}{' '}
                <a href={`/user/${item.from_user.username}`}>{item.from_user.nickname}</a>{' '}
                评论了您的 <a href={item.from_url}>{item.from_name}</a>
              </span>
            );
            var itemDescription = item.origin ? (
              <div
                style={{
                  background: 'rgba(0, 0, 0, 0.05)',
                  borderRadius: '4px',
                  marginBottom: '20px',
                  padding: '30px 50px',
                  margin: '20px 0',
                }}
                dangerouslySetInnerHTML={{
                  __html: item.origin.content,
                }}
              />
            ) : (
              <p>该条消息已经被删除</p>
            );
          } else if (item.type === 2) {
            var itemTitle = (
              <span>
                {item.created_at}{' '}
                <a href={`/user/${item.from_user.username}`}>{item.from_user.nickname}</a>{' '}
                回复了您的留言 ——详情请查看<a href={item.from_url}>{item.from_name}</a>{' '}
              </span>
            );
            var itemDescription = item.origin ? (
              <div
                style={{
                  background: 'rgba(0, 0, 0, 0.05)',
                  borderRadius: '4px',
                  marginBottom: '20px',
                  padding: '30px 50px',
                  margin: '20px 0',
                }}
                dangerouslySetInnerHTML={{
                  __html: item.origin.content,
                }}
              />
            ) : (
              <p>该条消息已经被删除</p>
            );
          } else if (item.type === 3) {
            var itemTitle = (
              <span>
                {item.created_at}{' '}
                <a href={`/user/${item.from_user.username}`}>{item.from_user.nickname}</a> 赞了您的{' '}
                <a href={item.from_url}>{item.from_name}</a>
              </span>
            );
            var itemDescription = '';
          }

          return (
            <List.Item>
              <Skeleton avatar title={false} loading={item.loading} active>
                <List.Item.Meta
                  avatar={<Avatar src={item.from_user.avatar} />}
                  title={itemTitle}
                  description={itemDescription}
                />
              </Skeleton>
            </List.Item>
          );
        }}
      />
    );
  }
}
export default Message;

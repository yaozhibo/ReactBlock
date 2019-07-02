import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Skeleton, List, Avatar } from 'antd';
import { Link } from 'umi';
import { Header } from 'semantic-ui-react';
import { getCookie, checkCookie, setCookie, removeCookie } from '@/utils/cookie';

@connect(({ hotPosts }) => ({
  hotPosts,
}))
class HotPost extends PureComponent {
  state = {
    isloading: true,
    hots: [],
  };

  componentDidMount() {
    const { dispatch } = this.props;
    if (!checkCookie('hots') || getCookie('user') == null) {
      dispatch({
        type: 'hotPosts/fetchHots',
        payload: {},
        callback: res => {
          if (res.status === 10000) {
            this.setState({
              hots: res.data,
            });
            setCookie('hots', JSON.stringify(res.data), 1);
          }
        },
      });
    } else {
      this.setState({
        hots: JSON.parse(getCookie('hots')),
      });
    }
    this.setState({
      isloading: false,
    });
  }

  render() {
    const { hots } = this.state;
    const { isloading } = this.state;
    return (
      <Skeleton active loading={isloading}>
        <Header as="h4">本周热门文章:</Header>
        <List
          itemLayout="horizontal"
          dataSource={hots}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                avatar={
                  <Link to={`/user/${item.users.username}`}>
                    <Avatar src={item.users.avatar} />
                  </Link>
                }
                title={<a href={`/post/${item.slug}`}>{item.title}</a>}
                description={item.created_at}
              />
            </List.Item>
          )}
        />
      </Skeleton>
    );
  }
}

export default HotPost;

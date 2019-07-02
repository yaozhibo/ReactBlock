import React, { PureComponent } from 'react';
import { List } from 'antd';
import Link from 'umi/link';
import { connect } from 'dva';
import { Placeholder, Image } from 'semantic-ui-react';
import LazyLoad from 'react-lazy-load';

@connect(({ personPost }) => ({
  personPost,
}))
class PersonPost extends PureComponent {
  state = {
    postList: [],
    loading: true,
  };
  componentDidMount() {
    const { dispatch, username } = this.props;
    dispatch({
      type: 'personPost/fetchIndex',
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
  render() {
    const { postList, loading } = this.state;

    return postList.length == 0 && loading == true ? (
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
        renderItem={item => (
          <List.Item
            key={item.title}
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
    );
  }
}
export default PersonPost;

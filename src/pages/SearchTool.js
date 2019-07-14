import React, { PureComponent } from 'react';
import { Input, List } from 'antd';
import { connect } from 'dva';
import { Link } from 'umi';
const { Search } = Input;

@connect(({ searching }) => ({
  searching,
}))
class SearchTool extends PureComponent {
  state = {
    res: [],
    finish: false,
    loading: false,
  };

  handleSearch = params => {
    const { dispatch } = this.props;
    this.setState({
      loading: true,
      finish: true,
    });
    dispatch({
      type: 'searching/fetch',
      payload: {
        content: params,
      },
      callback: res => {
        if (res.status === 10000) {
          this.setState({
            res: res.data,
          });
        }
        this.setState({
          loading: false,
        });
      },
    });
  };

  render() {
    const { res, finish, loading } = this.state;

    return (
      <div>
        <Search
          placeholder="请输入您要搜索的内容"
          onSearch={value => this.handleSearch(value)}
          enterButton
          size="large"
        />
        <List
          hidden={!finish}
          loading={loading}
          locale={{ emptyText: '搜不到...' }}
          itemLayout="vertical"
          size="large"
          pagination={{
            onChange: page => {
              //
            },
            pageSize: 10,
          }}
          dataSource={res}
          renderItem={item => (
            <List.Item key={item.title}>
              <List.Item.Meta
                title={<Link to={`/post/${item.slug}`}>{item.title}</Link>}
                description={
                  <div>
                    <p>{item.descr}</p>
                  </div>
                }
              />
              <span>{item.created_at}</span>
            </List.Item>
          )}
        />
      </div>
    );
  }
}

export default SearchTool;

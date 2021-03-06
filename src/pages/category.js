import React, { PureComponent } from 'react';
import styles from './index.css';
import { connect } from 'dva';
import { Row, Col, List, Divider, Skeleton, Select } from 'antd';
import ResultDiv from '@/components/ResultDiv';
import Link from 'umi/link';
import router from 'umi/router';

const { Option } = Select;
@connect(({ categories }) => ({
  categories,
}))
class Category extends PureComponent {
  state = {
    loadingSpin: true,
    dataDivState: false,
    version: '2019',
  };

  componentDidMount() {
    const { query } = this.props.location;
    const { name } = query;
    let { version } = query;
    if (version == null) {
      version = this.state.version;
    }
    const params = {
      artc_catgr_name: name,
      version,
    };
    this.setState({
      version,
    });
    const { dispatch } = this.props;
    this.toggleDataDivStateAndSpinState(true);
    dispatch({
      type: 'categories/fetch',
      payload: { ...params },
      callback: res => {
        if (res.status === 10000) {
          document.title = `${res.data.category.name}杂志 --粒子空间`;
        }
        this.toggleDataDivStateAndSpinState(false);
      },
    });
  }

  toggleDataDivStateAndSpinState = bool => {
    this.setState({
      dataDivState: bool,
      loadingSpin: bool,
    });
  };

  handleChange = value => {
    const { query } = this.props.location;
    const { name } = query;
    const params = {
      artc_catgr_name: name,
      version: value,
    };
    this.setState({
      version: value,
    });
    router.push(`${window.location.pathname}?name=${name}&version=${value}`);

    const { dispatch } = this.props;
    this.toggleDataDivStateAndSpinState(true);
    dispatch({
      type: 'categories/fetch',
      payload: { ...params },
      callback: () => {
        this.toggleDataDivStateAndSpinState(false);
      },
    });
  };

  render() {
    let {
      categories: { list, category },
    } = this.props;
    const { loadingSpin, dataDivState } = this.state;
    return (
      <Skeleton loading={loadingSpin} active={true}>
        <div className={styles.category} hidden={dataDivState}>
          {category == null ? (
            ResultDiv({ type: 'error', title: '无此内容', msg: '请确认输入...' })
          ) : (
            <Row type="flex" justify="center">
              <Row style={{ minWidth: '90%' }} className={styles.listContainer}>
                <Row gutter={16} type="flex" align="middle">
                  <Col lg={8}>
                    <img src={category.cover} style={{ width: '200px', padding: '10px' }} alt="" />
                  </Col>
                  <Col lg={10}>
                    <h5>
                      往期：
                      <Select
                        defaultValue={this.state.version}
                        style={{ maxWidth: 120 }}
                        onChange={this.handleChange}
                        size="small"
                      >
                        <Option value="2019">2019</Option>
                        <Option value="2018">2018</Option>
                        <Option value="2017">2017</Option>
                        <Option value="2016">2016</Option>
                      </Select>
                    </h5>

                    <h5>名称：{category.name}</h5>
                    <h5>描述：{category.description}</h5>
                  </Col>
                </Row>
                <Divider />
                <Row>
                  <List
                    itemLayout="vertical"
                    size="large"
                    pagination={{
                      onChange: page => {
                        console.log(page);
                      },
                      pageSize: 10,
                    }}
                    dataSource={list}
                    renderItem={item => (
                      <List.Item key={item.title} extra={<p>{item.created_at}</p>}>
                        <List.Item.Meta
                          title={
                            <Link to={`/article?category=${category.slug}&slug=${item.slug}`}>
                              {item.title}
                            </Link>
                          }
                          description={
                            <div>
                              <p>作者：{item.author}</p>{' '}
                            </div>
                          }
                        />
                      </List.Item>
                    )}
                  />
                </Row>
              </Row>
            </Row>
          )}
        </div>
      </Skeleton>
    );
  }
}

export default Category;

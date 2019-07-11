import React, { PureComponent } from 'react';
import styles from './index.css';
import { Timeline, Row, Card, Spin, Avatar } from 'antd';
import Link from 'umi/link';
import { connect } from 'dva';
const { Meta } = Card;

@connect(({ categories, loading }) => ({
  categories,
  loading: loading.models.categories,
}))
class Magazine extends PureComponent {
  state = {
    loadingSpin: true,
    dataDivState: false,
  };

  componentDidMount() {
    const { dispatch } = this.props;
    this.toggleDataDivStateAndSpinState(true);
    dispatch({
      type: 'categories/fetchSet',
      callback: () => {
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

  render() {
    let {
      categories: { set },
    } = this.props;
    const { loadingSpin, dataDivState } = this.state;
    console.log(set);
    const list = set ? set : [];
    return (
      <div className={styles.block}>
        <Spin spinning={loadingSpin} size="large" style={{ marginTop: '100px' }}>
          <Row hidden={dataDivState}>
            <Row>
              <img
                src={require('@/assets/image/magazine.jpg')}
                alt="冥王星"
                style={{ width: '100%' }}
              />
            </Row>
            <Row>
              <Timeline mode="alternative">
                {list.map((item, num) => {
                  return (
                    <Timeline.Item key={`timeline_${num}`}>
                      <Card style={{ width: '100%', marginTop: '25px' }} key={`card_${num}`}>
                        <Meta
                          key={`meta_${num}`}
                          avatar={<Avatar src={item.cover} />}
                          title={<Link to={`/category?name=${item.name}`}>{item.name}</Link>}
                          description={item.description}
                        />
                      </Card>
                    </Timeline.Item>
                  );
                })}
              </Timeline>
            </Row>
          </Row>
        </Spin>
      </div>
    );
  }
}

export default Magazine;

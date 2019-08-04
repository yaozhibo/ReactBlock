import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { getCookie, checkCookie } from '@/utils/cookie';
import { Drawer, Form, Button, Col, Row, Input, Select, DatePicker, Icon } from 'antd';

const { Option } = Select;

class TutorialCategories extends PureComponent {
  state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };
  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showDrawer}>
          <Icon type="plus" /> 添加教程类别
        </Button>
        <Drawer
          title="创建一个新的教程类别"
          width={'50%'}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <Form layout="vertical">
            <Input placeholder="Basic usage" style={{ width: '50%' }} />
          </Form>
          <div
            style={{
              position: 'absolute',
              left: 0,
              bottom: 0,
              width: '100%',
              borderTop: '1px solid #e9e9e9',
              padding: '10px 16px',
              background: '#fff',
              textAlign: 'right',
            }}
          >
            <Button onClick={this.onClose} type="primary">
              Submit
            </Button>
          </div>
        </Drawer>
      </div>
    );
  }
}

export default TutorialCategories;

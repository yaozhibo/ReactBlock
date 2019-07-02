import React, { PureComponent } from 'react';
import { Button, Form } from 'semantic-ui-react';
import { connect } from 'dva';
import { notification } from 'antd';
import { removeCookie } from '@/utils/cookie';

@connect(({ personManager }) => ({
  personManager,
}))
class PersonManager extends PureComponent {
  state = {
    data: {
      old_password: '',
      new_password: '',
      new_password_confirmation: '',
    },
    btnStatus: false,
  };

  submitNewPassword = () => {
    const { dispatch } = this.props;
    const { data } = this.state;

    const params = {
      ...data,
    };

    this.setState({
      btnStatus: true,
    });

    dispatch({
      type: 'personManager/resetPassword',
      payload: params,
      callback: response => {
        this.setState({
          btnStatus: false,
        });
        if (response.status === 10000) {
          removeCookie('yjyd_app_session');
          removeCookie('user');
          notification.success({
            message: response.info,
            duration: 2,
            onClose: () => {
              window.location.href = '/user/login';
            },
          });
        }
      },
    });
  };

  handleChange = (e, { name, value }) => {
    const { data } = this.state;
    data[name] = value;
    this.setState({
      data,
    });
  };

  render() {
    return (
      <Form size="small">
        <Form.Field>
          <label>旧密码</label>
          <Form.Input
            name="old_password"
            placeholder="请输入您的旧密码"
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>新密码</label>
          <Form.Input
            name="new_password"
            placeholder="请输入您的新密码"
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>确认新密码</label>
          <Form.Input
            name="new_password_confirmation"
            placeholder="请确认您的新密码"
            onChange={this.handleChange}
          />
        </Form.Field>
        <Button type="submit" onClick={this.submitNewPassword}>
          保存
        </Button>
      </Form>
    );
  }
}

export default PersonManager;

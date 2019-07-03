import React, { PureComponent } from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import { connect } from 'dva';
import { notification } from 'antd';

@connect(({ registUsers }) => ({
  registUsers,
}))
class Register extends PureComponent {
  state = {
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
    btnStatus: false,
  };

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleSubmit = () => {
    const { dispatch } = this.props;
    const { username, email, password, password_confirmation } = this.state;

    const params = { username, email, password, password_confirmation };

    this.setState({
      btnStatus: true,
    });

    dispatch({
      type: 'registUsers/submitRegister',
      payload: { ...params },
      callback: response => {
        if (response.data.status === 10000) {
          this.setState({
            username: '',
            email: '',
            password: '',
            password_confirmation: '',
          });
          notification.success({
            message: response.data.info,
            duration: 2,
            onClose: () => {
              window.location.href = '/user/login';
            },
          });
        } else {
          this.setState({
            btnStatus: false,
          });
        }
      },
    });
  };

  render() {
    const { username, email, password, password_confirmation, btnStatus } = this.state;

    return (
      <Grid textAlign="center">
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" style={{ color: '#0f0f0f' }} textAlign="center">
            <Image src={require('@/assets/icon/flyingBird.png')} />
            Join us
          </Header>
          <Form size="large" onSubmit={this.handleSubmit}>
            <Segment stacked>
              <Form.Input
                name="username"
                fluid
                icon="user"
                iconPosition="left"
                placeholder="请输入您的用户名"
                onChange={this.handleChange}
                value={username}
              />
              <Form.Input
                name="email"
                fluid
                icon="mail"
                iconPosition="left"
                placeholder="请输入您的邮箱"
                onChange={this.handleChange}
                value={email}
              />
              <Form.Input
                name="password"
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="请输入您的密码"
                type="password"
                onChange={this.handleChange}
                value={password}
              />
              <Form.Input
                name="password_confirmation"
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="请确认您的密码"
                type="password"
                onChange={this.handleChange}
                value={password_confirmation}
              />
              <Button color="twitter" fluid size="large" loading={btnStatus} disabled={btnStatus}>
                提交
              </Button>
            </Segment>
          </Form>
          <Message>
            已有账号？ <a href="/user/login">立即登录！</a>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Register;

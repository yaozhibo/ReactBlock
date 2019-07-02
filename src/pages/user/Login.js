import React, { PureComponent } from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import { connect } from 'dva';
import { notification } from 'antd';
import { setCookie, checkCookie } from '@/utils/cookie';

@connect(({ loginUsers }) => ({
  loginUsers,
}))
class Login extends PureComponent {
  state = {
    account: '',
    password: '',
    btnStatus: false,
  };

  constructor(props) {
    super(props);
    if (checkCookie('yjyd_app_session')) {
      window.location.href = '/';
    }
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleSubmit = () => {
    const { dispatch } = this.props;
    const { account, password } = this.state;

    const params = { account, password };

    this.setState({
      btnStatus: true,
    });
    dispatch({
      type: 'loginUsers/submitLogin',
      payload: { ...params },
      callback: response => {
        if (response.data.status === 10000) {
          this.setState({
            account: '',
            password: '',
          });
          // 存储 token
          setCookie('yjyd_app_session', response.data.data.yjyd_app_session, 365);
          setCookie('user', JSON.stringify(response.data.data.user), 365);
          notification.success({
            message: response.data.info,
            duration: 2,
            onClose: () => {
              window.location.href = '/';
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
    const { account, password, btnStatus } = this.state;

    return (
      <Grid textAlign="center">
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" style={{ color: '#0f0f0f' }} textAlign="center">
            <Image src={require('@/assets/icon/flyingBird.png')} />
            您正在登陆...
          </Header>
          <Form size="large" onSubmit={this.handleSubmit}>
            <Segment stacked>
              <Form.Input
                name="account"
                fluid
                icon="user"
                iconPosition="left"
                placeholder="请输入您的账号：邮箱或者用户名"
                onChange={this.handleChange}
                value={account}
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
              {btnStatus == false ? (
                <Button color="twitter" fluid size="large">
                  提交
                </Button>
              ) : (
                <Button color="twitter" fluid size="large" loading disabled>
                  提交
                </Button>
              )}
            </Segment>
          </Form>
          <Message>
            还没注册？ <a href="/user/register">立即注册</a>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Login;

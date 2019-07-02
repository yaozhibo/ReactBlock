import React, { Component } from 'react';
import { Button, Form, Image, Placeholder } from 'semantic-ui-react';
import { connect } from 'dva';
import { notification, Upload, message } from 'antd';

import { getCookie, setCookie } from '@/utils/cookie';
import ZoomPic from '@/components/ZoomPic';

@connect(({ personSetting }) => ({
  personSetting,
}))
class PersonSettBasic extends Component {
  state = {
    user: {
      username: '',
      email: '',
      nickname: '',
      avatar: '',
      isIni: true,
    },
    btnStatus: false,
  };

  componentDidMount() {
    const { dispatch } = this.props;
    // 获取用户信息
    dispatch({
      type: 'personSetting/fetchUser',
      payload: {},
      callback: response => {
        this.setState({
          user: response.data,
          isIni: false,
        });
      },
    });
  }
  handleChange = (e, { name, value }) => {
    const { user } = this.state;
    user[name] = value;
    this.setState({
      user,
    });
  };
  handleSubmit = () => {
    const { dispatch } = this.props;
    const { user } = this.state;

    const params = { nickname: user.nickname };

    this.setState({
      btnStatus: true,
    });

    dispatch({
      type: 'personSetting/submitBasicSett',
      payload: params,
      callback: response => {
        this.setState({
          btnStatus: false,
        });
        if (response.status === 10000) {
          const currStoreUser = JSON.parse(getCookie('user'));
          currStoreUser.nickname = response.data.nickname;
          setCookie('user', JSON.stringify(currStoreUser), 365);

          notification.success({
            message: response.info,
          });
        }
      },
    });
  };

  handleUploadedAvatar = avatarPath => {
    const { user } = this.state;
    user.avatar = avatarPath;
    this.setState({ user });
    const currStoreUser = JSON.parse(getCookie('user'));
    currStoreUser.avatar = avatarPath;
    setCookie('user', JSON.stringify(currStoreUser), 365);
  };
  render() {
    const { user, isIni } = this.state;
    const that = this;
    const props = {
      name: 'avatar',
      action: '/api/user/uploadAvatar',
      headers: {
        Key: '6c0d64c70a5df6bee51088964d7894e0',
        Accept: 'application/vnd.YiDong.v2+json',
        AppSession: getCookie('yjyd_app_session'),
      },
      onChange(info) {
        if (info.file.status === 'done') {
          const { response } = info.file;
          if (response.status === 10000) {
            that.handleUploadedAvatar(response.data.path);
            message.success(`${info.file.name} 上传成功`);
          } else {
            message.error(`${info.file.name} 上传失败`);
          }
        } else if (info.file.status === 'error') {
          message.error(`${info.file.name} 上传失败`);
        }
      },
    };
    return isIni == null ? (
      <div>
        <Placeholder style={{ height: 120, width: 120 }}>
          <Placeholder.Image />
        </Placeholder>
        <Placeholder>
          <Placeholder.Paragraph>
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
          </Placeholder.Paragraph>
          <Placeholder.Paragraph>
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
          </Placeholder.Paragraph>
        </Placeholder>
      </div>
    ) : (
      <ZoomPic>
        <Form size="small">
          <Form.Group inline>
            <Form.Field>
              <label>
                <Image src={user.avatar} style={{ width: '150px', height: '150px' }} />
              </label>
            </Form.Field>
            <Form.Field>
              <Upload {...props}>
                <Button>更换头像</Button>
              </Upload>
            </Form.Field>
          </Form.Group>
          <Form.Field>
            <label>昵称</label>
            <Form.Input
              name="nickname"
              placeholder="请输入您的昵称"
              value={user.nickname}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>用户名（暂不支持更改）</label>
            <Form.Input name="email" value={user.username} disabled />
          </Form.Field>
          <Form.Field>
            <label>邮箱（暂不支持更改）</label>
            <Form.Input name="email" value={user.email} disabled />
          </Form.Field>
          <Button type="submit" onClick={this.handleSubmit}>
            保存
          </Button>
        </Form>
      </ZoomPic>
    );
  }
}
export default PersonSettBasic;

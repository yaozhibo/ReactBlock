import React, { Component } from 'react';
import { Button, Form, Image } from 'semantic-ui-react';
import { connect } from 'dva';
import { notification, Skeleton, Upload, message } from 'antd';
import { getCookie } from '@/utils/cookie';
import ZoomPic from '@/components/ZoomPic';

@connect(({ personProfiles }) => ({
  personProfiles,
}))
class PersonProfile extends Component {
  state = {
    user: {
      real_name: '',
      age: '',
      person_site: '',
      descr: '',
      wechat_qrcode: '',
    },
    btnStatus: false,
    isLoading: true,
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'personProfiles/fetch',
      payload: {},
      callback: response => {
        if (response.status === 10000) {
          this.setState({
            user: response.data,
            isLoading: false,
          });
        }
      },
    });
  }

  handleSubmit = () => {
    const { dispatch } = this.props;
    const { user } = this.state;

    const params = {
      ...user,
    };

    this.setState({
      btnStatus: true,
    });

    dispatch({
      type: 'personProfiles/updateUserProfile',
      payload: params,
      callback: response => {
        this.setState({
          btnStatus: false,
        });
        if (response.status === 10000) {
          notification.success({
            message: response.info,
          });
        }
      },
    });
  };
  handleChange = (e, { name, value }) => {
    const { user } = this.state;
    user[name] = value;
    this.setState({
      user,
    });
  };

  handleUploadedWechatQRCode = path => {
    const { user } = this.state;
    user.wechat_qrcode = path;
    this.setState({ user });
  };
  render() {
    const { user, isLoading } = this.state;
    const that = this;
    const props = {
      name: 'wechatQRCode',
      action: '/api/user/uploadWechatQRCode',
      headers: {
        Key: '6c0d64c70a5df6bee51088964d7894e0',
        Accept: 'application/vnd.YiDong.v2+json',
        AppSession: getCookie('yjyd_app_session'),
      },
      onChange(info) {
        if (info.file.status === 'done') {
          const { response } = info.file;
          if (response.status === 10000) {
            that.handleUploadedWechatQRCode(response.data.path);
            message.success(`${info.file.name} 上传成功`);
          } else {
            message.error(`${info.file.name} 上传失败`);
          }
        } else if (info.file.status === 'error') {
          message.error(`${info.file.name} 上传失败`);
        }
      },
    };

    return (
      <Skeleton loading={isLoading}>
        <h2>个人资料会在个人中心展示</h2>
        <ZoomPic>
          <Form size="small">
            <Form.Field>
              <label>真名</label>
              <Form.Input
                name="real_name"
                placeholder="请输入您的真名"
                value={user.real_name ? user.real_name : ''}
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <label>年龄</label>
              <Form.Input
                name="age"
                value={user.age ? user.age : ''}
                onChange={this.handleChange}
                placeholder="请输入您的年龄"
              />
            </Form.Field>
            <Form.Field>
              <label>个人网站</label>
              <Form.Input
                name="person_site"
                value={user.person_site ? user.person_site : ''}
                onChange={this.handleChange}
                placeholder="请输入您的个人站点"
              />
            </Form.Field>
            <Form.Field>
              <label>简介</label>
              <Form.Input
                name="descr"
                value={user.descr ? user.descr : ''}
                onChange={this.handleChange}
                placeholder="请输入您的个性签名"
              />
            </Form.Field>
            <Form.Group inline>
              <Form.Field>
                <label>
                  {user.wechat_qrcode ? (
                    <Image
                      src={user.wechat_qrcode}
                      style={{ width: '150px', height: '150px' }}
                      alt="微信二维码"
                    />
                  ) : (
                    '暂未上传'
                  )}
                </label>
              </Form.Field>
              <Form.Field>
                <Upload {...props}>
                  <a>上传微信二维码</a>
                </Upload>
              </Form.Field>
            </Form.Group>
            <Button type="submit" onClick={this.handleSubmit}>
              保存
            </Button>
          </Form>
        </ZoomPic>
      </Skeleton>
    );
  }
}

export default PersonProfile;

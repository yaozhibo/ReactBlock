import React, { PureComponent } from 'react';
import { Dropdown, Icon } from 'semantic-ui-react';
import { connect } from 'dva';
import { checkCookie, removeCookie } from '@/utils/cookie';

@connect(({ users }) => ({
  users,
}))
class HeaderUserDropdown extends PureComponent {
  logout = () => {
    // 注销
    const { dispatch } = this.props;
    dispatch({
      type: 'users/submitLogout',
      payload: {},
      callback: () => {
        if (checkCookie('yjyd_app_session')) {
          removeCookie('yjyd_app_session');
          removeCookie('user');
        }
        window.location.href = '/';
      },
    });
  };

  render() {
    const props = this.props;
    return (
      <Dropdown
        item
        text={props.userObj.nickname}
        icon={<img src={props.userObj.avatar} style={{ width: '20px', height: '20px' }} alt="" />}
      >
        <Dropdown.Menu>
          <Dropdown.Item href="/editor">
            <Icon name="write" />
            撰写文章
          </Dropdown.Item>
          <Dropdown.Item href={`/user/${props.userObj.username}`}>
            <Icon name="braille" />
            个人中心
          </Dropdown.Item>
          <Dropdown.Item href="/user/setting">
            <Icon name="address card" />
            个人设置
          </Dropdown.Item>
          <Dropdown.Item onClick={this.logout}>
            <Icon name="joget" />
            注销
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

export default HeaderUserDropdown;

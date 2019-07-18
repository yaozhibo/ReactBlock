import React, { PureComponent } from 'react';
import { Dropdown, Icon } from 'semantic-ui-react';
import { Avatar, Badge } from 'antd';
import { connect } from 'dva';
import { removeCookie } from '@/utils/cookie';

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
        removeCookie('yjyd_app_session');
        removeCookie('user');
        window.location.href = '/';
      },
    });
  };

  render() {
    const props = this.props;
    return (
      <Dropdown
        item
        icon={
          props.userObj.notifications_count > 0 ? (
            <Badge dot>
              <Avatar src={props.userObj.avatar} />
            </Badge>
          ) : (
            <Badge>
              <Avatar src={props.userObj.avatar} />
            </Badge>
          )
        }
      >
        <Dropdown.Menu>
          <Dropdown.Item href={`/user/${props.userObj.username}`}>
            <Icon name="braille" />
            个人中心
          </Dropdown.Item>
          <Dropdown.Item href="/user/setting">
            <Icon name="address card" />
            个人设置
          </Dropdown.Item>
          <Dropdown.Item href="/user/message">
            <Icon name="envelope" />
            消息
            <span style={{ color: '#7FFF00' }}>
              {props.userObj.notifications_count > 0 ? `+${props.userObj.notifications_count}` : ''}
            </span>
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

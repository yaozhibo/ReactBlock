import React, { PureComponent } from 'react';
import { Menu, Dropdown, Icon } from 'semantic-ui-react';
import style from './index.css';
import { getCookie, checkCookie, setCookie, removeCookie } from '@/utils/cookie';
import HeaderUserDropdown from './HeaderUserDropdown';
import { connect } from 'dva';

@connect(({ users }) => ({
  users,
}))
class HeaderMenu extends PureComponent {
  state = {
    userObj: {},
  };

  componentDidMount() {
    const { dispatch } = this.props;
    if (checkCookie('yjyd_app_session')) {
      if (!checkCookie('user')) {
        dispatch({
          type: 'users/fetchCurrUser',
          payload: {},
          callback: response => {
            setCookie('user', JSON.stringify(response.data.data), 365);
            this.setState({
              userObj: response.data.data,
            });
          },
        });
      } else {
        this.setState({
          userObj: JSON.parse(getCookie('user')),
        });
      }
    } else {
      if (checkCookie('user')) {
        removeCookie('user');
      }
    }
  }

  render() {
    const { userObj } = this.state;
    return (
      <Menu size="large" secondary stackable style={{ margin: '0 auto 20px' }}>
        <Menu.Item key="home1" header>
          <div className={style.logo} align="middle">
            <img
              src={require('@/assets/icon/flyingBird.png')}
              alt="logo"
              style={{ width: '30px' }}
            />
          </div>
        </Menu.Item>
        <Menu.Item icon={<Icon name="coffee" />} name="社区" key="block" href="/block" />
        <Dropdown item text="科学杂志">
          <Dropdown.Menu>
            <Dropdown.Item key="category:1" href="/category?name=物理">
              物理
            </Dropdown.Item>
            <Dropdown.Item key="category:2" href="/category?name=化学">
              化学
            </Dropdown.Item>
            <Dropdown.Item key="category:3" href="/category?name=生物">
              生物
            </Dropdown.Item>
            <Dropdown.Item key="category:4" href="/category?name=政治">
              政治
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Menu.Menu position="right">
          {/* <Menu.Item>
            <Input name="search" placeholder="🔍Search..." />
          </Menu.Item> */}

          {checkCookie('yjyd_app_session') == false ? (
            <Menu.Item icon={<Icon name="user" />} name="登陆" href="/user/login" />
          ) : (
            <HeaderUserDropdown userObj={userObj} />
          )}
        </Menu.Menu>
      </Menu>
    );
  }
}

export default HeaderMenu;

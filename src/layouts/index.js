import React from 'react'
import { Layout,Menu, Icon } from 'antd';
import style from './index.css'
const { Header, Content, Footer } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class BasicLayout extends React.Component {
  state = {
    current: 'mail',
  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  render() {
    return (
      <Layout >
        <Header>
          <div className={style.logo} />
          <Menu
          theme="dark"
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}
          >
          
            <Menu.Item key="mail">
              <Icon type="mail" />首页
            </Menu.Item>
            <Menu.Item key="app" disabled>
              <Icon type="appstore" />论坛
            </Menu.Item>
            <SubMenu title={<span className="submenu-title-wrapper"><Icon type="setting" />大数据报告</span>}>
              <MenuItemGroup title="交通">
                <Menu.Item key="setting:1">春运</Menu.Item>
                <Menu.Item key="setting:2">周末</Menu.Item>
              </MenuItemGroup>
              <MenuItemGroup title="商业">
                <Menu.Item key="setting:3">超市</Menu.Item>
                <Menu.Item key="setting:4">旅游</Menu.Item>
              </MenuItemGroup>
            </SubMenu>
            <Menu.Item key="alipay">
              <a href="https://ant.design" target="_blank" rel="noopener noreferrer">活动与合作</a>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '24px 0', background: '#fff' }}>
          { this.props.children }
        </Content>
        <Footer style={{ position:'relative' ,textAlign: 'center', bottom: 0 , width: '100%' }}>
          阳江移动 ©2018 Created by Deeao
        </Footer>
      </Layout>
    );
  }
  
}

export default BasicLayout;

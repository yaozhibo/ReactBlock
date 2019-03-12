import React from 'react'
import { Layout, Menu, Icon } from 'antd';
import style from './index.css'
const { Header, Content, Footer } = Layout;
const SubMenu = Menu.SubMenu;

class BasicLayout extends React.Component {

  handleClick = (e) => {
    console.log('click ', e);
    window.location.href = (`/${e.item.props.href}`)
  }

  //取相对路径的第一栏
  getRelativeUrl = () => {
    const url = document.location.toString();
    let arrUrl = url.split("//");
    arrUrl[1] = arrUrl[1].replace(/\//g, "$")
    arrUrl[1] = arrUrl[1].replace(/\?/g, "$")
    arrUrl[1] = arrUrl[1].replace(/\#/g, "$")
    const start = arrUrl[1].indexOf("$");
    const end = arrUrl[1].indexOf('$', start + 1)
    if (end === -1) {
      var relUrl = arrUrl[1].substring(start + 1);//stop省略，截取从start开始到结尾的所有字符
    } else {
      relUrl = arrUrl[1].substring(start + 1, end)
    }
    console.log(relUrl)
    return relUrl;
  }

  componentDidMount() {
    const page = this.getRelativeUrl()
    this.setState({
      current: page,
    })
  }
  render() {
    return (
      <Layout >
        <Header style={{background: '#fff', padding: '0'}}>
          <Menu
            theme="dark"
            onClick={this.handleClick}
            // selectedKeys={[this.state.current]}
            mode="horizontal"
            // defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="home1" href="home">
              <div className={style.logo} align="middle" ><img src={require('@/assets/icon/logo.svg')} alt="logo" style={{width: '35px'}}/>阳江移动大数据</div>
            </Menu.Item>
            <Menu.Item key="home" href="home">
              <Icon type="home" />首页
            </Menu.Item>
            <SubMenu title={<span className="submenu-title-wrapper"><Icon type="setting" />大数据报告</span>}>
              <Menu.Item key="category:1" href="category?name=交通">交通</Menu.Item>
              <Menu.Item key="category:2" href="category?name=旅游">旅游</Menu.Item>
              <Menu.Item key="category:3" href="category?name=农商">农商</Menu.Item>
              <Menu.Item key="category:4" href="category?name=政府">政府</Menu.Item>
            </SubMenu>
            <Menu.Item key="contact" href="contact">
              活动与合作
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ minHeight: '500px' }}>
          {this.props.children}
        </Content>
        <Footer style={{ position: 'relative', textAlign: 'center', bottom: 0, width: '100%' }}>
          阳江移动 ©2018 Created by Deeao
        </Footer>
      </Layout>
    );
  }

}

export default BasicLayout;

//This layout just contain a header menu and footer for clean.
import React from 'react';
import { Layout, Button } from 'antd';
import { Grid, Container, Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import HeaderMenu from '@/layouts/HeaderMenu';
const { Footer } = Layout;

class BasicLayout extends React.Component {
  handleClick = e => {
    console.log('click ', e);
    window.location.href = `/${e.item.props.href}`;
  };

  //取相对路径的第一栏
  getRelativeUrl = () => {
    const url = document.location.toString();
    let arrUrl = url.split('//');
    arrUrl[1] = arrUrl[1].replace(/\//g, '$');
    arrUrl[1] = arrUrl[1].replace(/\?/g, '$');
    arrUrl[1] = arrUrl[1].replace(/\#/g, '$');
    const start = arrUrl[1].indexOf('$');
    const end = arrUrl[1].indexOf('$', start + 1);
    if (end === -1) {
      var relUrl = arrUrl[1].substring(start + 1); //stop省略，截取从start开始到结尾的所有字符
    } else {
      relUrl = arrUrl[1].substring(start + 1, end);
    }
    console.log(relUrl);
    return relUrl;
  };

  componentDidMount() {
    const page = this.getRelativeUrl();
    this.setState({
      current: page,
    });
  }
  render() {
    return (
      <div
        style={{
          width: '100%',
          minHeight: '100%',
          position: 'relative',
          paddingBottom: '200px',
        }}
      >
        {/* header-menu */}
        <HeaderMenu />
        <Grid centered columns={1} stackable>
          <Grid.Column width={10}>
            <Container>{this.props.children}</Container>
          </Grid.Column>
        </Grid>
        <Footer
          style={{
            position: 'absolute',
            bottom: '0px',
            width: '100%',
            height: '200px',
            textAlign: 'center',
          }}
        >
          <Grid columns={3} divided>
            <Grid.Row>
              <Grid.Column>
                <h4>粒子空间</h4>
                <p>
                  <Button type="link" href="/contact" block>
                    关于我们
                  </Button>
                </p>
                <p>
                  <Button type="link" href="/introduce" block>
                    社区介绍
                  </Button>
                </p>
              </Grid.Column>
              <Grid.Column>
                <h4>资源推荐</h4>
                <p>
                  <Button type="link" href="https://www.tutorialspoint.com/index.htm" block>
                    spoint
                  </Button>
                </p>
                <p>
                  <Button type="link" href="https://unsplash.com" block>
                    Unsplash
                  </Button>
                </p>
              </Grid.Column>
              <Grid.Column>
                <h4>公告</h4>
                <p>这里不仅有丰富的知识，也有好的故事，还有一群与人为善的家伙。</p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Divider />
          <p>
            粒子空间 ©2018 Powered by{' '}
            <a href="http://www.nanoparticles.cn/user/yaozhibo">Wiki Yiod</a>
          </p>
        </Footer>
      </div>
    );
  }
}

export default BasicLayout;

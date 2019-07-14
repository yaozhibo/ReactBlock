//This layout just contain a header menu and footer for clean.
import React from 'react';
import { Grid, Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import LayoutFooter from './Footer';
import HeaderMenu from '@/layouts/HeaderMenu';

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
        <LayoutFooter />
      </div>
    );
  }
}

export default BasicLayout;

import React from 'react';
import HeaderMenu from '@/layouts/HeaderMenu';
import { BackTop } from 'antd';
import { Grid, Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import HotPost from './hotPost';
import LayoutFooter from './Footer';

class BasicLayout extends React.PureComponent {
  render() {
    return (
      <div
        style={{
          width: '100%',
          height: '100%',
          position: 'relative',
          overflowY: 'scroll',
          overflowX: 'hidden',
        }}
        id="generalLayout"
      >
        {/* header */}
        <HeaderMenu />
        <Grid
          centered
          columns={2}
          stackable
          style={{ minHeight: '100%', position: 'relative', paddingBottom: '200px' }}
        >
          <Grid.Column style={{ width: '750px' }}>
            <Container>{this.props.children}</Container>
          </Grid.Column>
          <Grid.Column style={{ width: '300px' }}>
            <HotPost />
          </Grid.Column>
          <LayoutFooter />
        </Grid>
        <BackTop target={() => document.getElementById('generalLayout')} />
      </div>
    );
  }
}

export default BasicLayout;

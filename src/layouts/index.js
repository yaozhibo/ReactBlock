import React from 'react';
import HeaderMenu from '@/layouts/HeaderMenu';
import { BackTop } from 'antd';
import { Grid, Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import HotPost from './hotPost';

class BasicLayout extends React.PureComponent {
  render() {
    return (
      <div
        style={{
          width: '100%',
          height: '100%',
          position: 'relative',
          paddingBottom: '180px',
          overflowY: 'scroll',
          overflowX: 'hidden',
        }}
        id="generalLayout"
      >
        {/* header */}
        <HeaderMenu />
        <Grid centered columns={2} stackable>
          <Grid.Column style={{ width: '750px' }}>
            <Container>{this.props.children}</Container>
          </Grid.Column>
          <Grid.Column style={{ width: '300px' }}>
            <HotPost />
          </Grid.Column>
        </Grid>
        <BackTop target={() => document.getElementById('generalLayout')} />
      </div>
    );
  }
}

export default BasicLayout;

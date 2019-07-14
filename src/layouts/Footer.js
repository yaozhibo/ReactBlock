import React from 'react';
import { Layout, Button } from 'antd';
import { Grid, Divider } from 'semantic-ui-react';
const { Footer } = Layout;
const LayoutFooter = () => {
  return (
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
        粒子空间 ©2018 Powered by <a href="http://www.nanoparticles.cn/user/yaozhibo">Wiki Yiod</a>
      </p>
    </Footer>
  );
};

export default LayoutFooter;

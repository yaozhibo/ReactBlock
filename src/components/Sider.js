import React, { PureComponent } from 'react'
import { Drawer, Button, Icon } from 'antd';
class Sider extends PureComponent {
  state = { visible: false, placement: 'left', relateArtc: {} };

  toggleDrawer = () => {
    this.setState({
      visible: !this.state.visible,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  onChange = (e) => {
    this.setState({
      placement: e.target.value,
    });
  }

  render() {
    const { relateArtc } = this.props

    const list = relateArtc ? relateArtc.articles : []
    const category = relateArtc ? relateArtc.category : {}

    return (
      <div>
        <div>
          <div style={{ position: 'fixed', height: '100%', left: 0, zIndex: 1000, top: 0, display: 'inline-block' }} id="drawerContainer">
            <div style={{ position: "absolute", top: '50%', left: 6 }} hidden={this.state.visible}>
              <Button type="primary" onClick={this.toggleDrawer} >
                <Icon type="bars" />
              </Button>
            </div>

            <Drawer
              title={category ? <h3 style={{ color: '#fff' }}><span style={{ backgroundColor: '#1890ff', padding: '10px', borderRadius: '25px' }}>{category.name}</span></h3> : ''}
              placement={this.state.placement}
              closable={false}
              onClose={this.onClose}
              getContainer="div#drawerContainer"
              visible={this.state.visible}
            >
              <div style={{ position: "absolute", top: '50%', right: -20 }} hidden={!this.state.visible}>
                <Button type="primary" onClick={this.toggleDrawer} >
                  <Icon type="close" />
                </Button>
              </div>
              {list ? list.map((item, k) => {
                return (
                  <li key={k}><a style={{ color: '#808080', textDecoration: 'underline' }} href={`/article?category=${category.slug}&slug=${item.slug}`}>{item.title}</a></li>
                )
              }) : ''}
            </Drawer>

          </div>
        </div>

      </div >
    );
  }
}


export default Sider
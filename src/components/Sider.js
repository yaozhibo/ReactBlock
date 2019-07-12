import React, { PureComponent } from 'react';
import { Drawer, Divider, Icon, Affix } from 'antd';
import style from './index.less';

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

  onChange = e => {
    this.setState({
      placement: e.target.value,
    });
  };

  render() {
    const { relateArtc, currSlug } = this.props;

    const list = relateArtc ? relateArtc.articles : [];
    const category = relateArtc ? relateArtc.category : {};

    return (
      <div>
        <div
          style={{
            position: 'fixed',
            height: '100%',
            left: 0,
            zIndex: 1000,
            top: 0,
            display: 'inline-block',
          }}
          id="drawerContainer"
        >
          <Affix className={style.sidebarListDiv} onClick={this.toggleDrawer}>
            <div className={style.sidebarListBtn}>
              <Icon type="bars" />
            </div>
          </Affix>
          <Drawer
            closable={true}
            title={category ? <h3>{category.name}</h3> : ''}
            placement={this.state.placement}
            onClose={this.onClose}
            getContainer="div#drawerContainer"
            visible={this.state.visible}
          >
            {list
              ? list.map((item, k) => {
                  return (
                    <div>
                      <li key={k}>
                        <a
                          style={
                            currSlug === item.slug ? { color: '#808080' } : { color: '#1890ff' }
                          }
                          href={`/article?category=${category.slug}&slug=${item.slug}`}
                        >
                          {item.title}
                        </a>
                      </li>
                      <Divider />
                    </div>
                  );
                })
              : ''}
          </Drawer>
        </div>
      </div>
    );
  }
}

export default Sider;

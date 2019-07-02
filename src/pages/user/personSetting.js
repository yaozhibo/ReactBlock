import React, { PureComponent } from 'react';
import { Tab } from 'semantic-ui-react';
import PersonSettBasic from './personSettBasic';
import PersonProfile from './personProfile';
import PersonManager from './personManager';

class PersonSetting extends PureComponent {
  componentDidMount() {}
  render() {
    const panes = [
      {
        menuItem: '基础设置',
        render: () => (
          <Tab.Pane>
            <PersonSettBasic />
          </Tab.Pane>
        ),
      },
      {
        menuItem: '个人资料',
        render: () => (
          <Tab.Pane>
            <PersonProfile />
          </Tab.Pane>
        ),
      },
      {
        menuItem: '安全管理',
        render: () => (
          <Tab.Pane>
            <PersonManager />
          </Tab.Pane>
        ),
      },
    ];
    return <Tab menu={{ fluid: true, vertical: true }} menuPosition="left" panes={panes} />;
  }
}

export default PersonSetting;

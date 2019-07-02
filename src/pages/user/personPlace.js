import React, { PureComponent } from 'react';
import { Tab } from 'semantic-ui-react';
import PersonPost from './PersonPost';
import PersonLikePost from './personLikePost';
import UserProfile from './userProfile';

class PersonSetting extends PureComponent {
  state = {
    username: null,
  };
  componentDidMount() {
    const { match } = this.props;
    const username = match.params.username;
    this.setState({
      username,
    });
  }
  render() {
    const { username } = this.state;
    const panes = [
      {
        menuItem: '个人信息',
        render: () => {
          return username == null ? (
            ''
          ) : (
            <Tab.Pane>
              <UserProfile username={username} />
            </Tab.Pane>
          );
        },
      },
      {
        menuItem: '个人文章',
        render: () => {
          return username == null ? (
            ''
          ) : (
            <Tab.Pane>
              <PersonPost username={username} />
            </Tab.Pane>
          );
        },
      },
      {
        menuItem: '喜欢的文章',
        render: () => {
          return username == null ? (
            ''
          ) : (
            <Tab.Pane>
              <PersonLikePost username={username} />
            </Tab.Pane>
          );
        },
      },
    ];
    return <Tab menu={{ fluid: true, vertical: true }} menuPosition="left" panes={panes} />;
  }
}

export default PersonSetting;

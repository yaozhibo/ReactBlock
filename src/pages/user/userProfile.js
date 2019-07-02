import React, { PureComponent } from 'react';
import { Skeleton } from 'antd';
import { connect } from 'dva';
import { Item, Icon, Image } from 'semantic-ui-react';
import ZoomPic from '@/components/ZoomPic';

@connect(({ userProfiles }) => ({
  userProfiles,
}))
class UserProfile extends PureComponent {
  state = {
    loading: true,
  };

  componentDidMount() {
    const { dispatch, username } = this.props;
    dispatch({
      type: 'userProfiles/fetch',
      payload: { username },
      callback: response => {
        if (response.status == 10000) {
          this.setState({
            loading: false,
          });
        }
      },
    });
  }

  render() {
    let {
      userProfiles: { profile },
    } = this.props;
    const { loading } = this.state;
    return (
      <Skeleton loading={loading} active>
        <ZoomPic>
          <Item.Group divided>
            <Item>
              <Item.Image src={profile.avatar} />
              <Item.Content>
                <Item.Header as="a">{profile.real_name}</Item.Header>
                <Item.Meta>个人描述：</Item.Meta>
                <Item.Description>{profile.descr}</Item.Description>
                <Item.Meta>个人网站：</Item.Meta>
                <Item.Description>
                  <a href={profile.person_site} target="_blank" rel="noopener noreferrer">
                    {profile.person_site}
                  </a>
                </Item.Description>
                <Item.Meta>微信：</Item.Meta>
                <Item.Description>
                  <Image src={profile.wechat_qrcode} width={50} />
                </Item.Description>
                <Item.Extra>
                  <Icon name="heartbeat" />
                  收到的点赞：
                  {profile.appreciate}
                </Item.Extra>
              </Item.Content>
            </Item>
          </Item.Group>
        </ZoomPic>
      </Skeleton>
    );
  }
}

export default UserProfile;

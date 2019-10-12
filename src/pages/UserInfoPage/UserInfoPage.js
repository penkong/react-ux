//
import '../../sass/pages/UserInfoPage.scss';
//
import React, { Component } from 'react';
import Card from '../../components/Card/Card';
import UserInfo from '../../components/UserInfo/UserInfo';
class UserInfoPage extends Component {
  render() {
    return (
      <div className="user-page">
        <Card>
          <UserInfo/>
        </Card>
      </div>
    );
  }
}

export default UserInfoPage;
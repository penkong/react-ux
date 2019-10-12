//
import '../../sass/pages/LandingPage.scss';
//
import React, { Component } from 'react';
import Card from '../../components/Card/Card';
import Login from '../../components/Login/Login';
class LandingPage extends Component {
  render() {
    return (
      <div className="landing">
        <Card>
          <Login/>
        </Card>
      </div>
    );
  }
}

export default LandingPage;
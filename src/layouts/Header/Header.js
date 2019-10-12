import React, { Component } from 'react';
import '../../sass/layout/Header.scss'
import logo from '../../assets/logo.png'
class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="logo">
          <img src={logo} alt="MTN-logo"/>
        </div>
        <div className="logout">LOGOUT</div>
      </div>
    );
  }
}

export default Header;
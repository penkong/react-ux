//
import '../../sass/layout/Header.scss'
import logo from '../../assets/logo.png'
//
import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="logo">
          <img src={logo} alt="MTN-logo"/>
        </div>
        <div className="logout">
          <FontAwesomeIcon 
            icon={faPowerOff} 
            size="3x" 
            style={{ color: 'rgb(46,46,0)'}}
          />
        </div>
      </div>
    );
  }
}

export default Header;
//
import '../../sass/component/Login.scss'; 
import logo2 from '../../assets/logo-2.png';
//
import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobile, faSimCard } from '@fortawesome/free-solid-svg-icons';
class Login extends Component {
  render() {
    return (
      <div className="login-landing">
        <div className="img-container">
          <img src={logo2} alt="mtn-2" />
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <FontAwesomeIcon 
            className="icon"
            icon={faMobile} 
            size="3x" 
            style={{ color: 'rgb(146, 234, 252)'}}
            />
            <input type="text" name="phone" placeholder="Your Number"/>
          </div>
          <div className="form-group">
            <FontAwesomeIcon 
            className="icon"
            icon={faSimCard} 
            size="3x" 
            style={{ color: 'rgb(146, 234, 252)'}}
            />
            <input type="text" name="puke" placeholder="Puke Code"/>
          </div>
          <div className="submit">
            <input type="submit" value="Login"/>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
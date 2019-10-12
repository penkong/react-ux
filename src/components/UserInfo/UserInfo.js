//
import '../../sass/component/UserInfo.scss';
//
import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faUserTag , faIdCardAlt , faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';

class UserInfo extends Component {
  render() {
    return (
      <div className="user-info">
        <p><strong> Please fill </strong> form below with <br/> requested <strong> info </strong> : </p>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <FontAwesomeIcon 
            className="icon"
            icon={faUser} 
            size="2x" 
            style={{ color: 'rgb(146, 234, 252)'}}
            />
            <input type="text" name="firstName" placeholder="First Name"/>
          </div>
          <div className="form-group">
            <FontAwesomeIcon 
            className="icon"
            icon={faUserTag} 
            size="2x" 
            style={{ color: 'rgb(146, 234, 252)'}}
            />
            <input type="text" name="lastName" placeholder="Last Name"/>
          </div>
          <div className="form-group">
            <FontAwesomeIcon 
            className="icon"
            icon={faIdCardAlt} 
            size="2x" 
            style={{ color: 'rgb(146, 234, 252)'}}
            />
            <input type="text" name="nationalCode" placeholder="National Code"/>
          </div>
          <div className="form-group">
            <FontAwesomeIcon 
            className="icon"
            icon={faMapMarkedAlt} 
            size="2x" 
            style={{ color: 'rgb(146, 234, 252)'}}
            />
            <textarea type="text" name="address" placeholder="Your Address"/>
          </div>
          <div className="submit">
            <input type="submit" value="Submit"/>
          </div>
        </form>
      </div>
    );
  }
}

export default UserInfo;
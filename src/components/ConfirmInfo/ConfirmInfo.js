//
import '../../sass/component/ConfirmInfo.scss';
//
import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faUserTag,
  faIdCardAlt,
  faMapMarkedAlt
} from '@fortawesome/free-solid-svg-icons';

class ConfirmInfo extends Component {
  onCancel = () => {
    console.log('cancel i am action')
  }
  confirmSurvey = () => {
    console.log('Confirm i am action')
  }
  render() {
    return (
      <div className="confirm-info">
        <p className="main-title"><strong>Please Check</strong> Your Information :</p>
        <p className="sub-title">after confirm you can not change your information.</p>
        <div className="review-form">
            
          <div className="row-info">
            <label>
              <FontAwesomeIcon 
            className="icon"
            icon={faUser} 
            size="1x" 
            style={{ color: 'rgb(146, 234, 252)', marginRight: '1.5rem'}}
            />
              First Name</label>
            <div>John</div>
          </div>
          <hr/>
          <div className="row-info">
            <label>
              <FontAwesomeIcon 
            className="icon"
            icon={faUserTag} 
            size="1x" 
            style={{ color: 'rgb(146, 234, 252)', marginRight: '0.9rem'}}
            />
              Last Name</label>
            <div>Doe</div>
          </div>
          <hr/>
          <div className="row-info">
            <label>
              <FontAwesomeIcon 
            className="icon"
            icon={faIdCardAlt} 
            size="1x" 
            style={{ color: 'rgb(146, 234, 252)', marginRight: '1.1rem'}}
            />
              National Code</label>
            <div>174 - 39 - 2555</div>
          </div>
          <hr/>
          <div className="row-info">
            <label>
              <FontAwesomeIcon 
            className="icon"
            icon={faMapMarkedAlt} 
            size="1x" 
            style={{ color: 'rgb(146, 234, 252)', marginRight: '1.1rem'}}
            />
              Address</label>
            <div>no 2, Dubai , U.A.E </div>
          </div>
        </div>
        <div className="button-row">
          <button className="back" onClick={this.onCancel}>
            Back
          </button>
          <button className="confirm" onClick = {() => this.confirmSurvey('formValues')}> 
            Confirm
          </button>
        </div>
      </div>
    );
  }
}

export default ConfirmInfo;
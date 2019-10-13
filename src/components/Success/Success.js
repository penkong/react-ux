//
import '../../sass/component/Success.scss'
//
import React, { Component } from 'react';
import Card from '../Card/Card';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudDownloadAlt } from '@fortawesome/free-solid-svg-icons';
class Success extends Component {
  render() {
    return (
      <div className="temporary">
        <Card>
          <div className="success">
            <div className="cloud">
              <FontAwesomeIcon 
              className="icon"
              icon={faCloudDownloadAlt} 
              size="10x" 
              style={{ color: '#22DE87'}}
              />
            </div>
            <div className="text-success">
              <p>Well Done!</p>
              <p>see you later</p>
            </div>
          </div>
        </Card>
      </div>
    );
  }
}

export default Success;
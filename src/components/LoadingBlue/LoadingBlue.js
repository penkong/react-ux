//
import '../../sass/component/LoadingBlue.scss';
//
import React, { Component } from 'react';
import Card from '../Card/Card';

class LoadingBlue extends Component {
  render() {
    return (
      <div className="temporary">
        <Card>
          <div className="load-wrap">
            <div className="load">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </div>
        <div className="loading"> Loading </div>
        </Card>
      </div>
    );
  }
}

export default LoadingBlue;
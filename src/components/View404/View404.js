//
import '../../sass/component/View-404.scss';
//
import React, { Component } from 'react';

class View404 extends Component {
  render() {
    return (
      <div className="style-404">
        <div className="eyes">
          <span></span>
          <span></span>
        </div>
        <div className="mouth"></div>
        <div className="text-404">
          <p>404</p>
          <p>others waiting for you!</p>
          <p>please <a href="/">Back ...</a></p>
        </div>
      </div>
    );
  }
}

export default View404;
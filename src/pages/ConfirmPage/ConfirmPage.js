//
import '../../sass/pages/ConfirmPage.scss';
//
import React, { Component } from 'react';
import BigCard from '../../components/BigCard/BigCard';
import ConfirmInfo from '../../components/ConfirmInfo/ConfirmInfo';

class ConfirmPage extends Component {
  render() {
    return (
      <div className="confirm-page">
        <BigCard>
          <ConfirmInfo/>
        </BigCard>
      </div>
    );
  }
}

export default ConfirmPage;
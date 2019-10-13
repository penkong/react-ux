//
import '../../sass/pages/Page404.scss';
//
import React, { Component } from 'react';
import Card from '../../components/Card/Card';
import View404 from '../../components/View404/View404';
class Page404 extends Component {
  render() {
    return (
      <div className="v-404">
        <Card>
          <View404/>
        </Card>
      </div>
    );
  }
}

export default Page404;
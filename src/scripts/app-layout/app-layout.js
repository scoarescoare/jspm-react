'use strict';

import React from 'react';
import Sidebar from 'sidebar';
import Header from 'header';

export default
class AppLayout extends React.Component {

  render() {
    return (
        <div id="page-wrapper">
          <Sidebar />
          <Header />
        </div>
    );
  }
}

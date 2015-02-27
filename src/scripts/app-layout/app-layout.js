'use strict';

import React from 'react';
import Sidebar from './sidebar';
import Header from './header/header';

export default
class AppLayout extends React.Component {

  render() {
    return (
        <div id="page-wrapper">
          <Header />
          <Sidebar />
        </div>
    );
  }
}

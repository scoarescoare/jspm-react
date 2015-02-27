'use strict';

import React from 'react';
import HeaderSearch from './header-search';
import HeaderActions from './header-actions';

export default
class Header extends React.Component {

  render() {
    return (
        <header id="header-wrapper">
          <HeaderSearch/>
          <HeaderActions/>
        </header>
    );
  }
}

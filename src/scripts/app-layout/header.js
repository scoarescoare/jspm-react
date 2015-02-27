'use strict';

import React from 'react';

export default
class Header extends React.Component {

  render() {
    return (
        <header id="header-wrapper">
          <span className="header-search">
            <i className="fa fa-search search-icon header-icon"></i>
            Search for contract, counterparty, or category
          </span>
          <span className="header-actions">
            <span className="header-icon">
              <i className="fa fa-caret-square-o-down"></i>
            </span>
            <span className="header-icon">
              <i id="header-icon-calendar" className="fa fa-calendar"></i>
            </span>
            <span className="header-icon">
              <i className="fa fa-th"></i>
            </span>
          </span>
        </header>
    );
  }
}

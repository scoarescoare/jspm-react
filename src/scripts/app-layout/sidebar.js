'use strict';

import React from 'react';

export default
class Sidebar extends React.Component {

  render() {
    return (
        <nav id="sidebar-wrapper">
          <div id="sidebar-scroll-container">
            <div className="sidebar-profile">
              <img alt="sidebar profile image" className="sidebar-profile-image" src="build/assets/images/man-profile-pic.jpg"/>

              <div className="sidebar-profile-name">
                Andy Nelson&nbsp;
                <i className="fa fa-chevron-down profile-icon"></i>
              </div>
            </div>
            <section id="sidebar-main">
              <h6>main</h6>
              <ul>
                <li>
                  <i className="fa fa-home"></i>
                  <span>Home</span>
                </li>
                <li>
                  <i className="fa fa-th-large"></i>
                  <span>Dashboard</span>
                </li>
                <li>
                  <i className="fa fa-briefcase"></i>
                  <span>Contracts</span>
                </li>
              </ul>
            </section>
            <section id="sidebar-admin">
              <h6>main</h6>
              <ul>
                <li>
                  <i className="fa fa-home"></i>
                  <span>Home</span>
                </li>
                <li>
                  <i className="fa fa-th-large"></i>
                  <span>Dashboard</span>
                </li>
                <li>
                  <i className="fa fa-briefcase"></i>
                  <span>Contracts</span>
                </li>
              </ul>
            </section>
            <section id="sidebar-tags">
              <h6>main</h6>
              <ul>
                <li>
                  <i className="fa fa-home"></i>
                  <span>Home</span>
                </li>
                <li>
                  <i className="fa fa-th-large"></i>
                  <span>Dashboard</span>
                </li>
                <li>
                  <i className="fa fa-briefcase"></i>
                  <span>Contracts</span>
                </li>
              </ul>
            </section>
          </div>
        </nav>
    );
  }
}

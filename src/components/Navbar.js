import React from 'react';

class Nav extends React.Component {
  render() {
    return (
      <div className="red-section" id="title">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg navbar-dark">
            {/* "navbar-expand-lg" in the nav tag will uncollapse the handburger 
        if you place navbar-brand below the button the brand will float right, 
              above the button the brand stays to left*/}
            <a className="navbar-brand" href="#">
              tindog
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              {/* ml-auto (margin left auto class floats the items to the right)  */}
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#footer">
                    Contact
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#pricing">
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#cta">
                    Download
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
export default Nav;

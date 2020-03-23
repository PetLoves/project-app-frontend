import React from 'react';
import heartlogo from '../images/heartlogo.png';
import logowhite from '../images/petloveswhite.png';
class Nav extends React.Component {
  render() {
    return (
      <section className="top-section" id="title">
        <div classNameName="container-fluid top">
          <nav className="navbar navbar-expand-lg navbar-dark">
            <img className="navbar-logo" src={logowhite} alt="PetLoves-logo" />
            <a className="navbar-brand" href="">
              PetLoves
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
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="">
                    <i
                      className="far fa-heart fa-2x"
                      style={{ marginRight: '10px' }}
                    ></i>
                    <i className="far fa-user fa-2x "></i>
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <div className="row">
            <div className="col-md-6">
              <h1 className="big-heading">Find the love of your life.</h1>
              <a
                type="button"
                className="btn btn-outline-light btn-lg"
                href="#features"
              >
                Search Now
              </a>
            </div>

            <div className="col-md-6">
              <img className="title-image" src={heartlogo} alt="logo" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Nav;

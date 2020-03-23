import React from 'react';
import heartlogo from '../images/heartlogo.png';
import logowhite from '../images/petloveswhite.png';
class Nav extends React.Component {
  render() {
    return (
      <section class="top-section" id="title">
        <div class="container-fluid top">
          <nav class="navbar navbar-expand-lg navbar-dark">
            <img class="navbar-logo" src={logowhite} alt="PetLoves-logo" />
            <a class="navbar-brand" href="">
              PetLoves
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                  <a class="nav-link" href="">
                    <i
                      class="far fa-heart fa-2x"
                      style={{ marginRight: '10px' }}
                    ></i>
                    <i class="far fa-user fa-2x "></i>
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <div class="row">
            <div class="col-md-6">
              <h1 class="big-heading">Find the love of your life.</h1>
            </div>

            <a
              type="button"
              className="btn btn-outline-light btn-lg"
              href="#features"
            >
              Search Now
            </a>
          </div>
          <div className="col-md-6">
            <img class="title-image" src={heartlogo} alt="logo" />
          </div>
        </div>
      </section>
    );
  }
}
export default Nav;

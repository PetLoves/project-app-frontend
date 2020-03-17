import React from 'react';
import heartlogo from '../images/heartlogo.png';

class Nav extends React.Component {
  render() {
    return (
      <section class="red-section" id="title">
        <div class="container-fluid top">
          <nav class="navbar navbar-expand-lg navbar-dark">
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
                {/* <li class="nav-item">
                  <a class="nav-link" href="#footer">
                    Contact
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#pricing">
                    Pricing
                  </a>
                </li> */}
                <li class="nav-item">
                  <a class="nav-link" href="#cta">
                    <i class="far fa-heart fa-2x"></i>
                    {/* <img class="small-logo" src={heartlogo} alt="logo" /> */}
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <div class="row">
            <div class="col-md-6">
              <h1 class="big-heading">Find the love of your life.</h1>
              <button type="button" class="btn btn-outline-light btn-lg">
                Search Now
              </button>
              {/* <button
                type="button"
                class="btn btn-outline-light btn-lg downloadbutton"
              >
                <i class="fab fa-google-play"></i>
                Download
              </button> */}
            </div>
            <div class="col-md-6">
              <img class="title-image" src={heartlogo} alt="logo" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Nav;

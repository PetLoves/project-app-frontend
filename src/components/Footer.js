import React from 'react';
import logo from '../images/petfooter.jpg';

class Footer extends React.Component {
  render() {
    return (
      // Footer
      <footer class="page-footer font-small special-color-dark pt-4">
        {/* Footer Elements  */}
        <div className="container">
          {/* Social buttons */}
          <ul className="list-unstyled list-inline text-center">
            <li className="list-inline-item">
              <a className="btn-floating btn-fb mx-1">
                <i className="fab fa-facebook-f"> </i>
              </a>
            </li>
            <li className="list-inline-item">
              <a className="btn-floating btn-tw mx-1">
                <i className="fab fa-twitter"> </i>
              </a>
            </li>
            <li class="list-inline-item">
              <a class="btn-floating btn-gplus mx-1">
                <i class="fab fa-google-plus-g"> </i>
              </a>
            </li>
            <li class="list-inline-item">
              <a class="btn-floating btn-li mx-1">
                <i class="fab fa-linkedin-in"> </i>
              </a>
            </li>
            <li className="list-inline-item">
              <a className="btn-floating btn-dribbble mx-1">
                <i className="fab fa-dribbble"> </i>
              </a>
            </li>
          </ul>
          {/* Social buttons */}
        </div>
        {/* Footer Elements */}

        {/* Copyright */}
        <div className="footer-copyright text-center py-3">
          Copyright © {new Date().getFullYear()}
          <a href=""> PetLoves</a>
        </div>
        {/* Copyright */}
      </footer>
    );
  }
}

export default Footer;

{
  /* <div className="row">
        <div className="footer col-1">
          <img className="footer-img" src={logo} alt="" />
        </div>
      </div> */
}

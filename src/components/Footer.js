import React from 'react';
import logowhite from '../images/petloveswhite.png'

class Footer extends React.Component {
  render() {
    return (
      // Footer
      <footer class="footer-section" id="footer">
        <img class="footer-logo" src={logowhite} alt="PetLoves-logo" />
        <span class="footer-brand">PetLoves</span>

        <i class="fab fa-twitter spaced"></i>
        <i class="fab fa-facebook-f spaced"></i>
        <i class="fab fa-instagram spaced"></i>
        <i class="fas fa-envelope spaced"></i>
        <p class="smaller">© Copyright 2020 PetLoves</p>
      </footer>
    );
  }
}

export default Footer;

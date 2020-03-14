import React from 'react';
import logo from '../images/petfooter.jpg';

class Footer extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="footer col-1">
          <img src={logo} alt="" />
        </div>
      </div>
    );
  }
}

export default Footer;

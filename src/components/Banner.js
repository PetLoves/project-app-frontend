import React from 'react';
import octoheart from '../images/octoheart.png';
import petloveslogo from '../images/petloveslogo.png';

class Banner extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-1">
          <img className="logo" alt="" src={petloveslogo} />
        </div>
        <div className="appName col-9">
          <h1>PetLoves</h1>
        </div>
        <div className="col-1">
          <a href="https://img.icons8.com/cotton/64/000000/like--v1.png">
            <img
              src="https://img.icons8.com/cotton/64/000000/like--v1.png"
              className="img-responsive"
              id="heart"
              alt=""
            />
          </a>
        </div>
        <div className="col-1">
          <a href="https://img.icons8.com/material-outlined/48/000000/user--v1.png">
            <img
              src="https://img.icons8.com/material-outlined/48/000000/user--v1.png"
              alt=""
            />
          </a>
        </div>
      </div>
    );
  }
}

export default Banner;

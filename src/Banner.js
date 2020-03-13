import React from 'react';
import './Banner.css';
import githeart from './images/githeart.jpg';

class Banner extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-1">
          <img src={githeart} />
        </div>
        <div className="appName col-9">
          <h1>PetLoves</h1>
        </div>
        <div className="col-1">
          <a href="#">
          <img src="https://img.icons8.com/cotton/64/000000/like--v1.png" class="img-responsive" id="heart" />
          </a>
        </div>
        <div className="col-1">
          <a href="#">
          <img src="https://img.icons8.com/material-outlined/48/000000/user--v1.png"/>
          </a>
        </div>
      </div>
    );
  }
}

export default Banner;

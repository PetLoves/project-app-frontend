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
        <div className="col-9">
          <h1>PetLoves</h1>
        </div>
        <div className="col-1">HEART</div>
        <div className="col-1">USER</div>
      </div>
    );
  }
}

export default Banner;

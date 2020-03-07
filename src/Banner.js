import React from 'react';
import './Banner.css';
import githeart from './images/githeart.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Banner extends React.Component {
    render() {
      return (
        <div className="row">
          <div className="col-1">
            <img src={githeart} />
          </div>
          <div className="col-9">
            <h1>PetLovers</h1>
          </div>
          <div className="col-1">
            <FontAwesomeIcon
              icon="heart"
              size = "3x" 
            />
          </div>
          <div className="col-1">
            <FontAwesomeIcon
              icon="user"
              size = "3x"
            />
          </div>
        </div>
      );
    }
  }
  
export default Banner;
import React from 'react';
// import Modal from 'react-modal';
// import PropTypes from "prop-types";
// import PetDetails from './PetDetails.js';

class Card extends React.Component {

  // state = {
   
  // };

 

  render() {
    console.log(this.props);
    console.log(this.props.pets);

    return (
        <div className="col-md-4 card">
          <div class="card">
            <img class="card-img-top" src={this.props.img} alt="Card cap"></img>
            <div class="card-body">
              <h4 class="card-title">{this.props.name}</h4>
              <p class="card-text">{this.props.description}</p>
              <button class="toggle-button" id="centered-toggle-button">Learn more</button>
                  {/* <PetDetails onClose={this.showModal} show={this.props.show}>
                    Lorem ipsum dolar amet... I don't know Italian!
                  </PetDetails> */}
                </div>
              </div>
            </div>
      );
    }
  }
  // Modal.propTypes = {
  //   onClose: PropTypes.func.isRequired,
  //   show: PropTypes.bool.isRequired
  // };

  export default Card;

import React from 'react';
import Modal from 'react-modal';
import PropTypes from "prop-types";

class Card extends React.Component {
  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };

  render() {
    console.log(this.props);
    console.log(this.props.pets);
    
      return (

      // if (!this.props.show) {
      //   return null;
      // }
        <div className="col-md-4 card">
          <div class="card">
            <img class="card-img-top" src={this.props.img} alt="Card cap"></img>
            <div class="card-body">
              <h4 class="card-title">{this.props.name}</h4>
              <p class="card-text">{this.props.description}</p>
              <button class="toggle-button" id="centered-toggle-button" onClick={e => { this.showModal }}>Learn more
              <div class="modal" id="modal">
                <h2>Pet Details
                </h2>
                <div class="content">{this.props.children}</div>
                <div class="actions">
                  <button class="toggle-button" onClick={this.onClose}>
                    close
                  </button>
                </div>
              </div>
              </button>
            </div>
          </div>
        </div>
      );
    };
  Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired
  };

  export default Card;

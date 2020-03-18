import React from 'react';
import Modal from 'react-modal';
import PropTypes from "prop-types";

class PetDetails extends React.Component {
  
  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };default

  render() {
    if (!this.props.show) {
      return null;
    };
    return (
<<<<<<< HEAD
      <div class="modal" id="modal">
        <h2>Modal Window</h2>
        <div class="content">{this.props.children}</div>
        <div class="actions">
          <button class="toggle-button" onClick={this.onClose}>
            close
          </button>
=======
      <div className="col-md-4 card">
        <div class="card">
          <img class="card-img-top" src={this.props.img} alt="Card cap"></img>
          <div class="card-body">
            <h4 class="card-title">{this.props.name}</h4>
            <p class="card-text">{this.props.description}</p>
            <Button className="moreDetails">Learn more</Button>
          </div>
>>>>>>> e41959ddb428941c072448f46926077e3fab64c1
        </div>
      </div>
    );
  }
}
Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired
};

export default PetDetails;

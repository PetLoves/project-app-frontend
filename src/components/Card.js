import React from 'react';
import Modal from 'react-modal';
import PropTypes from "prop-types";

class Card extends React.Component {

  state = {
    show: false
  };

  showModal = e => {
    this.setState({
      show: !this.state.show
    });
  };

  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };

  render() {
    console.log(this.props);
    console.log(this.props.pets);

    if (!this.props.show) {
      return null;
    };

    return (
        <div className="col-md-4 card">
          <div class="card">
            <img class="card-img-top" src={this.props.img} alt="Card cap"></img>
            <div class="card-body">
              <h4 class="card-title">{this.props.name}</h4>
              <p class="card-text">{this.props.description}</p>
              <button class="toggle-button" id="centered-toggle-button" onClick={e => { this.showModal }}>Learn more</button>
                  {/* <Modal onClose={this.showModal} show={this.state.show}>
                    Lorem ipsum dolar amet... I don't know Italian!
                  </Modal> */}
                </div>
              </div>
            </div>
      );
    }
  }
  Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired
  };

  export default Card;
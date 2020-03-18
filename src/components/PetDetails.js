import React from "react";
import PropTypes from "prop-types";

export default class PetDetails extends React.Component {
  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };
  render() {
    console.log(`propsshowing: ${this.props.show}`);
    if (!this.props.show) {
      return null;
    }
    return (
      <div className="petdetails" id="petdetails">
        <h2>{this.props.name}</h2>
        <div className="content">{this.props.children}</div>
        <div className="actions">
          <button className="toggle-button" onClick={this.onClose}>
            close
          </button>
        </div>
      </div>
    );
  }
}

PetDetails.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired
};

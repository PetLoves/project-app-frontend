import React from 'react';
import './App.css';

class QuizQuestion extends React.Component {
  state = {
    hasGarden: true
    // numberOfGuests: 2
  };

  handleInputChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className="container">
        <form>
          <label>
            <input
              name="isGoing"
              type="checkbox"
              checked={this.state.hasGarden}
              onChange={this.handleInputChange}
            />
            <span> Do you have a garden?</span>
          </label>
          {/* <br />
          <label>
            Numeric Value Question:
            <input
              name="numberOfGuests"
              type="number"
              value={this.state.numberOfGuests}
              onChange={this.handleInputChange}
            />
          </label> */}
        </form>
      </div>
    );
  }
}

export default QuizQuestion;

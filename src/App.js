import React from 'react';
import logo from './logo.svg';
import './App.css';
import CustomisedSlider from './slider.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="container">
        <div className="App">
          <h1>PetLoves</h1>

          {/* **Boolean**
        Do you have a garden?
        Will I be sharing your home with children?
        Will I be sharing you with other pets?

        **Non-boolean**
        How much training can you commit to?
        1. I'm willing to tackle behavioral issues such as anxiety and leash aggression
        2. Some house-training and basic commands are fine
        4. I'd prefer to not bother with training

        How often will I be left at home alone? 
        1. 0-10 hours per week 
        2. 10-25 hours per week 
        3. 25-40 hours per week.

        What's your activity level? 
        1. I go running most days and hiking at the weekend
        2. Daily walks around 2-4 miles are great
        3. I like to potter around in the garden or occassionally go for a walk
        4. I prefer or am unable to leave the house much. */}
        </div>
        <form>
          <label>
            Boolean Question:
            <input
              name="isGoing"
              type="checkbox"
              checked={this.state.isGoing}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            Numeric Value Question:
            <input
              name="numberOfGuests"
              type="number"
              value={this.state.numberOfGuests}
              onChange={this.handleInputChange}
            />
          </label>
        </form>
      </div>
    );
  }
}

export default App;

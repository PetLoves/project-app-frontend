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

  // Checkboxes are for selecting one or several options in a list
  // radios are for selecting one option from many

  render() {
    return (
      <form className="form-style">
        <div className="form-group">
          <label for="formGroupExampleInput" className="col-form-label-lg">
            What's your name?
          </label>

          <div className="col-sm-10 move-input ">
            <input
              type="text"
              className="form-control form-control-lg"
              id="formGroupExampleInput"
              placeholder="First Name"
            />
          </div>
        </div>

        {/* <div className="form-group row">
          <label for="inputPassword3" className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              className="form-control"
              id="inputPassword3"
            />
          </div>
        </div> */}

        <fieldset className="form-group">
          <div className="row">
            <legend className="col-form-label col-sm-2 pt-0">
              Radios are for selecting one option from many
            </legend>
            <div className="col-sm-10">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gridRadios"
                  id="gridRadios1"
                  value="option1"
                  checked
                />
                <label className="form-check-label" for="gridRadios1">
                  First radio
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gridRadios"
                  id="gridRadios2"
                  value="option2"
                />
                <label className="form-check-label" for="gridRadios2">
                  Second radio
                </label>
              </div>
            </div>
          </div>
        </fieldset>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="defaultCheck1"
          />
          <label className="form-check-label" for="defaultCheck1">
            Do you have a garden for me to roam free?
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="defaultCheck2"
          />
          <label className="form-check-label" for="defaultCheck2">
            Do you have young children?
          </label>
        </div>
        <div className="headspace">
          <label for="customRange2">How active can you be with me?</label>
          <input
            type="range"
            class="custom-range"
            min="1 "
            max="4"
            id="custom</input>Range2"
          />
        </div>
        <div className="form-group row">
          <div className="col-sm-10">
            <button type="submit" className="btn btn-primary pet-button">
              Find your Pet Love
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default QuizQuestion;

{
  /* <div className="container">
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
</div>  */
}

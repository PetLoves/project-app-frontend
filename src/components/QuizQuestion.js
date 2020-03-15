import React from 'react';

class QuizQuestion extends React.Component {
  state = {
    hasGarden: 0
  };

  submitFunc = event => {
    this.props.findPetFunc(this.state.hasGarden);
  };

  hasGardenFunc = event => {
    this.setState({
      hasGarden: event.target.value
    });
    console.log(`test: ${event.target.value}`);
  };

  render() {
    return (
      <form className="form-style">
        <div className="form-group">
          <label htmlFor="formGroupExampleInput" className="col-form-label-lg">
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

        {/* Radio Buttons */}
        <fieldset className="form-group">
          <div className="row">
            <legend className="col-form-label col-sm-6 pt-0">
              Do you have a garden?
            </legend>
            <div className="col-sm-6">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="hasGarden"
                  id="gridRadios"
                  value="1"
                  onClick={this.hasGardenFunc}
                />
                <label className="form-check-label" htmlFor="gridRadios1">
                  Yes
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="hasGarden"
                  id="gridRadios2"
                  value="0"
                  onClick={this.hasGardenFunc}
                />
                <label className="form-check-label" htmlFor="gridRadios2">
                  No
                </label>
              </div>
            </div>
          </div>
        </fieldset>

        {/* <fieldset className="form-group">
          <div className="row">
            <legend className="col-form-label col-sm-6 pt-0">
              Do you have children?
            </legend>
            <div className="col-sm-6">
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
                  Yes
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
                  No
                </label>
              </div>
            </div>
          </div>
        </fieldset> */}

        {/* <div className="row">
          <label className="form-check-label" for="defaultCheck1">
            Do you have a garden for me to roam free?
          </label>
        </div>
        <div className="row">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value="1"
              id="garden1"
            />
            <label for="garden1">Yes</label>
          </div>
          <input
            className="form-check-input"
            type="checkbox"
            value="0"
            id="garden2"
          />
          <label for="garden2">No</label>
        </div>

        <div className="row">
          <label className="form-check-label" for="defaultCheck1">
            Do you have any children?
          </label>
        </div>
        <div className="row">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value="1"
              id="children1"
            />
            <label for="children1">Yes</label>
          </div>
          <input
            className="form-check-input"
            type="checkbox"
            value="0"
            id="children2"
          />
          <label for="children2">No</label>
        </div> */}

        <div className="row">
          <label htmlFor="activityLevel">What's your activity level?</label>
          <input
            type="range"
            className="custom-range"
            min="1"
            max="4"
            step="1"
            id="custom"
          />
          <div className="rangeWrapper">
            <p className="rangeLabel selected">Don't leave the house</p>
            <p className="rangeLabel">Pottering in the garden</p>
            <p className="rangeLabel">Daily walks</p>
            <p className="rangeLabel">Running and hiking</p>
          </div>
        </div>

        <div className="form-group row">
          <div className="col-sm-10">
            <button
              type="submit"
              className="btn btn-primary pet-button"
              onClick={this.submitFunc}
            >
              Find your Pet Love
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default QuizQuestion;

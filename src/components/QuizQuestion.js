import React from 'react';

class QuizQuestion extends React.Component {
  state = {
    hasGarden: 0,
    hasChildren: 0,
    activitylevel: 1,
    companyNeeded: 4,
    label: 4
  };

  submitFunc = event => {
    this.props.findPetFunc(
      this.state.hasGarden,
      this.state.hasChildren,
      this.state.activitylevel,
      this.state.companyNeeded
    );
    event.preventDefault();
  };

  hasGardenFunc = event => {
    this.setState({
      hasGarden: event.target.value
    });
    console.log(`hasGarden: ${event.target.value}`);
  };

  hasChildFunc = event => {
    this.setState({
      hasChildren: event.target.value
    });
    console.log(`hasChildren: ${event.target.value}`);
  };

  activityFunc = event => {
    this.setState({
      activitylevel: 5 - event.target.value,
      label: event.target.value
    });
    console.log(`activitylevel: ${5 - event.target.value}`);
    console.log(`label: ${event.target.value}`);
  };

  companyFunc = event => {
    this.setState({
      companyNeeded: event.target.value
    });
    console.log(`companyNeeded: ${event.target.value}`);
  };

  render() {
    const ACTIVITY_LEVELS = [
      "Don't leave the house",
      'Pottering in the garden',
      'Daily walks',
      'Running and hiking'
    ];

    const COMPANY_NEEDED = [
      'Almost all the time',
      'I leave the house for short spells',
      'I might be out for long periods',
      "I'm out most of the day and weekend"
    ];

    return (
      <section class="white-section" id="features">
        <div class="container-fluid">
          <form className="form-style">
            <div className="form-group">
              <label
                htmlFor="formGroupExampleInput"
                className="col-form-label-lg"
              >
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
                <legend className="col-form-label-lg col-sm-6 pt-0">
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

            <fieldset className="form-group">
              <div className="row">
                <legend className="col-form-label-lg col-sm-6 pt-0">
                  Do you have children?
                </legend>
                <div className="col-sm-6">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="hasChildren"
                      id="gridRadios1"
                      value="1"
                      onClick={this.hasChildFunc}
                    />
                    <label className="form-check-label" for="gridRadios1">
                      Yes
                    </label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="hasChildren"
                      id="gridRadios2"
                      value="0"
                      onClick={this.hasChildFunc}
                    />
                    <label className="form-check-label" for="gridRadios2">
                      No
                    </label>
                  </div>
                </div>
              </div>
            </fieldset>

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
              <label
                htmlFor="activityLevel"
                className="col-form-label-lg col-m-6 pt-0"
              >
                What's your activity level?
              </label>
              <input
                type="range"
                className="custom-range"
                min="1"
                max="4"
                step="1"
                id="activity"
                onChange={this.activityFunc}
              />
              <div className="rangeWrapper col-m-6 pt-0">
                <p className="rangeLabel selected">
                  {ACTIVITY_LEVELS[this.state.label - 1]}
                </p>
              </div>
            </div>

            <div className="row">
              <label
                htmlFor="companyNeeded"
                className="col-form-label-lg col-m-6 pt-0"
              >
                How much time can you spend with me?
              </label>
              <input
                type="range"
                className="custom-range"
                min="1"
                max="4"
                step="1"
                id="company"
                onChange={this.companyFunc}
              />
              <div className="rangeWrapper col-m-6 pt-0">
                <p className="rangeLabel selected">
                  {COMPANY_NEEDED[this.state.companyNeeded - 1]}
                </p>
              </div>
            </div>

            <div className="form-group row justify-content-md-center">
              <div className="col-sm-10 text-center">
                <button
                  // type="submit"
                  className="btn btn-outline-dark btn-lg pet-button"
                  onClick={this.submitFunc}
                >
                  Find your Pet Love
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default QuizQuestion;

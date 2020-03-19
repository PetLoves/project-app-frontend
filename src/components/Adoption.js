import React from 'react';

class Adoption extends React.Component {
  render() {
    return (
      <section className="white-section" id="adoption">
        <h2 className="section-heading">
          Find out about what it means to have a pet.
        </h2>
        <p>What does your animal need from you?</p>

        <div className="container">
          <div className="row">
            <div className="adoption-column col-lg-4">
              <div className="card text-center">
                <div className="card-header">
                  <h3 className="adoption-title">Dogs</h3>
                </div>

                <div
                  className="card-body"
                  style={{ backgroundColor: '#F5CD6A' }}
                >
                  <i class="fas fa-dog fa-10x"></i>
                  <button
                    type="button"
                    className="btn btn-lg btn-dark btn-block animal-button"
                  >
                    Find out more
                  </button>
                </div>
              </div>
            </div>

            <div className="adoption-column col-lg-4 col-md-6">
              <div className="card text-center">
                <div className="card-header">
                  <h3 className="adoption-title">Cats</h3>
                </div>
                <div
                  className="card-body"
                  style={{ backgroundColor: '#89C58F' }}
                >
                  <i class="fas fa-cat fa-10x"></i>
                  <button
                    type="button"
                    className=" btn btn-lg btn-dark btn-block animal-button"
                  >
                    Find out more
                  </button>
                </div>
              </div>
            </div>

            <div class="adoption-column col-lg-4 col-md-6">
              <div class="card text-center">
                <div class="card-header">
                  <h3 class="adoption-title">Birds</h3>
                </div>
                <div class="card-body" style={{ backgroundColor: '#F4A8B9' }}>
                  <i class="fas fa-dove fa-10x"></i>
                  <button
                    type="button"
                    class="btn btn-lg btn-dark btn-block animal-button"
                  >
                    Find out more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Adoption;

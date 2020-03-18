import React from 'react';
import PetDetails from './PetDetails.js';

class Card extends React.Component {

  state = {
    show: false
  };

  showModal = e => {
    this.setState({
      show: !this.state.show
    });
  };

  render() {
    console.log(this.props);
    console.log(this.props.pets);

    return (
      <div className="col-md-4 card">
        <div class="card">
          <img class="card-img-top" src={this.props.img} alt="Card cap"></img>
          <div class="card-body">
            <h4 class="card-title">{this.props.name}</h4>
            <p class="card-text">{this.props.description}</p>
            <button
              class="toggle-button"
              id="centered-toggle-button"
              onClick={e => { this.showModal(e); }}
            >Learn more</button>
            <PetDetails name={this.props.name} onClose={this.showModal} show={this.state.show}>
              {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
              deserunt corrupti, ut fugit magni qui quasi nisi amet repellendus non
              fuga omnis a sed impedit explicabo accusantium nihil doloremque
              consequuntur. */}
              <p><h6>Color</h6>{this.props.color}</p>
              <p><h6>Age</h6>{this.props.age}</p>
              <p><h6>Sex</h6>{this.props.sex}</p>
              
            </PetDetails>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;

import React from 'react';
import blue from './images/blue.jpeg';

class Card extends React.Component {
    render() {
        console.log(this.props)
        console.log(this.props.pets)
      return (

        <div className="col-md-4 card">
        <div class="card">
            <img class="card-img-top" src={this.props.img} alt="Card image cap"></img>
            <div class="card-body">
                <h4 class="card-title">{this.props.name}</h4>
                <p class="card-text">{this.props.description}</p>
                {/*Button goes here */}
            </div>
        </div>
        </div>
      );
    }
  }
  
export default Card;
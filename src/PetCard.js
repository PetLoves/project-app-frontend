import React from 'react';
import './PetCard.css';
import Card from './Card.js';

class PetCard extends React.Component {
  render() {
    console.log(this.props.pets);

    return (
      <div className="row">
        {this.props.pets.map(animal => {
          return <Card name={animal.name} description={animal.description} />;
        })}
      </div>
    );
  }
}

export default PetCard;

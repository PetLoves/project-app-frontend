import React from 'react';

import Card from './Card.js';

class PetCard extends React.Component {
  render() {
    console.log(this.props.pets);

    return (
      <div className="row petCard">
        {this.props.pets.map(animal => {
          return (
            <Card
              name={animal.name}
              description={animal.description}
              img={animal.image_path}
            />
          );
        })}
      </div>
    );
  }
}

export default PetCard;

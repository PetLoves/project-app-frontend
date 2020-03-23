import React from 'react';

import Card from './Card.js';

class PetCard extends React.Component {
  render() {
    // console.log(this.props.pets);

    return (
      <div className="row petCard" id="petcard">
        {this.props.pets.map(animal => {
          return (
            <Card
              name={animal.name}
              description={animal.description}
              img={animal.image_path}
              color={animal.color}
              sex={animal.sex}
              age={animal.age}
            />
          );
        })}
      </div>
    );
  }
}

export default PetCard;

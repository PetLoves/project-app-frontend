import React from 'react';
import Card from './Card.js';

class PetDetails extends React.Component {

  render() {
    console.log(this.props.pets);

    return (
      <div className="row petDetails">
        {this.props.pets.map(details => {
          return <Details name={animal.name} description={animal.description} img={animal.image_path}/>;
        })}
      </div>
    );
  }
}

export default PetDetails;

import React from 'react';
import './PetCard.css';
import Card from './Card.js'

class PetCard extends React.Component {
    render() {
        console.log(this.props.pets)
        console.log(this.pets)
      return (
        <div className="row">
            {this.props.pets.map((animal) => {
                return (
                    <Card
                        name = {animal.name}
                        description = {animal.description}
                        image = {animal.image}
                    />
                )
                })
            }
        </div>
      );
    }
  }
  
export default PetCard;
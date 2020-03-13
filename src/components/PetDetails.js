import React from 'react';
import './PetCard.css';
import Button from "Button.js"

class PetDetails extends React.Component {

    render() {
        console.log(this.props.pets);

        return (
            <div className="col-md-4 card">
                <div class="card">
                    <img class="card-img-top" src={this.props.img} alt="Card image cap"></img>
                    <div class="card-body">
                        <h4 class="card-title">{this.props.name}</h4>
                        <p class="card-text">{this.props.description}</p>
                        <Button>Learn more</Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default PetDetails;
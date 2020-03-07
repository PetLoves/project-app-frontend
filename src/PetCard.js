import React from 'react';
import './PetCard.css';
import tiger from './images/tiger.jpg';
import panda from './images/panda.jpg';
import bear from './images/bear.jpg';
import blue from './images/blue.jpeg';
import special from './images/special.jpeg';
import shay from './images/shay.jpeg';

class PetCard extends React.Component {
    render() {
      return (
        <div className="row">
            <div className="col-md-4 card">
                <div class="card">
                    <img class="card-img-top" src={blue} alt="Card image cap"></img>
                    <div class="card-body">
                        <h4 class="card-title">Blue</h4>
                        <p class="card-text">This gorgeous lad is a little wary at first, but when comfortable he loves a fuss and cuddle.</p>
                        <a href="#" class="btn btn-light">Learn more</a>
                    </div>
                </div>
            </div>
            <div className="col-md-4 card">
                <div class="card">
                    <img class="card-img-top" src={special} alt="Card image cap"></img>
                    <div class="card-body">
                        <h4 class="card-title">Special</h4>
                        <p class="card-text">Special lives up to his name because he truly is a special boy! He's a very gentle soul with a lovely nature</p>
                        <a href="#" class="btn btn-light">Learn more</a>
                    </div>
                </div>
            </div>
            <div className="col-md-4 card">
                <div class="card">
                    <img class="card-img-top" src={shay} alt="Card image cap"></img>
                    <div class="card-body">
                        <h4 class="card-title">Shay</h4>
                        <p class="card-text">Shay is now looking for a loving new home with a group of ladies he can call his own and look after.</p>
                        <a href="#" class="btn btn-light">Learn more</a>
                    </div>
                </div>
            </div>
            <div className="col-md-4 card">
                <div class="card">
                    <img class="card-img-top" src={panda} alt="Card image cap"></img>
                    <div class="card-body">
                        <h5 class="card-title">Panda</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-light">Learn more</a>
                    </div>
                </div>
            </div>
            <div className="col-md-4 card">
                <div class="card">
                    <img class="card-img-top" src={bear} alt="Card image cap"></img>
                    <div class="card-body">
                        <h5 class="card-title">Bear</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-light">Learn more</a>
                    </div>
                </div>
            </div>
            <div className="col-md-4 card">
                <div class="card">
                    <img class="card-img-top" src={tiger} alt="Card image cap"></img>
                    <div class="card-body">
                        <h5 class="card-title">Tiger</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-light">Learn more</a>
                    </div>
                </div>
            </div>
        </div>
      );
    }
  }
  
export default PetCard;
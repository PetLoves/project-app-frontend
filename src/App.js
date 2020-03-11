import React from 'react';
import logo from './logo.svg';
import './App.css';
import Banner from './Banner';
import PetCard from './PetCard';
import questions from './questions';
class App extends React.Component {
  state = {
    animals: [
      {
        name: 'Special',
        description:
          "Special lives up to his name because he truly is a special boy! He's a very gentle soul with a lovely nature"
      },
      {
        name: 'Ozzie',
        description:
          'This gorgeous lad is a little wary at first, but when comfortable he loves a fuss and cuddle.'
      },
      {
        name: 'Pepper',
        description:
          'Shay is now looking for a loving new home with a group of ladies he can call his own and look after.'
      }
    ],
    showResult: false
  };

  info = animal => {
    return (
      <div>
        {animal.name}: {animal.species}
        {/* <p>{animal.species}</p> */}
      </div>
    );
  };

  render() {
    return (
      <div className="App">
        <Banner />
        <div className="container">
          <PetCard pets={this.state.animals} />
        </div>
      </div>
    );
  }
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import Banner from './Banner';
import PetCard from './PetCard';

const animals = [
  {
    name: 'Special',
    description: "Special lives up to his name because he truly is a special boy! He's a very gentle soul with a lovely nature"
  },
  {
    name: 'Ozzie',
    description: "This gorgeous lad is a little wary at first, but when comfortable he loves a fuss and cuddle."
  },
  {
    name: 'Pepper',
    description: "Shay is now looking for a loving new home with a group of ladies he can call his own and look after."
  }
];

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <Banner />
        <div className="container">
          <PetCard pets={animals}/>
        </div>
      </div>
    );
  }
}

export default App;

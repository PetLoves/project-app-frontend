import React from 'react';
import './App.css';

const animals = [
  {
    id: 1,
    name: 'Louis',
    species: 'dog'
    // breed: ,
    // colour: ,
    // sex: female,
    // companionship: 5,
    // child_friendly: ,
    // animal_friendly: ,
    // garden_required:
  },
  {
    id: 2,
    name: 'Ozzie',
    species: 'dog'
  },
  {
    id: 3,
    name: 'Pepper',
    species: 'dog'
  }
];

const info = animal => {
  return (
    <div>
      {animal.name}: {animal.species}
      {/* <p>{animal.species}</p> */}
    </div>
  );
};
class App extends React.Component {
  render() {
    return <div>{animals.map(info)}</div>;
  }
}

export default App;

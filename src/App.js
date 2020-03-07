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

const questions = [
  {
    id: 1,
    question: "Do you have a garden?"
  }
  {
    id: 2,
    question: "Will I be sharing your home with children?"
  }
  {
    id: 3,
    question: "How much training can you commit to?"
  }
  {
    id: 4,
    question: "How often will I be left home alone?"
  }
  {
    id: 5,
    question: "What's your activity level?"
  }
]

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

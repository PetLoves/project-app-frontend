import React from 'react';
import './App.css';
import Question from './components/Question';

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
  },
  {
    id: 2,
    question: "Will I be sharing your home with children?"
  },
  {
    id: 3,
    question: "How much training can you commit to?"
  },
  {
    id: 4,
    question: "How often will I be left home alone?"
  },
  {
    id: 5,
    question: "What's your activity level?"
  }
]

const answers = [
  {
    id: 1,
    answer0: "Yes",
    answer1: "No" 
  },
  {
    id: 2,
    answer0: "Yes",
    answer1: "No"
  },
  {
    id: 3,
    answer0: "I'm willing to tackle behavioral issues such as anxiety and leash aggression",
    answer1: "Some house-training and basic commands are fine",
    answer2: "I'd prefer to not bother with training"
  },
  {
    id: 4,
    answer0: "0-10 hours per week",
    answer1: "10-25 hours per week",
    answer2: "25-40 hours per week"
  },
  {
    id: 5,
    answer0: "I go running most days and hiking at the weekend",
    answer1: "Daily walks around 2-4 miles are great",
    answer2: "I like to potter around in the garden or occassionally go for a walk",
    answer3: "I prefer or am unable to leave the house much."
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

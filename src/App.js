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
    question: "Do you have a garden?",
    answers: [
      "Yes",
      "No"
    ]
  },
  {
    question: "Will I be sharing your home with children?",
    answers: [
      "Yes",
      "No"
    ]
  },
  {
    question: "How much training can you commit to?",
    answers: [
      "I'm willing to tackle behavioral issues such as anxiety and leash aggression",
      "Some house-training and basic commands are fine",
      "I'd prefer to not bother with training"
    ]
  },
  {
    question: "How often will I be left home alone?",
    answers: [
      "0-10 hours per week",
      "10-25 hours per week",
      "25-40 hours per week"
    ]
  },
  {
    question: "What's your activity level?",
    answers: [
      "I go running most days and hiking at the weekend",
      "Daily walks around 2-4 miles are great",
      "I like to potter around in the garden or occassionally go for a walk",
      "I prefer or am unable to leave the house much."
    ]
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

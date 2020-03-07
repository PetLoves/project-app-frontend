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

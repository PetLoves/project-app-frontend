import React from 'react';
import Banner from './Banner';
import PetCard from './PetCard';
import QuizQuestion from './QuizQuestion';
import Footer from './Footer.js';
import axios from 'axios';

class App extends React.Component {
  state = {
    animals: [],
    showResult: false,
    answers: {}
  };

  info = animal => {
    return (
      <div>
        {animal.name}: {animal.species}
        {/* <p>{animal.species}</p> */}
      </div>
    );
  };

  findPet = answer => {
    var numAnswer = parseInt(answer);
    const currentAnswers = {
      hasGarden: numAnswer
    };
    //Removed .push as array no longer needed
    this.setState({
      answers: currentAnswers
    });
    console.log(this.state.answers);
    axios
      .get('https://srtcnv0e2e.execute-api.eu-west-2.amazonaws.com/dev/pets', {
        params: {
          // Don't use this.state as setState is async and will not update this.state 
          hasGarden: numAnswer
      }})
      .then(response => {
        this.setState({
          animals: response.data.petloves
        });
        console.log(JSON.stringify(this.state.animals));
      })
      .catch(error => {
        console.error(error);
      });


};

render() {
    return (
      <div className="container-fluid">
        <div className="App">
          <Banner />
          <QuizQuestion 
              findPetFunc={this.findPet}
              hasGarden={this.state.answers.hasGarden}
          />
          <PetCard pets={this.state.animals} />
          <Footer className="footer-img" />
        </div>
      </div>
    );
  }
};
export default App;

// {!this.state.showResult ? (
//   <QuizQuestion
//     findPetFunc={this.findPet}
//     hasGarden={this.state.answers.hasGarden}
//   />
// ) : null}

// {this.state.showResult ? <PetCard pets={this.state.animals} /> : null}

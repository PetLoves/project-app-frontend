import React from 'react';
import Banner from './Banner';
import PetCard from './PetCard';
import QuizQuestion from './QuizQuestion';
import Footer from './Footer.js';
import axios from 'axios';

class App extends React.Component {
  state = {
    animals: [],
    showResult: true,
    answers: []
  };

  componentDidMount = () => {
    axios
      .get('https://srtcnv0e2e.execute-api.eu-west-2.amazonaws.com/dev/pets')
      .then(response => {
        this.setState({
          animals: response.data.petloves
        });
      })
      .catch(error => {
        console.error(error);
      });
  };

  showResult() {
    this.setState(prevState => ({ showResult: !prevState.showResult }));

    // is the same as:
    //   if (this.state.showResult) {
    //     this.setState({
    //       showResult: false
    //     });
    //   } else {
    //     this.setState({
    //       showResult: true
    //     });
    //   }
  }

  info = animal => {
    return (
      <div>
        {animal.name}: {animal.species}
        {/* <p>{animal.species}</p> */}
      </div>
    );
  };

  findPet = answer => {
    var boolAnswer = answer === '1';
    const currentAnswers = {
      hasGarden: boolAnswer
    };
    const newAnswers = this.state.answers;
    newAnswers.push(currentAnswers);
    this.setState({
      answers: newAnswers
    });
    console.log(JSON.stringify(newAnswers));
  };

  // findPet = answer => {
  //   var boolAnswer = answer === '1';
  //   const currentAnswers = {
  //     hasGarden: boolAnswer
  //   };
  //   const garden = this.state.answers;
  //   // const newAnswers = this.state.answers;
  //   axios
  //     .get(
  //       `https://ebty5goa66.execute-api.eu-west-2.amazonaws.com/dev/pets/${garden}`
  //     )
  //     .then(response => {
  //       // handle success
  //       garden.push(currentAnswers);
  //       this.setState({
  //         answers: garden
  //       });
  //       console.log(`garden: ${JSON.stringify(garden)}`);
  //       console.log(garden);
  //     })
  //     .catch(error => {
  //       // handle error
  //       console.error(error);
  //     });
  // };

  render() {
    return (
      <div className="container-fluid">
        <div className="App">
          <Banner />
          {this.state.showResult ? (
            <QuizQuestion
              findPetFunc={this.findPet}
              hasGarden={this.state.answers.hasGarden}
            />
          ) : null}
          {this.state.showResult ? <PetCard pets={this.state.animals} /> : null}
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;

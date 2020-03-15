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
    answers: []
  };

  // componentDidMount = () => {
  //   axios
  //     .get('https://srtcnv0e2e.execute-api.eu-west-2.amazonaws.com/dev/pets')
  //     .then(response => {
  //       this.setState({
  //         animals: response.data.petloves
  //       });
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  //     console.log(this.state.animals);
  // };
  // showResult() {
  //   this.setState(prevState => ({ showResult: !prevState.showResult }));
  //   // let urlneeded = 'https://srtcnv0e2e.execute-api.eu-west-2.amazonaws.com/dev/pets/' + this.state.answers.hasGarden
  //   // console.log(`URL:  ${urlneeded}`);
  //   axios
  //     .get('https://srtcnv0e2e.execute-api.eu-west-2.amazonaws.com/dev/pets/', {
  //       params: {
  //         hasGarden: this.state.answers.hasGarden
  //       }
  //     })
  //     .then(response => {
  //       this.setState({
  //         animals: response.data.petloves
  //       });
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // };
  
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
    const newAnswers = this.state.answers;
    newAnswers.push(currentAnswers);
    this.setState({
      answers: newAnswers
    });
    console.log(JSON.stringify(newAnswers));
    console.log(this.state.answers);
    const params = {
      hasGarden: this.state.answers.hasGarden,
    };
    axios
      .get('https://srtcnv0e2e.execute-api.eu-west-2.amazonaws.com/dev/pets', {
        params
      })
      .then(response => {
        this.setState({
          animals: response.data.petloves
        });
      })
      .catch(error => {
        console.error(error);
      });

    console.log(this.state.animals);
    console.log(JSON.stringify(this.state.animals));
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

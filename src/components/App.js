import React from 'react';
import Nav from './Navbar';
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

  findPet = (
    hasGardenResult,
    hasChildrenResult,
    activitylevel,
    companyNeeded
  ) => {
    var numGarden = parseInt(hasGardenResult);
    var numChildren = parseInt(hasChildrenResult);
    var numActivityLevel = parseInt(activitylevel);
    var numCompanyNeeded = parseInt(companyNeeded);
    const currentAnswers = {
      hasGarden: numGarden,
      hasChildren: numChildren,
      activitylevel: numActivityLevel,
      companyNeeded: numCompanyNeeded
    };
    this.setState({
      answers: currentAnswers
    });
    console.log(this.state.answers);
    axios
      .get('https://srtcnv0e2e.execute-api.eu-west-2.amazonaws.com/dev/pets', {
        params: {
          hasGarden: numGarden,
          hasChildren: numChildren,
          activitylevel: numActivityLevel,
          companyNeeded: numCompanyNeeded
        }
      })
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
      <div className="App">
        <Nav />
        {/* <Banner /> */}
        <QuizQuestion
          findPetFunc={this.findPet}
          hasGarden={this.state.answers.hasGarden}
          hasChildren={this.state}
        />
        <PetCard pets={this.state.animals}/>
        <Footer className="footer-img" />
      </div>
    );
  }
}
export default App;

import React from 'react';
import Banner from './Banner';
import PetCard from './PetCard';
import QuizQuestion from './QuizQuestion';
import Footer from './Footer.js';
import axios from 'axios';

class App extends React.Component {
  state = {
    animals: [],
    showResult: false
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
    //alert pulling in state from QuizQuestion
    alert('I have a garden is ' + answer);
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="App">
          <Banner />
          {!this.state.showResult ? (
            <QuizQuestion findPetFunc={this.findPet} />
          ) : null}
          {this.state.showResult ? <PetCard pets={this.state.animals} /> : null}
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;

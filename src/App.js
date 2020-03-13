import React from 'react';
import './App.css';
import Banner from './components/Banner';
import PetCard from './PetCard';
import QuizQuestion from './QuizQuestion';
import axios from 'axios';

class App extends React.Component {
  state = {
    animals: [
      {
        name: 'Special',
        description:
          "Special lives up to his name because he truly is a special boy! He's a very gentle soul with a lovely nature"
      },
      {
        name: 'Ozzie',
        description:
          'This gorgeous lad is a little wary at first, but when comfortable he loves a fuss and cuddle.'
      },
      {
        name: 'Pepper',
        description:
          'Shay is now looking for a loving new home with a group of ladies he can call his own and look after.'
      }
    ],
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

  render() {
    return (
      <div className="container-fluid">
        <div className="App">
          <Banner />
          <QuizQuestion />
          {this.state.showResult ? <PetCard pets={this.state.animals} /> : null}
        </div>
      </div>
    );
  }
}

export default App;

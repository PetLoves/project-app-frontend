import React from 'react';
import logo from './logo.svg';
import './App.css';
import Banner from './Banner';
import PetCard from './PetCard';
import { library } from '@fortawesome/fontawesome-svg-core'; 
import { faHeart, faUser} from '@fortawesome/free-solid-svg-icons';

library.add(faHeart, faUser);

function App() {

  return (
    <div className="App">
      <Banner />
      <div className="container">
        <PetCard />
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import logo from './images/tacoplaces-long.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="welcome">
        <img id="long-logo" src={logo} alt="tacoplaces logo" />
        <button className="welcome-button">Sign In</button>
        <button className="welcome-button">Sign Up</button>
      </div>
    </div>
  );
}

export default App;

import React, { Component } from 'react';
import './App.css';
import logo from './logo.png';


class App extends Component {
  render() {
    return (
      <div className="App">

      <body>
        <div className="welcome-section">

          <div className="section -paragraph">
          <div className="logo-section">
            <img src={logo} alt="The Reversible logo, a small blue dot" id="logo" />
            <h1>Reversible</h1>
          </div>
            <h2>Tools for reversing climate change</h2>
            <p>Reversible is an organization building open source software products to facilitate the removal of carbon dioxide from the atmosphere and reverse climate change.</p>
          </div>

        </div>

      </body>

      </div>
    );
  }
}

export default App;

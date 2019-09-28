import React, { Component } from 'react';
import Navigation from '../layout/Navigation';

import '../../App.css';
import logo from '../../logo.png';

import ReactGA from 'react-ga';

class Home extends Component {
  render() {
    ReactGA.initialize('UA-148187805-1');
    ReactGA.pageview('/');
    return (
      <div className="Home">

      <body>
      <Navigation />
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

export default Home;

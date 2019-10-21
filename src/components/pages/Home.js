import React, { Component } from 'react';
import Navigation from '../layout/Navigation';
import { Link } from 'react-router-dom';

import '../../App.css';
import logo from '../../reversible-logo.svg';
import wordmark from '../../wordmark.svg';

import ReactGA from 'react-ga';

class Home extends Component {
  render() {
    ReactGA.initialize('UA-148187805-1');
    ReactGA.pageview('/');
    return (
      <div className="Home">

      <Navigation />
        <div className="main-section">

          <div className="section -paragraph">
          <div className="logo-section">
          <Link to="/"><img src={logo} alt="The Reversible logo, a small blue dot" id="logo" />
          <img src={wordmark} alt="The Reversible wordmark" id="wordmark" /></Link>
          </div>
            <h1>Software for reversing climate change</h1>
            <p>Reversible is making open source software products to facilitate the removal of carbon dioxide from the atmosphere and reverse climate change.</p>
          </div>

          <div className="section -paragraph">
            <h2>Tools</h2>
              <ul>
                <li><Link to="/calculator">Carbon Calculator</Link></li>
                <li><Link to="/source-library">Source Library</Link></li>
              </ul>
          </div>

        </div>

      </div>
    );
  }
}

export default Home;

import React, { Component } from 'react';
import Navigation from '../layout/Navigation';
import { Link } from 'react-router-dom';

import '../../App.css';
import logo from '../../reversible-logo.svg';
import wordmark from '../../wordmark.svg';

import ReactGA from 'react-ga';

class SourceLibrary extends Component {
  render() {
    ReactGA.initialize('UA-148187805-1');
    ReactGA.pageview('/source-library');
    return (
      <div className="SourceLibrary">

      <Navigation />
        <div className="main-section">

          <div className="section -paragraph">
          <div className="logo-section">
          <Link to="/"><img src={logo} alt="The Reversible logo, a small blue dot" id="logo" />
          <img src={wordmark} alt="The Reversible wordmark" id="wordmark" /></Link>
          </div>
            <h1>Source Library</h1>
            <p>Reversible is making open source software products to facilitate the removal of carbon dioxide from the atmosphere and reverse climate change.</p>
            <p>We publish all our source code here for free community use.</p>
          </div>

          <div className="section -paragraph">
            <h2>Browse the library</h2>
              <ul>
              <li>
                <a href="https://github.com/reversiblecc/reversible/blob/master/src/components/pages/Calculator.js">Carbon Calculator source</a>
              </li>
              <li>
                <a href="https://github.com/reversiblecc/reversible">Reversible website source</a>
              </li>


              </ul>
          </div>

        </div>

      </div>
    );
  }
}

export default SourceLibrary;

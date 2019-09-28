import React, { Component } from 'react';
import Navigation from '../layout/Navigation';

import '../../App.css';

import ReactGA from 'react-ga';

class Calculator extends Component {
  render() {
    ReactGA.initialize('UA-148187805-1');
    ReactGA.pageview('/calculator');
    return (
      <div className="Calculator">

      <body>
      <Navigation />



            <p>Hello, Calculator!</p>


      </body>

      </div>
    );
  }
}

export default Calculator;

import React, { Component } from 'react';
import Select from 'react-select';
import { Link } from 'react-router-dom';
import ReactGA from 'react-ga';

import Navigation from '../layout/Navigation';
import '../../App.css';
import logo from '../../logo.png';
import wordmark from '../../wordmark.svg';


import carbonFootprintsData from '../../data/carbon-footprints.json';

class Calculator extends Component {
  state = {
    countryValue:  {
       "value": "US",
       "label": "United States",
       "carbonFootprint": "16.50283724",
       "countryCodeThreeDigit": "USA"
     },
  }
  handlecountryChange = countryValue => {
    this.setState({ countryValue });
  }

  render() {
    ReactGA.initialize('UA-148187805-1');
    ReactGA.pageview('/calculator');
    const { countryValue } = this.state;

    // Took this syntax from here: https://react-select.com/styles
    const selectTheme = theme => ({
      ...theme,
      // borderRadius: 0,
      fontWeight: 500,
      colors: {
      ...theme.colors,
        // primary25: '#e5e5e5',
        // primary: '#c5c5c5',
      },
    });

    return (
      <div className="Calculator">

      <Navigation />

        <div className="main-section">
        <div className="logo-section">
          <Link to="/"><img src={logo} alt="The Reversible logo, a small blue dot" id="logo" />
          <img src={wordmark} alt="The Reversible wordmark" id="wordmark" /></Link>
        </div>
        <div className="input-group">
          <Select
            defaultValue= {{"value": "US", "label": "United States"}}
            value={this.state.countryValue}
            onChange={this.handlecountryChange}
            options={carbonFootprintsData}
            theme={selectTheme}
            clearable={false}
            backspaceRemovesValue={false}
            deleteRemoves={false}
          />
        </div>
          <h1>Your carbon footprint is <b>{parseFloat(countryValue.carbonFootprint).toFixed(2)}</b> tonnes of greenhouse gasses per year.</h1>
          <h2>That's {Number((parseFloat(countryValue.carbonFootprint) * 2204.6).toFixed()).toLocaleString()} pounds of gasses in the atmosphere.</h2>

          <p>If you live in {countryValue.label.indexOf('United') > -1 ? "the " + countryValue.label : countryValue.label}, your carbon footprint is about {parseFloat(countryValue.carbonFootprint).toFixed(2)} tonnes of carbon dioxide equivalent greenhouse gasses per year. This estimate is based on World Bank data which was most recently published in 2014. <a href="https://databank.worldbank.org/reports.aspx?source=2&series=EN.ATM.CO2E.PC&country=#" target="_blank" rel="noopener noreferrer">Learn more</a>.</p>

        </div>

      </div>
    );
  }
}

export default Calculator;

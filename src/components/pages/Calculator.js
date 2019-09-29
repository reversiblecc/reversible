import React, { Component } from 'react';
import Select from 'react-select';
import ReactGA from 'react-ga';
import countryList from 'react-select-country-list'

import Navigation from '../layout/Navigation';
import '../../App.css';

const countryOptions = countryList().getData()

class Calculator extends Component {
  state = {
    country: countryOptions,
  }
  handlecountryChange = country => {
    this.setState({ country });
  }

  render() {
    ReactGA.initialize('UA-148187805-1');
    ReactGA.pageview('/calculator');

    // Took this syntax from here: https://react-select.com/styles
    const selectTheme = theme => ({
      ...theme,
      // borderRadius: 0,
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
        <p>Hello, Calculator!</p>
          <Select
            defaultValue= {{"value": "US", "label": "United States"}}
            // value={this.state.country}
            onChange={this.handlecountryChange}
            options={countryOptions}
            theme={selectTheme}
          />
        </div>


      </div>
    );
  }
}

export default Calculator;

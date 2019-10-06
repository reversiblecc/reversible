import React, { Component } from 'react';
import Select, { createFilter } from 'react-select';
import { Link } from 'react-router-dom';
import { isMobile, isBrowser } from "react-device-detect";
import ReactGA from 'react-ga';

import Navigation from '../layout/Navigation';
import '../../App.css';
import logo from '../../logo.png';
import wordmark from '../../wordmark.svg';


import countryCarbonFootprintsData from '../../data/country-carbon-footprints.json';
import usHouseholdCarbonFootprintsData from '../../data/us-household-carbon-footprints.json';

const selectStyles = {
  menuList: (provided, state) =>  ({
    ...provided,
    height: isMobile ? 120 : null,
  }),
}

class Calculator extends Component {
  state = {
    carbonFootprint: "16.50283724",
    location: {
       "value": "US",
       "label": "United States",
       "carbonFootprint": "16.50283724",
       "countryCodeThreeDigit": "USA"
     },
    countryValue:  {
       "value": "US",
       "label": "United States",
       "carbonFootprint": "16.50283724",
       "countryCodeThreeDigit": "USA"
     },
     zipCodeValue:  null,
  }
  // TODO: combine into handleChange()
  handleCountryChange = countryValue => {
    this.setState({ carbonFootprint: countryValue.carbonFootprint, location: countryValue, countryValue });
  }
  handleZipCodeChange = zipCodeValue => {
    this.setState({ carbonFootprint: zipCodeValue.carbonFootprint/2, location: zipCodeValue, zipCodeValue });
  }

  render() {
    ReactGA.initialize('UA-148187805-1');
    ReactGA.pageview('/calculator');
    const { countryValue } = this.state;
    const { zipCodeValue } = this.state;
    const { carbonFootprint } = this.state;
    const { location } = this.state;



    return (
      <div className="Calculator">

      <Navigation />

        <div className="main-section">
        <div className="logo-section">
          <Link to="/"><img src={logo} alt="The Reversible logo, a small blue dot" id="logo" />
          <img src={wordmark} alt="The Reversible wordmark" id="wordmark" /></Link>
        </div>
        <h1>Carbon Footprint Calculator</h1>
        <p>Calculate your estimated carbon footprint by choosing where you live.</p>
        <div className="input-group">
          <div className="input-wrapper">
            <span className="input-assist">Choose a country</span>
            <Select
              defaultValue= {{"value": "US", "label": "United States"}}
              value={this.state.countryValue}
              onChange={this.handleCountryChange}
              options={countryCarbonFootprintsData}
              styles={selectStyles}
              clearable={false}
              backspaceRemovesValue={false}
              deleteRemoves={false}
              aria-label="Choose a country"
            />
          </div>
          {countryValue.value == "US" &&
          <div className="input-wrapper">
            <span className="input-assist">Enter a zip code</span>
            <Select
              value={this.state.zipCodeValue}
              onChange={this.handleZipCodeChange}
              options={usHouseholdCarbonFootprintsData}
              styles={selectStyles}
              placeholder="Zip Code"
              aria-label="Enter a zip code"

              backspaceRemovesValue={false}
              deleteRemoves={false}
              filterOption={createFilter({ignoreAccents: false})}
              components={{
                  DropdownIndicator: () => null,
                  IndicatorSeparator: () => null,
                  Menu: () => null,}}
            />
          </div>}
        </div>

        <div className="calculator-results">
          <h2>Your carbon footprint is <b>{parseFloat(carbonFootprint || countryValue.carbonFootprint).toFixed(2)}</b> tonnes of greenhouse gasses per year.</h2>
        </div>

        <h3>If you live in {location.label.indexOf('United') > -1 ? "the " : ""}{location.label}{zipCodeValue ? ", " + zipCodeValue.State : ""}, you are contributing to climate change by adding about {(countryValue.value === "US" || countryValue.value === "MM" || countryValue.value === "LR") ? (Number((parseFloat(carbonFootprint || countryValue.carbonFootprint) * 2204.6).toFixed()).toLocaleString() + " pounds") : (Number((parseFloat(carbonFootprint || countryValue.carbonFootprint) * 1000).toFixed()).toLocaleString() + " kilograms")} of carbon dioxide equivalent gasses to the atmosphere every year.</h3>

        {(zipCodeValue === null) && <p>Source: <a href="https://databank.worldbank.org/reports.aspx?source=2&series=EN.ATM.CO2E.PC&country=#" target="_blank" rel="noopener noreferrer">DataBank</a>, World Bank, 2014.</p>}
        {zipCodeValue && <p>Source: <a href="http://coolclimate.berkeley.edu/maps" target="_blank" rel="noopener noreferrer">CoolClimate Maps</a>, U.C. Berkeley CoolClimate Network, 2013.</p>}



        </div>

      </div>
    );
  }
}

export default Calculator;

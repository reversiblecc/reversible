import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch } from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top'

import Home from './components/pages/Home';
import Calculator from './components/pages/Calculator';

class App extends Component {
  render() {

    return (
      <div className="App">
        <Router>
          <ScrollToTop>
          <div>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/calculator' component={Calculator} />
              <Route component={Home} />
            </Switch>
          </div>
          </ScrollToTop>
        </Router>
      </div>
    );

  }
}

export default App;

import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <header className="App-header">
      <nav className="primary-nav">

        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/calculator">Carbon Calculator</Link>
        </li>
        <li className="nav-item">
          <a href="https://github.com/reversiblecc/baseline-proxy" target="_blank" rel="noopener noreferrer">Baseline Proxy</a>
        </li>

        <div className="nav-right">

        </div>
      </nav>
    </header>
  )
}


export default Navigation;

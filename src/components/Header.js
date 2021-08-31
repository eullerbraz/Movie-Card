import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../logo.png';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <Link to="/">
          <img
            src={ Logo }
            alt="Movie Card Logo"
          />
        </Link>
      </header>
    );
  }
}

export default Header;

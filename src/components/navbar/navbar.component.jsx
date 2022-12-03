import React from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends React.PureComponent {
  render() {
    return (
      <header className="header-container">
        <nav className="main-navbar">
          <h1>Welcome</h1>
          <ul className="nav-links">
            <li>
              <NavLink to="/" className="nav-link-a">Home</NavLink>
            </li>

            <li>
              <NavLink to="/details" className="nav-link-a">Details</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Navbar;

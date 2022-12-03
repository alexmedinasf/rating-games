import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/navbar.styles.css';
import mainLogo from '../../assets/images/main-logo.png';

class Navbar extends React.PureComponent {
  render() {
    return (
      <header className="header-container">
        <nav className="main-navbar">
        <div className="logo-title-container">
            <img src={mainLogo} alt="Small controller Logo" />
            <h1>BEST GAMES</h1>
          </div>
          <ul className="nav-links">
            <li>
            <NavLink
                to="/"
                className={({ isActive }) => (isActive
                  ? 'nav-link-a nav-link-a--active'
                  : 'nav-link-a')}
              >
                Home

              </NavLink>
            </li>

            <li>
            <NavLink
                to="/categories"
                className={({ isActive }) => (isActive
                  ? 'nav-link-a nav-link-a--active'
                  : 'nav-link-a')}
              >
                Categories

              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Navbar;

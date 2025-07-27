import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation({ darkMode, setDarkMode }) {
  const toggleMode = () => setDarkMode(!darkMode);

  return (
    <nav className={`navbar ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'} px-3`}>
      <NavLink className="navbar-brand" to="/">Bousy Café</NavLink>
      <ul className="navbar-nav d-flex flex-row gap-3">
        <li className="nav-item"><NavLink className="nav-link" to="/">Home</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link" to="AboutUs">AboutUS</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link" to="/menu">Menu</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link" to="/TeamSection">TeamSection</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link" to="/contact">Contact</NavLink></li>
      </ul>
      <button className="btn btn-outline-primary ms-auto" onClick={toggleMode}>
        {darkMode ? 'Light Mode ☀️' : 'Dark Mode 🌙'}
      </button>
    </nav>
  );
}

export default Navigation;

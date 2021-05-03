import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h3>Remote Header</h3>
      <ul>
        <li>
          <NavLink to="/home">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">
            About
          </NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Header;

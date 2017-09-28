import React from 'react';

import NavItem from 'components/NavItem';

import 'components/Nav.css';

function Nav() {
  return (
      <ul className="nav">
        <NavItem to="/">Home</NavItem>
        <NavItem to="/about">About</NavItem>
      </ul>
    );
}

export default Nav;

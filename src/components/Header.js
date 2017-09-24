import React from 'react';
import Nav from 'components/Nav';
import 'components/Header.css';

function Header () {
  return (
        <div className='header'>
          <h1>Harry Ganz</h1>
          <h3>Web Developer | Programmer</h3>

        <Nav pages={[{title: 'Home'}, {title: 'Resume'}]} />
        </div>
      );
}

export default Header;

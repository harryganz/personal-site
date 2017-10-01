import React from 'react';

import Nav from 'components/Nav';
import ContactInfo from 'components/ContactInfo';

import 'components/Header.css';

function Header () {
  return (
        <div className='header'>
					<div className="flex flex-wrap">
						<div className="flex-grow">
							<h1>Harry Ganz</h1>
							<h3>Web Developer | Programmer</h3>
						</div>
						<ContactInfo email="hganz@harryganz.com" phone="203-357-5099" github="harryganz" />
					</div>
					<Nav />
        </div>
      );
}

export default Header;

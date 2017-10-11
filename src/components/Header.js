import React from 'react';

import Nav from 'components/Nav';
import ContactInfo from 'components/ContactInfo';

import 'components/Header.css';

function Header () {
  return (
        <div className='header'>
					<div className="flex flex-wrap">
						<div className="flex-grow">
              <div className="profile-pic inline">
                <img src="/img/harryganz_profile.png" alt="harry_profile" />
              </div>
              <div className="inline">
                <h1>Harry Ganz</h1>
                <h3>Web Developer | Programmer</h3>
              </div>
						</div>
						<ContactInfo email="hganz@harryganz.com" phone="203-357-5099" github="harryganz" />
					</div>
					<Nav />
        </div>
      );
}

export default Header;

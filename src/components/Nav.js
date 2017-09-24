import React from 'react';

function Nav({pages}) {
  let links = pages.map(page =>
        <li key={page.title}><a href="#">{page.title}</a></li>
      )
 
  return (
      <ul className="nav">
        {links}
      </ul>
    );
}

export default Nav;

import React from 'react';
import { connect } from 'react-redux';

import LinkTo from 'components/LinkTo';

import 'components/NavItem.css';

function NavItem({location, to, children}) {
  // Add active class if in location

  let classes = ['nav-item'];
  if (location === to) {
    classes.push('active'); 
  }

  return (
     <li className={classes.join(' ')}>
      <LinkTo className='none' to={to}>{ children }</LinkTo>
     </li>
     )
}

function mapStateToProps(state) {
  return {
    location: state.router.location.pathname
  };
}

export default connect(mapStateToProps)(NavItem);


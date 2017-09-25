import React from 'react';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import 'components/Nav.css';

function Nav({location, push}) {
  return (
      <ul className="nav">
        <li className={location === "/" ? "active" : ""} onClick={() => push('/')}>Home</li>
        <li className={location === "/about" ? "active" : ""} onClick={() => push('/about')}>About</li>
      </ul>
    );
}

function mapStateToProps(state) {
  return {
    location: state.router.location.pathname
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ push }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);

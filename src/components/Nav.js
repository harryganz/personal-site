import React from 'react';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import LinkTo from 'components/LinkTo';

import 'components/Nav.css';

function Nav({location, push}) {
  return (
      <ul className="nav">
        <li className={location === "/" ? "active" : ""}><LinkTo className="none" to="/">Home</LinkTo></li>
        <li className={location === "/about" ? "active" : ""}><LinkTo className="none" to="/about">About</LinkTo></li>
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

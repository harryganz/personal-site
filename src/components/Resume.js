import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import actions from 'actions';

import DefaultLayout from 'components/DefaultLayout';
import Skills from 'components/Skills';


class Resume extends Component {
  constructor(props) {
    super(props);
    props.getResume();
  }

  render() {
    return (
          <DefaultLayout>
            <Skills />
          </DefaultLayout>
        );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(null, mapDispatchToProps)(Resume);


import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import actions from 'actions';

import DefaultLayout from 'components/DefaultLayout';
import Skills from 'components/Skills';
import Experience from 'components/Experience';

class Resume extends Component {
  constructor(props) {
    super(props);
    props.getResume();
  }

  render() {
    return (
          <DefaultLayout>
            <Skills title="Programming Languages and Frameworks" />
						<Experience title="Experience" />
					</DefaultLayout>
        );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(null, mapDispatchToProps)(Resume);


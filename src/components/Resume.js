import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import actions from 'actions';

import DefaultLayout from 'components/DefaultLayout';
import Skills from 'components/Skills';

import 'components/VerticalResumeListItem.css';


class Resume extends Component {
  constructor(props) {
    super(props);
    props.getResume();
  }

  render() {
    return (
          <DefaultLayout>
            <Skills title="Programming Languages and Frameworks" />
						<div className="Experience">
							<h3>Experience</h3>
							<div className="vertical-resume-list">
								<div className="vertical-resume-item">
									<p>2016 - Present</p>
									<div>
										<p>Associate Software Developer at Gartner</p>
										<ul>
											<li>Developed internally facing web applications including sales tools and business intelligence software</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
          </DefaultLayout>
        );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(null, mapDispatchToProps)(Resume);


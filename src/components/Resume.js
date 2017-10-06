import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import actions from 'actions';

import DefaultLayout from 'components/DefaultLayout';
import Skills from 'components/Skills';
import VerticalResumeListItem from 'components/VerticalResumeListItem';

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
								<VerticalResumeListItem 
									title="Associate Software Developer at Gartner"
									startDate="2016"
									endDate="Present"
									items={ ['Developed internally facing web applications ' +
										'including sales tools and business intelligence software'] }
								/>
								<VerticalResumeListItem
									title="Scientist at National Oceanic and Atmoshperic Association"
									startDate="2014"
									endDate="2016"
									items={ ['Developed R application for analyzing visual census data of reef fish', 'Created Ruby on Rails back end for reef visual census data'] }
								/>
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


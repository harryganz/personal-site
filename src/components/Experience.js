import React from 'react';
import { connect } from 'react-redux';

import VerticalResumeList from 'components/VerticalResumeList';

function Experience({ title, experience }) {
	return <VerticalResumeList title={ title } verticalResumeList={ experience } />;
}

function mapStateToProps({ resume }) {
	return {
		experience: resume.resume.experience,
	};
}

export default connect(mapStateToProps)(Experience);


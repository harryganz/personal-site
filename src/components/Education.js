import React from 'react';
import { connect } from 'react-redux';

import VerticalResumeList from 'components/VerticalResumeList';

function Education({ title, education }) {
	return <VerticalResumeList title={ title } verticalResumeList={ education } />;
}

function mapStateToProps({ resume }) {
	return {
		education: resume.resume.education,
	};
}

export default connect(mapStateToProps)(Education);


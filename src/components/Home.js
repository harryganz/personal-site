import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import actions from 'actions';

import DefaultLayout from 'components/DefaultLayout';
import ProjectGallery from 'components/ProjectGallery';

class Home extends Component {	
	constructor(props) {
		super(props);
		props.getProjects();
	}

	render() {
		return (
				<DefaultLayout>
					<ProjectGallery />
				</DefaultLayout>
			);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actions, dispatch);
}
		

export default connect(null, mapDispatchToProps)(Home);

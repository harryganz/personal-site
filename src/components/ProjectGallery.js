import React from 'react';
import { connect } from 'react-redux';

import ProjectItem from 'components/ProjectItem';

function ProjectGallery({projects}) {
	let projectCards = projects.map((project, index) =>
			<ProjectItem project={project} key={index} />
			);

	return (
			<div className="project-gallery">
				{projectCards}
			</div>
		)
}

function mapStateToProps(state) {
	return { projects: state.projects.projects };
}

export default connect(mapStateToProps, null, null, {withRef: false})(ProjectGallery);

import React from 'react';
import { connect } from 'react-redux';

import ProjectItem from 'components/ProjectItem';

function ProjectGallery({projects}) {
	let projectCards = projects.map((project, index) =>
			<ProjectItem project={project} key={index} />
			);

	return (
			<div className="project-gallery">
				<h3>Projects</h3>
				<div className="flex flex-wrap">
					{projectCards}
				</div>
			</div>
		)
}

function mapStateToProps(state) {
	return { projects: state.projects.projects };
}

export default connect(mapStateToProps, null, null, {withRef: false})(ProjectGallery);

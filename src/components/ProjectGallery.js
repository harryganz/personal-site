import React from 'react';
import { connect } from 'react-redux';

function ProjectGallery({projects}) {
	let projectCards = projects.map(project =>
				<div className="project" key={project.title}>
					<a href={project.url}>
						<img src={process.env.PUBLIC_URL + project.img_url} alt={project.title} />
					</a>
					<h3>{project.title}</h3>
					<i className="fa fa-github-square" aria-hidden="true" /><a href={"https://github.com/" + project.github}>{project.github}</a>
					<p className="project-description">{project.description}</p>
				</div>
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

export default connect(mapStateToProps)(ProjectGallery);

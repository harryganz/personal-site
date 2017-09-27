import React from 'react';

import 'components/ProjectItem.css';

function ProjectItem({project}) {
	return (
			<div className="project">
					<a className="crop" href={project.url}>
						<img src={process.env.PUBLIC_URL + project.img_url} alt={project.title} />
					</a>
					<h3>{project.title}</h3>
					<i className="fa fa-github-square" aria-hidden="true" /><a href={"https://github.com/" + project.github}>{project.github}</a>
					<p className="project-description">{project.description}</p>
				</div>
			);
}

export default ProjectItem; 


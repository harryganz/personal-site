import React from 'react';

import 'components/ProjectItem.css';

function ProjectItem({project}) {
	return (
			<div className="project">
					<a className="crop" href={project.url}>
						<img src={process.env.PUBLIC_URL + project.img_url} alt={project.title} />
					</a>
					<h3>{project.title}</h3>
					<p className="project-description">{project.description}</p>
					<a className="none github-link" href={"https://github.com/" + project.github}>
						<i className="fa fa-github-square" aria-hidden="true" />
						&nbsp;
						<span>Github Page</span>
					</a>

				</div>
			);
}

export default ProjectItem; 


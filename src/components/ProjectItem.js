import React from 'react';

import 'components/ProjectItem.css';

function ProjectItem({project}) {
	return (
			<div className="project">
				<a className="none" href={project.url}>
					<div className="crop">
						<img src={process.env.PUBLIC_URL + project.img_url} alt={project.title} />
					</div>
					<h3>{project.title}</h3>
					<p className="project-description">{project.description}</p>
				</a>
				<a className="github-link" href={"https://github.com/" + project.github}>
					<i className="fa fa-github-square" aria-hidden="true" />
					&nbsp;
					<span>Github Page</span>
				</a>

				</div>
			);
}

export default ProjectItem; 


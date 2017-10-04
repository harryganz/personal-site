import React from 'react';

import DefaultLayout from 'components/DefaultLayout';
import LinearResumeList from 'components/LinearResumeList';
import LinearResumeItem from 'components/LinearResumeItem';

import 'components/LinearResumeItem.css';

function Resume() {
	return (
				<DefaultLayout>
					<div>
						<h3>Programming Languages and Frameworks</h3>
						<LinearResumeList
							title="Languages"
							items={ ['Go', 'Python', 'Ruby', 'Java', 'Javascript', 'R'] }
						/>
						<LinearResumeList
							title="Back-End"
							items={ ['Ruby-on-Rails', 'NodeJS', 'Spring', 'Jekyll'] }
						/>
						
						<div className="linear-resume-list">
							<p className="title">Front-End</p>
							<div className="list">
								<LinearResumeItem>React</LinearResumeItem>
								<LinearResumeItem>JQuery</LinearResumeItem>
								<LinearResumeItem>Angular</LinearResumeItem>
								<LinearResumeItem>Dojo</LinearResumeItem>
							</div>
						</div>
						<div className="linear-resume-list">
							<p className="title">Other</p>
							<div className="list">
								<LinearResumeItem>Docker</LinearResumeItem>
								<LinearResumeItem>Webpack</LinearResumeItem>
								<LinearResumeItem>CSS</LinearResumeItem>
								<LinearResumeItem>Sass</LinearResumeItem>
							</div>
						</div>
					</div>
				</DefaultLayout>
			);
}

export default Resume;

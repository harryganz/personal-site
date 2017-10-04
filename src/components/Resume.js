import React from 'react';

import DefaultLayout from 'components/DefaultLayout';
import LinearResumeList from 'components/LinearResumeList';

import 'components/LinearResumeItem.css';

function Resume() {
	return (
				<DefaultLayout>
					<h3>Programming Languages and Frameworks</h3>
					<div className="flex flex-two-col">
						<div className="flex-grow">
							<LinearResumeList
								title="Languages"
								items={ ['Go', 'Python', 'Ruby', 'Java', 'Javascript', 'R'] }
							/>
							<LinearResumeList
								title="Back-End"
								items={ ['Ruby-on-Rails', 'NodeJS', 'Spring', 'Jekyll'] }
							/>
						</div>
						<div className="flex-grow">
							<LinearResumeList
								title="Front-End"
								items={ ['React', 'JQuery', 'Angular', 'Dojo'] }
							/>
							<LinearResumeList
								title="Other"
								items={ ['Docker', 'Webpack', 'CSS', 'Sass'] }
							/>
						</div>
					</div>
				</DefaultLayout>
			);
}

export default Resume;

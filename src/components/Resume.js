import React from 'react';

import DefaultLayout from 'components/DefaultLayout';
import LinearResumeList from 'components/LinearResumeList';
import TwoColumnGrid from 'components/TwoColumnGrid';

import 'components/LinearResumeItem.css';

function Resume() {
	return (
				<DefaultLayout>
					<h3>Programming Languages and Frameworks</h3>
            <TwoColumnGrid>
							<LinearResumeList
								title="Languages"
								items={ ['Go', 'Python', 'Ruby', 'Java', 'Javascript', 'R'] }
							/>
							<LinearResumeList
								title="Back-End"
								items={ ['Ruby-on-Rails', 'NodeJS', 'Spring', 'Jekyll'] }
							/>
							<LinearResumeList
								title="Front-End"
								items={ ['React', 'JQuery', 'Angular', 'Dojo'] }
							/>
							<LinearResumeList
								title="Other"
								items={ ['Docker', 'Webpack', 'CSS', 'Sass'] }
							/>
              <LinearResumeList
                title="Test"
                items={ ["Pizza", "French Fries", "Apple"] }
              />
            </TwoColumnGrid>
				</DefaultLayout>
			);
}

export default Resume;

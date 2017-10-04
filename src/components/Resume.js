import React from 'react';

import DefaultLayout from 'components/DefaultLayout';
import LinearResumeItem from 'components/LinearResumeItem';

import 'components/LinearResumeItem.css';

function Resume() {
	return (
				<DefaultLayout>
					<div>
						<h3>Programming Languages and Frameworks</h3>
						<div className="linear-resume-list">
							<p className="title">Languages</p> 
							<div className="list">
								<LinearResumeItem>Go</LinearResumeItem>
								<LinearResumeItem>Python</LinearResumeItem>
								<LinearResumeItem>Ruby</LinearResumeItem>
								<LinearResumeItem>Java</LinearResumeItem>
								<LinearResumeItem>Javascript</LinearResumeItem>
								<LinearResumeItem>R</LinearResumeItem>
							</div>
						</div>
						<div className="linear-resume-list">
							<p className="title">Back-End</p>
							<div className="list">
								<LinearResumeItem>Ruby-on-Rails</LinearResumeItem>
								<LinearResumeItem>NodeJS</LinearResumeItem>
								<LinearResumeItem>Spring</LinearResumeItem>
								<LinearResumeItem>Jekyll</LinearResumeItem>
							</div>
						</div>
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

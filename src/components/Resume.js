import React from 'react';

import DefaultLayout from 'components/DefaultLayout';
import 'components/LinearResumeItem.css';

function Resume() {
	return (
				<DefaultLayout>
					<div>
						<h3>Programming Languages and Frameworks</h3>
						<div className="linear-resume-list">
							<p className="title">Languages</p> 
							<div className="list">
								<span className="piped">Go</span>
								<span className="piped">Python</span>
								<span className="piped">Ruby</span>
								<span className="piped">Java</span>
								<span className="piped">Javascript</span>
								<span className="piped">R</span>
							</div>
						</div>
						<div className="linear-resume-list">
							<p className="title">Back-End</p>
							<div className="list">
								<span className="piped">Ruby-on-Rails</span>
								<span className="piped">NodeJS</span>
								<span className="piped">Spring</span>
								<span className="piped">Jekyll</span>
							</div>
						</div>
						<div className="linear-resume-list">
							<p className="title">Front-End</p>
							<div className="list">
								<span className="piped">React</span>
								<span className="piped">JQuery</span>
								<span className="piped">Angular</span>
								<span className="piped">Dojo</span>
							</div>
						</div>
						<div className="linear-resume-list">
							<p className="title">Other</p>
							<div className="list">
								<span className="piped">Docker</span>
								<span className="piped">Webpack</span>
								<span className="piped">CSS</span>
								<span className="piped">Sass</span>
							</div>
						</div>
					</div>
				</DefaultLayout>
			);
}

export default Resume;

import React from 'react';

import LinearResumeItem from 'components/LinearResumeItem';

import 'components/LinearResumeList.css';

function LinearResumeList({title, items}) {
	let listItems = items.map((item, index) =>
		<LinearResumeItem key={ index }>{ item }</LinearResumeItem>
	);

	return (
		<div className="linear-resume-list">
			<p className="title">{ title }</p>
			<div className="list">
				{ listItems }
			</div>
		</div>
	);
}

export default LinearResumeList;
			

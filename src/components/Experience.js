import React from 'react';

import VerticalResumeListItem from 'components/VerticalResumeListItem';

function Experience({ title, experience }) {
	let resumeListItems = experience.map((item, index) =>
			<VerticalResumeListItem
				title={ item.title }
				startDate={ item.startDate }
				endDate={ item.endDate }
				items={ item.items }
				key={ index }
			/>);

	return (
			<div className="experience">
				<h3>{ title }</h3>
				<div className="vertical-resume-list">
					{ resumeListItems }
				</div>
			</div>
		);
}

export default Experience;


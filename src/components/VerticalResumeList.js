import React from 'react';

import VerticalResumeListItem from 'components/VerticalResumeListItem';

function VerticalResumeList({ title, verticalResumeList }) {
	let resumeListItems = verticalResumeList.map((item, index) =>
			<VerticalResumeListItem
				title={ item.title }
				startDate={ item.startDate }
				endDate={ item.endDate }
				items={ item.items }
				key={ index }
			/>);

	return (
			<div>
				<h3>{ title }</h3>
				<div className="vertical-resume-list">
					{ resumeListItems }
				</div>
			</div>
		);
}

export default VerticalResumeList;

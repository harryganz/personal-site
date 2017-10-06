import React from 'react';

import 'components/VerticalResumeListItem.css'

function VerticalResumeListItem({ startDate, endDate, title, items }) {
	let listItems = items.map((item, index) => <li key={ index }>{ item }</li>);
	return (
			<div className="vertical-resume-item">
				<p>{ startDate } -  { endDate }</p>
				<div>
					<p className="title">{ title }</p>
					<ul>
						{ listItems }
					</ul>
				</div>
			</div>
		);
}

export default VerticalResumeListItem;


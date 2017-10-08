import React from 'react';

import 'components/VerticalResumeListItem.css'

function VerticalResumeListItem({ caption, title, items }) {
	let listItems = items.map((item, index) => <li key={ index }>{ item }</li>);
	return (
			<div className="vertical-resume-item">
				<p className="caption">{ caption }</p>
				<div>
					<p className="title">{ title }</p>
					<ul>
						{ listItems }
					</ul>
				</div>
			</div>
		);
}

VerticalResumeListItem.defaultProps = {
  caption: '',
  title: '',
  items: [],
};

export default VerticalResumeListItem;


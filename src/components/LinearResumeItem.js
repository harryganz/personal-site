import React from 'react';

import 'components/LinearResumeItem.css';

function LinearResumeItem({ children }) {
	return (
		<span className="linear-resume-item">{ children }</span>
	);
}

export default LinearResumeItem;


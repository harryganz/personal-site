const projects = require('actions/projectsActions');
const resume = require('actions/resumeActions');

export default {
	...projects,
  ...resume,
};

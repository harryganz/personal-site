export function getProjectsSuccess(projects) {
	return {
		type: 'GET_PROJECTS_SUCCESS',
		projects: projects,
	};
}

export function getProjectsFailure(error) {
	return {
		type: 'GET_PROJECTS_FAILURE',
		error: error,
	};
}

export function getProjectsRequest() {
	return {
		type: 'GET_PROJECTS_REQUEST',
	};
}

export function getProjects() {
	return dispatch => {
		dispatch(getProjectsRequest());
		fetch('/data/projects.json') //TODO: use constant
			.then(response => {
				if (!response.ok) {
					throw new Error('There was a problem getting project data from server');
				}
				console.log(response.body);
				response.json()
					.then(data => dispatch(getProjectsSuccess(data)))
					.catch(err => { throw new Error(err); });
			})
			.catch(err => {
					console.log(err);
					dispatch(getProjectsFailure(err.message));
				});
	}
}

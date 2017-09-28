export default function projects(currentState, action) {
	currentState = currentState || {projects: [], isFetching: false, error: ""};

	switch (action.type) {
		case 'GET_PROJECTS_REQUEST':
			return Object.assign({}, currentState, {isFetching: true, error: ""});
		case 'GET_PROJECTS_SUCCESS':
			return Object.assign({}, currentState, {projects: action.projects, isFetching: false, error: ""});
		case 'GET_PROJECTS_FAILURE':
			return Object.assign({}, currentState, {isFetching: false, error: action.error});
		default:
			return currentState;
	}
}
		

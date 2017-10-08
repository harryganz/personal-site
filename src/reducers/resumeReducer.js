export default function resume(currentState, action) {
  currentState = currentState || {
    resume: {
      skills: [],
			experience: [],
			education: [],
      languages: [],
    },
    isFetching: false,
    error: "",
  };

  switch(action.type) {
    case 'GET_RESUME_REQUEST':
      return Object.assign({}, currentState, {isFetching: true, error: ""});
    case 'GET_RESUME_SUCCESS':
      return Object.assign({}, currentState, {isFetching: false, resume: action.resume, error: ""});
    case 'GET_RESUME_FAILURE':
      return Object.assign({}, currentState, {isFetching: false, resume: [], error: action.error});
    default:
      return currentState;
  }
} 


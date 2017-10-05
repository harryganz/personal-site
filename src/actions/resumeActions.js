export function getResumeSuccess(resume) {
  return {
    type: 'GET_RESUME_SUCCESS',
    resume: resume,
  };
}

export function getResumeFailure(error) {
  return {
    type: 'GET_RESUME_FAILURE',
    error: error,
  };
}

export function getResumeRequest() {
  return {
    type: 'GET_RESUME_REQUEST',
  };
}

export function getResume() {
  return dispatch => {
    dispatch(getResumeRequest());
    fetch('/data/resume.json') //TODO: use constant
      .then(response => {
        if (!response.ok) {
          throw new Error('There was a problem getting resume data from the server');
        }
        response.json()
          .then(data => dispatch(getResumeSuccess(data)))
          .catch(err => { throw new Error(err); });
      })
      .catch(err => {
        console.log(err);
        dispatch(getResumeFailure(err.message));
      });
  }
}


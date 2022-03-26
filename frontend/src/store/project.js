const LOAD = 'project/LOAD';
// const UPDATE = 'project/UPDATE';

const loadProject = (project) => ({
  type: LOAD,
  project
})

export const updateCurrentProject = (projectId, project) => async (dispatch) => {
  const response = await fetch(`/api/projects/${projectId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(project)
  });
  const data = await response.json();
  dispatch(loadProject(data.day));
}

const projectReducer = () => {
  return (state = {}, action) => {
    switch (action.type) {
      default:
        return state;
    }
  }
}

export default projectReducer;

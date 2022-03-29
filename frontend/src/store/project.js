import {csrfFetch} from './csrf';
import {loadDay} from './day'



export const createProject = (project) => async(dispatch) => {
  const response = await csrfFetch(`/api/projects`, {
    method: 'POST',
    body: JSON.stringify(project)
  });
  const data = await response.json();
  dispatch(loadDay(data.day));
}
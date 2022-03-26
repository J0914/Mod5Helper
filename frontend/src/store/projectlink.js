import {csrfFetch} from './csrf';
import {loadDay} from './day'

export const createProjectLink = (link) => async (dispatch) => {
  const response = await csrfFetch(`/api/projectlinks`, {
    method: 'POST',
    body: JSON.stringify(link)
  });
  const data = await response.json();
  dispatch(loadDay(data.day));
}

export const deleteProjectLink = (linkId) => async (dispatch) => {
  const response = await csrfFetch(`/api/projectlinks/${linkId}`, {
    method: 'DELETE'
  });
  const data = await response.json();
  dispatch(loadDay(data.day));
}
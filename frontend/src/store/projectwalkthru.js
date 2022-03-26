import {csrfFetch} from './csrf';
import {loadDay} from './day';

export const createProjectWalkthru = (walkthru) => async (dispatch) => {
  const response = await csrfFetch(`/api/projectwalkthrus`, {
    method: 'POST',
    body: JSON.stringify(walkthru)
  });
  const data = await response.json();
  dispatch(loadDay(data.day));
}

export const deleteProjectWalkthru = (walkthruId) => async (dispatch) => {
  const response = await csrfFetch(`/api/projectwalkthrus/${walkthruId}`, {
    method: 'DELETE',
  });
  const data = await response.json();
  dispatch(loadDay(data.day));
}
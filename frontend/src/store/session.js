import { csrfFetch } from './csrf';

const SET_USER = 'session/setUser';
const SET_MOD_USERS = 'session/setModUsers';
const REMOVE_USER = 'session/removeUser';

const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user,
  };
};

const setModUsers = (users) => ({
  type: SET_MOD_USERS,
  users,
})

const removeUser = () => {
  return {
    type: REMOVE_USER,
  };
};

export const getAllModUsers = (modId) => async (dispatch) => {
  const response = await fetch(`/api/users/${modId}`);
  const data = await response.json();
  dispatch(setModUsers(data.users));
};

export const login = (user) => async (dispatch) => {
  const { credential, password } = user;
  const response = await csrfFetch('/api/session', {
    method: 'POST',
    body: JSON.stringify({
      credential,
      password,
    }),
  });
  const data = await response.json();
  dispatch(setUser(data.user));
  return response;
};

export const restoreUser = () => async dispatch => {
  const response = await csrfFetch('/api/session');
  const data = await response.json();
  dispatch(setUser(data.user));
  return response;
};

export const signup = (user) => async (dispatch) => {
  const response = await csrfFetch("/api/users", {
    method: "POST",
    body: JSON.stringify(user),
  });
  const data = await response.json();
  dispatch(setUser(data.user));
  return response;
};

export const logout = () => async (dispatch) => {
  const response = await csrfFetch('/api/session', {
    method: 'DELETE',
  });
  dispatch(removeUser());
  return response;
};

const initialState = { user: null, modUsers: null};

const sessionReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_USER:
      newState = {...state};
      newState.user = action.payload;
      return newState;
    case SET_MOD_USERS:
      newState = {...state};
      newState.modUsers = action.users;
      return newState;
    case REMOVE_USER:
      newState = {...state};
      newState.user = null;
      return newState;
    default:
      return state;
  }
};

export default sessionReducer;
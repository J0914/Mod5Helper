const LOAD = 'week/LOAD';

const loadWeek = (week) => ({
  type: LOAD,
  week
})

export const loadCurrentWeek = (weekId) => async (dispatch) => {
  const response = await fetch(`/api/weeks/${weekId}`);
  const data = await response.json();
  dispatch(loadWeek(data.week));
}

const initialState = {
  currentWeek: {}
}

const weekReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case LOAD:
      newState = { ...state };
      newState.currentWeek = action.week;
      return newState;
    default:
      return state;
  }
}

export default weekReducer;
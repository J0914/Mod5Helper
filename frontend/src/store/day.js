const LOAD = 'day/LOAD';

const loadDay = (day) => ({
  type: LOAD,
  day
})

export const loadCurrentDay = (dayId) => async (dispatch) => {
  const response = await fetch(`/api/days/${dayId}`);
  const data = await response.json();
  dispatch(loadDay(data.day));
}

const initialState = {
  currentDay: {}
}

const dayReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case LOAD:
      newState = { ...state };
      newState.currentDay = action.day;
      return newState;
    default:
      return state;
  }
}

export default dayReducer;

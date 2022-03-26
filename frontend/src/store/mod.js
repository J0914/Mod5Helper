import { csrfFetch } from "./csrf";

const LOAD = 'mod/LOAD';
const LOAD_ONE = 'mod/LOAD_ONE';

const loadMods = (mods) => ({
  type: LOAD,
  mods
})

const loadSingleMod = (mod) => ({
  type: LOAD_ONE,
  mod
})

export const loadAllMods = () => async (dispatch) => {
  
  const response = await csrfFetch('/api/mods');
  const data = await response.json();

  dispatch(loadMods(data.mods));
};

export const loadCurrentMod = (modId) => async (dispatch) => {
  
  const response = await csrfFetch(`/api/mods/${modId}`);
  const data = await response.json();

  dispatch(loadSingleMod(data.mod));
};

const initialState = {
  allMods: {},
  currentMod: {},
};

const modReducer = (state = initialState, action) => {
  let newState;
  switch(action.type) {
    case LOAD:
      newState = {...state}; // copy state  
      action.mods.forEach(mod => { // normalize data
        newState.allMods[mod.id] = mod;
      });
      return newState;
    case LOAD_ONE:
      newState = {...state}; // copy state
      newState.currentMod = action.mod;
      return newState;
    default: 
      return state;
  }
}

export default modReducer;
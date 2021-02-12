import { searchesTypes } from './searches.types';

const initialState = [];

const searchesReducer = (state = initialState, action) => {
  switch (action.type) {
    case searchesTypes.SAVE_SEARCH_QUERY:
      const newState = [...state, action.query];
      return [...new Set(newState)];
    default:
      return state;
  }
};

export default searchesReducer;

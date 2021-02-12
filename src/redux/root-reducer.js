import { combineReducers } from 'redux';
import searchesReducer from './searches/searches.reducers';

const rootReducer = combineReducers({
  savedSearches: searchesReducer,
});

export default rootReducer;

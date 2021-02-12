import { searchesTypes } from './searches.types';

export const saveSearchQuery = (query) => {
  return {
    type: searchesTypes.SAVE_SEARCH_QUERY,
    query,
  };
};

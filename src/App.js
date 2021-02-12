import { useEffect, useState } from 'react';

import api from './api';
import classes from './App.module.css';

import SearchResults from './components/searchResult.component';
import { SavedSearches, SearchInput } from './components';

const getNews = async (query) => {
  try {
    const response = await api.get(`search?query=${query}`);
    return response.data.hits;
  } catch (error) {
    console.error(error);
  }
};

const App = () => {
  const [currentQuery, setCurrentQuery] = useState();
  const [currentResults, setCurrentResults] = useState([]);

  const handleGetNews = async (query) => {
    const results = await getNews(query);
    setCurrentResults(results);
  };

  useEffect(() => {
    if (currentQuery) handleGetNews(currentQuery);
  }, [currentQuery]);

  return (
    <div>
      <h1>Search Hacker News</h1>
      <div className={classes.Layout}>
        <div className={classes.Search}>
          <SearchInput handleGetNews={handleGetNews} setCurrentQuery={setCurrentQuery} />
          <SavedSearches setCurrentQuery={setCurrentQuery} />
        </div>
        <SearchResults currentQuery={currentQuery} currentResults={currentResults} />
      </div>
    </div>
  );
};

export default App;

import { useState } from 'react';

import classes from './App.module.css';

import SearchResults from './components/searchResult.component';
import { SavedSearches, SearchInput } from './components';


const App = () => {
  const [currentQuery, setCurrentQuery] = useState();

  return (
    <div>
      <h1>Search Hacker News</h1>
      <div className={classes.Layout}>
        <div className={classes.Search}>
          <SearchInput setCurrentQuery={setCurrentQuery} />
          <SavedSearches setCurrentQuery={setCurrentQuery} />
        </div>
        <SearchResults currentQuery={currentQuery} />
      </div>
    </div>
  );
};

export default App;

import { useState } from 'react';
import { connect } from 'react-redux';
import api from './api';
import { useForm } from 'react-hook-form';

import classes from './App.module.css';
import * as actions from './redux/searches/searches.actions';

const getNews = async (query) => {
  try {
    const response = await api.get(`search?query=${query}`);
    return response.data.hits;
  } catch (error) {
    console.error(error);
  }
};

const App = ({ saveSearchQuery, savedSearches }) => {
  const { register, handleSubmit } = useForm();
  const [currentQuery, setCurrentQuery] = useState();
  const [currentResults, setCurrentResults] = useState([]);

  const onSubmit = async ({ query }) => {
    setCurrentQuery(query);
    saveSearchQuery(query);
    const results = await getNews(query);
    setCurrentResults(results);
  };

  return (
    <div>
      <h1>Search Hacker News</h1>
      <div className={classes.Layout}>
        <div className={classes.Search}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input ref={register} type="text" name="query" />
            <button type="submit">Search</button>
          </form>
          <div>Saved Searches</div>
          <ul>
            {savedSearches.map((savedQuery, i) => (
              <li key={i}>
                <a href="#" className={classes.SaveSearchQuery} onClick={onSubmit.bind(this, { query: savedQuery })}>
                  {savedQuery}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {currentResults.length ? (
          <div>
            <div className={classes.Results}>Results for {currentQuery}</div>
            <ul>
              {currentResults.map((item) => (
                <li key={item.objectID}>
                  <a href={item.url}>{item.title}</a>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className={classes.Results}>Results {currentQuery ? `for ${currentQuery}` : null}</div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    savedSearches: state.savedSearches,
  };
};

const mapDispatchToProps = (dispatch) => ({
  saveSearchQuery: (query) => dispatch(actions.saveSearchQuery(query)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

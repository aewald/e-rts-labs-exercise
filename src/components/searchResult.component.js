import { useEffect, useState } from "react";

import api from '../api';

const getNews = async (query) => {
  try {
    const response = await api.get(`search?query=${query}`);
    return response.data.hits;
  } catch (error) {
    console.error(error);
  }
};

const SearchResults = ({ currentQuery }) => {
  const [currentResults, setCurrentResults] = useState([]);
  
  const handleGetNews = async (query) => {
    const results = await getNews(query)
    setCurrentResults(results);
  }

  useEffect(() => {
    if (currentQuery) handleGetNews(currentQuery);
  }, [currentQuery])

  return  (
      <div>
        {currentResults.length ? (
          <div>
            <div>Results for {currentQuery}</div>
            <ul>
              {currentResults.map((item) => (
                <li key={item.objectID}>
                  <a href={item.url}>{item.title}</a>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div>Results {currentQuery ? `for ${currentQuery}` : null}</div>
        )}
      </div>
    );
;
};

export default SearchResults;

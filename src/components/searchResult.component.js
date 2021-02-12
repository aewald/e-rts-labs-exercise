const SearchResults = ({ currentQuery, currentResults }) => (
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

export default SearchResults;

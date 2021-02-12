import { connect } from 'react-redux';

import classes from './css/SavedSearches.module.css';
import * as actions from '../redux/searches/searches.actions';

const SavedSearches = ({ saveSearchQuery, savedSearches, setCurrentQuery }) => {
  const onSubmit = async ({ query }) => {
    setCurrentQuery(query);
    saveSearchQuery(query);
  };

  return (
    <div>
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

export default connect(mapStateToProps, mapDispatchToProps)(SavedSearches);

import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';

import * as actions from '../redux/searches/searches.actions';

const SearchInput = ({ saveSearchQuery, setCurrentQuery }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = ({ query }) => {
    setCurrentQuery(query);
    saveSearchQuery(query);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input ref={register} type="text" name="query" />
      <button type="submit">Search</button>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  saveSearchQuery: (query) => dispatch(actions.saveSearchQuery(query)),
});

export default connect(null, mapDispatchToProps)(SearchInput);

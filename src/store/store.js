import { createStore } from 'redux';
import reducers from '../reducers/reducers';

let initialState = {
  notes: [
    { title: 'Start your day with a smile', content: 'Good job' },
    { title: 'Productive', content: 'Do what makes you happy' },
  ],
  visibility: 'AWESOME_TAG',
};

export default createStore(
  reducers,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
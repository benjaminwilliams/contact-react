import { createStore } from 'redux';
import rootReducer from './reducers/index';

const contactDetails = {
  "name": "",
  "email": "",
  "message": ""
};

const defaultState = {
  contactDetails
};

const store = createStore(rootReducer, defaultState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
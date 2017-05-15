import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './components/app.jsx';
import { Provider } from 'react-redux';
import store from './store.js';
render (
  <Provider store={store}>

  <AppContainer>
    <App />
  </AppContainer>
  </Provider>,
  document.querySelector("#app")
);
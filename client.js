import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';

import App from './containers/App';
import createStore from './store/create';
import decodeJWT from './actions/session/decode_jwt';

const container = document.querySelector('#content');
const store = createStore();

store.dispatch(decodeJWT());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  container
);

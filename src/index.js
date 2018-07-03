import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/index.js';
import DevTools from './DevTools.js';
import { GET_COUNTRIES, getCountries } from './actions/actions-countries.js';

render(
  <Provider store={store}>
    <div>
        <h1>The project initialization</h1>
        <DevTools />
    </div>
  </Provider>,
    document.getElementById('root')
);

store.dispatch(getCountries());

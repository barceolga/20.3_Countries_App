import React from 'react';
import { render } from 'react-dom';
import { Router, hashHistory } from  'react-router';
import { Provider } from 'react-redux';
import store from './store/index.js';
import routes from './routes.js';
import DevTools from './DevTools.js';
import {  getCountries } from './actions/actions-countries.js';

render(
  <Provider store={store}>
  <div>
    <Router history={hashHistory} routes={routes}>
    </Router>
    <DevTools />
  </div>
  </Provider>,
    document.getElementById('root')
);

store.dispatch(getCountries());

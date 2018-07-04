import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Navigation from './presentational/navigation.component.js';
import Home from './presentational/home.component.js';
import Contact from './presentational/contact.component.js';
import NotFound from './presentational/not-found.component.js';
import CountryFlagContainer from './containers/flag-container.component.js';

export default (
  <Route path='/' component={Navigation}>
      <IndexRoute component={Home}/>
      <Route path='countries' component={CountryFlagContainer} />
      <Route path='contact' component={Contact} />
      <Route path='*' component={NotFound} />
  </Route>
);

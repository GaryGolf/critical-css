import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/home';
import AboutPage from './components/about';

export default (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/about" component={AboutPage} />
  </Switch>
);

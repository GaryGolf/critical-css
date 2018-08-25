import * as React from 'react';
import { Dispatch } from 'redux';
import { Switch, Route, matchPath } from 'react-router-dom';
// containers;
import HomePage from './components/home';
import AboutPage from './components/about';
import MessagesPage from './components/message'

const routes = ( 
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/about" component={AboutPage} />
    <Route path="/message" component={MessagesPage} />
  </Switch>
);

export const getRoutes = ():JSX.Element => routes;
export const matchRoutes = (path:string) => routes
  .props
  .children
  .reduce((acc, route) => {
    const m = matchPath(path, route.props);
    return !m ? acc : [...acc, { ...m, component: route.props.component}];
  } ,[]);

export const loadData = (path:string) => routes
  .props
  .children
  .reduce((acc, route) => {
    const m = matchPath(path, route.props);
    if (!m || !route.component.loadData) return acc;
    return [...acc, route.component.loadData]
  } ,[]);


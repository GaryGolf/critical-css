import * as React from 'react';
import { Dispatch } from 'redux';
import { Switch, Route, matchPath, match } from 'react-router-dom';
// containers;
import HomePage from './components/home';
import AboutPage from './components/about';

const routes = ( 
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/about" component={AboutPage} />
  </Switch>
);

export const getRoutes = ():JSX.Element => routes;
export const matchRoutes = (path:string):match<any>[] => routes
  .props
  .children
  .reduce((acc, route) => {
    const m = matchPath(path, route.props);
    console.log(route.props)
    return !m ? acc : [...acc, m];
  } ,[])
  // .map(route => ({ ...route.props }))
  // .reduce((acc, route) => [...acc, matchPath(path, route)], [])
  // .filter(route => !!route);


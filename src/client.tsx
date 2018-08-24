import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import { getRoutes } from './routes';

const routes = getRoutes();
const app = (
  <Router>
    {routes}
  </Router>
);

ReactDOM.hydrate(app, document.getElementById('app'));
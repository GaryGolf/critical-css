import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router} from 'react-router-dom';
import { getRoutes } from './routes';
import { configureStore } from './store/config';

const store = configureStore({}, null);
const routes = getRoutes();
const app = (
  <Provider store={store}>
    <Router>
      {routes}
    </Router>
  </Provider>
);

ReactDOM.hydrate(app, document.getElementById('app'));

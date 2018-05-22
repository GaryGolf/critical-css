import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import routes from './routes';

ReactDOM.hydrate(<Router>{routes}</Router>, document.getElementById('app'));
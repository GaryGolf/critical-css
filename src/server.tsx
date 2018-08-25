import * as cors from 'cors';
import * as React from 'react';
import  { Provider } from 'react-redux'
import * as ReactServer from 'react-dom/server';
import { Express, Request, Response } from 'express';
import { StaticRouter as Router } from 'react-router-dom';
import { HTML } from './template';
import { getRoutes, matchRoutes } from './routes';
import { configureStore } from './store/config'
const express = require('express');
const port = 3000;
const app: Express = express();

app.use('/static', express.static(process.cwd() + '/dist'));
app.use(cors());
app.use((req:Request, res:Response) => {
  const context: { status?: number } = {};
  if (context.status && context.status >= 200 && context.status < 600) {
      res.statusCode = context.status;
  }


  const store = configureStore({}, null);
  const routes:JSX.Element = getRoutes();
  const match = matchRoutes(req.url);
  if(!match.length) {
    res.status(404).send('page not found');
    return;
  }
  
  const promises = match
    .reduce((acc, r) => {
      if (!r.component || !r.component.loadData) return acc
      return [...acc, r.component.loadData];
    }, [])

  Promise.all(promises.map(p => p(store.dispatch)))
    .then(() => {
      const body = ReactServer.renderToString(
        <HTML store={store.getState()}>
          <Provider store={store}>
            <Router context={context} location={req.url}>
              {routes}
            </Router>
          </Provider>
        </HTML>
      )
      res.send(body).status(200).end();
    })
   
  });
  
  app.listen(port, () => {
    console.log(`Server is listeting on ${port}`);
  });

  
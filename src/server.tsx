import * as cors from 'cors';
import * as React from 'react';
import * as ReactServer from 'react-dom/server';
import { Express, Request, Response } from 'express';
import { StaticRouter as Router } from 'react-router-dom';
import { HTML } from './template';
import routes from './routes';
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

  const body = ReactServer.renderToString(
    <HTML>
      <Router context={context} location={req.url}>
        {routes}
      </Router>
    </HTML>
  )
    res.send(body).status(200).end();
  });
  
  app.listen(port, () => {
    console.log(`Server is listeting on ${port}`);
  });

  
import * as React from "react";
import * as serialize from 'serialize-javascript'

interface Props {
	store?: any;
  children?: JSX.Element;
}
export const HTML: React.SFC<Props> = props => {
	const store = serialize(props.store);
  return (
    <html>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="stylesheet" href="/static/styles.css" />
      </head>
      <body>
        <div id="app">{props.children}</div>
        { props.store && 
          <script dangerouslySetInnerHTML={{ __html: `window.__PRELOADED_STATE__ = ${store};`}}/>
        }
        <script src="/static/bundle.js" async />
      </body>
    </html>
  );
}

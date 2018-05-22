import * as React from "react";

interface Props {
    children?: JSX.Element;
}
export const HTML: React.SFC<Props> = props => {
    return (
			<html>
				<head>
					<meta charSet="UTF-8" />
					<meta name="viewport" content="width=device-width,initial-scale=1" />
				</head>
				<body>
					<div id="app">{props.children}</div>
					<script src="/static/bundle.js" async />
					<link rel="stylesheet" href="/static/styles.css" />
				</body>
			</html>
    );
}
import React from 'react';

export const Root = props => (
	<html>
		<head>
			<meta charSet="utf-8"></meta>
			<meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
			<meta name="viewport" content="width=device-width, initial-scale=1"></meta>
			<title>{props.title}</title>
			<link rel="stylesheet" type="text/css" href="/main.css"></link>
			<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"></link>
		</head>
		<body>
			<div id="content" dangerouslySetInnerHTML={props.reactApp}/>
			<script src="http://localhost:3000/webpack-dev-server.js"></script>
			<script src="/index.js"></script>
		</body>
	</html>
);

Root.propTypes = {
	title: React.PropTypes.string.isRequired,
	reactApp: React.PropTypes.shape({__html: React.PropTypes.string}).isRequired
};

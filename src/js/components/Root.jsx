import React from 'react';

export class Root extends React.Component {
	render() {
		return (
			<html>
				<head>
					<meta charSet="utf-8"></meta>
					<meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
					<meta name="viewport" content="width=device-width, initial-scale=1"></meta>
					<title>Vision 100 IT</title>
					<title>{this.props.title}</title>
					<link rel="stylesheet" type="text/css" href="/main.css"></link>
					<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"></link>
				</head>
				<body>
					<div id="content" dangerouslySetInnerHTML={this.props.reactApp} />
					<script src="http://localhost:3000/webpack-dev-server.js"></script>
					<script src="index.js"></script>
				</body>
			</html>
		);
	}
}

import React from 'react';
import '../../css/main';

export class Root extends React.Component {
		render() {
			return (<html>
						<head>
								<title>{this.props.title}</title>
								<link rel="stylesheet" type="text/css" href="main.css"></link>
						</head>
						<body>
								{this.props.children}
								<script src="http://localhost:3000/webpack-dev-server.js"></script>
								<script src="index.js"></script>
						</body>
				</html>);
		}
}

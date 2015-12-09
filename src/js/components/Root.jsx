import React from 'react';
import '../../css/main';
import {Header} from './Header';
import {MainMenu} from './MainMenu';
import {Footer} from './Footer';

export class Root extends React.Component {
	constructor(props) {
		super(props);
		this.state = {mainmenu: props.locals.content.mainmenu};
	}
	render() {
		return (
			<html>
				<head>
					<meta charSet="utf-8"></meta>
					<meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
					<meta name="viewport" content="width=device-width, initial-scale=1"></meta>
					<title>Document</title>
					<title>{this.props.title}</title>
					<link rel="stylesheet" type="text/css" href="main.css"></link>
					<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"></link>
				</head>
				<body>
					<Header>
						<a href="/"><div className="logo"></div></a>
						<div className="mobile-menu text-uppercase"><h3><a href="/blog">Client</a><a href="#how">Visitor</a></h3></div>
						<MainMenu {...this.state.mainmenu}></MainMenu>
					</Header>
					{this.props.children}
					<Footer></Footer>
					<script src="http://localhost:3000/webpack-dev-server.js"></script>
					<script src="index.js"></script>
				</body>
			</html>
		);
	}
}

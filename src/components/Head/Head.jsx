import React from 'react';

export const Head = ({title}) => (
	<head>
		<meta charSet="utf-8"></meta>
		<meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
		<meta name="viewport" content="width=device-width, initial-scale=1"></meta>
		<title>{title}</title>
		<link rel="stylesheet" type="text/css" href="/main.css"></link>
	</head>
);

Head.propTypes = {
	title: React.PropTypes.string.isRequired
};

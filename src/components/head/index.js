import React from 'react';
import PropTypes from 'prop-types';

const Head = ({title}) => (
	<head>
		<meta charSet="utf-8"/>
		<meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
		<meta name="viewport" content="width=device-width, initial-scale=1"/>
		<meta property="og:image" content="http://vision100.org/sites/vision100.org/files/nfd-social-media.jpg" />
		<title>{title}</title>
		<link rel="stylesheet" type="text/css" href="/main.css"/>
		<link rel="shortcut icon" href="https://vision100.org/sites/vision100.org/files/nfd-logo-favicon.ico"/>
		<script src="/critical.js"/>
	</head>
);

Head.propTypes = {
	title: PropTypes.string.isRequired
};

export default Head;

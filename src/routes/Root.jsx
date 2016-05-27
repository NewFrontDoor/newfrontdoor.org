import React from 'react';
import {Head} from '../components/Head';

export const Root = ({children}) => (
	<html>
		<Head title="Vision 100 IT"/>
		<body>
			<div id="content">
				{children}
			</div>
			<script src="http://localhost:3000/webpack-dev-server.js"></script>
			<script src="/index.js"></script>
		</body>
	</html>
);

Root.propTypes = {
	children: React.PropTypes.node.isRequired
	// reactApp: React.PropTypes.shape({__html: React.PropTypes.string}).isRequired
};

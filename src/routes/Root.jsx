import React from 'react';
import {Head} from '../components/Head';

let devServer = '';

if (process.env.NODE_ENV !== 'production') {
	devServer = <script src="http://localhost:3000/webpack-dev-server.js"></script>;
}

export const Root = ({children}) => (
	<html lang="en">
		<Head title="Vision 100 IT"/>
		<body>
			<div id="content">
				{children}
			</div>
			<script src="/critical.js"></script>
			{devServer}
			<script src="/main.js"></script>
		</body>
	</html>
);

Root.propTypes = {
	children: React.PropTypes.node.isRequired
};

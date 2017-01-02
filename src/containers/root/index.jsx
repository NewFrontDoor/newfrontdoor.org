import React, {PropTypes} from 'react';
import Head from '../../components/head/index.jsx';

let devServer = null;

if (process.env.NODE_ENV !== 'production') {
	devServer = <script src="http://localhost:3000/commons.js"/>;
}

const Root = ({children}) => (
	<html lang="en">
		<Head title="Vision 100 IT"/>
		<body>
			<div id="content">
				{children}
			</div>
			{devServer}
			<script src="/main.js"/>
		</body>
	</html>
);

Root.propTypes = {
	children: PropTypes.node.isRequired
};

export default Root;

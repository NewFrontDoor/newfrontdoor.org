import React from 'react';
import '../../css/main.scss';
import './Alert.scss';

const Alert = props => (
	<div className={props.type}>
		{props.children}
	</div>
);

Alert.propTypes = {
	type: React.PropTypes.string,
	children: React.PropTypes.node
};

export default Alert;

import React from 'react';
import './Alert.scss';

export const Alert = props => (
	<div className={props.type}>
		{props.children}
	</div>
);

Alert.propTypes = {
	type: React.PropTypes.string,
	children: React.PropTypes.node
};

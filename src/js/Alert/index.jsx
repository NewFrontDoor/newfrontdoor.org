import styles from './Alert.scss';
import React from 'react';

export const Alert = props => (
	<div className={props.type}>
		{props.children}
	</div>
);

Alert.propTypes = {
	type: React.PropTypes.string,
	children: React.PropTypes.node
};

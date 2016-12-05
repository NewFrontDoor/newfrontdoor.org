import React, {PropTypes} from 'react';
import '../../css/main.scss';
import './Alert.scss';

const Alert = props => (
	<div className={props.type}>
		{props.children}
	</div>
);

Alert.propTypes = {
	type: PropTypes.string,
	children: PropTypes.node
};

export default Alert;

import React, {PropTypes} from 'react';
import '../../css/main.scss';
import styles from './Alert.scss';

const Alert = props => (
	<div className={styles[props.type]}>
		{props.children}
	</div>
);

Alert.propTypes = {
	type: PropTypes.oneOf(['warning', 'announcement']),
	children: PropTypes.node
};

export default Alert;

import React, {PropTypes} from 'react';
import styles from './Alert.scss';

const Alert = props => (
	<div className={styles[props.type]}>
		{props.children}
	</div>
);

Alert.defaultProps = {
	children: null
};

Alert.propTypes = {
	type: PropTypes.oneOf(['warning', 'announcement']).isRequired,
	children: PropTypes.node
};

export default Alert;

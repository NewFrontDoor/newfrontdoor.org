import React, {PropTypes} from 'react';
import styles from './Collapse.scss';

const Collapse = props => (
	<div className={props.isOpened	? `${styles.toggle}  ${styles.visible}`	: styles.toggle}>
		{props.children}
	</div>
);

Collapse.propTypes = {
	children: PropTypes.node,
	isOpened: PropTypes.bool
};

export default Collapse;

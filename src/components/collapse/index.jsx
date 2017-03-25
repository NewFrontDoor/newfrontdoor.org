import React, {PropTypes} from 'react';
import classnames from 'classnames';
import styles from './Collapse.scss';

const Collapse = props => {
	const collapseClass = classnames(styles.toggle, {
		[styles.visible]: props.isOpened
	});

	return (
		<div className={collapseClass}>
			{props.children}
		</div>
	);
};

Collapse.defaultProps = {
	children: null
};

Collapse.propTypes = {
	children: PropTypes.node,
	isOpened: PropTypes.bool.isRequired
};

export default Collapse;

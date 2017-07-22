import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.scss';

const Button = ({additionalClasses, appearance, children, ...buttonProps}) => {
	const buttonClasses = `${styles[appearance]} ${additionalClasses}`;

	return (
		<button className={buttonClasses} {...buttonProps}>
			{children}
		</button>
	);
};

Button.defaultProps = {
	additionalClasses: '',
	children: null
};

Button.propTypes = {
	additionalClasses: PropTypes.string,
	appearance: PropTypes.oneOf(['blank']).isRequired,
	children: PropTypes.node
};

export default Button;

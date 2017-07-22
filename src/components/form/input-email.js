import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './input.scss';

const InputEmail = ({hasError, label, name, onChange, placeholder, required, value, width}) => {
	return (
		<fieldset className={classnames('form-group', {'has-error': hasError}, styles[width || 'full'])}>
			<label htmlFor={name}>{label}</label>
			<input id={name} type="email" className="form-control" name={name} placeholder={placeholder} value={value} required={required} onChange={onChange}/>
		</fieldset>
	);
};

InputEmail.defaultProps = {
	hasError: false,
	placeholder: '',
	required: false,
	width: 'full',
	value: ''
};

InputEmail.propTypes = {
	hasError: PropTypes.bool,
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	placeholder: PropTypes.string,
	required: PropTypes.bool,
	value: PropTypes.string,
	width: PropTypes.oneOf(['full', 'half'])
};

export default InputEmail;

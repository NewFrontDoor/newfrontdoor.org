import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './input.scss';

const InputTextArea = ({hasError, label, name, onChange, placeholder, required, rows, value, width}) => {
	return (
		<fieldset className={classnames('form-group', {'has-error': hasError}, styles[width || 'full'])}>
			<label htmlFor={name}>{label}</label>
			<textarea id={name} rows={rows} className="form-control" name={name} placeholder={placeholder} value={value} required={required} onChange={onChange}/>
		</fieldset>
	);
};

InputTextArea.defaultProps = {
	hasError: false,
	required: false,
	placeholder: '',
	width: 'full',
	value: '',
	rows: '2'
};

InputTextArea.propTypes = {
	hasError: PropTypes.bool,
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	placeholder: PropTypes.string,
	required: PropTypes.bool,
	rows: PropTypes.string,
	value: PropTypes.string,
	width: PropTypes.oneOf(['full', 'half'])
};

export default InputTextArea;

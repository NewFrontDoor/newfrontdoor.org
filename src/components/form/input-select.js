import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './input.scss';

const InputSelect = ({hasError, label, name, onChange, options, required, value, width}) => {
	return (
		<fieldset className={classnames('form-group', {'has-error': hasError}, styles[width])}>
			<label htmlFor={name}>{label}</label>
			<select id={name} className="form-control" name={name} value={value} required={required} onChange={onChange} >
				{options.map(({key, label}) => {
					return (
						<option key={key} value={key}>{label}</option>
					);
				})}
			</select>
		</fieldset>
	);
};

InputSelect.defaultProps = {
	hasError: false,
	required: false,
	width: 'full',
	value: ''
};

InputSelect.propTypes = {
	hasError: PropTypes.bool,
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	options: PropTypes.array.isRequired,
	required: PropTypes.bool,
	value: PropTypes.string,
	width: PropTypes.oneOf(['full', 'half'])
};

export default InputSelect;

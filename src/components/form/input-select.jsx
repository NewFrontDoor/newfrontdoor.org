import React from 'react';
import classnames from 'classnames';
import styles from './input.scss';

const InputSelect = ({hasError, label, name, onChange, options, required, value, width}) => {
	return (
		<fieldset className={classnames('form-group', {'has-error': hasError}, styles[width || 'full'])}>
			<label htmlFor={name}>{label}</label>
			<select id={name} className="form-control" name={name} onChange={onChange} value={value} required={required}>
				{options.map(({key, label}) => {
					return (
						<option key={key} value={key}>{label}</option>
					);
				})}
			</select>
		</fieldset>
	);
};

InputSelect.propTypes = {
	// errors: React.PropTypes.array,
	hasError: React.PropTypes.bool,
	// id: React.PropTypes.string,
	label: React.PropTypes.string,
	name: React.PropTypes.string,
	onChange: React.PropTypes.func,
	options: React.PropTypes.array,
	required: React.PropTypes.bool,
	value: React.PropTypes.string,
	width: React.PropTypes.oneOf(['full', 'half'])
};

export default InputSelect;

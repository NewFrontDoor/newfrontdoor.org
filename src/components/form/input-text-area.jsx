import React from 'react';
import classnames from 'classnames';

export const InputTextArea = ({hasError, label, name, onChange, placeholder, required, rows, value}) => {
	return (
		<fieldset className={classnames('form-group', {'has-error': hasError})}>
			<label htmlFor={name}>{label}</label>
			<textarea id={name} rows={rows} className="form-control" name={name} placeholder={placeholder} onChange={onChange} value={value} required={required}/>
		</fieldset>
	);
};

InputTextArea.defaultProps = {
	value: ''
};

InputTextArea.propTypes = {
	hasError: React.PropTypes.bool,
	id: React.PropTypes.string,
	label: React.PropTypes.string,
	name: React.PropTypes.string,
	onChange: React.PropTypes.func,
	placeholder: React.PropTypes.string,
	required: React.PropTypes.bool,
	rows: React.PropTypes.string,
	value: React.PropTypes.string
};

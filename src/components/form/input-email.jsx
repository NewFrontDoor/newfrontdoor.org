import React from 'react';
import classnames from 'classnames';

export const InputEmail = ({hasError, label, name, onChange, placeholder, required, value}) => {
	return (
		<fieldset className={classnames('form-group', {'has-error': hasError})}>
			<label htmlFor={name}>{label}</label>
			<input id={name} type="email" className="form-control" name={name} placeholder={placeholder} onChange={onChange} value={value} required={required}/>
		</fieldset>
	);
};

InputEmail.defaultProps = {
	value: ''
};

InputEmail.propTypes = {
	// errors: React.PropTypes.array,
	hasError: React.PropTypes.bool,
	// id: React.PropTypes.string,
	label: React.PropTypes.string,
	name: React.PropTypes.string,
	onChange: React.PropTypes.func,
	placeholder: React.PropTypes.string,
	required: React.PropTypes.bool,
	value: React.PropTypes.string
};

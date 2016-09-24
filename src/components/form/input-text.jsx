import React from 'react';
import classnames from 'classnames';

export const InputText = ({hasError, label, name, onChange, placeholder, required, value}) => {
	return (
		<fieldset className={classnames('form-group', {'has-error': hasError})}>
			<label htmlFor={name}>{label}</label>
			<input id={name} type="text" className="form-control" name={name} placeholder={placeholder} onChange={onChange} value={value} required={required}/>
		</fieldset>
	);
};

InputText.defaultProps = {
	value: ''
};

InputText.propTypes = {
	hasError: React.PropTypes.bool,
	// id: React.PropTypes.string,
	label: React.PropTypes.string,
	name: React.PropTypes.string,
	onChange: React.PropTypes.func,
	placeholder: React.PropTypes.string,
	required: React.PropTypes.bool,
	value: React.PropTypes.string
};

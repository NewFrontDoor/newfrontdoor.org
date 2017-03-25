import React, {PropTypes} from 'react';
import classnames from 'classnames';
import styles from './input.scss';

const InputText = ({hasError, label, name, onChange, placeholder, required, value, width}) => {
	return (
		<fieldset className={classnames('form-group', {'has-error': hasError}, styles[width || 'full'])}>
			<label htmlFor={name}>{label}</label>
			<input id={name} type="text" className="form-control" name={name} placeholder={placeholder} onChange={onChange} value={value} required={required}/>
		</fieldset>
	);
};

InputText.defaultProps = {
	value: ''
};

InputText.propTypes = {
	hasError: PropTypes.bool,
	label: PropTypes.string,
	name: PropTypes.string,
	onChange: PropTypes.func,
	placeholder: PropTypes.string,
	required: PropTypes.bool,
	value: PropTypes.string,
	width: PropTypes.oneOf(['full', 'half'])
};

export default InputText;

import React, {PropTypes} from 'react';
import classnames from 'classnames';
import styles from './input.scss';

const InputTextArea = ({hasError, label, name, onChange, placeholder, required, rows, value, width}) => {
	return (
		<fieldset className={classnames('form-group', {'has-error': hasError}, styles[width || 'full'])}>
			<label htmlFor={name}>{label}</label>
			<textarea id={name} rows={rows} className="form-control" name={name} placeholder={placeholder} onChange={onChange} value={value} required={required}/>
		</fieldset>
	);
};

InputTextArea.defaultProps = {
	value: ''
};

InputTextArea.propTypes = {
	hasError: PropTypes.bool,
	// id: PropTypes.string,
	label: PropTypes.string,
	name: PropTypes.string,
	onChange: PropTypes.func,
	placeholder: PropTypes.string,
	required: PropTypes.bool,
	rows: PropTypes.string,
	value: PropTypes.string,
	width: PropTypes.oneOf(['full', 'half'])
};

export default InputTextArea;

import React, {PropTypes} from 'react';
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
	// errors: PropTypes.array,
	hasError: PropTypes.bool,
	// id: PropTypes.string,
	label: PropTypes.string,
	name: PropTypes.string,
	onChange: PropTypes.func,
	options: PropTypes.array,
	required: PropTypes.bool,
	value: PropTypes.string,
	width: PropTypes.oneOf(['full', 'half'])
};

export default InputSelect;

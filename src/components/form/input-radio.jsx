import React, {PropTypes} from 'react';
import classnames from 'classnames';
import styles from './input.scss';

const InputRadio = ({hasError, label, name, onChange, options, placeholder, required, width}) => {
	return (
		<fieldset className={classnames('form-group', {'has-error': hasError}, styles[width || 'full'])}>
			<label htmlFor={name}>{label}</label>
			{options.map(({key, label, help}) => {
				return (
					<div className="radio" key={key}>
						<label>
							<input type="radio" name={name} placeholder={placeholder} onChange={onChange} value={key} required={required}/>
							{label}
						</label>
						{help && <p className="help-block">{help}</p>}
					</div>
				);
			})}
		</fieldset>
	);
};

InputRadio.propTypes = {
	hasError: PropTypes.bool,
	label: PropTypes.string,
	name: PropTypes.string,
	onChange: PropTypes.func,
	options: PropTypes.array,
	placeholder: PropTypes.string,
	required: PropTypes.bool,
	width: PropTypes.oneOf(['full', 'half'])
};

export default InputRadio;

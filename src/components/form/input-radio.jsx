import React, {PropTypes} from 'react';
import classnames from 'classnames';
import styles from './input.scss';

const InputRadio = ({hasError, label, name, onChange, options, placeholder, required, width}) => {
	return (
		<fieldset className={classnames('form-group', {'has-error': hasError}, styles[width])}>
			<label htmlFor={name}>{label}</label>
			{options.map(({key, label, help}) => {
				return (
					<div className="radio" key={key}>
						<label>
							<input type="radio" name={name} placeholder={placeholder} value={key} required={required} onChange={onChange}/>
							{label}
						</label>
						{help && <p className="help-block">{help}</p>}
					</div>
				);
			})}
		</fieldset>
	);
};

InputRadio.defaultProps = {
	hasError: false,
	placeholder: '',
	required: false,
	width: 'full'
};

InputRadio.propTypes = {
	hasError: PropTypes.bool,
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	options: PropTypes.array.isRequired,
	placeholder: PropTypes.string,
	required: PropTypes.bool,
	width: PropTypes.oneOf(['full', 'half'])
};

export default InputRadio;

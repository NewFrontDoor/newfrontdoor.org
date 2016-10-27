import React from 'react';
import classnames from 'classnames';
import styles from './input.scss';

const InputRadio = ({hasError, label, name, onChange, options, placeholder, required, value, width}) => {
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
	hasError: React.PropTypes.bool,
	// id: React.PropTypes.string,
	label: React.PropTypes.string,
	name: React.PropTypes.string,
	onChange: React.PropTypes.func,
	options: React.PropTypes.array,
	placeholder: React.PropTypes.string,
	required: React.PropTypes.bool,
	value: React.PropTypes.string,
	width: React.PropTypes.oneOf(['full', 'half'])
};

export default InputRadio;

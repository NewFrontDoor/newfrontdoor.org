import React from 'react';
import classnames from 'classnames';

export const InputRadio = ({hasError, label, name, onChange, options, placeholder, value}) => {
	return (
		<fieldset className={classnames('form-group', {'has-error': hasError})}>
			<label htmlFor={name}>{label}</label>
			{options.map(({key, label, help}) => {
				return (
					<div className="radio" key={key}>
						<label>
							<input id={name} type="radio" name={name} placeholder={placeholder} onChange={onChange} value={value}/>
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
	id: React.PropTypes.string,
	label: React.PropTypes.string,
	name: React.PropTypes.string,
	onChange: React.PropTypes.func,
	options: React.PropTypes.array,
	placeholder: React.PropTypes.string,
	value: React.PropTypes.string
};

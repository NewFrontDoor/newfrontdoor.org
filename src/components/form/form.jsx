import React from 'react';

const Form = ({bindInput, children, className, fields, schema, onSubmit}) => {
	const fieldArray = Object.keys(fields).map(key => {
		const field = fields[key];
		const {isValid, errors} = schema.fields[key];

		return {
			hasError: schema.isSubmitted && !isValid,
			errors,
			...bindInput(key),
			...field
		};
	});

	return (
		<form className={className} onSubmit={onSubmit}>
			{fieldArray.map(({component, children, ...props}, key) => {
				if (typeof component === 'string') {
					return React.createElement(component, {key}, children);
				}

				return React.createElement(component, {key, ...props}, children);
			})}
			{children}
		</form>
	);
};

Form.propTypes = {
	bindInput: React.PropTypes.func,
	children: React.PropTypes.node,
	className: React.PropTypes.string,
	fields: React.PropTypes.object,
	onSubmit: React.PropTypes.func,
	schema: React.PropTypes.object
};

export default Form;

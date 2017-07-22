import React from 'react';
import PropTypes from 'prop-types';

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
			{fieldArray.map(({component, children, ...rest}) => {
				if (typeof component === 'string') {
					return React.createElement(component, {key: rest.name}, children);
				}

				return React.createElement(component, {key: rest.name, ...rest}, children);
			})}
			{children}
		</form>
	);
};

Form.defaultProps = {
	className: ''
};

Form.propTypes = {
	bindInput: PropTypes.func.isRequired,
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	fields: PropTypes.object.isRequired,
	onSubmit: PropTypes.func.isRequired,
	schema: PropTypes.object.isRequired
};

export default Form;

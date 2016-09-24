import React, {PropTypes} from 'react';

export const submitted = WrappedComponent => {
	class Submitted extends React.Component {
		constructor(props, ctx) {
			super(props, ctx);
			this.state = {
				submitted: false
			};
		}

		render() {
			const {onSubmit, model, schema, bindInput} = this.props;

			if (schema) {
				schema.isSubmitted = this.state.submitted;
			}

			const handleSubmit = model => {
				this.setState({submitted: true});
				if (schema.isValid) {
					return onSubmit(model);
				}
			};

			return React.createElement(WrappedComponent, {onSubmit: handleSubmit, model, schema, bindInput});
		}
	}

	Submitted.propTypes = {
		bindInput: PropTypes.func,
		model: PropTypes.object,
		onSubmit: PropTypes.func,
		schema: PropTypes.object
	};

	return Submitted;
};

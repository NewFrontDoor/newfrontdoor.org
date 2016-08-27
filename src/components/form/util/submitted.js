import React from 'react';

export const submitted = WrappedComponent => {
	class Submitted extends React.Component {
		constructor(props, ctx) {
			super(props, ctx);
			this.state = {
				submitted: false
			};
		}

		render() {
			const {onSubmit, ...props} = this.props;

			if (props.schema) {
				props.schema.isSubmitted = this.state.submitted;
			}

			const handleSubmit = model => {
				this.setState({submitted: true});
				if (props.schema.isValid) {
					return onSubmit(model);
				}
			};

			return React.createElement(WrappedComponent, {onSubmit: handleSubmit, ...props});
		}
	}

	Submitted.propTypes = {
		model: React.PropTypes.object,
		onSubmit: React.PropTypes.func,
		schema: React.PropTypes.object
	};

	return Submitted;
};

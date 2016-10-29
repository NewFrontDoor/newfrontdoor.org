import React, {PropTypes} from 'react';

const submitted = WrappedComponent => {
	class Submitted extends React.Component {
		constructor(props, ctx) {
			super(props, ctx);
			this.state = {
				submitted: false
			};
			this.resetModel = this.resetModel.bind(this);
			this.handleSubmit = this.handleSubmit.bind(this);
		}

		resetModel() {
			this.setState({submitted: false});
			this.props.setModel({});
		}

		handleSubmit(model) {
			this.setState({submitted: true});
			if (this.props.schema.isValid) {
				return this.props.onSubmit(model);
			}
		}

		render() {
			const {schema, getFormRef, ...props} = this.props;

			if (schema) {
				schema.isSubmitted = this.state.submitted;
			}

			if (typeof getFormRef === 'function') {
				getFormRef(this);
			}

			return React.createElement(WrappedComponent, {
				onSubmit: this.handleSubmit,
				schema,
				...props
			});
		}
	}

	Submitted.propTypes = {
		onSubmit: PropTypes.func,
		setModel: PropTypes.func,
		schema: PropTypes.object,
		getFormRef: PropTypes.func
	};

	return Submitted;
};

export default submitted;

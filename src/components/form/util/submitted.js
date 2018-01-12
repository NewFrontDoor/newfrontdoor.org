import React from 'react';
import PropTypes from 'prop-types';

const submitted = WrappedComponent => {
	class Submitted extends React.Component {
		state = {
			submitted: false
		};

		resetModel = () => {
			this.setState({submitted: false});
			this.props.setModel({});
		}

		handleSubmit = model => {
			this.setState({submitted: true});
			if (this.props.schema.isValid) {
				return this.props.onSubmit(model);
			}
		}

		render() {
			const {schema, getFormRef, ...props} = this.props;

			schema.isSubmitted = this.state.submitted;

			return React.createElement(WrappedComponent, {
				onSubmit: this.handleSubmit,
				schema,
				...props
			});
		}
	}

	Submitted.defaultProps = {
		getFormRef: () => {},
		schema: {}
	};

	Submitted.propTypes = {
		onSubmit: PropTypes.func.isRequired,
		setModel: PropTypes.func.isRequired,
		schema: PropTypes.object,
		getFormRef: PropTypes.func
	};

	return Submitted;
};

export default submitted;

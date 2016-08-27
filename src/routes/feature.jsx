import React from 'react';
import {Link} from 'react-router';
import reformed from 'react-reformed';
import compose from 'react-reformed/lib/compose';
import validateSchema from 'react-reformed/lib/validateSchema';
import {Index} from '../components/index/index.jsx';
import {Form, InputEmail, InputRadio, InputTextArea, InputText} from '../components/form/index.jsx';

// handleSubmit(event) {
// 	event.preventDefault();
// 	fetch('https://qvikae2ufi.execute-api.us-west-2.amazonaws.com/prod/feature-request', {
// 		method: 'post',
// 		mode: 'cors',
// 		body: JSON.stringify({
// 			name: this.state.name,
// 			organisation: this.state.organisation,
// 			email: this.state.email,
// 			urlIssue: this.state.urlIssue,
// 			optionsRadios: this.state.optionsRadios,
// 			description: this.state.description,
// 			additional: this.state.additional
// 		}),
// 		headers: new Headers({
// 			'Content-Type': 'application/json'
// 		})
// 	});
// }

const fields = {
	name: {
		type: InputText,
		label: 'Name:',
		placeholder: 'First and last name',
		required: true
	},
	organisation: {
		type: InputText,
		label: 'Organisation:',
		placeholder: 'Your church or parachurch organisation',
		required: true
	},
	email: {
		type: InputEmail,
		label: 'Contact email:',
		placeholder: 'Contact email',
		required: true
	},
	urlIssue: {
		type: InputText,
		label: 'Example URL (if applicable)',
		placeholder: 'Please copy paste the url from your web browser'
	},
	optionsRadios: {
		type: InputRadio,
		label: 'Request type:',
		placeholder: 'Please copy paste the url from your web browser',
		options: [{
			key: 'error',
			label: 'New website feature',
			help: 'May be a module, a visual tweak, or new template'
		}, {
			key: 'error2',
			label: 'Sparkleshare feature'
		}, {
			key: 'error3',
			label: 'Mailing list feature'
		}, {
			key: 'error4',
			label: 'App integration request'
		}, {
			key: 'error5',
			label: 'Other'
		}],
		required: true
	},
	description: {
		type: InputTextArea,
		label: 'Description',
		placeholder: 'Required. Please provide a brief description',
		required: true,
		rows: '3'
	},
	additional: {
		type: InputTextArea,
		label: 'Any other additional information',
		placeholder: 'Not required. You may choose to enter any other relevant information or special requests here.',
		rows: '5'
	}
};

const FeatureForm = ({
	bindInput,
	model,
	onSubmit,
	schema
}) => {
	const handleSubmit = event => {
		event.preventDefault();
		onSubmit(model);
	};

	// <div className="form-group hide">
	// 	<label htmlFor="file">File upload:</label>
	// 	<input type="file" name="file" className="form-control"/>
	// 	<p className="help-block">Only txt, doc, docx or pdf and under 2mb are accepted.</p>
	// </div>
	// <div className="form-group hide">
	// 	<label htmlFor="screenshot">Screenshot:</label>
	// 	<input type="file" name="image" className="form-control"/>
	// 	<p className="help-block">Only jpg, jpeg or png and under 2mb are accepted.</p>
	// </div>

	return (
		<Form className="support-form" onSubmit={handleSubmit} schema={schema} fields={fields} bindInput={bindInput}>
			<div className="form-group">
				<button type="submit" className="btn btn-primary pull-right">Submit</button>
			</div>
		</Form>
	);
};

FeatureForm.propTypes = {
	bindInput: React.PropTypes.func,
	model: React.PropTypes.object,
	onSubmit: React.PropTypes.func,
	schema: React.PropTypes.object
};

const submitted = WrappedComponent => {
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

const FeatureFromContainer = compose(reformed(), validateSchema(fields), submitted)(FeatureForm);

const handleSubmit = model => {
	fetch('https://qvikae2ufi.execute-api.us-west-2.amazonaws.com/prod/feature-request', {
		method: 'post',
		mode: 'cors',
		body: JSON.stringify(model),
		headers: new Headers({'Content-Type': 'application/json'})
	});
};

export const Feature = () => (
	<Index>
		<div className="status-overlay">
			<div className="site-wrapper site-wrapper-padding">
				<h1>Feature request form</h1>
				<div>
					<p>
						Some features may be in the pipeline or already available. See our <Link to="/documentation">documentation page</Link> for assistance in using these features, and our <Link to="/client">client page</Link> for any announcements.
					</p>
				</div>
				<hr/>
				<div className="instruction">
					<h3>Guidelines</h3>
					<p>To best assist you with your feature requests, please ensure to:</p>
					<ul>
						<li>fill out this form <strong>as completely as you can.</strong></li>
						<li>include only one request per submission. You’re welcome to submit multiple requests.</li>
						<li>check you're allocated a ticket number.</li>
					</ul>
					<p>Each submission will:</p>
					<ul>
						<li>Send a request ticket by email (to you & us) for tracking by our team.</li>
						<li>Give an option to close your feature request by email.</li>
					</ul>
				</div>
				<FeatureFromContainer onSubmit={handleSubmit}/>
			</div>
		</div>
	</Index>
);

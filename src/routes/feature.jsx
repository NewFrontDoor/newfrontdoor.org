import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {Link} from 'react-router';
import reformed from 'react-reformed';
import compose from 'react-reformed/lib/compose';
import validateSchema from 'react-reformed/lib/validateSchema';
import Popover from '../components/popover/index.jsx';
import Index from '../components/index/index.jsx';
import {Form, util, InputEmail, InputRadio, InputTextArea, InputText} from '../components/form/index.jsx';
import styles from '../css/feature.scss';

const fields = {
	name: {
		component: InputText,
		label: 'Name:',
		placeholder: 'First and last name',
		required: true
	},
	organisation: {
		component: InputText,
		label: 'Organisation:',
		placeholder: 'Your church or parachurch organisation',
		required: true
	},
	email: {
		component: InputEmail,
		label: 'Contact email:',
		placeholder: 'Contact email',
		required: true
	},
	urlIssue: {
		component: InputText,
		label: 'Example URL (if applicable)',
		placeholder: 'Please copy paste the url from your web browser'
	},
	requestType: {
		component: InputRadio,
		label: 'Request type:',
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
		component: InputTextArea,
		label: 'Description',
		placeholder: 'Required. Please provide a brief description',
		required: true,
		rows: '3'
	},
	additional: {
		component: InputTextArea,
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
		<div className="support-form">
			<Form onSubmit={handleSubmit} schema={schema} fields={fields} bindInput={bindInput}>
				<div className="form-group">
					<button type="submit" className="btn btn-primary pull-right">Submit</button>
				</div>
			</Form>
		</div>
	);
};

FeatureForm.propTypes = {
	bindInput: React.PropTypes.func,
	model: React.PropTypes.object,
	onSubmit: React.PropTypes.func,
	schema: React.PropTypes.object
};

const FeatureFromContainer = compose(reformed(), validateSchema(fields), util.submitted)(FeatureForm);

class Feature extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isModalOpen: false
		};
		this.setFormRef = this.setFormRef.bind(this);
		this.handleOpen = this.handleOpen.bind(this);
		this.handleClose = this.handleClose.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}

	set formRef(ref) {
		this._formRef = ref;
	}

	get formRef() {
		return this._formRef;
	}

	setFormRef(ref) {
		this.formRef = ref;
	}

	handleOpen() {
		this.setState({isModalOpen: true});
	}

	handleClose() {
		this.setState({isModalOpen: false});
		this.formRef.resetModel();
	}

	handleSubmit(model) {
		return fetch('https://qvikae2ufi.execute-api.us-west-2.amazonaws.com/prod/feature-request', {
			method: 'post',
			mode: 'cors',
			body: JSON.stringify(model),
			headers: new Headers({'Content-Type': 'application/json'})
		}).catch(this.handleOpen).then(this.handleOpen);
	}
	shouldComponentUpdate() {}

	render() {
		const {isModalOpen} = this.state;

		return (
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
								<li>check you’re allocated a ticket number.</li>
							</ul>
							<p>Each submission will:</p>
							<ul>
								<li>Send a request ticket by email (to you & us) for tracking by our team.</li>
								<li>Give an option to close your feature request by email.</li>
							</ul>
						</div>
						<FeatureFromContainer onSubmit={this.handleSubmit} getFormRef={this.setFormRef}/>
					</div>
				</div>
				{isModalOpen && <Popover onClose={this.handleClose}>
					<div className={styles.modal}>
						<h2>New features! Always exciting..</h2>
						<p>We’ll review your submission and get back to you about your request as soon as possible.</p>
						<p><button className={styles.button} onClick={this.handleClose}>Woo Hoo!</button></p>
					</div>
				</Popover>}
			</Index>
		);
	}
}

export default Feature;

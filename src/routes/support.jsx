import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {Link} from 'react-router';
import reformed from 'react-reformed';
import compose from 'react-reformed/lib/compose';
import validateSchema from 'react-reformed/lib/validateSchema';
import Popover from '../components/popover/index.jsx';
import Index from '../components/index/index.jsx';
import {Form, util, InputEmail, InputRadio, InputSelect, InputTextArea, InputText} from '../components/form/index.jsx';
import styles from '../css/support.scss';

const fields = {
	summary: {
		component: InputText,
		label: 'How can we help?',
		placeholder: 'Summarise the issue like an email subject line',
		required: true
	},
	details: {
		component: InputTextArea,
		label: 'Further details that will help us to help you',
		placeholder: 'Please give us a detailed description, including any steps taken that led to the problem and the result',
		required: true,
		rows: '4'
	},
	url: {
		component: InputText,
		label: 'URL for affected page: (if applicable)',
		placeholder: 'Please copy paste the url from the browser'
	},
	requestType: {
		component: InputRadio,
		label: 'Issue type (This helps us quickly allocate to the product expert)',
		options: [{
			key: 'error',
			label: 'Username/password authentication issues',
			help: 'May be for Website, Sparkleshare, Sympa'
		}, {
			key: 'error2',
			label: 'Page not loading correctly/at all'
		}, {
			key: 'error3',
			label: 'Sparkleshare conflict/error'
		}, {
			key: 'error4',
			label: 'Mailing list issue/request'
		}, {
			key: 'error5',
			label: 'Other'
		}],
		required: true
	},
	severity: {
		component: InputSelect,
		label: 'Severity:',
		options: [{
			key: '4 - minimal impact, tolerable for a period',
			label: '4 - minimal impact, tolerable for a period'
		}, {
			key: '3 - affects one user, moderate impact on workflow',
			label: '3 - affects one user, moderate impact on workflow'
		}, {
			key: '2 - affects multiple users, serious impact on workflow',
			label: '2 - affects multiple users, serious impact on workflow'
		}, {
			key: '1 - affects multiple users and clients, system offline',
			label: '1 - affects multiple users and clients, system offline'
		}]
	},
	additional: {
		component: InputTextArea,
		label: 'Any other additional information',
		placeholder: 'Not required. You may choose to enter any other relevant information or special requests here.',
		rows: '3'
	},
	hr: {
		component: 'hr'
	},
	h4: {
		component: 'h4',
		children: 'Contact Details'
	},
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
	}
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

const SupportForm = ({
	bindInput,
	model,
	onSubmit,
	schema
}) => {
	const handleSubmit = event => {
		event.preventDefault();
		onSubmit(model);
	};

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

SupportForm.propTypes = {
	bindInput: React.PropTypes.func,
	model: React.PropTypes.object,
	onSubmit: React.PropTypes.func,
	schema: React.PropTypes.object
};

const SupportFormContainer = compose(reformed(), validateSchema(fields), util.submitted)(SupportForm);

class Support extends React.Component {

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
		return fetch('https://qvikae2ufi.execute-api.us-west-2.amazonaws.com/prod/support-request', {
			method: 'post',
			mode: 'cors',
			body: JSON.stringify(model),
			headers: new Headers({
				'Content-Type': 'application/json'
			})
		}).catch(this.handleOpen).then(this.handleOpen);
	}
	shouldComponentUpdate() {}

	render() {
		const {isModalOpen} = this.state;

		return (
			<Index>
				<div className="status-overlay">
					<div className="site-wrapper site-wrapper-padding">
						<h1>Support form</h1>
						<div>
							<p>Some issues may be answered by our <Link to="/documentation">documentation</Link> which you can find <Link to="/documentation">here</Link>. Please also check our <Link to="/status">system status page</Link> for any issues that may impact your work.</p>
						</div>
						<hr/>
						<div className="instruction">
							<h3>Guidelines</h3>
							<p>To best assist you with your support requests, please ensure to:</p>
							<ul>
								<li>fill out this form <strong>as completely as you can.</strong></li>
								<li>include only one problem per submission. You’re welcome to submit multiple requests.</li>
								<li>check you’re allocated a ticket number.</li>
							</ul>
							Each submission will:
							<ul>
								<li>Send a support ticket by email (to you & us) for tracking by our team.</li>
								<li>Give an option to close your support request by email.</li>
							</ul>
						</div>
						<SupportFormContainer getFormRef={this.setFormRef} onSubmit={this.handleSubmit} initialModel={{severity: '4'}}/>
					</div>
				</div>
				{isModalOpen && <Popover onClose={this.handleClose}>
					<div className={styles.modal}>
						<h2>Hearing you loud and clear!</h2>
						<p>We’ve received your submission and will get back to you about your issue as soon as possible. If you have other things to report, please feel free to complete the form a second time.</p>
						<p><button className={styles.button} onClick={this.handleClose}>No worries</button></p>
					</div>
				</Popover>}
			</Index>
		);
	}
}

export default Support;

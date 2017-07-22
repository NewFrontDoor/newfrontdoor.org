import React from 'react';
import PropTypes from 'prop-types';
import reformed from 'react-reformed';
import compose from 'react-reformed/lib/compose';
import validateSchema from 'react-reformed/lib/validateSchema';
import Popover from '../../components/popover/index';
import Collapse from '../../components/collapse/index';
import Index from '../../components/index/index';
import {Form, util, InputText, InputEmail} from '../../components/form/index';
import styles from './contact.scss';

const fields = {
	name: {
		component: InputText,
		label: 'Name',
		placeholder: 'Insert your full name',
		required: true
	},
	email: {
		component: InputEmail,
		label: 'Email address',
		placeholder: 'Insert a valid email address',
		required: true
	}
};

const ContactForm = ({
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
		<Form schema={schema} fields={fields} bindInput={bindInput} onSubmit={handleSubmit}>
			<div className="form-group">
				<button type="submit" className="btn btn-primary">Submit</button>
			</div>
		</Form>
	);
};

ContactForm.propTypes = {
	bindInput: PropTypes.func.isRequired,
	model: PropTypes.object.isRequired,
	onSubmit: PropTypes.func.isRequired,
	schema: PropTypes.object.isRequired
};

const ContactFormContainer = compose(reformed(), validateSchema(fields), util.submitted)(ContactForm);

class Contact extends React.Component {
	constructor() {
		super();
		this.state = {
			isOpen: false,
			isModalOpen: false
		};
		this.setFormRef = this.setFormRef.bind(this);
		this.handleOpen = this.handleOpen.bind(this);
		this.handleClose = this.handleClose.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleCollapse = this.handleCollapse.bind(this);
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
		fetch('https://api.vision100it.org/mailing-list', {
			method: 'post',
			mode: 'cors',
			body: JSON.stringify({
				name: model.name,
				email: model.email
			}),
			headers: new Headers({
				'Content-Type': 'application/json'
			})
		}).catch(this.handleOpen).then(this.handleOpen);
	}

	handleCollapse(event) {
		event.preventDefault();
		this.setState({isOpen: !this.state.isOpen});
	}

	render() {
		const {isModalOpen} = this.state;

		return (
			<Index>
				<div className="contact-overlay">
					<div className="site-wrapper site-wrapper-padding">
						<h1>
							Contact Us
						</h1>
						<div>
							<div>
								<h3>
									Email contact
								</h3>
								<a href="mailto:it@vision100.org">it@vision100.org</a>
							</div>
							<h3>
								Join our mailing list
							</h3>
							<ContactFormContainer getFormRef={this.setFormRef} onSubmit={this.handleSubmit}/>
							{isModalOpen && (
								<Popover onClose={this.handleClose}>
									<div className={styles.modal}>
										<h2>Thanks for joining the mailing list.</h2>
										<p><button className={styles.button} onClick={this.handleClose}>Great</button></p>
									</div>
								</Popover>
							)}
							<p><a href="#" onClick={this.handleCollapse}>About our mailing lists</a></p>
							<Collapse isOpened={this.state.isOpen}>
								<p>Vision 100 sends out a bunch of stuff via email regularly including:</p>
								<ul>
									<li>
										New features,
									</li>
									<li>
										Hot tips on best practices,
									</li>
									<li>
										Other helpful content around the web,
									</li>
									<li>
										Official updates,
									</li>
									<li>
										Upcoming events
									</li>
								</ul>
								<p>These emails are sent on a regular predictable timeline entirely reliable and also dependent on how much spare time we have...</p>
							</Collapse>
							<div>
								<h3>
									Mailing address
								</h3>
								<p>
									PO Box 5006
								</p>
								<p>
									UTAS LPO
								</p>
								<p>
									SANDY BAY TAS 7005
								</p>
							</div>
						</div>
					</div>
				</div>
			</Index>
		);
	}
}

export default Contact;

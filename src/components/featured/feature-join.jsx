import React from 'react';
import {Element} from 'react-scroll';
import reformed from 'react-reformed';
import compose from 'react-reformed/lib/compose';
import validateSchema from 'react-reformed/lib/validateSchema';
import {Popover} from '../popover/index.jsx';
import {Form, util, InputEmail, InputTextArea, InputText} from '../form/index.jsx';
import styles from './feature-join.scss';

const imageContext = require.context('../../images');

const fields = {
	name: {
		component: InputText,
		label: 'Name:',
		placeholder: 'First and last name',
		required: true,
		width: 'half'
	},
	email: {
		component: InputEmail,
		label: 'Email:',
		placeholder: 'Your church or parachurch organisation',
		required: true,
		width: 'half'
	},
	organisation: {
		component: InputText,
		label: 'Organisation:',
		placeholder: 'Organisation',
		required: true
	},
	message: {
		component: InputTextArea,
		label: 'Message:',
		placeholder: 'Message',
		required: true
	}
};

const JoinForm = ({
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
		<div className={styles.form}>
			<Form onSubmit={handleSubmit} schema={schema} fields={fields} bindInput={bindInput}>
				<div className={`form-group ${styles.submit}`}>
					<button type="submit" className="btn btn-default form-control">Submit</button>
				</div>
			</Form>
		</div>
	);
};

JoinForm.propTypes = {
	bindInput: React.PropTypes.func,
	model: React.PropTypes.object,
	onSubmit: React.PropTypes.func,
	schema: React.PropTypes.object
};

const JoinFormContainer = compose(reformed(), validateSchema(fields), util.submitted)(JoinForm);

export class FeaturedJoin extends React.Component {
	constructor() {
		super();
		this.state = {isModalOpen: false};
		this.handleOpen = this.handleOpen.bind(this);
		this.handleClose = this.handleClose.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleOpen() {
		this.setState({isModalOpen: true});
	}
	handleClose() {
		this.setState({isModalOpen: false});
	}
	handleSubmit(model) {
		return fetch('https://qvikae2ufi.execute-api.us-west-2.amazonaws.com/prod/contact-us', {
			method: 'post',
			mode: 'cors',
			body: JSON.stringify({
				name: model.name,
				email: model.email,
				organisation: model.organisation,
				message: model.message
			}),
			headers: new Headers({
				'Content-Type': 'application/json'
			})
		}).catch(this.handleOpen).then(this.handleOpen);
	}
	render() {
		const {isModalOpen} = this.state;

		return (
			<div className={styles.feature}>
				<section className={styles.video}>
					<video autoPlay loop muted>
						<source src={imageContext('./clip2.mp4')} type="video/mp4"/>
					</video>
				</section>
				<section className={styles.content}>
					<Element name="join">
						<div className={styles.background}/>
						<header className="hidden">
							<h2>Sign up</h2>
						</header>

						<div className="text-slab">
							Begin the journey
						</div>

						<p className="text-center">
							Interested in coming on board? Get in touch below or via our Social Media channels.
						</p>
						<JoinFormContainer onSubmit={this.handleSubmit}/>
						<div className={styles.social}>
							<div>
								<a href="http://facebook.com/vision100it">
									<span className="fa fa-facebook fa-3x"/>
								</a>
							</div>
							<div>
								<a href="http://twitter.com/vision100it">
									<span className="fa fa-twitter fa-3x"/>
								</a>
							</div>
						</div>
					</Element>
				</section>
				{isModalOpen && <Popover onClose={this.handleClose}>
					<h2>Hello There Children!</h2>
				</Popover>}
			</div>
		);
	}
}

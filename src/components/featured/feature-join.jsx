import React from 'react';
import {Element} from 'react-scroll';
import reformed from 'react-reformed';
import compose from 'react-reformed/lib/compose';
import validateSchema from 'react-reformed/lib/validateSchema';
import {Form, util, InputEmail, InputTextArea, InputText} from '../form/index.jsx';
import styles from './feature-join.scss';

const imageContext = require.context('../../images');

const fields = {
	name: {
		component: InputText,
		label: 'Name:',
		placeholder: 'First and last name',
		required: true
	},
	email: {
		component: InputEmail,
		label: 'Email:',
		placeholder: 'Your church or parachurch organisation',
		required: true
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
		<Form onSubmit={handleSubmit} schema={schema} fields={fields} bindInput={bindInput}>
			<div className="form-group">
				<button type="submit" className="btn btn-primary pull-right">Submit</button>
			</div>
		</Form>
	);
};

JoinForm.propTypes = {
	bindInput: React.PropTypes.func,
	model: React.PropTypes.object,
	onSubmit: React.PropTypes.func,
	schema: React.PropTypes.object
};

// <form onSubmit={this.handleSubmit}>
// 	<div className={`form-group ${styles.group1}`}>
// 		<label hidden htmlFor="name">Name</label>
// 		<input type="text" name="name" className="form-control input-default" placeholder="Name" onChange={this.handleChange('name')}/>
// 	</div>
// 	<div className={`form-group ${styles.group1}`}>
// 		<label hidden htmlFor="email">Contact email</label>
// 		<input type="email" name="email" className="form-control input-default" placeholder="Contact email" onChange={this.handleChange('email')}/>
// 	</div>
// 	<div className={`form-group ${styles.group2}`}>
// 		<label hidden htmlFor="organisation">Organisation</label>
// 		<input type="text" name="organisation" className="form-control input-default" placeholder="Organisation" onChange={this.handleChange('organisation')}/>
// 	</div>
// 	<div className={`form-group ${styles.group2}`}>
// 		<label hidden htmlFor="message">Message</label>
// 		<textarea type="text" name="message" className="form-control input-default" placeholder="Message" onChange={this.handleChange('message')}/>
// 	</div>
// 	<input type="submit" className={`btn btn-default ${styles.group2}`} value="Submit"/>
// </form>

const JoinFormContainer = compose(reformed(), validateSchema(fields), util.submitted)(JoinForm);

const handleSubmit = model => {
	fetch('https://qvikae2ufi.execute-api.us-west-2.amazonaws.com/prod/contact-us', {
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
	});
};

export const FeaturedJoin = () => (
	<div className={styles.feature}>
		<section className={styles.video}>
			<video autoPlay loop muted>
				<source src={imageContext('./clip2.mp4')} type="video/mp4"/>
			</video>
		</section>
		<Element name="join">
			<div className={styles.content}>
				<section>
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
					<JoinFormContainer onSubmit={handleSubmit}/>
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
				</section>
			</div>
		</Element>
	</div>
);

import React from 'react';
import PropTypes from 'prop-types';
import fm from 'front-matter';
import classNames from 'classnames';
import {StickyContainer, Sticky} from 'react-sticky';
import reformed from 'react-reformed';
import compose from 'react-reformed/lib/compose';
import validateSchema from 'react-reformed/lib/validateSchema';
import FaAngleDown from 'react-icons/fa/angle-down';
import Popover from '../../../components/popover/index.js';
import Index from '../../../components/index/index.js';
import {Markdown, Toc} from '../../../components/markdown/index.js';
import {Form, util, InputEmail, InputTextArea} from '../../../components/form/index.js';
import styles from './template.scss';

const documentation = {
	get context() {
		return require.context('../../../documentation', true, /^.*\.md$/);
	},
	get documents() {
		return this.context.keys();
	},
	document(id) {
		const doc = this.context(this.documents.find(x => x === `./${id}.md`));
		const {body, attributes} = fm(doc);
		return {body, ...attributes};
	}
};

const fields = {
	message: {
		component: InputTextArea,
		rows: '2',
		label: 'Message',
		placeholder: 'What could make this documentation clearer?',
		required: true
	},
	email: {
		component: InputEmail,
		label: 'Contact email',
		placeholder: 'Contact email',
		required: true
	}
};

const DocumentationFeedbackFrom = ({
	bindInput,
	model,
	onSubmit,
	schema,
	onToggleFeedback
}) => {
	const handleSubmit = event => {
		event.preventDefault();
		onSubmit(model);
	};

	return (
		<div className={styles.form}>
			<Form schema={schema} fields={fields} bindInput={bindInput} onSubmit={handleSubmit}>
				<div className="form-group">
					<button type="submit" className="btn btn-default">Submit</button>
					<button type="cancel" className="btn btn-default" onClick={onToggleFeedback}>Cancel</button>
				</div>
			</Form>
		</div>
	);
};

DocumentationFeedbackFrom.propTypes = {
	bindInput: PropTypes.func.isRequired,
	model: PropTypes.object.isRequired,
	onSubmit: PropTypes.func.isRequired,
	schema: PropTypes.object.isRequired,
	onToggleFeedback: PropTypes.func.isRequired
};

const DocumentationFeedbackFromContainer = compose(reformed(), validateSchema(fields), util.submitted)(DocumentationFeedbackFrom);

class Template extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			openFeedback: false,
			isModalOpen: false
		};
		this.setFormRef = this.setFormRef.bind(this);
		this.handleOpen = this.handleOpen.bind(this);
		this.handleClose = this.handleClose.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleToggleFeedback = this.handleToggleFeedback.bind(this);
	}

	get document() {
		return documentation.document(this.props.match.params.documentId) || {};
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
		return fetch('https://api.vision100it.org/give-feedback', {
			method: 'post',
			mode: 'cors',
			body: JSON.stringify({
				url: window.location.toString(),
				email: model.email,
				message: model.message
			}),
			headers: new Headers({
				'Content-Type': 'application/json'
			})
		}).catch(this.handleOpen).then(this.handleOpen);
	}

	handleToggleFeedback(event) {
		event.preventDefault();
		this.setState({
			openFeedback: !this.state.openFeedback
		});
	}

	render() {
		const {isModalOpen} = this.state;
		const docTOC = classNames(styles.toc, {
			[styles.tocVisible]: !this.state.openFeedback
		});

		const docFeedback = classNames(styles.feedback, {
			[styles.feedbackVisible]: this.state.openFeedback
		});

		return (
			<Index>
				<StickyContainer>
					<div className={styles.wrapper}>
						<div className={styles.content}>
							<h1>{this.document.title}</h1>
							<h1>
								<small>{this.document.sub_title}</small>
							</h1>
							<Markdown>
								{this.document.body}
							</Markdown>
						</div>
						<div className={styles.sidebar}>
							<Sticky topOffset={-144} bottomOffset={168}>
								{
									({style}) => (
										<div style={{marginTop: 144, ...style}}>
											<div className={docTOC}>
												<h3>Contents</h3>
												<Toc>
													{this.document.body}
												</Toc>
											</div>
											<div className={docFeedback}>
												{this.state.openFeedback ? (
													<DocumentationFeedbackFromContainer getFormRef={this.setFormRef} onSubmit={this.handleSubmit} onToggleFeedback={this.handleToggleFeedback}/>
												) : (
													<span>
														<h3>Give feedback</h3>
														<a href="#" onClick={this.handleToggleFeedback}>
															<span>Suggest a revision to this document.</span>
															<FaAngleDown height="1.5em" width="1.5em"/>
														</a>
													</span>
												)}
											</div>
										</div>
									)
								}
							</Sticky>
						</div>
					</div>
				</StickyContainer>
				{isModalOpen && <Popover onClose={this.handleClose}>
					<div className={styles.modal}>
						<h2>Thanks for your feedback.</h2>
						<p>We’ll review what you’ve submitted and make edits as required. We’ll let you know via email when we’ve processed the revision of this document.</p>
						<p><button className={styles.button} onClick={this.handleClose}>Great</button></p>
					</div>
				</Popover>}
			</Index>
		);
	}
}

Template.propTypes = {
	match: PropTypes.shape({
		params: PropTypes.shape({
			documentId: PropTypes.string.isRequired
		}).isRequired
	}).isRequired
};

export default Template;

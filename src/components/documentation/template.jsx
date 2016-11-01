import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import fm from 'front-matter';
import classNames from 'classnames';
import {StickyContainer, Sticky} from 'react-sticky';
import reformed from 'react-reformed';
import compose from 'react-reformed/lib/compose';
import validateSchema from 'react-reformed/lib/validateSchema';
import Popover from '../popover/index.jsx';
import Index from '../index/index.jsx';
import {Markdown, Toc} from '../markdown/index.jsx';
import {Form, util, InputEmail, InputTextArea} from '../form/index.jsx';
import styles from './Template.scss';

const documentation = {
	get context() {
		return require.context('../../documentation', true, /^.*\.md$/);
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
		<div className={styles['feedback-form']}>
			<Form onSubmit={handleSubmit} schema={schema} fields={fields} bindInput={bindInput}>
				<div className="form-group">
					<button type="submit" className="btn btn-default">Submit</button>
					<button type="cancel" className="btn btn-default" onClick={onToggleFeedback}>Cancel</button>
				</div>
			</Form>
		</div>
	);
};

DocumentationFeedbackFrom.propTypes = {
	bindInput: React.PropTypes.func,
	model: React.PropTypes.object,
	onSubmit: React.PropTypes.func,
	schema: React.PropTypes.object,
	onToggleFeedback: React.PropTypes.func
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
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}

	get document() {
		return documentation.document(this.props.params.documentId) || {};
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
		return fetch('https://qvikae2ufi.execute-api.us-west-2.amazonaws.com/prod/give-feedback', {
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

	shouldComponentUpdate() {}

	handleToggleFeedback(event) {
		event.preventDefault();
		this.setState({
			openFeedback: !this.state.openFeedback
		});
	}

	render() {
		const {isModalOpen} = this.state;
		const docTOC = classNames('toc-sidebar', {
			visible: !this.state.openFeedback
		});

		const docFeedback = classNames('feedback-sidebar', {
			visible: this.state.openFeedback
		});

		return (
			<Index>
				<StickyContainer>
					<div className="documentation-wrapper">
						<div className="documentation-content">
							<h1>{this.document.title}</h1>
							<h1>
								<small>{this.document.sub_title}</small>
							</h1>
							<Markdown>
								{this.document.body}
							</Markdown>
						</div>
						<div className="documentation-sidebar mob-hidden">
							<Sticky stickyStyle={{marginTop: 144}} topOffset={-144} bottomOffset={168}>
								<div className={docTOC}>
									<h3>Contents</h3>
									<Toc>
										{this.document.body}
									</Toc>
								</div>
								<div className={docFeedback}>
									<h3>Give feedback</h3>
									<a href="#" onClick={this.handleToggleFeedback}>
										<span>Suggest a revision to this document.</span>
										<span className="fa fa-angle-down fa-3x"/>
									</a>
									<DocumentationFeedbackFromContainer getFormRef={this.setFormRef} onSubmit={this.handleSubmit} onToggleFeedback={this.handleToggleFeedback}/>
								</div>
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
	params: React.PropTypes.shape({documentId: React.PropTypes.string}).isRequired
};

export default Template;

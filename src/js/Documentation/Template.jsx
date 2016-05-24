import React from 'react';
import fm from 'front-matter';
import classNames from 'classnames';
import {StickyContainer, Sticky} from 'react-sticky';
import {Index} from '../Index/index.jsx';
import {Markdown, Toc} from '../Markdown';
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

export class Template extends React.Component {
	get document() {
		return documentation.document(this.props.params.documentId) || {};
	}
	constructor(props) {
		super(props);
		this.state = {
			openFeedback: false
		};
		this.handleToggleFeedback = this.handleToggleFeedback.bind(this);
	}

	handleToggleFeedback(event) {
		event.preventDefault();
		this.setState({
			openFeedback: !this.state.openFeedback
		});
	}

	render() {
		const docTOC = classNames('TOC-sidebar', {
			visible: !this.state.openFeedback
		});

		const docFeedback = classNames('feedback-sidebar', {visible: this.state.openFeedback});

		return (
			<Index>
				<StickyContainer className="documentation-wrapper">
					<div className="documentation-sidebar mob-hidden">
						<Sticky stickyStyle={{top: 150}} topOffset={-150}>
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
									<span className="fa fa-angle-down fa-3x"></span>
								</a>
								<div className="feedback-form">
									<textarea type="text" name="message" className="form-control input-default" placeholder="What could make this documentation clearer?"></textarea>
									<input type="email" name="email" className="form-control input-default" placeholder="Contact email"/>
									<button type="submit" className="btn btn-default">Submit</button>
									<button type="cancel" className="btn btn-default" onClick={this.handleToggleFeedback}>Cancel</button>
								</div>
							</div>
						</Sticky>
					</div>
					<div className="documentation-content">
						<h1>{this.document.title}</h1>
						<h1>
							<small>{this.document.sub_title}</small>
						</h1>
						<Markdown>
							{this.document.body}
						</Markdown>
					</div>
				</StickyContainer>
			</Index>
		);
	}
}

Template.propTypes = {
	params: React.PropTypes.shape({documentId: React.PropTypes.string}).isRequired
};

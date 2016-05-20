import React from 'react';
import classNames from 'classnames';
import fm from 'front-matter';
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
		const content = fm(doc);
		return {body: content.body, ...content.attributes};
	}
};

export class Template extends React.Component {
	get document() {
		return documentation.document(this.props.params.documentId) || {};
	}
	constructor(props) {
		super(props);
		this.state = {
			searchResults: []
		};
		this.handleOpenFeedback = this.handleOpenFeedback.bind(this);
		this.handleCloseFeedback = this.handleCloseFeedback.bind(this);
	}

	handleOpenFeedback(event) {
		event.preventDefault();
		this.setState({openFeedback: true});
		this.setState({closeTOC: true});
	}

	handleCloseFeedback(event) {
		event.preventDefault();
		this.setState({openFeedback: false});
		this.setState({closeTOC: false});
	}

	render() {
		const docFeedback = classNames({
			'visible': this.state.openFeedback,
			'feedback-sidebar': true
		});

		const docTOC = classNames({
			'visible': this.state.closeTOC,
			'TOC-sidebar': true
		});

		return (
			<Index>
				<div className="documentation-wrapper">
					<div className="documentation-sidebar">
						<div className={docTOC}>
							<h3>Contents</h3>
							<Toc>
								{this.document.body}
							</Toc>
						</div>
						<div className={docFeedback}>
							<h3>Give feedback</h3>
							<a onClick={this.handleOpenFeedback}>
								<span>Suggest a revision to this document.</span>
								<span className="fa fa-angle-down fa-3x"></span>
							</a>
							<div className="feedback-form">
								<textarea type="text" name="message" className="form-control input-default" placeholder="What could make this documentation clearer?"></textarea>
								<input type="email" name="email" className="form-control input-default" placeholder="Contact email"/>
								<button type="submit" className="btn btn-default">Submit</button><button type="cancel" className="btn btn-default" onClick={this.handleCloseFeedback}>Cancel</button>
							</div>
						</div>
					</div>
					<div className="documentation-content">
						<h1>{this.document.title}</h1>
						<h1><small>{this.document.sub_title}</small></h1>
						<Markdown>
							{this.document.body}
						</Markdown>
					</div>
				</div>
			</Index>
		);
	}
}

Template.propTypes = {
	params: React.PropTypes.shape({documentId: React.PropTypes.string}).isRequired
};

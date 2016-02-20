import React from 'react';
import classNames from 'classnames';
import fm from 'front-matter';
import toc from 'markdown-toc';
import Remarkable from 'remarkable';
import {Index} from '../components/Index';
import styles from './Template.scss';

const md = new Remarkable().use(remarkable => {
	remarkable.renderer.rules.heading_open = (tokens, idx) => {
		return `<h${tokens[idx].hLevel} id="${toc.slugify(tokens[idx + 1].content)}">`;
	};
});

const documentation = {
	get context() {
		return require.context('!!raw!../../documentation', true, /^.*\.md$/);
	},
	get documents() {
		return this.context.keys();
	},
	document(id) {
		const doc = this.context(this.documents.find(x => x === `./${id}.md`));
		const content = fm(doc);
		return {toc: md.render(toc(doc).content), body: md.render(content.body), ...content.attributes};
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
		this.openFeedback = this.openFeedback.bind(this);
		this.closeFeedback = this.closeFeedback.bind(this);
	}

	openResult(event) {
		event.preventDefault();
		this.setState({openFeedback: true});
	}

	closeResult(event) {
		event.preventDefault();
		this.setState({closeFeedback: false});
	}

	render() {
		const docFeedback = classNames({
			'visible': this.state.openFeedback,
			'feedback-sidebar': true
		});

		return (
			<Index>
				<div className="documentation-wrapper">
					<div className="documentation-sidebar">
						<div className="TOC-sidebar">
							<h3>Contents</h3>
							<section dangerouslySetInnerHTML={{__html: this.document.toc}}></section>
						</div>
						<div className={docFeedback}>
							<h3>Give feedback</h3>
							<a onClick={this.state.openFeedback}>
								<section>Suggest a revision to this document.</section>
								<span className="fa fa-angle-down fa-3x"></span>
							</a>
						</div>
					</div>
					<div className="documentation-content">
						<h1>{this.document.heading}</h1>
						<h1><small>{this.document.sub_heading}</small></h1>
						<section dangerouslySetInnerHTML={{__html: this.document.body}}></section>
					</div>
				</div>
			</Index>
		);
	}
}

Template.propTypes = {
	params: React.PropTypes.shape({documentId: React.PropTypes.string}).isRequired
};

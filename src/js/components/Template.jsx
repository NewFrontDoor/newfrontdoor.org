import React from 'react';
import toc from 'markdown-toc';
import Remarkable from 'remarkable';

const documentation = {
	get context() {
		return require.context('!!raw!../../documentation', true, /^.*\.md$/);
	},
	get documents() {
		return this.context.keys();
	},
	document(id) {
		return this.context(this.documents.find(x => x === `./${id}.md`));
	}
};

const md = new Remarkable();

export class Template extends React.Component {
	rawToc() {
		const doc = documentation.document(this.props.params.documentId);
		return {__html: md.render(toc(doc, {firsth1: false}).content)};
	}

	rawSparkleshare() {
		const doc = documentation.document(this.props.params.documentId);
		return {__html: md.render(doc)};
	}

	render() {
		return (
			<div className="documentation-wrapper">
				<div className="documentation-sidebar">
					<h3>Contents</h3>
					<section dangerouslySetInnerHTML={this.rawToc()}></section>
				</div>
				<div className="documentation-content">
					<section dangerouslySetInnerHTML={this.rawSparkleshare()}></section>
				</div>
			</div>
		);
	}
}

Template.propTypes = {
	params: React.PropTypes.shape({documentId: React.PropTypes.string}).isRequired
};

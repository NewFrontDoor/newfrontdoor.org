import React from 'react';
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

	render() {
		return (
			<Index>
			<div className="documentation-wrapper">
				<div className="documentation-sidebar">
					<h3>Contents</h3>
					<section dangerouslySetInnerHTML={{__html: this.document.toc}}></section>
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

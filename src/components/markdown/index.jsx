import React from 'react';
import remark from 'remark';
import {isUndefined} from 'lodash';
import slug from 'remark-slug';
import ghSlugs from 'github-slugger';
import remarkReact from 'remark-react';
import {Element} from 'react-scroll';
import {Link} from 'react-router';
import toc from 'mdast-util-toc';

const remarkHeading = (component, boundProps = {}) => {
	return React.createClass({
		propTypes() {
			return {
				id: React.PropTypes.string,
				children: React.PropTypes.children
			};
		},
		render() {
			const slugs = ghSlugs();
			const props = {...this.props, ...boundProps};
			const [slug] = props.children;
			return (<Element name={`${slugs.slug(slug)}`}>
				{React.createElement(component, {...props}, this.props.children)}
			</Element>);
		}
	});
};

const RemarkLink = props => {
	if (props.href && props.href.startsWith('#') && typeof window.location !== 'undefined') {
		return (<Link to={{pathname: window.location.pathname, hash: props.href}} {...props}>{props.children}</Link>);
	} else if (props.href) {
		return (<Link to={props.href} {...props}>{props.children}</Link>);
	}
	return (<Link {...props}>{props.children}</Link>);
};

RemarkLink.propTypes = {
	href: React.PropTypes.string,
	children: React.PropTypes.node
};

export const remarkConfigDefault = {
	remarkReactComponents: {
		a: RemarkLink,
		// blockquote: CombinedBlockQuote,
		// code: CodePane,
		// del: spectacleComponent(S, {type: 'strikethrough'}),
		// em: spectacleComponent(S, {type: 'italic'}),
		h1: remarkHeading('H1'),
		h2: remarkHeading('H2'),
		h3: remarkHeading('H3'),
		h4: remarkHeading('H4'),
		h5: remarkHeading('H5'),
		h6: remarkHeading('H6')
		// img: Image,
		// inlineCode: Code,
		// li: ListItem,
		// p: Text,
		// strong: spectacleComponent(S, {type: 'bold'}),
		// ul: List
	}
};

export const Markdown = ({style, source, children, remarkConfig}) => {
	const content = (isUndefined(source) || source === '') ? children : source;
	const output = remark().use(slug).use(remarkReact, remarkConfig).process(content).contents;
	return (
		<div style={style}>
			{output}
		</div>
	);
};

Markdown.propTypes = {
	style: React.PropTypes.object,
	children: React.PropTypes.node,
	source: React.PropTypes.string,
	remarkConfig: React.PropTypes.object
};

Markdown.defaultProps = {
	style: {},
	source: '',
	remarkConfig: remarkConfigDefault
};

export const Toc = ({source, children, remarkConfig}) => {
	const content = (isUndefined(source) || source === '') ? children : source;
	const tocOut = remark().use(() => node => {
		node.children = [toc(node, {tight: true}).map];
	}).process(content).contents;

	return (
		<Markdown remarkConfig={remarkConfig}>
			{tocOut}
		</Markdown>
	);
};

Toc.propTypes = {
	children: React.PropTypes.node,
	source: React.PropTypes.string,
	remarkConfig: React.PropTypes.object
};

Toc.defaultProps = {
	style: {},
	source: '',
	remarkConfig: remarkConfigDefault
};

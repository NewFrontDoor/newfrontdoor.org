import React, {PropTypes} from 'react';
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
				id: PropTypes.string,
				children: PropTypes.element
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
	const {href, children} = props;

	if (href && href.startsWith('#') && typeof window.location !== 'undefined') {
		return (<Link to={{pathname: window.location.pathname, hash: href}} {...props}>{children}</Link>);
	} else if (href && href.startsWith('/')) {
		return (<Link to={href} {...props}>{children}</Link>);
	} else if (href && typeof window.location !== 'undefined' && !href.includes(window.location.hostname)) {
		return (<a href={href} target="_blank" rel="noopener noreferrer">{children}</a>);
	}
	return (<Link {...props}>{children}</Link>);
};

RemarkLink.propTypes = {
	href: PropTypes.string,
	children: PropTypes.node
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
	style: PropTypes.object,
	children: PropTypes.node,
	source: PropTypes.string,
	remarkConfig: PropTypes.object
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
	children: PropTypes.node,
	source: PropTypes.string,
	remarkConfig: PropTypes.object
};

Toc.defaultProps = {
	style: {},
	source: '',
	remarkConfig: remarkConfigDefault
};

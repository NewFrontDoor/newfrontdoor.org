import React from 'react';
import PropTypes from 'prop-types';
import remark from 'remark';
import {isUndefined} from 'lodash';
import slug from 'remark-slug';
import ghSlugs from 'github-slugger';
import remarkReact from 'remark-react';
import {Element} from 'react-scroll';
import {Link} from 'react-router-dom';
import toc from 'mdast-util-toc';
import frontmatter from 'remark-frontmatter';

const remarkHeading = (component, boundProps = {}) => {
	class Heading extends React.Component {
		render() {
			const slugs = ghSlugs();
			const props = {...this.props, ...boundProps};
			const [slug] = props.children;
			return (
				<Element name={`${slugs.slug(slug)}`}>
					{React.createElement(component, {...props}, this.props.children)}
				</Element>
			);
		}
	}

	Heading.propTypes = {
		children: PropTypes.element.isRequired
	};

	return Heading;
};

const RemarkLink = props => {
	const {href, children} = props;

	if (href && href.startsWith('#') && typeof window.location !== 'undefined') {
		return (<Link to={{pathname: window.location.pathname, hash: href}} {...props}>{children}</Link>);
	}

	if (href && href.startsWith('/')) {
		return (<Link to={href} {...props}>{children}</Link>);
	}

	if (href && typeof window.location !== 'undefined' && !href.includes(window.location.hostname)) {
		return (<a href={href} target="_blank" rel="noopener noreferrer">{children}</a>);
	}

	if (href) {
		return (<a href={href} target="_blank" rel="noopener noreferrer">{children}</a>);
	}

	return (<Link {...props}>{children}</Link>);
};

RemarkLink.propTypes = {
	href: PropTypes.string,
	children: PropTypes.node.isRequired
};

RemarkLink.defaultProps = {
	href: undefined
};

export const remarkConfigDefault = {
	remarkReactComponents: {
		a: RemarkLink,
		h1: remarkHeading('H1'),
		h2: remarkHeading('H2'),
		h3: remarkHeading('H3'),
		h4: remarkHeading('H4'),
		h5: remarkHeading('H5'),
		h6: remarkHeading('H6')
	}
};

export const Markdown = ({component, style, source, children, remarkConfig}) => {
	const content = (isUndefined(source) || source === '') ? children : source;
	const output = remark().use(frontmatter).use(slug).use(remarkReact, remarkConfig).processSync(content).contents;
	return React.createElement(component, {style}, output);
};

Markdown.propTypes = {
	component: PropTypes.any,
	style: PropTypes.object,
	children: PropTypes.node,
	source: PropTypes.string,
	remarkConfig: PropTypes.object
};

Markdown.defaultProps = {
	component: 'div',
	style: {},
	children: undefined,
	source: '',
	remarkConfig: remarkConfigDefault
};

export const Toc = ({source, children, remarkConfig}) => {
	const content = (isUndefined(source) || source === '') ? children : source;
	const tocOut = remark().use(frontmatter).use(() => node => {
		node.children = [toc(node, {tight: true}).map];
	}).processSync(content).contents;

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
	children: undefined,
	source: '',
	remarkConfig: remarkConfigDefault
};

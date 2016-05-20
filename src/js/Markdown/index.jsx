import React from 'react';
import remark from 'remark';
import {isUndefined} from 'lodash';
import slug from 'remark-slug';
import remarkReact from 'remark-react';
import toc from './toc';

export const remarkConfigDefault = {
	commonmark: true,
	paragraphBlockquotes: false,
	remarkReactComponents: {
		// a: Link,
		// blockquote: CombinedBlockQuote,
		// code: CodePane,
		// del: spectacleComponent(S, {type: 'strikethrough'}),
		// em: spectacleComponent(S, {type: 'italic'}),
		// h1: spectacleComponent(Heading, {size: 1}),
		// h2: spectacleComponent(Heading, {size: 2}),
		// h3: spectacleComponent(Heading, {size: 3}),
		// h4: spectacleComponent(Heading, {size: 4}),
		// h5: spectacleComponent(Heading, {size: 5}),
		// h6: spectacleComponent(Heading, {size: 6}),
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

	return (
		<div style={style}>
			{remark().use(slug).use(remarkReact, remarkConfig).process(content)}
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

export const Toc = ({style, source, children, remarkConfig}) => {
	const content = (isUndefined(source) || source === '') ? children : source;

	return (
		<Markdown style={style} remarkConfig={remarkConfig}>
			{remark().use(toc, {tight: true}).process(content)}
		</Markdown>
	);
};

Toc.propTypes = {
	style: React.PropTypes.object,
	children: React.PropTypes.node,
	source: React.PropTypes.string,
	remarkConfig: React.PropTypes.object
};

Toc.defaultProps = {
	style: {},
	source: '',
	remarkConfig: remarkConfigDefault
};

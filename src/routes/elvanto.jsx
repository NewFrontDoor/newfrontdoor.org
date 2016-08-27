import React from 'react';
import fm from 'front-matter';
import {Index} from '../components/index/index.jsx';
import {Markdown} from '../components/markdown';
import content from '../content/elvanto.md';

const {body, attributes} = fm(content);

export const Elvanto = () => (
	<Index>
		<div className="elvanto-wrapper">
			<div className="elvanto-overlay">
				<div className="site-wrapper site-wrapper-padding">
					<Markdown>
						{`# ${attributes.title}
						${body}`}
					</Markdown>
				</div>
			</div>
		</div>
	</Index>
);

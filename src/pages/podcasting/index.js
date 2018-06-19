import React from 'react';
import fm from 'front-matter';
import Index from '../../components';
import {Markdown} from '../../components/markdown';
import content from '../../content/podcasting.md';

const {body, attributes} = fm(content);

const Podcasting = () => (
	<Index>
		<div className="podcasting-wrapper">
			<div className="podcasting-overlay">
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

export default Podcasting;

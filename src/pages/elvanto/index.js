import React from 'react';
import fm from 'front-matter';
import Index from '../../components/index/index';
import {Markdown} from '../../components/markdown/index';
import content from '../../content/elvanto.md';

const {body, attributes} = fm(content);

const Elvanto = () => (
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

export default Elvanto;

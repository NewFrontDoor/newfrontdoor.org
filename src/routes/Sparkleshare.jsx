import React from 'react';
import fm from 'front-matter';
import {Index} from '../components/Index/index.jsx';
import {Markdown} from '../components/Markdown';
import content from '../content/sparkleshare.md';

const {body, attributes} = fm(content);

export const Sparkleshare = () => (
	<Index>
		<div className="sparkleshare-wrapper">
			<div className="sparkleshare-overlay">
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

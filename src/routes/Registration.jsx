import React from 'react';
import fm from 'front-matter';
import {Index} from '../components/Index/index.jsx';
import {Markdown} from '../components/Markdown';
import content from '../content/registration.md';

const {body, attributes} = fm(content);

export const Registration = () => (
	<Index>
		<div className="registration-wrapper">
			<div className="registration-overlay">
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

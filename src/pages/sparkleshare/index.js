import React from 'react';
import fm from 'front-matter';
import Index from '../../components';
import {Markdown} from '../../components/markdown';
import content from '../../content/sparkleshare.md';

const {body, attributes} = fm(content);

const Sparkleshare = () => (
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

export default Sparkleshare;

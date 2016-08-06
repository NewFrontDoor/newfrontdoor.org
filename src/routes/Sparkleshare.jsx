import React from 'react';
import {Index} from '../components/Index/index.jsx';
import {Markdown} from '../components/Markdown';
import content from '../content/sparkleshare.md';

export const Sparkleshare = () => (
	<Index>
		<div className="sparkleshare-wrapper">
			<div className="sparkleshare-overlay">
				<div className="site-wrapper site-wrapper-padding">
					<Markdown>
						{content}
					</Markdown>
				</div>
			</div>
		</div>
	</Index>
);

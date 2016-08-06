import React from 'react';
import {Index} from '../components/Index/index.jsx';
import {Markdown} from '../components/Markdown';
import content from '../content/consultation.md';

export const Consultation = () => (
	<Index>
		<div className="consultation-wrapper">
			<div className="consultation-overlay">
				<div className="site-wrapper site-wrapper-padding">
					<Markdown>
						{content}
					</Markdown>
				</div>
			</div>
		</div>
	</Index>
);

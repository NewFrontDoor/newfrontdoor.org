import React from 'react';
import {Index} from '../components/Index/index.jsx';
import {Markdown} from '../components/Markdown';
import content from '../content/registration.md';


export const Registration = () => (
	<Index>
		<div className="registration-wrapper">
			<div className="registration-overlay">
				<div className="site-wrapper site-wrapper-padding">
					<Markdown>
						{content}
					</Markdown>
				</div>
			</div>
		</div>
	</Index>
);

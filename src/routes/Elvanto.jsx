import React from 'react';
import {Index} from '../components/Index/index.jsx';
import {Markdown} from '../components/Markdown';
import content from '../content/elvanto.md';


export const Elvanto = () => (
	<Index>
		<div className="elvanto-wrapper">
			<div className="elvanto-overlay">
				<div className="site-wrapper site-wrapper-padding">
					<Markdown>
						{content}
					</Markdown>
				</div>
			</div>
		</div>
	</Index>
);

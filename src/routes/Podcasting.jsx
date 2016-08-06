import React from 'react';
import {Index} from '../components/Index/index.jsx';
import {Markdown} from '../components/Markdown';
import content from '../content/podcasting.md';


export const Podcasting = () => (
	<Index>
		<div className="podcasting-wrapper">
			<div className="podcasting-overlay">
				<div className="site-wrapper site-wrapper-padding">
					<Markdown>
						{content}
					</Markdown>
				</div>
			</div>
		</div>
	</Index>
);

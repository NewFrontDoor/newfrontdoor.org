import React from 'react';

import content from '../content';

export const Hero = () => (
	<div className="hero-container">
		<div className="hero-background"></div>
		<div className="hero-content text-center" dangerouslySetInnerHTML={{__html: content.hero.tagline}}></div>
	</div>
);

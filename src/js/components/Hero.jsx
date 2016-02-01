import React from 'react';

import content from '../content';

export class Hero extends React.Component {
	raw() {
		return {__html: content.hero.tagline};
	}
	render() {
		return (
			<div className="hero-container">
				<div className="hero-background"></div>
				<div className="hero-content text-center" dangerouslySetInnerHTML={this.raw()}>
				</div>
			</div>
		);
	}
}

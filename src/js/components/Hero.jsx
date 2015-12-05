import React from 'react';

export class Hero extends React.Component {
	constructor(props) {
		super(props);
		this.state = {tagline: props.locals.content.hero.tagline};
	}
	raw() {
		return {__html: this.state.tagline};
	}
	render() {
		return (
			<div className="hero-container">
				<div className="hero-background"></div>
				<div className="hero-content">
					<div className="tagline" dangerouslySetInnerHTML={this.raw()}></div>
				</div>
			</div>
		);
	}
}

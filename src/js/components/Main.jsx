import React from 'react';
import {MainMenu} from './MainMenu';

import first from '../content/featured/first.md';
import second from '../content/featured/second.md';
import third from '../content/featured/third.md';
import fourth from '../content/featured/fourth.md';
import fifth from '../content/featured/fifth.md';
import sixth from '../content/featured/sixth.md';

export class Main extends React.Component {
	rawFirst() {
		return {__html: first};
	}
	rawSecond() {
		return {__html: second};
	}
	rawThird() {
		return {__html: third};
	}
	rawFourth() {
		return {__html: fourth};
	}
	rawFifth() {
		return {__html: fifth};
	}
	rawSixth() {
		return {__html: sixth};
	}

	render() {
		return (
			<main role="main">
				<div className="featured-first featured-light" id="how">
					<div className="site-wrapper">
						<section dangerouslySetInnerHTML={this.rawFirst()}></section>
					</div>
				</div>
				<div className="featured-second featured-dark" id="who">
					<div className="site-wrapper">
						<section dangerouslySetInnerHTML={this.rawSecond()}></section>
					</div>
				</div>
				<div className="featured-third featured-light" id="tools">
					<div className="site-wrapper">
						<section dangerouslySetInnerHTML={this.rawThird()}></section>
					</div>
				</div>
				<div className="featured-fourth featured-dark" id="events">
					<div className="site-wrapper">
						<section dangerouslySetInnerHTML={this.rawFourth()}></section>
					</div>
				</div>
				<div className="featured-fifth featured-light" id="pricing">
					<div className="site-wrapper">
						<section dangerouslySetInnerHTML={this.rawFifth()}></section>
					</div>
				</div>
				<div className="featured-sixth hero-container" id="join">
					<div className="close-background"></div>
					<div className="close-content">
							<section dangerouslySetInnerHTML={this.rawSixth()}></section>
					</div>
				</div>
			</main>
		);
	}
}

import React from 'react';
import {MainMenu} from './MainMenu';

import first from '../content/featured/first.md';
import second from '../content/featured/second.md';
import fifth from '../content/featured/fifth.md';

export class Main extends React.Component {
	rawFirst() {
		return {__html: first};
	}
	rawSecond() {
		return {__html: second};
	}
	rawFifth() {
		return {__html: fifth};
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
						<header>
							<h2>Tools + Philosophy</h2>
						</header>
						<section>
							<p></p>
						</section>
					</div>
				</div>
				<div className="featured-fourth featured-dark" id="events">
					<div className="site-wrapper">
						<header>
							<h2>Events + Training</h2>
						</header>
						<section>
							<p></p>
						</section>
					</div>
				</div>
				<div className="featured-fifth featured-light" id="pricing">
					<div className="site-wrapper">
						<section dangerouslySetInnerHTML={this.rawFifth()}></section>
					</div>
				</div>
				<div className="featured-sixth featured-dark" id="join">
					<div className="site-wrapper">
						<header>
							<h2>Come on board</h2>
						</header>
						<section>
							<p></p>
						</section>
					</div>
				</div>
			</main>
		);
	}
}

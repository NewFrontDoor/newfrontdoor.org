import React from 'react';
import {Hero} from '../Hero';
import {Index} from './Index';
import content from '../content';
import video from '../../elements/clip2.mp4';

import first from '../content/featured/first.html';
import second from '../content/featured/second.html';
import third from '../content/featured/third.html';
import fourth from '../content/featured/fourth.html';
import fifth from '../content/featured/fifth.html';
import sixth from '../content/featured/sixth.html';

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
			<Index>
				<Hero>
					<div dangerouslySetInnerHTML={{__html: content.hero.tagline}}></div>
				</Hero>
				<main role="main">
					<div className="featured-first featured-light" id="how">
						<div className="site-wrapper site-wrapper-padding">
							<section dangerouslySetInnerHTML={this.rawFirst()}></section>
						</div>
					</div>
					<div className="featured-second featured-dark" id="who">
						<div className="site-wrapper site-wrapper-padding">
							<section dangerouslySetInnerHTML={this.rawSecond()}></section>
						</div>
					</div>
					<div className="featured-third featured-light" id="tools">
						<div className="site-wrapper site-wrapper-padding">
							<section dangerouslySetInnerHTML={this.rawThird()}></section>
						</div>
					</div>
					<div className="featured-fourth featured-dark" id="events">
						<div className="site-wrapper site-wrapper-padding">
							<section dangerouslySetInnerHTML={this.rawFourth()}></section>
						</div>
					</div>
					<div className="featured-fifth featured-light" id="pricing">
						<div className="site-wrapper site-wrapper-padding">
							<section dangerouslySetInnerHTML={this.rawFifth()}></section>
						</div>
					</div>
					<div className="featured-sixth" id="join">
						<video autoPlay loop id="bgvid">
							<source src={video} type="video/mp4"></source>
						</video>
						<div className="close-content">
							<section dangerouslySetInnerHTML={this.rawSixth()}></section>
						</div>
					</div>
				</main>
			</Index>
		);
	}
}

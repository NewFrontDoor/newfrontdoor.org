import React from 'react';
import {Element, scroller} from 'react-scroll';
import FaAngleDown from 'react-icons/lib/fa/angle-down';
import Collapse from '../collapse';
import styles from './feature-tools.scss';
import Featured from '.';

const imageContext = require.context('../../images');

class FeaturedTools extends React.Component {
	constructor() {
		super();
		this.state = {
			isOpen: false
		};
		this.handleCollapse = this.handleCollapse.bind(this);
	}

	handleCollapse(event) {
		event.preventDefault();

		if (!this.state.isOpen) {
			scroller.scrollTo('tools-expand', {
				spy: true,
				smooth: true,
				offset: -164,
				duration: 500
			});
		}

		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	render() {
		return (
			<Featured name="tools" background="white">
				<header className="hidden">
					<h2>Tools + Philosophy</h2>
				</header>
				<section className="description">
					<div className="text-slab">
						It’s not about the destination, it’s about the journey
					</div>
					<p className="lead">
						The core product of New Front Door isn’t <em>just your website</em> - it’s our <em>philosophy.</em>
					</p>
					<p>
						There are plenty of products and approaches that will get your church on the web - our main aim is to help you to do this as best as possible. As a result, we’ve collated a suite of supported tools that will best help us to help you do IT well.
					</p>
					<p>
						We’re eager to ensure that you’re equipped to make the most of these tools as the web evolves over time. We won’t just build you a website, mailing lists and collaborative storage solutions, but we’ll
					</p>
					<ul>
						<li>coach you through <em>keeping them up to date</em></li>
						<li>provide <em>ongoing support</em> as your team members change, and</li>
						<li><em>walk you through new features</em> and updates as they occur.</li>
					</ul>
					<p>
						Although we think this ecosystem is fantastic, selecting our tools over years of experience, your needs may vary. If you already have some solutions sorted, no problem! We’ll work with you as best as we can to <em>ensure you’re being as effective as possible.</em>
					</p>
					<Element name="tools-expand">
						<div className="expand">
							<a href="#" onClick={this.handleCollapse}>Supported tools and products<br/>
								<FaAngleDown height="1.5em" width="1.5em"/>
							</a>
						</div>
					</Element>
				</section>
				<Collapse isOpened={this.state.isOpen}>
					<div className={styles.product}>
						<div className={styles.image}>
							<img className="img-responsive center-block" src={imageContext('./soul.jpeg')}/>
						</div>
						<div className={styles.detail}>
							<header>
								<h3>Websites</h3>
							</header>
							<section>
								<ul>
									<li>Our websites are responsive - supporting phones and tablets</li>
									<li>They are built on Drupal CMS - a modern, powerful and secure platform, easily updated, supports user permissions</li>
									<li>We’ll manage your domain name - you’ll never need to worry about renewing or remembering your password every 3 years</li>
									<li>Modular features - features developed for one client become available for all clients</li>
									<li>Running on one of the world’s largest server platforms - uptime and server stability is nothing to worry about</li>
								</ul>
							</section>
						</div>
					</div>
					<div className={styles.product}>
						<div className={styles.image}>
							<img className="img-responsive center-block" src={imageContext('./elvanto-i.png')}/>
						</div>
						<div className={styles.detail}>
							<header>
								<h3>Administration and relationship management</h3>
							</header>
							<section>
								<ul>
									<li>Implementation and consultation to get you started with Elvanto - an Australian-built Church Management platform</li>
									<li>Flexible mailing lists - so those outside your Church Management software can email you</li>
									<li>Podcasting your sermons</li>
									<li>Newsletter distribution</li>
								</ul>
							</section>
						</div>
					</div>
					<div className={styles.product}>
						<div className={styles.image}>
							<img className="img-responsive center-block" src={imageContext('./office365.png')}/>
						</div>
						<div className={styles.detail}>
							<header>
								<h3>Document management</h3>
							</header>
							<section>
								<ul>
									<li>Hosted document management platform</li>
									<li>Securely stored, managed by your organisation, not under user accounts</li>
									<li>Conflicts easily managed so nothing gets lost</li>
									<li>Folder and file level user permissions</li>
									<li>Integrated into your website</li>
								</ul>
							</section>
						</div>
					</div>
					<div className={styles.product}>
						<div className={styles.image}>
							<img className="img-responsive center-block" src={imageContext('./consultation.jpg')}/>
						</div>
						<div className={styles.detail}>
							<header>
								<h3>Consulation + advice</h3>
							</header>
							<section>
								<ul>
									<li>Initial consultation meetings when coming on board</li>
									<li>Recommendations of graphic designers, photographers and video producers</li>
									<li>Access to our documentation: user guides and best practices</li>
									<li>Podcasts and training sessions</li>
									<li>Optional in-depth consultation services</li>
								</ul>
							</section>
						</div>
					</div>
				</Collapse>
			</Featured>
		);
	}
}

export default FeaturedTools;

import React from 'react';
import {Link} from 'react-router';
import styles from './feature-events.scss';
import {Featured} from './index';

export const FeaturedEvents = () => (
	<div className={styles.background}>
		<Featured name="events" background="transparent">
			<header className="hidden">
				<h2>Keeping you up to speed</h2>
			</header>

			<section>
				<div>
					<div className="text-slab">
						Keeping you up to speed
					</div>
					<p className="lead">
						The internet changes. Your church changes. Your staff capacity and even staff size changes. That’s why <em>events and training</em> are at the <em>heart of the Vision 100 IT philosophy.</em>
					</p>
				</div>
				<div>
					<p>Whether you’re already a client, interested in becoming one, or just want some fresh input, these events are for you. They are professional-quality training sessions, with presenters who not only have IT expertise, but have also thought long and hard about how to apply this to the unique context of Christian ministry. Topics range from social media usage to engaging a graphic designer and everything in between.</p>
				</div>
				<div className={styles.training}>
					<h3>Our next training sessions</h3>
					<ul>
						<li>November 9th, 2016. Using IT to Nail Church Events.</li>
					</ul>
					<div>
						<h4>More info</h4>
						<ul>
							<li>When: 5:30-9:15pm</li>
							<li>Where: The Loft, Wellspring, Sandy Bay (Tasmania)</li>
							<li>Cost: $45 to cover event and admin (Snacks and dinner included). We recommend churches subsidise their delegates.</li>
							<li>Register: Registrations open in October 2016</li>
						</ul>
					</div>
				</div>
				<div className="expand">
					<Link to="/documentation#maintenance">Check out some of our previous training content<br/>
						<span className="fa fa-angle-down fa-3x"/>
					</Link>
				</div>
			</section>
		</Featured>
	</div>
);

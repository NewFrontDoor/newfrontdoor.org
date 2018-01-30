import React from 'react';
import {Link} from 'react-router-dom';
import FaAngleDown from 'react-icons/lib/fa/angle-down';
import styles from './feature-events.scss';
import Featured from './index';

const FeaturedEvents = () => (
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
						<li>Riverbank Christian Church, April 18, 2018, Launceston</li>
					</ul>
					<div>
						<h4>More info</h4>
						<ul>
							<li>When: 7:30-9:30pm</li>
							<li>Where: Riverbank Christian Church (Launceston)</li>
							<li>Cost: $30 to cover event, admin and support Vision 100 IT (snacks included). We recommend churches subsidise their delegates.</li>
							<li>Register: Register at <a href="https://vision100.org/itnightregistration">vision100.org</a></li>
						</ul>
					</div>
				</div>
				<div className="expand">
					<Link to="/documentation#maintenance">Check out some of our previous training content<br/>
						<FaAngleDown height="1.5em" width="1.5em"/>
					</Link>
				</div>
			</section>
		</Featured>
	</div>
);

export default FeaturedEvents;

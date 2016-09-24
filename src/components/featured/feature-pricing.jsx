import React from 'react';
import {Link} from 'react-router';
import {Featured} from './index';

export const FeaturedPricing = () => (
	<Featured name="pricing" background="white">
		<div className="featured-fifth featured-light">
			<header className="hidden">
				<h2>Pricing</h2>
			</header>

			<div className="text-slab">
				No ticket cost - the best journeys in life are free
			</div>

			<p className="lead">
				<em>All our core features are free</em>
			</p>

			<p>
				For our core features and services, we won’t invoice you at all. Not in a <q>free tier</q> business model where we send you five emails a day about how awesome <q>premium</q> is sort of way, but in a <q>We’re really eager for you to get the most out of your IT for the good of the Gospel</q> sort of way. How does that sound? This is our rationale:
			</p>

			<blockquote className="lead">
				We want to focus on providing you <em>services and methodology</em> that will keep you <em>engaged with your IT</em>, rather than a product that is merely set and forget. If giving our services to you for free achieves that goal, we’ll do it.
			</blockquote>

			<p className="lead">
				<em>A few extras might have <strong>some</strong> costs</em>
			</p>

			<p>
				We do have some services that will carry a cost, but we think that if you’ve got the right people on the ground, and make good use of our documentation, you’ll be fine. Some of our products carry a cost as well. Our registration payment system is a ‘premium’ product for which we charge a small extra fee
			</p>
			<p className="lead">
				<em>Consultation services</em>
			</p>

			<p>
				In addition to our normal customer services, we can provide full blown consultation services to help you smoothly transition your church into electronic administration. For more details about our consultation services, <Link to="/consultation">click here.</Link>
			</p>

			<div className="expand">
				<a href="/documentation/costs">More about costs<br/>
					<span className="fa fa-angle-down fa-3x"/>
				</a>
			</div>
		</div>
	</Featured>
);

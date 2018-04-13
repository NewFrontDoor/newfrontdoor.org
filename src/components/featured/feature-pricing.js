import React from 'react';
import {Link} from 'react-router-dom';
import FaAngleDown from 'react-icons/lib/fa/angle-down';
import Featured from './index';

const FeaturedPricing = () => (
	<Featured name="pricing" background="white">
		<div className="featured-fifth featured-light">
			<header className="hidden">
				<h2>Pricing</h2>
			</header>

			<div className="text-slab">
				One ticket to take you wherever you need to go, all year round
			</div>

			<p className="lead">
				<em>
					All of our core features and services are available for a single annual subscription.
				</em>
			</p>

			<p>
				Not in a entry-level tier business model where we send you five emails a day about how awesome premium is sort of way, but in a We’re really eager for you to get the most out of your IT for the good of the Gospel sort of way. How does that sound? This is our rationale:
			</p>

			<blockquote className="lead">
				We want to focus on providing you
				{' '}
				<em>services and methodology</em>
				{' '}
				that will keep you
				{' '}
				<em>engaged with your IT</em>
				, rather than a product that is merely set and forget. So we will stay engaged and available all year round.
			</blockquote>

			<p className="lead">
				<em>Pricing schedule</em>
			</p>

			<table>
				<tr>
					<th>Average Adult Attendance</th>
					<th>Set-up Fee</th>
					<th>Annual Subscription</th>
				</tr>
				<tr>
					<td>150 or less</td>
					<td>$300</td>
					<td>$400</td>
				</tr>
				<tr>
					<td>151-300</td>
					<td>$300</td>
					<td>$900</td>
				</tr>
				<tr>
					<td>301+</td>
					<td>$750</td>
					<td>$900</td>
				</tr>
			</table>

			<p>We have lower annual fees for parachurch ministries, click on 'More about costs' below for more information.</p>

			<p className="lead">
				<em>Consultation services</em>
			</p>

			<p>
				In addition to our normal customer services, we can provide full blown consultation services to help you smoothly transition your church into electronic administration. For more details about our consultation services,
				{' '}
				<Link to="/consultation">click here.</Link>
			</p>

			<div className="expand">
				<Link to="/documentation/costs">
					More about costs<br/>
					<FaAngleDown height="1.5em" width="1.5em"/>
				</Link>
			</div>
		</div>
	</Featured>
);

export default FeaturedPricing;

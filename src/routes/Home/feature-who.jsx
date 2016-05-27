import React from 'react';
import {Link} from 'react-router';
import {Featured} from '../../components/Featured';

import styles from './feature-who.scss';

const imageContext = require.context('../../elements');

export const FeaturedWho = props => (
	<Featured name="who">
		<div className="text-slab">
			The right people at the right time
		</div>
		<div className={`${styles.snapshots} text-uppercase`}>
			<div>
				<span className="fa fa-university fa-5x"></span>
				<p>14+ years of V100IT history</p>
			</div>
			<div>
				<span className="fa fa-graduation-cap fa-5x"></span>
				<p>30+ years of collective experience</p>
			</div>
			<div>
				<span className="fa fa-users fa-5x"></span>
				<p>10+ clients on board</p>
			</div>
			<div>
				<span className="fa fa-server fa-5x"></span>
				<p>20+ webpages served</p>
			</div>
		</div>
		<p>
			Vision 100 IT are a national team of passionate IT and web development engineers, ministry leaders and management professionals who voluntarily build and maintain IT systems, training and educating our clients on the foundation of years of collective knowledge gleaned from within the IT industry.
		</p>
		<p>
			Vision 100 IT has now existed for over a decade, and has gradually built up a knowledge base of best practices and approaches for doing church IT <em>sustainably</em>. We are all about getting <em>and keeping</em>	our clients on the web, in order to more effectively reach the lost and minister to the people in their congregations.
		</p>

		<p>
			Currently our team has members in Hobart and in Sydney, ready to meet and discuss the needs of your ministry.
		</p>

		<div className="expand">
			<Link to="/about#team">
				<p>Meet the team</p>
				<span className="fa fa-angle-down fa-3x"></span>
			</Link>
		</div>
		<div className="team-collection">
			<div className="team-member-1">
				<img src={imageContext("./christian.jpg")}/>
			</div>
			<div className="team-member-2">
				<img src={imageContext("./jonno.jpg")}/>
			</div>
			<div className="team-member-3">
				<img src={imageContext("./emile.jpg")}/>
			</div>
			<div className="team-member-4">
				<img src={imageContext("./gibbo.jpg")}/>
			</div>
			<div className="team-member-5">
				<img src={imageContext("./alan.jpg")}/>
			</div>
			<div className="team-member-6">
				<img src={imageContext("./chris.jpg")}/>
			</div>
		</div>
		<div className="team-tiled">
			<div className="tile">
				<img src={imageContext("./christian-tile.jpg")}/>
			</div>
			<div className="tile">
				<img src={imageContext("./jonno-tile.jpg")}/>
			</div>
			<div className="tile">
				<img src={imageContext("./emile-tile.jpg")}/>
			</div>
			<div className="tile">
				<img src={imageContext("./gibbo-tile.jpg")}/>
			</div>
			<div className="tile">
				<img src={imageContext("./alan-tile.jpg")}/>
			</div>
			<div className="tile">
				<img src={imageContext("./chris-tile.jpg")}/>
			</div>
		</div>
	</Featured>
);

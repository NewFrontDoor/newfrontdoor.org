import React from 'react';
import {Link} from 'react-router';
import styles from './feature-who.scss';
import Featured from './index.jsx';

const imageContext = require.context('../../images');

const FeaturedWho = () => (
	<Featured name="who" background="black">
		<div className="text-slab">
			The right people at the right time
		</div>
		<div className={`${styles.snapshots} text-uppercase`}>
			<div>
				<span className="fa fa-university fa-5x"/>
				<p>14+ years of V100IT history</p>
			</div>
			<div>
				<span className="fa fa-graduation-cap fa-5x"/>
				<p>30+ years of collective experience</p>
			</div>
			<div>
				<span className="fa fa-users fa-5x"/>
				<p>10+ clients on board</p>
			</div>
			<div>
				<span className="fa fa-server fa-5x"/>
				<p>20+ websites served</p>
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
				<span className="fa fa-angle-down fa-3x"/>
			</Link>
		</div>
		<div className={styles.collection}>
			<div><img src={imageContext('./christian.jpg')}/></div>
			<div><img src={imageContext('./jonno.jpg')}/></div>
			<div><img src={imageContext('./emile.jpg')}/></div>
			<div><img src={imageContext('./gibbo.jpg')}/></div>
			<div><img src={imageContext('./alan.jpg')}/></div>
			<div><img src={imageContext('./chris.jpg')}/></div>
		</div>
		<div className={styles.tiled}>
			<div><img src={imageContext('./christian-tile.jpg')}/></div>
			<div><img src={imageContext('./jonno-tile.jpg')}/></div>
			<div><img src={imageContext('./emile-tile.jpg')}/></div>
			<div><img src={imageContext('./gibbo-tile.jpg')}/></div>
			<div><img src={imageContext('./alan-tile.jpg')}/></div>
			<div><img src={imageContext('./chris-tile.jpg')}/></div>
		</div>
	</Featured>
);

export default FeaturedWho;

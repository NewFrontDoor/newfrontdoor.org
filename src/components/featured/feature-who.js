import React from 'react';
import {Link} from 'react-router-dom';
import FaBank from 'react-icons/lib/fa/bank';
import FaUsers from 'react-icons/lib/fa/group';
import FaServer from 'react-icons/lib/fa/server';
import FaGraduationCap from 'react-icons/lib/fa/graduation-cap';
import FaAngleDown from 'react-icons/lib/fa/angle-down';
import styles from './feature-who.scss';
import Featured from './index';

const imageContext = require.context('../../images');

const FeaturedWho = () => (
	<Featured name="who" background="black">
		<div className="text-slab">
			The right people at the right time
		</div>
		<div className={`${styles.snapshots}`}>
			<div>
				<FaBank height="4em" width="4em"/>
				<span className="fa-university fa-5x"/>
				<p>14+ years of V100IT history</p>
			</div>
			<div>
				<FaGraduationCap height="4em" width="4em"/>
				<p>30+ years of collective experience</p>
			</div>
			<div>
				<FaUsers height="4em" width="4em"/>
				<p>10+ clients on board</p>
			</div>
			<div>
				<FaServer height="4em" width="4em"/>
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
				<FaAngleDown height="1.5em" width="1.5em"/>
			</Link>
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

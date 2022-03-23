import React from 'react';
import hash from 'string-hash';
import {Link} from 'react-router-dom';
import {Element} from 'react-scroll';
import TeamMember from '../../components/team-member';
import Index from '../../components';
import content from '../../content';
import styles from './People.scss'

const About = () => (
	<Index>
		<div className="about-wrapper">
			<div className="about-overlay">
				<div className="site-wrapper site-wrapper-padding">
					<h1>About New Front Door</h1>
					<Element name="mission">
						<h2>Mission + Vision</h2>
						<p>New Front Door exists to help churches - particularly church IT volunteers and ministry staff - to use IT better.</p>
						<hr/>
					</Element>
					<Element name="history">
						<h2>History</h2>
						<p>New Front Door are a (newly!) national team of passionate IT and web development engineers, ministry leaders and management professionals who voluntarily build and maintain IT systems, training and educating our clients on the foundation of years of collective knowledge gleaned from within the IT industry.</p>
						<p>New Front Door, previously Vision 100 IT, has now existed for over a decade, and has gradually built up a knowledge base of best practices and approaches for doing church IT sustainably. We are all about getting and keeping our clients on the web, in order to more effectively reach the lost and minister to the people in their congregations.</p>
						<hr/>
					</Element>
					<Element name="team">
						<div className="team-wrap">
							<h2>New Front Door Board</h2>
							<div className={styles.container}>
								{content.boardMembers.map(member => <TeamMember key={hash(member.name)} {...member}/>)}
							</div>
							<hr/>
							<h2>New Front Door Team Members</h2>
							<div className={styles.container}>
								{content.teamMembers.map(member => <TeamMember key={hash(member.name)} {...member}/>)}
							</div>
							<hr/>
						</div>
					</Element>
					<Element name="join">
						<h2>Join our team</h2>
						<p>
							New Front Door is made up of a team of volunteers who firmly believe in the value of IT to furthering the cause of the gospel. The team meets together regularly for ‘sprints’ where a lot of the heavy lifting work gets done, while we hang out, eat pizza and enjoy taking on some challenges together. In between times, we pick up support tasks as they arise from our client churches. Involvement can be as much as building a web app from scratch for interfacing our document management system, or taking on a task here and there across the year. If you’re interested in being part of the team, be in touch <Link to="/contact">here.</Link>
						</p>
						<hr/>
					</Element>
				</div>
			</div>
		</div>
	</Index>
);

export default About;

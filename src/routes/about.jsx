import React from 'react';
import {Link} from 'react-router-dom';
import {Element} from 'react-scroll';
import TeamMember from '../components/team-member/index.jsx';
import Index from '../components/index/index.jsx';
import content from '../content';

const About = () => (
	<Index>
		<div className="about-wrapper">
			<div className="about-overlay">
				<div className="site-wrapper site-wrapper-padding">
					<h1>About Vision 100</h1>
					<Element name="mission">
						<h2>Mission + Vision</h2>
						<p>Vision 100 IT exists to help churches - particularly church IT volunteers and ministry staff - to use IT better.</p>
						<hr/>
					</Element>
					<Element name="history">
						<h2>History</h2>
						<p>Vision 100 IT are a (newly!) national team of passionate IT and web development engineers, ministry leaders and management professionals who voluntarily build and maintain IT systems, training and educating our clients on the foundation of years of collective knowledge gleaned from within the IT industry.</p>
						<p>Vision 100 IT has now existed for over a decade, and has gradually built up a knowledge base of best practices and approaches for doing church IT sustainably. We are all about getting and keeping our clients on the web, in order to more effectively reach the lost and minister to the people in their congregations.</p>
						<hr/>
					</Element>
					<Element name="team">
						<div className="team-wrap">
							<h2>Vision 100 IT Board</h2>
							{content.boardMembers.map((member, key) => <TeamMember key={key} {...member}/>)}
							<hr/>
							<h2>Vision 100 IT Team Members</h2>
							{content.teamMembers.map((member, key) => <TeamMember key={key} {...member}/>)}
							<hr/>
						</div>
					</Element>
					<Element name="join">
						<h2>Join our team</h2>
						<p>
							Vision 100 IT is made up of a team of volunteers who firmly believe in the value of IT to furthering the cause of the gospel. The team meets together regularly for ‘sprints’ where a lot of the heavy lifting work gets done, while we hang out, eat pizza and enjoy taking on some challenges together. In between times, we pick up support tasks as they arise from our client churches. Involvement can be as much as building a web app from scratch for interfacing our document management system, or taking on a task here and there across the year. If you’re interested in being part of the team, be in touch <Link to="/contact">here.</Link>
						</p>
						<p>Vision 100 IT does not have any employed positions at this time.</p>
						<hr/>
					</Element>
					<Element name="service">
						<h2>Service Levels (Client Charter)</h2>
						<p>The Vision 100 IT Client Charter is to be advised.</p>
						<p>Please speak to us directly with any concerns prior to the charter being published.</p>
						<div className="hidden">
							<p>Vision 100 commits to:</p>
							<ul>
								<li>Respond to all initial queries within 24 hours</li>
								<li>Solve simple problems within 3 days</li>
								<li>Promise 3</li>
								<li>Promise 4</li>
								<li>Promise 5</li>
							</ul>
						</div>
					</Element>
				</div>
			</div>
		</div>
	</Index>
);

export default About;

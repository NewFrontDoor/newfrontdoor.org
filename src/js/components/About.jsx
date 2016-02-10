import React from 'react';
import {Index} from './Index';
import {TeamMember} from '../TeamMember';

const boardMembers = [{
	name: 'Christian de Kievit',
	position: 'Team leader',
	image: '../src/elements/christian.jpg',
	text: 'Christian is the team leader of the Vision 100 IT team, and an elder at Summerleas Christian Church. He has 13 years of development experience in the local IT industry, as well as 8 years on the Vision 100 IT team. To go with his strong technical knowledge, he has demonstrated leadership in both secular and ministry positions for the last 10 years. Also, if you’re up for a board game of any description, he’s your man.'
}, {
	name: 'Mikey Lynch',
	position: 'Board member',
	image: '',
	text: ''
}, {
	name: 'Jason Imms',
	position: 'Board member',
	image: '',
	text: ''
}];

const teamMembers = [{
	name: 'Jonno Haines',
	position: 'Team member (Sydney)',
	image: '../src/elements/jonno.jpg',
	text: 'Jonathan currently works in Sydney as a web technology consultant. When he isn\'t building web applications for clients with JavaScript and HTML he contributes to open source projects such as SparkleShare. His interests include late breakfasts, collecting emails and subverting the patriarchy.'
}, {
	name: 'Emile Hofsink',
	position: 'Team member (Hobart)',
	image: '../src/elements/emile.jpg',
	text: 'Emile has over 5 years of experience in the Information Technology Field. His skills include Computer Systems Installation Management and Configuration across Software, Hardware, Networking and Cloud/Datacentre based systems. Emile is always seeking opportunities to empower people through the use of Technology, V Energy Drinks and Pizza.'
}, {
	name: 'Andrew Gibb',
	position: 'Team member (Hobart)',
	image: '../src/elements/gibbo.jpg',
	text: 'Andrew has worked as a software developer at Pearson for the last 6+ years doing a little bit of everything. Andrew has 12 years of experience in the IT industry and over that time he has developed skills ranging from software development to server administration. Andrew is currently a member of Vine Christian Church and he has been a member of the Vision100 IT team since 2013. Andrew is a keen cyclist and can often be found riding a bike whether road or mountain around the roads and trails of Hobart.'
}, {
	name: 'Alan Reader',
	position: 'Team member (Sydney)',
	image: '../src/elements/alan.jpg',
	text: 'Alan is a theological student at Moore Theological College, Sydney. He has worked in ministry for 3 years with AFES and currently serves on the AFES board of management. Alan’s experience ranges from hobby HTML and PHP sites through to a broad understanding of various CMS systems, and the design of the Vision 100 IT website. Alan’s strengths are in areas of analysis, project development and consultation, and is passionate about UX-driven design.'
}, {
	name: 'Chris Haines',
	position: 'Team member (Hobart)',
	image: '../src/elements/chris.jpg',
	text: 'Christopher attends Crossroads Presbyterian, and works as the Office Manager for the Network of Christian Reformed Churches of Southern Tasmania, developing policies and procedures for the network of six reformed churches in Kingborough. While he lacks official IT qualifications (he has a Bachelor of Business, majoring in HR), he is passionate about assisting churches practically, and enjoys thinking through the best practices of how churches operate behind the scenes. If you can\'t get a hold of him on a Monday night, he will most likely be playing Ultimate Frisbee, or cooking up a Gordon Ramsay inspired storm.'
}];

export const About = () => (
		<Index>
			<div className="site-wrapper site-wrapper-padding">
					<h1>About Vision 100</h1>
					<div id="mission">
							<h2>Mission + Vision</h2>
							<p>Vision 100 IT exists to help churches - particularly church IT volunteers and ministry staff - to use IT better.</p>
							<hr/>
					</div>
					<div id="history">
							<h2>History</h2>
							<p>Vision 100 IT are a (newly!) national team of passionate IT and web development engineers, ministry leaders and management professionals who voluntarily build and maintain IT systems, training and educating our clients on the foundation of years of collective knowledge gleaned from within the IT industry.</p>
							<p>Vision 100 IT has now existed for over a decade, and has gradually built up a knowledge base of best practices and approaches for doing church IT sustainably. We are all about getting and keeping our clients on the web, in order to more effectively reach the lost and minister to the people in their congregations.</p>
							<hr/>
					</div>
					<div className="team-wrap" id="team">
							<h2>Vision 100 IT Board</h2>
							{boardMembers.map(member => <TeamMember {...member} />)}
							<hr/>
							<h2>Vision 100 IT Team Members</h2>
							{teamMembers.map(member => <TeamMember {...member} />)}
							<hr/>
					</div>
					<div id="join">
							<h2>Join our team</h2>
							<hr/>
					</div>
					<div id="service">
							<h2>Service Levels (Client Charter)</h2>
							<p>Vision 100 commits to:</p>
							<ul>
									<li>Promise 1</li>
									<li>Promise 2</li>
									<li>Promise 3</li>
									<li>Promise 4</li>
									<li>Promise 5</li>
							</ul>
					</div>
			</div>
		</Index>
);

import React from 'react';

export class Footer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			lists: [{
				heading: 'V100IT',
				className: 'footer-list text-right',
				links: [{
					text: 'Philosophy'
				}, {
					text: 'Tools'
				}, {
					text: 'Events'
				}, {
					text: 'Pricing'
				}, {
					text: 'Showcase'
				}]
			}, {
				heading: 'About Us',
				className: 'footer-list text-right',
				links: [{
					text: 'Mission + Vision',
					target: 'about'
				}, {
					text: 'History',
					target: 'about'
				}, {
					text: 'Team Members',
					target: 'about'
				}, {
					text: 'Join Us',
					target: 'about'
				}, {
					text: 'Service Levels',
					target: 'about'
				}]
			}, {
				heading: 'Support',
				className: 'footer-list text-left',
				links: [{
					text: 'Support Request',
					target: '/support'
				}, {
					text: 'Feature Request',
					target: '/feature'
				}, {
					text: 'Contact Us',
					target: '/support'
				}, {
					text: 'Help + How-to',
					target: '/documentation'
				}, {
					text: 'System Status',
					target: '/status'
				}]
			}, {
				heading: 'Connect',
				className: 'footer-list text-left',
				links: [{
					text: 'Podcast',
					target: ''
				}, {
					text: 'Mailing List',
					target: 'contact'
				}, {
					text: 'Blog',
					target: '/news'
				}, {
					text: 'Facebook',
					target: 'http://facebook.com/vision100it'
				}, {
					text: 'Twitter',
					target: 'http://twitter.com/vision100it'
				}]
			}, {
				className: 'footer-logo',
				links: ['/']
			}]
		};
	}
	render() {
		return (
			<footer>
				<div className="footer-wrap">
				{this.state.lists.map((list, key) => <div key={key} className={list.className}>
						<header className="text-lowercase">
							<h3>{list.heading}</h3>
						</header>
						<ul className="list-unstyled">
							{list.links.map((link, key) => <li key={key}>
								<a href={link.target}>{link.text}</a>
						</li>)}
						</ul>
					</div>
				)}
			</div>
			</footer>
		);
	}
}

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
					text: 'Mission + Vision'
				}, {
					text: 'History'
				}, {
					text: 'Team Members'
				}, {
					text: 'Join Us'
				}, {
					text: 'Service Levels'
				}]
			}, {
				className: 'footer-logo',
				links: []
			}, {
				heading: 'Support',
				className: 'footer-list text-left',
				links: [{
					text: 'Support Request'
				}, {
					text: 'Feature Request'
				}, {
					text: 'Contact Us'
				}, {
					text: 'Help + How-to'
				}, {
					text: 'System Status'
				}]
			}, {
				heading: 'Connect',
				className: 'footer-list text-left',
				links: [{
					text: 'Podcast'
				}, {
					text: 'Mailing List'
				}, {
					text: 'Blog'
				}, {
					text: 'Facebook'
				}, {
					text: 'Twitter'
				}]
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
						<ul>
							{list.links.map((link, key) => <li key={key}>{link.text}</li>)}
						</ul>
					</div>
				)}
			</div>
			</footer>
		);
	}
}

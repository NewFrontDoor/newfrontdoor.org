import React from 'react';
import FaFacebookSquare from 'react-icons/lib/fa/twitter-square';
import FaTwitterSquare from 'react-icons/lib/fa/facebook-square';
import boardMembers from './board-members';
import teamMembers from './team-members';

export default {
	boardMembers,
	teamMembers,
	hero: {
		tagline: '# Can a church really do IT _effectively?_\n# Come on, we’ll show you'
	},
	banners: [{
		display: 'visible',
		type: 'announcement',
		text: 'Testing the announcement banner'
	}, {
		display: 'visible',
		type: 'warning',
		text: 'Testing the warning banner'
	}],
	productcards: [{
		number: 'one',
		background: 'black',
		image: 'elvanto.png',
		imagepadding: '10',
		text: 'Have you got started with Elvanto yet?'
	}, {
		number: 'two',
		background: 'white',
		image: 'soul.jpeg',
		imagepadding: '10',
		text: 'Let us help you get the most out of your website'
	}, {
		number: 'three',
		background: 'black',
		image: 'sparkleshare.png',
		imagepadding: '10',
		text: 'Dropbox, google drive & USB sticks making you nuts?'
	}, {
		number: 'four',
		background: 'white',
		image: 'close-image.jpeg',
		imagepadding: '0',
		text: 'Thinking of a refresh? Read our recommendations'
	}],
	mainmenu: {
		links: [{
			text: 'How we<br />can help you',
			to: '#how'
		}, {
			text: 'Who are<br />Vision 100 IT?',
			to: '#who'
		}, {
			text: 'Philosophy<br />+ Tools',
			to: '#tools'
		}, {
			text: 'Events +<br />Training',
			to: '#events'
		}, {
			text: 'Pricing',
			to: '#pricing'
		}, {
			text: 'Come<br />on board',
			to: '#join'
		}]
	},
	clientmenu: {
		links: [{
			text: 'News',
			to: '/client'
		}, {
			text: 'Help +<br />How-to',
			to: '/documentation'
		}, {
			text: 'Feature<br />Request',
			to: '/feature'
		}, {
			text: 'Support<br />Request',
			to: '/support'
		}, {
			text: 'About Us',
			to: '/about'
		}]
	},
	mobilemenu: {
		primary: [{
			text: 'Client',
			to: '/client'
		}, {
			text: 'Visitor',
			to: '#how'
		}],
		secondary: [{
			text: 'Search',
			to: '#'
		}, {
			text: 'News',
			to: '/client'
		}],
		teriary: [{
			text: 'Search',
			to: '#'
		}, {
			text: 'Contact',
			to: '/contact'
		}]
	},
	footerLinks: [{
		heading: 'V100IT',
		links: [{
			text: 'Philosophy',
			to: '/#tools'
		}, {
			text: 'Tools',
			to: '/#tools'
		}, {
			text: 'Events',
			to: '/#events'
		}, {
			text: 'Pricing',
			to: '/#pricing'
		}, {
			text: 'Consultation',
			to: '/consultation'
		}]
	}, {
		heading: 'About Us',
		links: [{
			text: 'Mission + Vision',
			to: '/about#mission'
		}, {
			text: 'History',
			to: '/about#history'
		}, {
			text: 'Team Members',
			to: '/about#team'
		}, {
			text: 'Privacy Policy',
			to: '/documentation/privacy'
		}, {
			text: 'Service Levels',
			to: '/about#service'
		}]
	}, {
		heading: 'Support',
		links: [{
			text: 'Support Request',
			to: '/support'
		}, {
			text: 'Feature Request',
			to: '/feature'
		}, {
			text: 'Contact Us',
			to: '/contact'
		}, {
			text: 'Help + How-to',
			to: '/documentation'
		}, {
			text: 'System Status',
			to: '/status'
		}]
	}, {
		heading: 'Connect',
		links: [{
			text: 'Podcast - coming!',
			to: ''
		}, {
			text: 'Mailing List',
			to: '/contact'
		}, {
			text: 'Blog',
			to: '/client'
		}, {
			children: (<FaFacebookSquare/>),
			target: 'https://facebook.com/vision100it'
		}, {
			children: (<FaTwitterSquare/>),
			target: 'https://twitter.com/vision100it'
		}]
	}, {
		links: []
	}]
};

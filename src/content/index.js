export default {
	hero: {
		tagline: '<h1>Can a church really do IT <em>effectively?</em><br/>Come on, we’ll show you.</h1>'
	},
	banners: [{
		display: 'visible',
		type: 'announcement-banner',
		text: 'Testing the announcement banner'
	}, {
		display: 'visible',
		type: 'warning-banner',
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
			text: 'System<br />Status',
			to: '/status'
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
			className: 'fa fa-facebook-square',
			target: 'http://facebook.com/vision100it'
		}, {
			className: 'fa fa-twitter-square',
			target: 'http://twitter.com/vision100it'
		}]
	}, {
		links: []
	}]
};

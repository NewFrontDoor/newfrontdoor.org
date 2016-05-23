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
			target: 'how'
		}, {
			text: 'Who are<br />Vision 100 IT?',
			target: 'who'
		}, {
			text: 'Philosophy<br />+ Tools',
			target: 'tools'
		}, {
			text: 'Events +<br />Training',
			target: 'events'
		}, {
			text: 'Pricing',
			target: 'pricing'
		}, {
			text: 'Come<br />on board',
			target: 'join'
		}]
	},
	clientmenu: {
		links: [{
			text: 'News',
			link: '/client'
		}, {
			text: 'Help + How-to',
			link: '/documentation'
		}, {
			text: 'Feature Request',
			link: '/feature'
		}, {
			text: 'Support Request',
			link: '/support'
		}, {
			text: 'System Status',
			link: '/status'
		}, {
			text: 'About Us',
			link: '/about'
		}]
	},
	mobilemenu: {
		primary: [{
			text: 'Client',
			target: '/client'
		}, {
			text: 'Visitor',
			target: '#how'
		}],
		secondary: [{
			text: 'Search',
			target: '#'
		}, {
			text: 'News',
			target: '/client'
		}],
		teriary: [{
			text: 'Search',
			target: '#'
		}, {
			text: 'Contact',
			target: '/contact'
		}]
	},
	footerLinks: [{
		heading: 'V100IT',
		links: [{
			text: 'Philosophy',
			target: '/#tools'
		}, {
			text: 'Tools',
			target: '/#tools'
		}, {
			text: 'Events',
			target: '/#events'
		}, {
			text: 'Pricing',
			target: '/#pricing'
		}, {
			text: 'Consultation',
			target: '/consultation'
		}]
	}, {
		heading: 'About Us',
		links: [{
			text: 'Mission + Vision',
			target: '/about#mission'
		}, {
			text: 'History',
			target: '/about#history'
		}, {
			text: 'Team Members',
			target: '/about#team'
		}, {
			text: 'Join Us',
			target: '/about#join'
		}, {
			text: 'Service Levels',
			target: '/about#service'
		}]
	}, {
		heading: 'Support',
		links: [{
			text: 'Support Request',
			target: '/support'
		}, {
			text: 'Feature Request',
			target: '/feature'
		}, {
			text: 'Contact Us',
			target: '/contact'
		}, {
			text: 'Help + How-to',
			target: '/documentation'
		}, {
			text: 'System Status',
			target: '/status'
		}]
	}, {
		heading: 'Connect',
		links: [{
			text: 'Podcast - coming!',
			target: ''
		}, {
			text: 'Mailing List',
			target: '/contact'
		}, {
			text: 'Blog',
			target: '/client'
		}, {
			className: 'fa fa-facebook-square',
			target: 'http://facebook.com/vision100it'
		}, {
			className: 'fa fa-twitter-square',
			target: 'http://twitter.com/vision100it'
		}]
	}, {
		links: ['/']
	}]
};

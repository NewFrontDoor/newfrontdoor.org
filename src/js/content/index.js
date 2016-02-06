export default {
	hero: {
		tagline: '<h1>Can a church really do IT <em>effectively?</em><br/><em>Anything</em> is possible.<br/>Come on, we’ll show you.</h1>'
	},
	banners: [{
		field: 'announcement-banner',
		output: 'Testing the announcement banner'
	}, {
		field: 'warning-banner',
		outputed: 'Testing the warning banner'
	}],
	mainmenu: {
		links: [{
			text: 'How we<br />can help you',
			target: '#how'
		}, {
			text: 'Who are<br />Vision 100 IT?',
			target: '#who'
		}, {
			text: 'Tools +<br />Philosophy',
			target: '#tools'
		}, {
			text: 'Events +<br />Training',
			target: '#events'
		}, {
			text: 'Pricing',
			target: '#pricing'
		}, {
			text: 'Come<br />on board',
			target: '#join'
		}]
	},
	clientmenu: {
		links: [{
			text: 'News',
			target: '#'
		}, {
			text: 'Help + How-to',
			target: '#'
		}, {
			text: 'Feature Request',
			target: '#'
		}, {
			text: 'Support Request',
			target: '#'
		}, {
			text: 'System Status',
			target: '#'
		}, {
			text: 'About Us',
			target: '#'
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
			target: '#'
		}]
	},
	footerLinks: [{
		heading: 'V100IT',
		className: 'footer-list text-right',
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
			text: 'Showcase',
			target: '/about'
		}]
	}, {
		heading: 'About Us',
		className: 'footer-list text-right',
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
		className: 'footer-list text-left',
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
		className: 'footer-list text-left',
		links: [{
			text: 'Podcast',
			target: ''
		}, {
			text: 'Mailing List',
			target: 'contact'
		}, {
			text: 'Blog',
			target: '/client'
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

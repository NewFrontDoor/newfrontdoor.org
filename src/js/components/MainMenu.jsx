import React from 'react';

export class MainMenu extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			links: [{
				text: 'How we can help you',
				target: '#how'
			}, {
				text: 'Who are Vision 100 IT?',
				target: '#who'
			}, {
				text: 'Tools + Philosophy',
				target: '#tools'
			}, {
				text: 'Events + Training',
				target: '#events'
			}, {
				text: 'Pricing',
				target: '#pricing'
			}, {
				text: 'Come on board',
				target: '#join'
			}]
		};
	}
	render() {
		return (
			<div className="main-menu">
				<ul>
					<li className="search-box text-uppercase">
						<h3><a href="#"><i className="fa fa-search fa-lg"></i><div hidden>Search</div></a></h3>
						<div className="search-menu">
							<div className="search-field">
								<form>
									<input type="search" name="v100itsearch" placeholder="Search..." />
									<input type="submit" />
								</form>
							</div>
							<ul>
								<li><h3>Help + How To</h3></li>
								<li><h3>Support Request</h3></li>
								<li><h3>Feature Request</h3></li>
								<li><h3>System Status</h3></li>
								<li><h3>About Us</h3></li>
							</ul>
						</div>
					</li>

						{this.state.links.map((link, key) =>
							<li key={key} className="main-menu-item text-uppercase"><h3><a href={link.target}>{link.text}</a></h3></li>
						)}

				</ul>
			</div>
		);
	}
}

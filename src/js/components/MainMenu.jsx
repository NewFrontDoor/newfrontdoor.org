import React from 'react';

export class MainMenu extends React.Component {
	constructor(props) {
		super(props);
		this.state = {links: props.links};
	}
	render() {
		return (
			<div className="main-menu">
				<ul>
					<li className="search-box text-uppercase">
							<a href="#" onclick="toggle_visibility('search-overlay');">
								<h4>
								<span className="fa fa-search fa-lg"></span>
								</h4>
							</a>
					</li>

					{this.state.links.map((link, key) => <li key={key} className="main-menu-item text-uppercase">
							<a href={link.target}><h4>{link.text}</h4></a>
					</li>)}
				</ul>
			</div>
		);
	}
}

MainMenu.propTypes = {links: React.PropTypes.array.isRequired};

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
						<h3>
							<a href="#">
								<span className="fa fa-search fa-lg"></span>
								<div hidden>Search</div>
							</a>
						</h3>
					</li>

					{this.state.links.map((link, key) => <li key={key} className="main-menu-item text-uppercase">
						<h3>
							<a href={link.target}>{link.text}</a>
						</h3>
					</li>)}

				</ul>
			</div>
		);
	}
}

MainMenu.propTypes = {links: React.PropTypes.array.isRequired};

import React from 'react';

export class MainMenu extends React.Component {
	constructor(props) {
		super(props);
		this.state = {links: props.links};
	}
	render() {
		return (
			<div className="main-menu">
				<ul className="list-inline">
					<li className="search-box text-uppercase">
							<a href="#" onClick={this.props.openSearch}>
								<span className="fa fa-search fa-lg"></span> Menu
							</a>
					</li>

					{this.state.links.map((link, key) => <li key={key} className="main-menu-item text-uppercase">
							<a href={link.target} dangerouslySetInnerHTML={{__html: link.text}}></a>
					</li>)}
				</ul>
			</div>
		);
	}
}

MainMenu.propTypes = {links: React.PropTypes.array.isRequired};

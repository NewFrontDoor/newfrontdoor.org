import React from 'react';

export const MainMenu = props => (
	<div className="main-menu">
		<ul className="list-inline">
			<li className="search-box text-uppercase">
				<a href="#" onClick={props.openSearch}>
					<span className="fa fa-search fa-lg"></span>
					Menu
				</a>
			</li>

			{props.links.map((link, key) => <li key={key} className="main-menu-item text-uppercase">
				<a href={link.target} dangerouslySetInnerHTML={{__html: link.text}}></a>
			</li>)}
		</ul>
	</div>
);

MainMenu.propTypes = {
	links: React.PropTypes.array.isRequired,
	openSearch: React.PropTypes.func.isRequired
};

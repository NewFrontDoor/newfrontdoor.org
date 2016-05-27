import React from 'react';
import {Link} from 'react-router';

import content from '../../content';
import styles from './MainMenu.scss';

export const MainMenu = props => (
	<div className={`${styles.main} text-uppercase`}>
		<ul className="list-inline">
			<li className={`${styles.search}`}>
				<a href="#" onClick={props.onOpenSearch}>
					Menu <span className="fa fa-search fa-lg"></span>
				</a>
			</li>
			{props.menuItems.map((item, key) => <li key={key} className="main-menu-item">
				<Link to={item.to} dangerouslySetInnerHTML={{__html: item.text}}/>
			</li>)}
		</ul>
	</div>
);

MainMenu.defaultProps = {
	menuItems: content.clientmenu.links
};

MainMenu.propTypes = {
	onOpenSearch: React.PropTypes.func.isRequired,
	menuItems: React.PropTypes.arrayOf(React.PropTypes.shape({
		text: React.PropTypes.string.isRequired,
		target: React.PropTypes.string,
		link: React.PropTypes.string
	}))
};

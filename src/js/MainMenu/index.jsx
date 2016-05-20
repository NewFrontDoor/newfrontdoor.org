import React from 'react';

import content from '../content';
import styles from './MainMenu.scss';

export const MainMenu = props => (
	<div className={`${styles.main} text-uppercase`}>
		<ul className="list-inline">
			<li className={`${styles.search}`}>
				<a href="#" onClick={props.onOpenSearch}>
					Menu <span className="fa fa-search fa-lg"></span>
				</a>
			</li>
			{content.mainmenu.links.map((link, key) => <li key={key} className="main-menu-item">
				<a href={link.target} dangerouslySetInnerHTML={{__html: link.text}}></a>
			</li>)}
		</ul>
	</div>
);

MainMenu.propTypes = {
	onOpenSearch: React.PropTypes.func.isRequired
};

import React, {PropTypes} from 'react';
import {Link} from 'react-router';

import content from '../../content';
import styles from './MainMenu.scss';

const MainMenu = props => (
	<div className={`${styles.main} text-uppercase`}>
		<ul className="list-inline">
			<li className={`${styles.search}`}>
				<a href="#" onClick={props.onOpenSearch}>
					Search <span className="fa fa-search fa-lg"/>
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

const menuItemShape = PropTypes.shape({
	text: PropTypes.string.isRequired,
	target: PropTypes.string,
	link: PropTypes.string
});

MainMenu.propTypes = {
	onOpenSearch: PropTypes.func.isRequired,
	menuItems: PropTypes.arrayOf(menuItemShape)
};

export default MainMenu;

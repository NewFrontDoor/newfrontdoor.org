import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import FaSearch from 'react-icons/fa/search';
import content from '../../content';
import Button from '../button/index.jsx';
import styles from './MainMenu.scss';

const MainMenu = props => (
	<div className={`${styles.main}`}>
		<ul className="list-inline">
			<li className={`${styles.search}`}>
				<Button appearance="blank" onClick={props.onOpenSearch}>
					Search <FaSearch height="1.25em" width="1.25em"/>
				</Button>
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

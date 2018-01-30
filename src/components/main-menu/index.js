import React from 'react';
import PropTypes from 'prop-types';
import hash from 'string-hash';
import {Link} from 'react-router-dom';
import FaSearch from 'react-icons/lib/fa/search';
import Button from '../button/index';
import styles from './MainMenu.scss';

const MainMenu = props => (
	<div className={`${styles.main}`}>
		<ul className="list-inline">
			<li className={`${styles.search}`}>
				<Button appearance="blank" onClick={props.onOpenSearch}>
					Search <FaSearch height="1.25em" width="1.25em"/>
				</Button>
			</li>
			{props.menuItems.map(item => (
				<li key={hash(item.to)} className="main-menu-item">
					<Link to={item.to} dangerouslySetInnerHTML={{__html: item.text}}/>
				</li>
			))}
		</ul>
	</div>
);

MainMenu.defaultProps = {
	menuItems: []
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

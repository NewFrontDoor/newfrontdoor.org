import React, {PropTypes} from 'react';
import {Link} from 'react-router';

import styles from './MobileMenu.scss';

const MobileMenu = props => (
	<div className={`${styles.mobile}`}>
		<a href="#" onClick={props.onOpenSearch}>Menu</a>
		<Link to="/client">Client</Link>
	</div>
);

MobileMenu.propTypes = {
	onOpenSearch: PropTypes.func.isRequired
};

export default MobileMenu;

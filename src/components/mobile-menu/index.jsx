import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Button from '../button/index.jsx';

import styles from './MobileMenu.scss';

const MobileMenu = props => (
	<div className={`${styles.mobile}`}>
		<Button appearance="blank" additionalClasses={styles.menuItem} onClick={props.onOpenSearch}>
			Menu
		</Button>
		<Link className={styles.menuItem} to="/client">Client</Link>
	</div>
);

MobileMenu.propTypes = {
	onOpenSearch: PropTypes.func.isRequired
};

export default MobileMenu;

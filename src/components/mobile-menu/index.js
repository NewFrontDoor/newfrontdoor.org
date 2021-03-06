import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button';

import styles from './MobileMenu.scss';

const MobileMenu = props => (
	<div className={`${styles.mobile}`}>
		<Button appearance="blank" additionalClasses={styles.menuItem} onClick={props.onOpenSearch}>
			Menu
		</Button>
	</div>
);

MobileMenu.propTypes = {
	onOpenSearch: PropTypes.func.isRequired
};

export default MobileMenu;

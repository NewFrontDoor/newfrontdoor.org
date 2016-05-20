import React from 'react';

import styles from './MobileMenu.scss';

export const MobileMenu = props => (
	<div className={`${styles.mobile} text-uppercase`}>
		<a href="#" onClick={props.onOpenSearch}>Menu</a>
		<a href="/client">Client</a>
	</div>
);

MobileMenu.propTypes = {
	onOpenSearch: React.PropTypes.func.isRequired
};

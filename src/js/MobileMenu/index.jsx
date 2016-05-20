import React from 'react';

import {MenuLink} from '../MenuLink';
import styles from './MobileMenu.scss';

export class MobileMenu extends React.Component {
	render() {
		return (
			<div className={`${styles.mobile} text-uppercase`}>
				<a href="/client">Client</a>
				<MenuLink to="how">Visitor</MenuLink>
				<MenuLink to="how">News</MenuLink>
				<MenuLink to="how">Contact</MenuLink>
			</div>
		);
	}
}

MobileMenu.propTypes = {
	onOpenSearch: React.PropTypes.func.isRequired
};

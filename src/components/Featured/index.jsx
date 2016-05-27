import React from 'react';
import {Element} from 'react-scroll';
import styles from './Featured.scss';

export const Featured = ({name, className = '', children}) => (
	<Element className={`${styles.featured} ${className}`} name={name}>
		<div className={styles.wrapper}>
			<section>
				{children}
			</section>
		</div>
	</Element>
);

Featured.propTypes = {
	className: React.PropTypes.string,
	name: Element.propTypes.name,
	children: React.PropTypes.node
};

import React, {PropTypes} from 'react';
import {Element} from 'react-scroll';
import styles from './Featured.scss';

export const Featured = ({children, name, background}) => (
	<div className={styles[background]}>
		<Element name={name}>
			<div className={styles.wrapper}>
				<section>
					{children}
				</section>
			</div>
		</Element>
	</div>
);

Featured.propTypes = {
	children: PropTypes.node,
	background: PropTypes.string,
	name: Element.propTypes.name
};

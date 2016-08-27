import React from 'react';
import {Element} from 'react-scroll';
import styles from './Featured.scss';

export const Featured = ({name, className = '', children}) => (
	<Element className={`${className} ${styles.featured}`} name={name}>
		<div className={styles.wrapper}>
			<section>
				{children}
			</section>
		</div>
	</Element>
);

Featured.propTypes = {
	styles: React.PropTypes.object,
	className: React.PropTypes.string,
	name: Element.propTypes.name,
	children: React.PropTypes.node
};

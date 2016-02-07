import styles from './Hero.scss';
import React from 'react';

export const Hero = props => (
	<div className={props.mini ? `${styles.mini} ${styles.container}` : styles.container}>
		<div className={styles.background}></div>
		<div className={props.children ? `${styles.content} text-center` : ''}>
			{props.children}
		</div>
	</div>
);

Hero.propTypes = {
	mini: React.PropTypes.bool,
	children: React.PropTypes.node
};

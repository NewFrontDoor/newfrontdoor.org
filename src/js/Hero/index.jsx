import styles from './Hero.scss';
import React from 'react';
import content from '../content';

export const Hero = () => (
	<div className={styles.container}>
		<div className={styles.background}></div>
		<div className={styles.content} dangerouslySetInnerHTML={{__html: content.hero.tagline}}></div>
	</div>
);

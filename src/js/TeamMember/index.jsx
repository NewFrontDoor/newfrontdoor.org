import React from 'react';
import styles from './TeamMember.scss';

console.log('styles', styles);

export const TeamMember = props => (
	<div className={styles.member}>
		<h4>{props.name} - {props.position}</h4>
		<img src={props.image} className={styles.img}/><p className={styles.text}>{props.text}</p>
	</div>
);

TeamMember.propTypes = {
	name: React.PropTypes.string.isRequired,
	position: React.PropTypes.string.isRequired,
	image: React.PropTypes.string.isRequired,
	text: React.PropTypes.string.isRequired
};

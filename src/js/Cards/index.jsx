import styles from './Cards.scss';
import React from 'react';
import content from '../content';

export const Cards = props => (
	<div className={props.number}>
		<img src={props.image}></img>
		{props.children}
	</div>
);

Cards.propTypes = {
	number: React.PropTypes.string,
	image: React.PropTypes.string,
	children: React.PropTypes.node
};

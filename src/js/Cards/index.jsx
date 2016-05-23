import styles from './Cards.scss';
import React from 'react';

export const Cards = props => (
	<div className={props.number}>
		<img src={props.image}></img>
		{props.children}
	</div>
);

Cards.propTypes = {
	number: React.PropTypes.string,
	background: React.PropTypes.string,
	image: React.PropTypes.string,
	imagepadding: React.PropTypes.string,
	text: React.PropTypes.string
};

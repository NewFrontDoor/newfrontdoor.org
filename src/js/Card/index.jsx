import React from 'react';
import styles from './Card.scss';

export const Card = props => {
	const style = {
		backgroundColor: props.background
	};
	const imageStyle = {
		padding: props.imagePadding
	};
	return (
		<div className={props.className} style={style}>
			<img src={props.image} style={imageStyle}></img>
			<h3 hidden>{props.name}</h3>
			<p>{props.children}</p>
		</div>
	);
};

Card.propTypes = {
	className: React.PropTypes.string,
	background: React.PropTypes.string,
	image: React.PropTypes.string,
	imagePadding: React.PropTypes.string,
	name: React.PropTypes.string,
	children: React.PropTypes.node
};

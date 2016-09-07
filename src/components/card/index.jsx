import React from 'react';
import './Card.scss';

const imageContext = require.context('../../images');

export const Card = ({className, background, imagePadding, link, image, name, children}) => {
	const style = {
		backgroundColor: background
	};
	const imageStyle = {
		padding: imagePadding
	};
	return (
		<div className={className} style={style}>
			<a href={link}>
				<img src={imageContext(image)} style={imageStyle}/>
				<h3 hidden>{name}</h3>
				<p>{children}</p>
			</a>
		</div>
	);
};

Card.propTypes = {
	className: React.PropTypes.string,
	background: React.PropTypes.string,
	image: React.PropTypes.string,
	imagePadding: React.PropTypes.string,
	name: React.PropTypes.string,
	link: React.PropTypes.string,
	children: React.PropTypes.node
};

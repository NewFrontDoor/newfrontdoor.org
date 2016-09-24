import React from 'react';
import {Link} from 'react-router';
import './Card.scss';

const imageContext = require.context('../../images');

export const Card = ({background, imagePadding, link, image, name, children}) => {
	const style = {
		backgroundColor: background
	};
	const imageStyle = {
		padding: imagePadding
	};
	return (
		<div style={style}>
			<Link to={link}>
				<img src={imageContext(image)} style={imageStyle}/>
				<h2 hidden>{name}</h2>
				<p>{children}</p>
			</Link>
		</div>
	);
};

Card.propTypes = {
	background: React.PropTypes.string,
	image: React.PropTypes.string,
	imagePadding: React.PropTypes.string,
	name: React.PropTypes.string,
	link: React.PropTypes.string,
	children: React.PropTypes.node
};

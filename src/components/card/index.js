import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import styles from './Card.scss';

const imageContext = require.context('../../images');

const Card = ({background, imagePadding, link, image, name, children}) => {
	const style = {
		backgroundColor: background
	};
	const imageStyle = {
		padding: imagePadding
	};

	return (
		<div className={styles.card} style={style}>
			<Link to={link}>
				<h2 hidden>{name}</h2>
				<img src={imageContext(image)} style={imageStyle}/>
				<p>{children}</p>
			</Link>
		</div>
	);
};

Card.defaultProps = {
	link: '',
	imagePadding: '',
	children: null
};

Card.propTypes = {
	background: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
	imagePadding: PropTypes.string,
	name: PropTypes.string.isRequired,
	link: PropTypes.string,
	children: PropTypes.node
};

export default Card;

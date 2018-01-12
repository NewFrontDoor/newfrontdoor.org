import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import styled from 'react-emotion';
import constants from '../../constants';

const CardContainer = styled.div`
	position: relative;
	height: 200px;
	box-shadow: 0 10px 16px 0 rgba(${constants.primaryHighlight}, 0.8), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	overflow: hidden;
	background-color: ${props => props.backgroundColor}

	@media (min-width: ${constants.screenSmMin}) {
		lost-column: 1/2;
		margin-bottom: 20px;
	}

	@media (min-width: ${constants.screenMdMin}) {
		lost-column: 1/4;
	}

	img {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		max-width: 100%;
		margin: auto;
	}

	p {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: auto;
		margin: 0;
		padding: 5px;
		background-color: rgba(255, 255, 255, 0.9);
		color: $text-color;
		font-family: ${constants.fontFamilySansSerif};
	}
`;

const imageContext = require.context('../../images');

const Card = ({background, imagePadding, link, image, name, children}) => {
	const imageStyle = {
		padding: imagePadding
	};

	return (
		<CardContainer backgroundColor={background}>
			<Link to={link}>
				<h2 hidden>{name}</h2>
				<img src={imageContext(image)} style={imageStyle}/>
				<p>{children}</p>
			</Link>
		</CardContainer>
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

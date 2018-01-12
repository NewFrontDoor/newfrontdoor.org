import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import hash from 'string-hash';
import {Link} from 'react-router-dom';
import content from '../../content';
import constants from '../../constants';
import logo from '../../images/vision100-it-logo.svg';

const FooterContainer = styled.footer`
	flex-shrink: 0;
	background-color: #fff;

	@media (min-width: ${constants.screenMdMin}) {
		background-color: ${constants.footerBg};
		color: #fff;
	}
`;

const FooterWrap = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	padding: 2.25rem 1.5rem 0.75rem;
	max-width: 980px;
  margin-left: auto;
  margin-right: auto;

	h3 {
		margin-bottom: 0.75rem;
	}

	ul,
	li {
		margin: 0;
	}

	header {
		text-transform: lowercase;
	}

	@media (min-width: ${constants.screenMdMin}) {
		flex-wrap: nowrap;
	}
`;

const FooterItem = styled.div`
	flex-basis: 50%;
	font-size: 0.8rem;
	text-align: center;

	h3 {
		font-size: $font-size-h4;

		@media (min-width: ${constants.screenMdMin}) {
			padding-bottom: 3px;
			border-bottom: 1px solid ${constants.brandPrimary};
			font-size: ${constants.fontSizeH3};
		}
	}

	ul {
		margin-top: -5px;

		a {
			margin: 0 4px;
			color: #000;

			@media (min-width: ${constants.screenMdMin}) {
				margin: 0;
				color: ${constants.footerText};
			}
		}
	}

	@media (min-width: ${constants.screenMdMin}) {
		flex-basis: auto;
		font-size: 1rem;
	}

	&:nth-child(-n+2) {
		@media (min-width: ${constants.screenMdMin}) {
			margin-right: 30px;
			text-align: right;
			flex-grow: 1;
			order: 1;
		}
	}

	&:nth-child(n+3):nth-child(-n+4) {
		@media (min-width: ${constants.screenMdMin}) {
			margin-left: 30px;
			text-align: left;
			flex-grow: 1;
			order: 3;
		}
	}

	&:nth-child(5) {
		flex-grow: 5;
		height: 190px;
		background-image: url(${logo});
		background-repeat: no-repeat;
		background-position: center;
		background-size: 190px 123px;

		h3 {
			border-bottom: 0;
		}

		@media (min-width: ${constants.screenMdMin}) {
			order: 2;
		}
	}
`;

// .social {
// 	margin: 0;
// 	padding: 0;
// }
//
// .social ul {
// 	list-style-type: none;
// }
//
// .social li {
// 	//    display: inline;
// }

const FooterListItem = props => {
	if (props.target) {
		return (
			<a href={props.target}>
				{props.text}
				{props.children}
			</a>
		);
	}

	return (
		<Link to={props.to}>
			{props.text}
			{props.children}
		</Link>
	);
};

FooterListItem.defaultProps = {
	children: null,
	target: null,
	text: null,
	to: null
};

FooterListItem.propTypes = {
	children: PropTypes.node,
	target: PropTypes.string,
	text: PropTypes.string,
	to: PropTypes.string
};

const Footer = () => (
	<FooterContainer>
		<FooterWrap>
			{content.footerLinks.map(list => (
				<FooterItem key={hash(list.heading || 'logo')}>
					<header>
						{list.heading && <h3>{list.heading}</h3>}
					</header>
					<ul className="list-unstyled">
						{list.links.map(link => (
							<li key={hash(link.text || link.target || link.to)}>
								<FooterListItem {...link}/>
							</li>
						))}
					</ul>
				</FooterItem>
			))}
		</FooterWrap>
	</FooterContainer>
);

export default Footer;

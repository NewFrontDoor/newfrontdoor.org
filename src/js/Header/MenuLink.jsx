import React from 'react';
import {Link} from 'react-scroll';

export const MenuLink = props => (
	<Link {...props}>
		{props.linkText}
	</Link>
);

MenuLink.defaultProps = {
	spy: true,
	smooth: true,
	offset: -64,
	duration: 500
};

MenuLink.propTypes = {
	linkText: React.PropTypes.string,
	activeClass: React.PropTypes.string,
	to: React.PropTypes.string,
	children: React.PropTypes.node
};

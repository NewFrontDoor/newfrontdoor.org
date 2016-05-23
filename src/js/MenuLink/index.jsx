import React from 'react';
import {Link} from 'react-scroll';

export const MenuLink = props => {
	if (props.to) {
		return (<Link {...props}>{props.children}</Link>);
	}

	return (<a {...props}>{props.children}</a>);
};

MenuLink.defaultProps = {
	spy: true,
	smooth: true,
	offset: -64,
	duration: 500,
	href: '#'
};

MenuLink.propTypes = {
	linkText: React.PropTypes.string,
	activeClass: React.PropTypes.string,
	href: React.PropTypes.string,
	to: React.PropTypes.string,
	children: React.PropTypes.node
};

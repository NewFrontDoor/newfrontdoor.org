import React from 'react';

export class Header extends React.Component {
	render() {
		return (
			<header className="nav-bar">
				{this.props.children}
				</header>
		);
	}
}

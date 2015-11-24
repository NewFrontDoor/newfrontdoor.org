import React from 'react';
import {MainMenu} from './MainMenu';

export class Header extends React.Component {
	render() {
		return (
			<header className="nav-bar">
				<div className="logo"><a href="#"></a></div>
				<MainMenu></MainMenu>
				</header>
		);
	}
}

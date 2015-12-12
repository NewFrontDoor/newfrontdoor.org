import React from 'react';
import '../../css/main';
import {Header} from './Header';
import {MainMenu} from './MainMenu';
import {Footer} from './Footer';

import content from '../content';

export class Site extends React.Component {
	constructor(props) {
		super(props);
		this.state = {mainmenu: content.mainmenu};
	}
	render() {
		return (
				<div>
					<Header>
						<a href="/"><div className="logo"></div></a>
						<div className="mobile-menu text-uppercase"><h3><a href="/blog">Client</a><a href="#how">Visitor</a></h3></div>
						<MainMenu {...this.state.mainmenu}></MainMenu>
					</Header>
					{this.props.children}
					<Footer></Footer>
				</div>
		);
	}
}

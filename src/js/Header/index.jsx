/* eslint-env browser */
import styles from './Header.scss';
import React from 'react';
import throttle from 'lodash/throttle';
import content from '../content';

import logo from '../../elements/v100it2.png';

export class Header extends React.Component {
	constructor() {
		super();
		this.state = {};
		this.handleScroll = throttle(this.handleScroll.bind(this), 250);
	}

	get length() {
		return window.innerHeight - 100;
	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}

	handleScroll() {
		this.setState({
			backgroundColor: `rgba(255,255,255, ${Math.min(window.pageYOffset / 200, 1)})`,
			boxShadow: `0 2px 5px rgba(0,0,0, ${Math.min(window.pageYOffset / 800, 0.26)})`,
			padding: `${Math.min(window.pageYOffset, 60)}px`
		});
	}

	render() {
		const scrollStyle = {
			backgroundColor: this.state.backgroundColor,
			boxShadow: this.state.boxShadow
		};

		const logoStyle = {
			paddingLeft: this.state.padding,
			paddingRight: this.state.padding
		};

		return (
			<header className={styles.nav} style={scrollStyle}>
				<a className={styles.logo} style={logoStyle} href="/">
					<h1 className="sr-only">Vision 100 IT</h1>
					<img className="img-responsive" src={logo}></img>
				</a>
				<div className={`${styles.mobile} text-uppercase`}>
					<ul>
						<li className="list-unstyled">
							<a href="/client">Client</a>
						</li>
						<li className="list-unstyled">
							<a href="#how">Visitor</a>
						</li>
					</ul>
				</div>
				<div className={styles.main}>
					<ul className="list-inline">
						<li className={`${styles.search} text-uppercase`}>
							<a href="#" onClick={this.props.openSearch}>
								Menu <span className="fa fa-search fa-lg"></span>
							</a>
						</li>
						{content.mainmenu.links.map((link, key) => <li key={key} className="main-menu-item text-uppercase">
							<a href={link.target} dangerouslySetInnerHTML={{__html: link.text}}></a>
						</li>)}
					</ul>
				</div>
			</header>
		);
	}
}

Header.propTypes = {
	openSearch: React.PropTypes.func.isRequired
};

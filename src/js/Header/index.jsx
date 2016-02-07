/* eslint-env browser */
import styles from './Header.scss';
import React from 'react';
import classNames from 'classnames';
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
		return window.innerHeight - 150;
	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}

	handleScroll() {
		this.setState({pageYOffset: window.pageYOffset, innerHeight: this.length});
	}

	render() {
		const navClass = classNames({
			[styles.nav]: true,
			[styles.mini]: this.state.pageYOffset > this.state.innerHeight
		});

		return (
			<header className={navClass}>
				<a className={styles.logo} href="/">
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
								<span className="fa fa-search fa-lg"></span> Menu
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

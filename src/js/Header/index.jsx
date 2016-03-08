/* eslint-env browser */
import styles from './Header.scss';
import React from 'react';
import throttle from 'lodash/throttle';
import {Link} from 'react-scroll';

import content from '../content';

import logo from '../../elements/v100it2.png';

export class Header extends React.Component {
	constructor(props) {
		super(props);
		this.handleScroll = throttle(this.handleScroll.bind(this), 250);
		this.backgroundHeight = this.backgroundHeight.bind(this);
		this.paddingHeight = this.paddingHeight.bind(this);
		this.state = this.nextState();
	}

	backgroundHeight() {
		if (this.props.size === 'full') {
			return window.pageYOffset > window.innerHeight - 80 ? 1 : 0;
		}
		if (this.props.size === 'mini') {
			return window.pageYOffset > (window.innerHeight / 2) - 80 ? 1 : 0;
		}
		return 1;
	}

	paddingHeight() {
		if (this.props.size === 'full') {
			return window.pageYOffset > window.innerHeight / 2 ? 60 : 10;
		}
		if (this.props.size === 'mini') {
			return window.pageYOffset > window.innerHeight / 4 ? 60 : 10;
		}
		return 60;
	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}

	nextState() {
		return {
			backgroundColor: `rgba(255,255,255, ${this.backgroundHeight()})`,
			boxShadow: `0 2px 5px rgba(0,0,0, ${this.backgroundHeight() * 0.26})`,
			padding: `${this.paddingHeight()}px`
		};
	}

	handleScroll() {
		this.setState(this.nextState());
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
							<Link activeClass="active" to="how" spy={true} smooth={true} offset={-64} duration={500} >Visitor</Link>
						</li>
					</ul>
				</div>
				<div className={styles.main}>
					<ul className="list-inline">
						<li className={`${styles.search} text-uppercase`}>
							<a href="#" onClick={this.props.onOpenSearch}>
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
	size: React.PropTypes.oneOf(['mini', 'full']),
	onOpenSearch: React.PropTypes.func.isRequired
};

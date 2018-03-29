import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import throttle from 'lodash/throttle';
import logo from '../../images/nfd-main-logo-no-tag.svg';
import styles from './Header.scss';

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.handleScroll = throttle(this.handleScroll.bind(this), 250);
		this.backgroundHeight = this.backgroundHeight.bind(this);
		this.state = this.nextState();
	}

	backgroundHeight() {
		if (this.props.size === 'full') {
			return window.pageYOffset > window.innerHeight - 80 ? 1 : 0;
		}
		if (this.props.size === 'mini') {
			return window.pageYOffset > (window.innerHeight / 4) - 80 ? 1 : 0;
		}
		return 1;
	}

	get paddingHeight() {
		if (this.props.size === 'full') {
			return window.pageYOffset > window.innerHeight / 2 ? '8%' : '10px';
		}
		if (this.props.size === 'mini') {
			return window.pageYOffset > window.innerHeight / 4 ? '8%' : '10px';
		}
		return '8%';
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
			padding: `${this.paddingHeight}`
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
				<div className={styles.logo} style={logoStyle}>
					<Link to="/">
						<h1 className="sr-only">New Front Door</h1>
						<img className="img-responsive" src={logo}/>
					</Link>
				</div>
				{this.props.children}
			</header>
		);
	}
}

Header.propTypes = {
	size: PropTypes.oneOf(['mini', 'full']).isRequired,
	children: PropTypes.node.isRequired
};

export default Header;

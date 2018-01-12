import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Scroll from '../../containers/scroll';
import logo from '../../images/vision100-it-logo.svg';
import styles from './Header.scss';

class Header extends React.Component {
	get backgroundHeight() {
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
			return window.pageYOffset > window.innerHeight / 2 ? '5%' : '10px';
		}
		if (this.props.size === 'mini') {
			return window.pageYOffset > window.innerHeight / 4 ? '5%' : '10px';
		}
		return '5%';
	}

	nextState() {
		return {
			backgroundColor: `rgba(255,255,255, ${this.backgroundHeight})`,
			boxShadow: `0 2px 5px rgba(0,0,0, ${this.backgroundHeight * 0.26})`,
			padding: `${this.paddingHeight}`
		};
	}

	render() {
		return (
			<Scroll
				render={() => {
					const {padding, backgroundColor, boxShadow} = this.nextState();

					const scrollStyle = {
						backgroundColor,
						boxShadow
					};

					const logoStyle = {
						paddingLeft: padding,
						paddingRight: padding
					};

					return (
						<header className={styles.nav} style={scrollStyle}>
							<div className={styles.logo} style={logoStyle}>
								<Link to="/">
									<h1 className="sr-only">Vision 100 IT</h1>
									<img className="img-responsive" src={logo}/>
								</Link>
							</div>
							{this.props.children}
						</header>
					);
				}}
			/>
		);
	}
}

Header.propTypes = {
	size: PropTypes.oneOf(['mini', 'full']).isRequired,
	children: PropTypes.node.isRequired
};

export default Header;

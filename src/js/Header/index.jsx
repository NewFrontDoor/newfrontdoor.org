import React from 'react';
import throttle from 'lodash/throttle';
import styles from './Header.scss';

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

		return (
			<header className={styles.nav} style={scrollStyle}>
				{this.props.children}
			</header>
		);
	}
}

Header.propTypes = {
	size: React.PropTypes.oneOf(['mini', 'full']),
	children: React.PropTypes.node
};

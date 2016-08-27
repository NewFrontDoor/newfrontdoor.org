import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import throttle from 'lodash/throttle';
import logo from '../../elements/vision100-it-logo.svg';
import styles from './Header.scss';

export class Header extends React.Component {
	constructor(props) {
		super(props);
		this.handleScroll = throttle(this.handleScroll.bind(this), 250);
		this.backgroundHeight = this.backgroundHeight.bind(this);
		this.state = this.nextState();
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}

	shouldComponentUpdate() {}

	backgroundHeight() {
		if (this.props.size === 'full') {
			return window.pageYOffset > window.innerHeight - 80 ? 1 : 0;
		}
		if (this.props.size === 'mini') {
			return window.pageYOffset > (window.innerHeight / 2) - 80 ? 1 : 0;
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
				<a className={styles.logo} style={logoStyle} href="/">
					<h1 className="sr-only">Vision 100 IT</h1>
					<img className="img-responsive" src={logo}/>
				</a>
				{this.props.children}
			</header>
		);
	}
}

Header.propTypes = {
	size: React.PropTypes.oneOf(['mini', 'full']),
	children: React.PropTypes.node
};

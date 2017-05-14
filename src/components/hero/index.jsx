import React from 'react';
import PropTypes from 'prop-types';
import throttle from 'lodash/throttle';
import styles from './Hero.scss';

class Hero extends React.Component {
	constructor() {
		super();
		this.state = {};
		this.handleScroll = throttle(this.handleScroll.bind(this), 50);
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
			opacity: `${1 - ((window.pageYOffset - 10) / 250)}`
		});
	}

	render() {
		const contentStyle = {
			opacity: this.state.opacity
		};

		return (
			<div className={this.props.mini ? `${styles.mini} ${styles.container}` : styles.container}>
				<div className={styles.background}/>
				<div className={this.props.children ? `${styles.content}` : ''} style={contentStyle}>
					{this.props.children}
				</div>
			</div>);
	}
}

Hero.defaultProps = {
	mini: false,
	children: null
};

Hero.propTypes = {
	mini: PropTypes.bool,
	children: PropTypes.node
};

export default Hero;

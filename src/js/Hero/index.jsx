/* eslint-env browser */
import React from 'react';
import styles from './Hero.scss';
import throttle from 'lodash/throttle';

export class Hero extends React.Component {
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
			opacity: `${1 - (window.pageYOffset - 10) / 250}`
		});
	}

	render() {
		const contentStyle = {
			opacity: this.state.opacity
		};

		return (
			<div className={this.props.mini ? `${styles.mini} ${styles.container}` : styles.container}>
				<div className={styles.background}></div>
				<div className={this.props.children ? `${styles.content} text-center` : ''} style={contentStyle}>
					{this.props.children}
				</div>
			</div>);
	}
}

Hero.propTypes = {
	mini: React.PropTypes.bool,
	children: React.PropTypes.node
};

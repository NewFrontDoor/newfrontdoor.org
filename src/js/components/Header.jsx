/* eslint-env browser */
import React from 'react';
import classNames from 'classnames';
import throttle from 'lodash/throttle';

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
			'nav-bar': true,
			'mini': this.state.pageYOffset > this.state.innerHeight
		});

		return (
			<header className={navClass}>
				{this.props.children}
			</header>
		);
	}
}

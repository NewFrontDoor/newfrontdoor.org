import React from 'react';
import throttle from 'lodash/throttle';
import classNames from 'classnames';
import {Link} from 'react-router';
import content from '../content';
import styles from './Footer.scss';

export class Footer extends React.Component {
	constructor() {
		super();
		this.state = {
			bottomCount: 0
		};
		this.handleScroll = throttle(this.handleScroll.bind(this), 250);
	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}

	handleScroll() {
		const pageBottom = window.pageYOffset + window.innerHeight;
		const atBottom = pageBottom === document.body.scrollHeight;

		this.setState({
			atBottom,
			bottomCount: atBottom ? ++this.state.bottomCount : this.state.bottomCount
		});
	}

	render() {
		const itemClass = classNames({
			[styles.item]: true,
			[styles.spin]: this.state.atBottom && this.state.bottomCount > 1
		});

		return (
			<footer>
				<div className={styles.wrap}>
					{content.footerLinks.map((list, key) => <div key={key} className={itemClass}>
						<header className="text-lowercase">
							<h3>{list.heading}</h3>
						</header>
						<ul className="list-unstyled">
							{list.links.map((item, key) => <li key={key}>
								<Link to={item.to}>{item.text}
									<span className={item.className}></span>
								</Link>
							</li>)}
						</ul>
					</div>)}
				</div>
			</footer>
		);
	}
}

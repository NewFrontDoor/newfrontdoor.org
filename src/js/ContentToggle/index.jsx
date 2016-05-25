import React from 'react';
import styles from './ContentToggle.scss';

export class ContentToggle extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isVisible: false
		};
		this.handleToggle = this.handleToggle.bind(this);
	}

	handleToggle() {
		this.setState({
			isVisible: !this.state.isVisible
		});
	}

	render() {
		const classes = this.state.isVisible	? `${styles.toggle}  ${styles.visible}`	: styles.toggle;

		return (
			<div>
				<a Link="#" onClick={this.handleToggle}>
					{this.props.toggleText}
				</a>
				<div className={classes}>
					{this.props.children}
				</div>
			</div>
		);
	}
}

ContentToggle.propTypes = {
	children: React.PropTypes.node,
	toggleText: React.PropTypes.string
};

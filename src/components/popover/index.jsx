import React from 'react';
import styles from './popover.scss';

export class Popover extends React.Component {
	shouldComponentUpdate() {}
	render() {
		return (
			<div className={styles.body}>
				<p>Pop Over!!!</p>
			</div>
		);
	}
}

console.log('WHAT WHAT WHAT', Popover);

// Popover.propTypes = {
// 	isOpen: React.PropTypes.bool.isRequired,
// 	onClose: React.PropTypes.func.isRequired
// };

import React from 'react';
import {Gateway} from 'react-gateway';
import Modal from 'react-modal2';
import styles from './popover.scss';

export class Popover extends React.Component {
	render() {
		const {onClose, closeOnEsc, closeOnBackdropClick, children} = this.props;
		return (
			<Gateway into="modal">
				<Modal onClose={onClose} closeOnEsc={closeOnEsc} closeOnBackdropClick={closeOnBackdropClick} backdropClassName={styles.backdrop} modalClassName={styles.modal}>
					{children}
				</Modal>
			</Gateway>
		);
	}
}

Popover.propTypes = {
	onClose: React.PropTypes.func.isRequired,
	closeOnEsc: React.PropTypes.bool,
	closeOnBackdropClick: React.PropTypes.bool,
	children: React.PropTypes.element
};

Popover.defaultProps = {
	closeOnEsc: true,
	closeOnBackdropClick: true
};

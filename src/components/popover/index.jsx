import React, {PropTypes} from 'react';
import {Gateway} from 'react-gateway';
import Modal from 'react-modal2';
import styles from './popover.scss';

class Popover extends React.Component {
	render() {
		const {onClose, closeOnEsc, closeOnBackdropClick, children} = this.props;
		return (
			<Gateway into="modal">
				<div>
					<a onClick={onClose} className={styles.close}>
						<span className="fa-stack fa-lg">
							<span className={`${styles.white} fa fa-circle fa-stack-2x`}/>
							<span className="fa fa-times-circle fa-stack-2x"/>
						</span>
					</a>
					<Modal onClose={onClose} closeOnEsc={closeOnEsc} closeOnBackdropClick={closeOnBackdropClick} backdropClassName={styles.backdrop} modalClassName={styles.modal}>
						{children}
					</Modal>
				</div>
			</Gateway>
		);
	}
}

Popover.propTypes = {
	onClose: PropTypes.func.isRequired,
	closeOnEsc: PropTypes.bool,
	closeOnBackdropClick: PropTypes.bool,
	children: PropTypes.element
};

Popover.defaultProps = {
	closeOnEsc: true,
	closeOnBackdropClick: true
};

export default Popover;

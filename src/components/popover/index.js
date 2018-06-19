import React from 'react';
import PropTypes from 'prop-types';
import {Gateway} from 'react-gateway';
import Modal from 'react-modal2';
import FaCircle from 'react-icons/lib/fa/circle';
import FaTimesCircle from 'react-icons/lib/fa/times-circle';
import Button from '../button';
import styles from './popover.scss';

class Popover extends React.Component {
	render() {
		const {onClose, closeOnEsc, closeOnBackdropClick, children} = this.props;
		return (
			<Gateway into="modal">
				<div>
					<Button appearance="blank" additionalClasses={styles.close} onClick={onClose}>
						<span className={styles.stack}>
							<FaCircle className={styles.white} height="2em" width="2em"/>
							<FaTimesCircle height="2em" width="2em"/>
						</span>
					</Button>
					<Modal closeOnEsc={closeOnEsc} closeOnBackdropClick={closeOnBackdropClick} backdropClassName={styles.backdrop} modalClassName={styles.modal} onClose={onClose}>
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
	children: PropTypes.element.isRequired
};

Popover.defaultProps = {
	closeOnEsc: true,
	closeOnBackdropClick: true
};

export default Popover;

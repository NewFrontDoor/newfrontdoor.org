import React from 'react';
import PropTypes from 'prop-types';
import {Element} from 'react-scroll';
import styles from './Featured.scss';

const Featured = ({children, name, background}) => (
	<div className={styles[background]}>
		<Element name={name}>
			<div className={styles.wrapper}>
				<section>
					{children}
				</section>
			</div>
		</Element>
	</div>
);

Featured.propTypes = {
	children: PropTypes.node.isRequired,
	background: PropTypes.string.isRequired,
	name: Element.propTypes.name.isRequired
};

export default Featured;

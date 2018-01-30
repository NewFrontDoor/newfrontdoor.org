import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import FaAngleLeft from 'react-icons/lib/fa/angle-left';
import FaAngleRight from 'react-icons/lib/fa/angle-right';
import styles from './Pagination.scss';

const Pagination = ({previous, next}) => (
	<nav role="pagination" className={styles.pagination}>
		{next && <Link to={next}><FaAngleLeft/> Next</Link>}
		{previous && <Link to={previous}>Previous <FaAngleRight/></Link>}
	</nav>
);

Pagination.defaultProps = {
	previous: '',
	next: ''
};

Pagination.propTypes = {
	previous: PropTypes.string,
	next: PropTypes.string
};

export default Pagination;

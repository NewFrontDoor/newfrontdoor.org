import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import styles from './Pagination.scss';

const Pagination = ({previous, next}) => (
	<nav role="pagination" className={styles.pagination}>
		{next && <Link to={next}><span className="fa fa-angle-left"/> Next</Link>}
		{previous && <Link to={previous}>Previous <span className="fa fa-angle-right"/></Link>}
	</nav>
);

Pagination.propTypes = {
	previous: PropTypes.string,
	next: PropTypes.string
};

export default Pagination;

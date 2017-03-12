import React, {PropTypes} from 'react';
import {Link} from 'react-router-dom';
import styles from './SearchResultList.scss';

const SearchResultList = ({onResultClick, searchResults}) => {
	const results = searchResults.map(item => (
		<li key={item.id}>
			<Link to={`/${item.id}`} onClick={onResultClick}>{item.title}</Link>
		</li>
	));

	return (
		<div className={styles.content}>
			<ul className={styles.results}>
				{results}
			</ul>
		</div>
	);
};

SearchResultList.propTypes = {
	onResultClick: PropTypes.func,
	searchResults: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired
	})).isRequired
};

export default SearchResultList;

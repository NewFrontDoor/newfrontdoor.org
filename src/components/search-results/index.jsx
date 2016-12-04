import React, {PropTypes} from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import {Link} from 'react-router';
import FirstChild from '../../lib/first-child';
import styles from './SearchResults.scss';
import height from './heightTransition.scss';
import opacity from './opacityTransition.scss';

const SearchResults = ({onCloseResults, onResultClick, searchResults, containerClass, titleClass, query}) => {
	const results = searchResults.map((item, key) => (
		<li key={key}>
			<Link to={`/${item.id}`} onClick={onResultClick}>{item.title}</Link>
		</li>
	));

	return (
		<CSSTransitionGroup
			component={FirstChild}
			transitionName={height}
			transitionEnterTimeout={500}
			transitionLeaveTimeout={500}
			>
			{searchResults.length &&
				<div className={containerClass}>
					<div className={titleClass}>
						<h3> Results <a onClick={onCloseResults}> <span className="fa fa-times-circle"/> </a> </h3>
					</div>
					<div className={styles.content}>
						<CSSTransitionGroup
							component="ul"
							transitionName={opacity}
							transitionEnterTimeout={300}
							transitionLeaveTimeout={300}
							>
							{results}
						</CSSTransitionGroup>
					</div>
					{query && <div className={`small ${styles.nav}`}>
						<Link to={`/documentation?search=${query}`}>more</Link>
					</div>}
				</div>
			}
		</CSSTransitionGroup>
	);
};

SearchResults.defaultProps = {
	onResultClick: () => {}
};

SearchResults.propTypes = {
	onCloseResults: PropTypes.func.isRequired,
	onResultClick: PropTypes.func,
	searchResults: PropTypes.array.isRequired,
	containerClass: PropTypes.string.isRequired,
	titleClass: PropTypes.string.isRequired,
	query: PropTypes.string
};

export default SearchResults;

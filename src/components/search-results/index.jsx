import React, {PropTypes} from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import {Link} from 'react-router';
import FirstChild from '../../lib/first-child';
import styles from './SearchResults.scss';
import height from './heightTransition.scss';
import opacity from './opacityTransition.scss';

const SearchResults = ({onCloseResult, onCloseModal, searchResults, titleClassName}) => {
	const results = searchResults.map((item, key) => (
		<li key={key}>
			<Link to={`/${item.id}`} onClick={onCloseModal}>{item.title}</Link>
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
				<div>
					<div className={titleClassName}>
						<h3> Results <a onClick={onCloseResult}> <span className="fa fa-times-circle"/> </a> </h3>
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
					<div className={`small hidden ${styles.nav}`}>
						<p>
							<Link to="/documentation?search=poop">more</Link>
						</p>
					</div>
				</div>
			}
		</CSSTransitionGroup>
	);
};

SearchResults.propTypes = {
	onCloseResult: PropTypes.func.isRequired,
	onCloseModal: PropTypes.func.isRequired,
	searchResults: PropTypes.array.isRequired,
	titleClassName: PropTypes.string.isRequired
};

export default SearchResults;

import React, {PropTypes} from 'react';
import Search from '../../components/search/index.jsx';
import withSearchIndex from '../../components/search-index/index.jsx';
import SearchResults from '../../components/search-results/index.jsx';
import SearchResultList from '../../components/search-result-list/index.jsx';
import Index from '../../components/index/index.jsx';
import styles from './error.scss';

class Error extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchResults: [],
			searchTerm: ''
		};
		this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
		this.handleCloseResult = this.handleCloseResult.bind(this);
	}

	handleSearchSubmit(searchTerm) {
		this.props.searchIndex(searchTerm)
		.then(searchResults => this.setState({searchTerm, searchResults}));
	}

	handleCloseResult(event) {
		event.preventDefault();
		this.setState({searchResults: []});
	}

	render() {
		let searchResultList;
		const {searchResults} = this.state;

		if (searchResults.length > 0) {
			searchResultList = (
				<SearchResultList
					onResultClick={this.handleCloseModal}
					searchResults={searchResults}
					/>
			);
		}

		return (
			<Index>
				<div className="podcasting-wrapper">
					<div className="podcasting-overlay">
						<div className="site-wrapper site-wrapper-padding">
							<h1>404 page not found</h1>
							<section>
								<p>You’ve managed to find yourself on a page that doesn’t exist! Feel free to use the search box below, or hit the back button.</p>
							</section>
							<div className={styles.searchWrapper}>
								<Search
									size="large"
									buttonClass="btn-primary"
									placeholder="Search V100IT..."
									onSearchSubmit={this.handleSearchSubmit}
									/>
								<SearchResults
									titleClass={styles.title}
									containerClass={styles.searchResults}
									onCloseResults={this.handleCloseResult}
									searchResults={this.state.searchResults}
									>
									{searchResultList}
								</SearchResults>
							</div>
						</div>
					</div>
				</div>
			</Index>
		);
	}
}

Error.propTypes = {
	searchIndex: PropTypes.func.isRequired
};

export default withSearchIndex(Error);

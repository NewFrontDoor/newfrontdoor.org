import React from 'react';
import PropTypes from 'prop-types';
import Search from '../../components/search';
import withSearchIndex from '../../components/search-index';
import SearchResults from '../../components/search-results';
import SearchResultList from '../../components/search-result-list';
import Index from '../../components';
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
					searchResults={searchResults}
					onResultClick={this.handleCloseModal}
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
									placeholder="Search NFD..."
									onSearchSubmit={this.handleSearchSubmit}
								/>
								<SearchResults
									titleClass={styles.title}
									containerClass={styles.searchResults}
									searchResults={this.state.searchResults}
									onCloseResults={this.handleCloseResult}
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

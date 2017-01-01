import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import withSearchIndex from '../search-index/index.jsx';
import Search from '../search/index.jsx';
import SearchResults from '../search-results/index.jsx';
import SearchResultList from '../search-result-list/index.jsx';
import styles from './SearchBar.scss';

const ESCAPE = 27;

class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchResults: [],
			searchTerm: ''
		};
		this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
		this.handleCloseResults = this.handleCloseResults.bind(this);
		this.handleCloseModal = this.handleCloseModal.bind(this);
		this.handleEscKey = this.handleEscKey.bind(this);
	}

	componentDidUpdate() {}

	componentDidMount() {
		window.addEventListener('keydown', this.handleEscKey, false);
	}

	componentWillUnmount() {
		window.removeEventListener('keydown', this.handleEscKey, false);
	}

	handleSearchSubmit(searchTerm) {
		this.props.searchIndex(searchTerm, 3)
		.then(searchResults => this.setState({searchTerm, searchResults}));
	}

	handleCloseResults(event) {
		event.preventDefault();
		this.setState({
			searchResults: [],
			searchTerm: ''
		});
	}

	handleCloseModal(event) {
		this.setState({
			searchResults: [],
			searchTerm: ''
		});
		this.props.onClose(event);
	}

	handleEscKey(event) {
		if (event.keyCode === ESCAPE) {
			this.handleCloseModal(event);
		}
	}

	render() {
		let searchResultList;
		const {searchResults, searchTerm} = this.state;

		if (searchResults.length > 0) {
			searchResultList = (
				<SearchResultList
					onResultClick={this.handleCloseModal}
					searchResults={searchResults}
					/>
			);
		}

		const inputButton = (
			<span className={`input-group-btn ${styles.searchInput}`}>
				<button className={`btn ${styles.searchButton}`} type="submit">
					<span className="fa fa-search fa-lg"/>
				</button>
			</span>
		);

		return (
			<div className={styles.overlay}>
				<div className={styles.container}>
					<div className={styles.title}>
						<h2>
							Search menu
							<a onClick={this.handleCloseModal}>
								<span className="fa fa-times-circle"/>
							</a>
						</h2>
					</div>
					<Search
						inputClass={styles.searchInput}
						inputButton={inputButton}
						onSearchSubmit={this.handleSearchSubmit}
						/>
				</div>
				<SearchResults
					containerClass={styles.results}
					titleClass={styles.title}
					onCloseResults={this.handleCloseResults}
					query={searchTerm}
					>
					{searchResultList}
				</SearchResults>
				<div className={styles.container}>
					<div className={styles.menu}>
						<ul className="list-unstyled">
							<li>
								<Link to="/client">News</Link>
							</li>
							<li>
								<Link to="/support">Support</Link>
							</li>
							<li>
								<Link to="/status">Status</Link>
							</li>
							<li>
								<Link to="/documentation">Documentation</Link>
							</li>
							<li>
								<Link to="/contact">Contact</Link>
							</li>
						</ul>
					</div>
					<div className={styles.postscript}>
						<p>© Vision 100 Resources 2016.</p>
						<p>Design by <a href="http://twitter.com/readeral">readeral</a> and <a href="http://twitter.com/barrythepenguin">barrythepenguin</a>.</p>
						<p><a href="mailto:info@vision100.org">info@vision100.org</a>.</p>
						<p>ABN: 50 782 030 539.</p>
					</div>
				</div>
			</div>
		);
	}
}

SearchBar.propTypes = {
	searchIndex: PropTypes.func.isRequired,
	onClose: PropTypes.func.isRequired
};

export default withSearchIndex(SearchBar);

import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import FaSearch from 'react-icons/lib/fa/search';
import FaTimesCircle from 'react-icons/lib/fa/times-circle';
import Button from '../button/index';
import withSearchIndex from '../search-index/index';
import Search from '../search/index';
import SearchResults from '../search-results/index';
import SearchResultList from '../search-result-list/index';
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
					searchResults={searchResults}
					onResultClick={this.handleCloseModal}
				/>
			);
		}

		const inputButton = (
			<span className={`input-group-btn ${styles.searchInput}`}>
				<button className={`btn ${styles.searchButton}`} type="submit">
					<FaSearch height="1.5em" width="1.5em"/>
				</button>
			</span>
		);

		return (
			<div className={styles.overlay}>
				<div className={styles.container}>
					<div className={styles.title}>
						<h2>
							Search menu
							<Button appearance="blank" additionalClasses={styles.close} onClick={this.handleCloseModal}>
								<FaTimesCircle/>
							</Button>
						</h2>
					</div>
					<Search
						size="small"
						inputClass={styles.searchInput}
						inputButton={inputButton}
						onSearchSubmit={this.handleSearchSubmit}
					/>
				</div>
				<SearchResults
					containerClass={styles.results}
					titleClass={styles.title}
					query={searchTerm}
					onCloseResults={this.handleCloseResults}
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
						<p>© New Front Door 2018.</p>
						<p>Design by <a href="https://twitter.com/readeral">readeral</a> and <a href="https://twitter.com/barrythepenguin">barrythepenguin</a>.</p>
						<p><a href="mailto:contactus@newfrontdoor.org">contactus@newfrontdoor.org</a>.</p>
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

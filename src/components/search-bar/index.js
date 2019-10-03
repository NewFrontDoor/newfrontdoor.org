import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import FaSearch from 'react-icons/lib/fa/search';
import FaTimesCircle from 'react-icons/lib/fa/times-circle';
import Button from '../button';
import withSearchIndex from '../search-index';
import Search from '../search';
import SearchResults from '../search-results';
import SearchResultList from '../search-result-list';
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
								<Link to="/#how">How We Can Help You</Link>
							</li>
							<li>
								<Link to="/#who">Who we are</Link>
							</li>
							<li>
								<Link to="/#tools">Philosophy + Tools</Link>
							</li>
							<li>
								<Link to="/#events">Events + Training</Link>
							</li>
							<li>
								<Link to="/#pricing">Pricing</Link>
							</li>
							<li>
								<Link to="/#join">Come on Board</Link>
							</li>
						</ul>
						<hr/>
						<ul className="list-unstyled">
							<li>
								<Link to="/support">Support</Link>
							</li>
							<li>
								<Link to="/feature">Feature Request</Link>
							</li>
							<li>
								<Link to="/contact">Contact</Link>
							</li>
						</ul>
					</div>
					<div className={styles.postscript}>
						<p>© New Front Door 2019.</p>
						<p>Design by <a href="https://twitter.com/readeral">readeral</a> and <a href="https://twitter.com/barrythepenguin">barrythepenguin</a>.</p>
						<p><a href="mailto:contactus@newfrontdoor.org">contactus@newfrontdoor.org</a>.</p>
						<p>ABN: 61 475 638 368.</p>
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

import React from 'react';
import {Link} from 'react-router';
import lunr from 'lunr';
import SearchResults from '../search-results/index.jsx';
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
		this.handleSearchTerm = this.handleSearchTerm.bind(this);
		this.handleCloseResult = this.handleCloseResult.bind(this);
		this.handleCloseModal = this.handleCloseModal.bind(this);
		this.mountSearchInput = this.mountSearchInput.bind(this);
		this.handleEscKey = this.handleEscKey.bind(this);
	}

	mountSearchInput(c) {
		this.searchInput = c;
	}

	componentDidUpdate() {

	}

	componentDidMount() {
		window.addEventListener('keydown', this.handleEscKey, false);
		if (window.matchMedia('(min-width: 992px)').matches) {
			this.searchInput.focus();
		}
	}

	componentWillUnmount() {
		window.removeEventListener('keydown', this.handleEscKey, false);
	}

	get searchIndex() {
		const self = this;
		return new Promise(resolve => {
			if (self.__searchIndex) {
				resolve({
					index: self.__searchIndex,
					data: self.__searchData
				});
			} else {
				require.ensure([], () => {
					self.__searchIndex = lunr.Index.load(require('../../search/search-index.json'));
					self.__searchData = require('../../search/search-data.json');

					resolve({
						index: self.__searchIndex,
						data: self.__searchData
					});
				});
			}
		});
	}

	handleSearchSubmit(event) {
		event.preventDefault();
		this.searchInput.blur();

		this.searchIndex.then(({index, data}) => {
			const res = index.search(this.state.searchTerm);

			const searchResults = res.map(result => data.items.find(item => item.id === result.ref)).map(result => {
				// HACK HACK HACK
				const {id, ...all} = result;
				return {id: id.replace('content/', ''), ...all};
			});

			if (searchResults.length === 0) {
				searchResults.push({
					id: '#',
					title: 'No results found'
				});
			}

			this.setState({searchResults});
		});
	}

	handleSearchTerm(event) {
		event.preventDefault();
		this.setState({searchTerm: event.target.value});
	}

	handleCloseResult(event) {
		event.preventDefault();
		this.setState({searchResults: []});
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
					<form onSubmit={this.handleSearchSubmit}>
						<div className="input-group">
							<label className="sr-only" htmlFor="search">Search</label>
							<input
								type="search"
								name="search"
								ref={this.mountSearchInput}
								className={`form-control ${styles.search}`}
								value={this.state.searchTerm}
								onChange={this.handleSearchTerm}
								placeholder="Search..."
								/>
							<span className={`input-group-btn ${styles.search}`}>
								<button className={`btn ${styles.transparent}`} type="submit">
									<span className="fa fa-search fa-lg"/>
								</button>
							</span>
						</div>
					</form>
				</div>
				<div className={styles.results}>
					<SearchResults
						titleClassName={styles.title}
						onCloseResult={this.handleCloseResult}
						onCloseModal={this.handleCloseModal}
						searchResults={this.state.searchResults}
						/>
				</div>
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
						© Vision 100 Resources 2016.<br/>
						Design by <a href="http://twitter.com/readeral">readeral</a> and <a href="http://twitter.com/barrythepenguin">barrythepenguin</a>.<br/>
						<a href="mailto:info@vision100.org">info@vision100.org</a>.<br/>
						ABN: 50 782 030 539.
					</div>
				</div>
			</div>
		);
	}
}

SearchBar.propTypes = {
	onClose: React.PropTypes.func.isRequired
};

export default SearchBar;

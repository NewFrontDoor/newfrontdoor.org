import React from 'react';
import {Link} from 'react-router';
import lunr from 'lunr';
import classNames from 'classnames';
import './SearchBar.scss';

const ESCAPE = 27;

export class SearchBar extends React.Component {
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
		if (this.props.isOpen) {
			this.searchInput.focus();
		}
	}

	componentDidMount() {
		window.addEventListener('keydown', this.handleEscKey, false);
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
					self.__searchIndex = lunr.Index.load(require('../../Search/search-index.json'));
					self.__searchData = require('../../Search/search-data.json');

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

		const self = this;

		this.searchIndex.then(({index, data}) => {
			const res = index.search(self.state.searchTerm);

			const searchResults = res.map(result => data.items.find(item => item.id === result.ref));

			if (searchResults.length === 0) {
				searchResults.push({
					id: '#',
					title: 'No results found'
				});
			}

			self.setState({searchResults});
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
		const siteClass = classNames({
			'visible': this.props.isOpen,
			'search-overlay': true,
			'text-uppercase': true
		});

		const resultsClass = classNames({
			'visible': this.state.searchResults.length > 0,
			'search-results': true
		});

		return (
			<div className={siteClass}>
				<div className="search-title">
					<h2>
						Search menu
						<a onClick={this.handleCloseModal}>
							<span className="fa fa-times-circle"></span>
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
							className="form-control search"
							value={this.state.searchTerm}
							onChange={this.handleSearchTerm}
							placeholder="Search..."
							/>
						<span className="input-group-btn submit">
							<button className="btn btn-transparent" type="submit">
								<span className="fa fa-search fa-lg"></span>
							</button>
						</span>
					</div>
				</form>
				<div className={resultsClass}>
					<div className="results-title">
						<h3>
							Results
							<a onClick={this.handleCloseResult}>
								<span className="fa fa-times-circle"></span>
							</a>
						</h3>
					</div>
					<div className="results-content">
						<ul className="list-unstyled">
							{this.state.searchResults.map((item, key) => (
								<li key={key}>
									<Link to={`/${item.id}`} onClick={this.handleCloseModal}>{item.title}</Link>
								</li>
							))}
						</ul>
					</div>
					<div className="search-nav small hidden">
						<p><Link to="/documentation?search=poop">more</Link></p>
					</div>
				</div>
				<div className="search-menu">
					<ul className="list-unstyled">
						<li>
							<Link to="client">News</Link>
						</li>
						<li>
							<Link to="support">Support</Link>
						</li>
						<li>
							<Link to="status">Status</Link>
						</li>
						<li>
							<Link to="documentation">Documentation</Link>
						</li>
						<li>
							<Link to="contact">Contact</Link>
						</li>
					</ul>
				</div>
				<div className="postscript">
					© Vision 100 Resources 2016.<br/>
					Design by <a href="http://twitter.com/readeral">readeral</a> and <a href="http://twitter.com/barrythepenguin">barrythepenguin</a>.<br/>
					<a href="mailto:info@vision100.org">info@vision100.org</a>.<br/>
					ABN: 50 782 030 539.
				</div>
			</div>
		);
	}
}

SearchBar.propTypes = {
	isOpen: React.PropTypes.bool.isRequired,
	onClose: React.PropTypes.func.isRequired
};

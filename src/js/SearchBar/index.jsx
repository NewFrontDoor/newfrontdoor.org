/* eslint-env browser */
import React from 'react';
import lunr from 'lunr';
import classNames from 'classnames';
import './SearchBar.scss';

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
	}

	get searchIndex() {
		const self = this;
		return new Promise(resolve => {
			if (self.__searchIndex) {
				resolve({index: self.__searchIndex, data: self.__searchData});
			} else {
				require.ensure([], () => {
					self.__searchIndex = lunr.Index.load(require('../../Search/search-index.json'));
					self.__searchData = require('../../Search/search-data.json');
					resolve({index: self.__searchIndex, data: self.__searchData});
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
					<h2>Search menu</h2>
					<div>
						<a onClick={this.props.onClose}>
							<span className="fa fa-times-circle fa-2x"></span>
						</a>
					</div>
				</div>
				<form onSubmit={this.handleSearchSubmit}>
					<div className="input-group">
						<label className="sr-only" htmlFor="search">Search</label>
						<input
							type="search"
							name="search"
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
						<h3>Results</h3>
						<div>
							<a onClick={this.handleCloseResult}>
								<span className="fa fa-times-circle fa-lg"></span>
							</a>
						</div>
					</div>
					<div className="results-content">
						<ul className="list-unstyled">
							{this.state.searchResults.map((res, key) => (
								<li key={key}>
									<a href={res.id}>{res.title}</a>
								</li>
							))}
						</ul>
					</div>
					<div className="search-nav small">
						<p>more</p>
					</div>
				</div>
				<div className="search-menu">
					<ul className="list-unstyled">
						<li>
							<a href="/client">News</a>
						</li>
						<li>
							<a href="/support">Support</a>
						</li>
						<li>
							<a href="/status">Status</a>
						</li>
						<li>
							<a href="/documentation">Documentation</a>
						</li>
						<li>
							<a href="/contact">Contact</a>
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

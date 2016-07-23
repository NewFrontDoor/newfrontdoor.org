import React from 'react';
import {Link} from 'react-router';
import lunr from 'lunr';
import classNames from 'classnames';
import {Index} from '../components/Index/index.jsx';

export class Error extends React.Component {
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
					self.__searchData = require('../Search/search-data.json');
					self.__searchIndex = lunr.Index.load(require('../Search/search-index.json'));

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
		const resultsClass = classNames({
			'visible': this.state.searchResults.length > 0,
			'search-results': true
		});

		return (
			<Index>
				<div className="podcasting-wrapper">
					<div className="podcasting-overlay">
						<div className="site-wrapper site-wrapper-padding">
							<h1>404 page not found</h1>
							<section>
								<p>You've managed to find yourself on a page that doesn't exist! Feel free to use the search box below, or hit the back button.</p>
							</section>
							<div className="search-wrapper">
								<form onSubmit={this.handleSearchSubmit}>
									<div className="form-group">
										<input
											type="search"
											name="search"
											className="form-control search input-lg"
											value={this.state.searchTerm}
											onChange={this.handleSearchTerm}
											placeholder="Search V100IT..."
											/>
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
													<h4><Link to={`/${item.id}`}>{item.title}</Link></h4>
												</li>
											))}
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Index>
		);
	}
}

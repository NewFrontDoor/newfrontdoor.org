import React from 'react';
import {Link} from 'react-router';
import lunr from 'lunr';
import classNames from 'classnames';
import './Documentation.scss';
import {Index} from '../Index/index.jsx';

export class Documentation extends React.Component {
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
		const resultsClass = classNames({
			'visible': this.state.searchResults.length > 0,
			'search-results': true
		});

		return (
			<Index>
				<div className="documentation-overlay">
					<div className="site-wrapper site-wrapper-padding">
						<h1>Help + how to</h1>
						<div className="search-wrapper">
							<p>
								Vision 100 IT are constantly updating and improving our documentation, and adding new documentation as new tools and procedures arise. If you notice anything is incomplete, or would like documentation on a particular topic, <Link to="/feature">let us know!</Link>
							</p>
							<form onSubmit={this.handleSearchSubmit}>
								<div className="form-group">
									<input
										type="search"
										name="search"
										className="form-control search input-lg"
										value={this.state.searchTerm}
										onChange={this.handleSearchTerm}
										placeholder="Search all documents on V100IT..."
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
												<h4><Link to={`/${item.id}`} onClick={this.props.onClose}>{item.title}</Link></h4>
											</li>
										))}
									</ul>
								</div>
							</div>
						</div>
						<h2>Vision 100 IT documentation</h2>
						<div className="list-wrapper">
							<div className="type-1">
								<h3>
									<i className="fa fa-book fa-fw"></i>Getting started with Vision 100 IT</h3>
								<ul>
									<li>
										<a href="/documentation/suite">Suite of Tools</a>
									</li>
									<li>Client Charter Agreement - <i>coming soon</i></li>
									<li>
										<a href="/documentation/privacy">Privacy Policy</a>
									</li>
									<li>
										<a href="/documentation/development">Website Development project outline</a>
									</li>
								</ul>
							</div>
							<div className="type-2">
								<h3>
									<i className="fa fa-cogs fa-fw"></i>Our Tools</h3>
								<ul>
									<li>
										<a href="/documentation/mailinglists">Mailing lists</a>
									</li>
									<li>
										Making the most of your new website - <i>coming soon</i>
									</li>
									<li>
										<a href="/elvanto">Elvanto</a>
									</li>
									<li>
										<a href="/sparkleshare">Sparkleshare</a>
									</li>
									<li>
										<a href="/podcasting">Podcasting</a>
									</li>
									<li>
										<a href="/registration">Event Registration tool</a>
									</li>
								</ul>
							</div>
						</div>
						<h2 id="maintenance">IT maintenance</h2>
						<div className="list-wrapper">
							<div className="type-3">
								<h3>
									<i className="fa fa-lock fa-fw"></i>Keeping your systems up to date</h3>
								<ul>
									<li>
										Website refresh recommendations - <i>coming soon</i>
									</li>
									<li>
										<a href="/documentation/sparkleshare">Administrating Sparkleshare</a>
									</li>
									<li>
										<a href="/documentation/checklist">Checklist for on-boarding and finishing with staff members</a>
									</li>
								</ul>
							</div>
							<div className="type-4">
								<h3>
									<i className="fa fa-lightbulb-o fa-fw"></i>Articles + training night materials</h3>
								<ul>
									- <i>coming soon</i>
								</ul>
							</div>
						</div>
						<h2>Additional resources</h2>
						<div className="list-wrapper">
							<div className="type-5">
								<h3>
									<i className="fa fa-link fa-fw"></i>Recommended external links</h3>
								<ul>
									<li>
										<a href="https://www.elvanto.com/">Elvanto</a>
									</li>
									<li>
										<a href="http://sparkleshare.org/">Sparkleshare</a>
									</li>
									<li>
										<a href="https://www.drupal.org/">Drupal</a>
									</li>
									<li>
										<a href="http://www.virtualchurchassist.com/">Virtual Church Assist</a>
									</li>
								</ul>
							</div>
							<div className="type-6">
								<h3>
									<i className="fa fa-video-camera fa-fw"></i>Recommended Videos</h3>
								<li>
									<a href="https://www.youtube.com/watch?v=5FVw2A0TylA">Elvanto overview</a>
								</li>
							</div>
						</div>
					</div>
				</div>
			</Index>
		);
	}
}

Documentation.propTypes = {
	isOpen: React.PropTypes.bool.isRequired,
	onClose: React.PropTypes.func.isRequired
};

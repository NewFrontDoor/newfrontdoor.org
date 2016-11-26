import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {Link} from 'react-router';
import lunr from 'lunr';
import classNames from 'classnames';
import SearchResults from '../search-results/index.jsx';
import Index from '../index/index.jsx';
import styles from './documentation.scss';

class Documentation extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchResults: [],
			searchTerm: ''
		};
		this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
		this.handleSearchTerm = this.handleSearchTerm.bind(this);
		this.handleCloseResult = this.handleCloseResult.bind(this);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}

	shouldComponentUpdate() {}

	get searchIndex() {
		const self = this;
		return new Promise(resolve => {
			if (self.__searchIndex) {
				resolve({index: self.__searchIndex, data: self.__searchData});
			} else {
				require.ensure([], () => {
					self.__searchData = require('../../search/search-data.json');
					self.__searchIndex = lunr.Index.load(require('../../search/search-index.json'));

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
			visible: this.state.searchResults.length > 0,
			'search-results': true
		});

		return (
			<Index>
				<div className={styles.overlay}>
					<div className="site-wrapper site-wrapper-padding">
						<h1>Help + how to</h1>
						<div className={styles.searchWrapper}>
							<p>
								Vision 100 IT are constantly updating and improving our documentation, and adding new documentation as new tools and procedures arise. If you notice anything is incomplete, or would like documentation on a particular topic, <Link to="/feature">let us know!</Link>
							</p>
							<form onSubmit={this.handleSearchSubmit}>
								<div className={styles.formGroup}>
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
							<SearchResults
								titleClassName={styles.title}
								onCloseResult={this.handleCloseResult}
								onCloseModal={this.handleCloseModal}
								searchResults={this.state.searchResults}
								/>
						</div>
						<h2>Vision 100 IT documentation</h2>
						<div className={styles.listWrapper}>
							<div className="type-1">
								<h3>
									<i className={`fa fa-book fa-fw ${styles.docIcons}`}/> Getting started with Vision 100 IT</h3>
								<ul>
									<li>
										<Link to="/documentation/suite">Suite of Tools</Link>
									</li>
									<li>Client Charter Agreement - <i>coming soon</i></li>
									<li>
										<Link to="/documentation/privacy">Privacy Policy</Link>
									</li>
									<li>
										<Link to="/documentation/development">Website Development project outline</Link>
									</li>
								</ul>
							</div>
							<div className="type-2">
								<h3>
									<i className={`fa fa-cogs fa-fw ${styles.docIcons}`}/> Our Tools</h3>
								<ul>
									<li>
										<Link to="/documentation/mailinglists">Mailing lists</Link>
									</li>
									<li>
										Making the most of your new website - <i>coming soon</i>
									</li>
									<li>
										<Link to="/elvanto">Elvanto</Link>
									</li>
									<li>
										<Link to="/sparkleshare">Sparkleshare</Link>
									</li>
									<li>
										<Link to="/podcasting">Podcasting</Link>
									</li>
									<li>
										<Link to="/registration">Event Registration tool</Link>
									</li>
								</ul>
							</div>
						</div>
						<h2 id="maintenance">IT maintenance</h2>
						<div className={styles.listWrapper}>
							<div className="type-3">
								<h3>
									<i className={`fa fa-lock fa-fw ${styles.docIcons}`}/> Keeping your systems up to date</h3>
								<ul>
									<li>
										Website refresh recommendations - <i>coming soon</i>
									</li>
									<li>
										<Link to="/documentation/sparkleshare">Administrating Sparkleshare</Link>
									</li>
									<li>
										<Link to="/documentation/checklist">Checklist for on-boarding and finishing with staff members</Link>
									</li>
								</ul>
							</div>
							<div className="type-4">
								<h3>
									<i className={`fa fa-lightbulb-o fa-fw ${styles.docIcons}`}/> Articles + training night materials</h3>
								<ul>
									<li>
										<Link to="/documentation/keepingkidssafe">Keeping Kids Safe on the Internet</Link>
									</li>
								</ul>
							</div>
						</div>
						<h2>Additional resources</h2>
						<div className={styles.listWrapper}>
							<div className="type-5">
								<h3>
									<i className={`fa fa-link fa-fw ${styles.docIcons}`}/> Recommended external links</h3>
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
									<i className={`fa fa-video-camera fa-fw ${styles.docIcons}`}/> Recommended Videos
								</h3>
								<ul>
									<li>
										<a href="https://www.youtube.com/watch?v=5FVw2A0TylA">Elvanto overview</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</Index>
		);
	}
}

export default Documentation;

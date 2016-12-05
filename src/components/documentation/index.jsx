import React, {PropTypes} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {Link, withRouter, locationShape} from 'react-router';
import withSearchIndex from '../search-index/index.jsx';
import SearchResults from '../search-results/index.jsx';
import SearchResultList from '../search-result-list/index.jsx';
import Index from '../index/index.jsx';
import Search from '../search/index.jsx';
import styles from './documentation.scss';

class Documentation extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchResults: [],
			searchTerm: props.location.query.search
		};
		this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
		this.handleCloseResult = this.handleCloseResult.bind(this);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}

	shouldComponentUpdate() {}

	componentDidMount() {
		this.handleSearchSubmit(this.state.searchTerm);
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
					onResultClick={this.handleCloseModal}
					searchResults={searchResults}
					/>
			);
		}

		return (
			<Index>
				<div className={styles.overlay}>
					<div className="site-wrapper site-wrapper-padding">
						<h1>Help + how to</h1>
						<div className={styles.searchWrapper}>
							<p>
								Vision 100 IT are constantly updating and improving our documentation, and adding new documentation as new tools and procedures arise. If you notice anything is incomplete, or would like documentation on a particular topic, <Link to="/feature">let us know!</Link>
							</p>
							<Search
								size="large"
								buttonClass="btn-primary"
								placeholder="Search all documents on V100IT..."
								onSearchSubmit={this.handleSearchSubmit}
								/>
							<SearchResults
								titleClass={styles.title}
								containerClass={styles.searchResults}
								onCloseResults={this.handleCloseResult}
								searchResults={this.state.searchResults}
								>
								{searchResultList}
							</SearchResults>
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

Documentation.propTypes = {
	location: locationShape,
	searchIndex: PropTypes.func.isRequired
};

export default withRouter(withSearchIndex(Documentation));

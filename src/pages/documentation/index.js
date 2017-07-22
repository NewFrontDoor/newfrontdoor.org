import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {parse} from 'qs';
import FaBook from 'react-icons/fa/book';
import FaCogs from 'react-icons/fa/cogs';
import FaLock from 'react-icons/fa/lock';
import FaChain from 'react-icons/fa/chain';
import FaVideoCamera from 'react-icons/fa/video-camera';
import FaLightbulbO from 'react-icons/fa/lightbulb-o';
import withSearchIndex from '../../components/search-index/index';
import SearchResults from '../../components/search-results/index';
import SearchResultList from '../../components/search-result-list/index';
import Index from '../../components/index/index';
import Search from '../../components/search/index';
import styles from './documentation.scss';

class Documentation extends React.Component {
	constructor(props) {
		super(props);
		const {search} = parse(props.location.search.substr(1));
		this.state = {
			searchResults: [],
			searchTerm: search
		};
		this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
		this.handleCloseResult = this.handleCloseResult.bind(this);
	}

	componentDidMount() {
		if (this.state.searchTerm) {
			this.handleSearchSubmit(this.state.searchTerm);
		}
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
					searchResults={searchResults}
					onResultClick={this.handleCloseModal}
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
								searchResults={this.state.searchResults}
								onCloseResults={this.handleCloseResult}
							>
								{searchResultList}
							</SearchResults>
						</div>
						<h2>Vision 100 IT documentation</h2>
						<div className={styles.listWrapper}>
							<div className={styles.listPanel}>
								<h3>
									<FaBook className={`${styles.docIcons}`}/> Getting started with Vision 100 IT
								</h3>
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
							<div className={styles.listPanel}>
								<h3>
									<FaCogs className={`${styles.docIcons}`}/> Our Tools
								</h3>
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
							<div className={styles.listPanel}>
								<h3>
									<FaLock className={`${styles.docIcons}`}/> Keeping your systems up to date
								</h3>
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
							<div className={styles.listPanel}>
								<h3>
									<FaLightbulbO className={`${styles.docIcons}`}/> Articles + training night materials
								</h3>
								<ul>
									<li>
										<Link to="/documentation/keepingkidssafe">Keeping Kids Safe on the Internet</Link>
									</li>
								</ul>
							</div>
						</div>
						<h2>Additional resources</h2>
						<div className={styles.listWrapper}>
							<div className={styles.listPanel}>
								<h3>
									<FaChain className={`${styles.docIcons}`}/> Recommended external links
								</h3>
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
							<div className={styles.listPanel}>
								<h3>
									<FaVideoCamera className={`${styles.docIcons}`}/> Recommended Videos
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
	location: PropTypes.shape({
		search: PropTypes.string.isRequired
	}).isRequired,
	searchIndex: PropTypes.func.isRequired
};

export default withSearchIndex(Documentation);

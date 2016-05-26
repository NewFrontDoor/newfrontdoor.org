import React from 'react';
import {Link} from 'react-router';
import './Documentation.scss';
import {Index} from '../Index/index.jsx';

export const Documentation = () => (
	<Index>
		<div className="documentation-overlay">
			<div className="site-wrapper site-wrapper-padding">
				<h1>Help + how to</h1>
				<div className="search-wrapper">
					<p>
						Vision 100 IT are constantly updating and improving our documentation, and adding new documentation as new tools and procedures arise. If you notice anything is incomplete, or would like documentation on a particular topic, <Link to="/feature">let us know!</Link>
					</p>
					<form>
						<div className="form-group">
							<input type="search" className="form-control input-lg" placeholder="Search all documents on V100IT..."/>
						</div>
					</form>
					<div className="results">
						<h3>Search Results</h3>
						<dl className="">
							<dt>
								List item one
							</dt>
							<dd>
								First few lines of list item one...
							</dd>
							<dt>
								List item two
							</dt>
							<dd>
								First few lines of list item two...
							</dd>
							<dt>
								List item three
							</dt>
							<dd>
								First few lines of list item three...
							</dd>
						</dl>
					</div>
				</div>
				<h2>Vision 100 IT documentation</h2>
				<div className="list-wrapper">
					<div className="type-1">
						<h3>
							<i className="fa fa-book fa-fw"></i>Getting started with Vision 100 IT</h3>
						<ul>
							<li>
								<a href="documentation/suite">Suite of Tools</a>
							</li>
							<li>Client Charter Agreement - <i>coming soon</i></li>
							<li>
								<a href="documentation/privacy">Privacy Policy</a>
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
								<a href="/documentation/sparkleshare">Sparkleshare</a>
							</li>
							<li>
								<a href="/elvanto">Elvanto</a>
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
							<li>Website refresh recommendations - <i>coming soon</i></li>
							<li>
								<a href="/documentation/checklist">Checklist for on-boarding and finishing with staff members</a>
							</li>
						</ul>
					</div>
					<div className="type-4">
						<h3>
							<i className="fa fa-lightbulb-o fa-fw"></i>Articles + training night materials</h3>
						<ul>
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
						Coming Soon
					</div>
				</div>
			</div>
		</div>
	</Index>
);

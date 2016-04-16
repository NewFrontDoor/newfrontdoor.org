import React from 'react';
// import styles from './Documentation.scss';
import {Index} from '../components/Index';

export const Documentation = () => (
	<Index>
		<div className="site-wrapper site-wrapper-padding">
			<h1>Help + how to</h1>

			<div className="search-wrapper">
				<p>Vision 100 IT are constantly updating and improving our documentation, and adding new documentation as new tools and procedures arise. If you notice anything is incomplete, or would like documentation on a particular topic,
					<a href="/feature">let us know!</a>
				</p>
				<form>
					<div className="form-group">
						<input type="search" className="form-control input-lg" placeholder="Search all documents on V100IT..."/>
					</div>
				</form>
			</div>
			<h2>Vision 100 IT documentation</h2>
			<div className="list-wrapper">
				<div className="type-1">
					<h3>
						<i className="fa fa-book fa-fw"></i>Getting started with Vision 100 IT</h3>
					<ul>
						<li>Suite of Tools</li>
						<li>Client Charter Agreement</li>
						<li>Privacy Policy</li>
					</ul>
				</div>
				<div className="type-2">
					<h3>
						<i className="fa fa-cogs fa-fw"></i>Our Tools</h3>
					<ul>
						<li>
							<a href="/documentation/mailinglists">Mailing lists</a>
						</li>
						<li>Website development project outline</li>
						<li>
							<a href="/documentation/sparkleshare">Sparkleshare</a>
						</li>
					</ul>
				</div>
			</div>
			<h2>Additional resources</h2>
			<div className="list-wrapper">
				<div className="type-5">
					<h3>
						<i className="fa fa-link fa-fw"></i>Recommended links</h3>
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
	</Index>
);

import React from 'react';
import {Index} from '../components/Index';
import styles from './Documentation.scss';

export const Documentation = () => (
	<Index>
		<div className="site-wrapper site-wrapper-padding">
			<h1>Help + how to</h1>

			<div className="search-wrapper">
				<p>Vision 100 IT are constantly updating and improving our documentation, and adding new documentation as new tools and procedures arise.</p>
				<form>
					<div className="form-group">
						<input type="search" className="form-control input-lg" placeholder="Search all documents on V100IT..."/>
					</div>
				</form>
			</div>
			<div className="list-wrapper">
				<div className="type-1">
					<h3><i className="fa fa-lock fa-fw"></i>Creating accounts</h3>
					<ul>
						<li>Item 1</li>
						<li>Item 2</li>
						<li>Item 3</li>
						<li>Item 4</li>
					</ul>
				</div>
				<div className="type-2">
					<h3><i className="fa fa-cogs fa-fw"></i>Getting set up</h3>
					<ul>
						<li>
							<a href="/documentation/mailinglists">Mailing lists</a>
						</li>
						<li>Item 2</li>
						<li>Item 3</li>
						<li>Item 4</li>
					</ul>
				</div>
				<div className="type-3">
					<h3><i className="fa fa-book fa-fw"></i>Task guides</h3>
					<ul>
						<li>Item 1</li>
						<li>Item 2</li>
						<li>Item 3</li>
						<li>Item 4</li>
					</ul>
				</div>
				<div className="type-4">
					<h3><i className="fa fa-users fa-fw"></i>Team leading</h3>
					<ul>
						<li>
							<a href="/documentation/sparkleshare">Sparkleshare</a>
						</li>
						<li>Item 2</li>
						<li>Item 3</li>
						<li>Item 4</li>
					</ul>
				</div>
				<div className="type-5">
					<h3><i className="fa fa-dot-circle-o fa-fw"></i>Blank</h3>
					<ul>
						<li>Item 1</li>
						<li>Item 2</li>
						<li>Item 3</li>
						<li>Item 4</li>
					</ul>
				</div>
				<div className="type-6">
					<h3><i className="fa fa-dot-circle-o fa-fw"></i>Blank</h3>
					<ul>
						<li>Item 1</li>
						<li>Item 2</li>
						<li>Item 3</li>
						<li>Item 4</li>
					</ul>
				</div>
			</div>
		</div>
	</Index>
);

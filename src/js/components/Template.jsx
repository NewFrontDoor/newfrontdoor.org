import React from 'react';

import sparkleshare from '../content/documentation/sparkleshare.md';

export class Template extends React.Component {
	rawSparkleshare() {
		return {__html: sparkleshare};
	}

	render() {
		return (
			<div className="documentation-wrapper">
				<div className="documentation-sidebar">
					<h1>Index</h1>
					<ol>
						<li>Understanding sparkleshare</li>
						<ol>
							<li>The advantages of SparkleShare</li>
							<li>Difference between SparkleShare and other similar software</li>
						</ol>
						<li>Structuring your projects</li>
						<ol>
							<li>Project / Repositories</li>
							<li>Structure</li>
							<li>Project Names</li>
						</ol>
						<li>Add a New User</li>
						<ol>
							<li>Give Them Basic Training and User Guidelines</li>
							<li>Keys</li>
							<li>Checklist</li>
							<li>Special Case: Multiple Installs by an Individual User</li>
						</ol>
						<li>Giving Permissions</li>
						<ol>
							<li>Gitolite Configuration</li>
							<li>Users</li>
							<li>Groups</li>
							<li>Permissions</li>
							<li>Example of a gitolite.conf</li>
						</ol>
					</ol>
				</div>
				<div className="documentation-content">
					<section dangerouslySetInnerHTML={this.rawSparkleshare()}></section>
				</div>
			</div>
		);
	}
}

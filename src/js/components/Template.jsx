import React from 'react';
import toc from 'markdown-toc';
import Remarkable from 'remarkable';
import sparkleshare from '!!raw!../content/documentation/sparkleshare.md';

const md = new Remarkable();

export class Template extends React.Component {
	rawToc() {
		return {__html: md.render(toc(sparkleshare, {firsth1: false}).content)};
	}

	rawSparkleshare() {
		return {__html: md.render(sparkleshare)};
	}

	render() {
		return (
			<div className="documentation-wrapper">
				<div className="documentation-sidebar">
					<h3>Contents</h3>
					<section dangerouslySetInnerHTML={this.rawToc()}></section>
				</div>
				<div className="documentation-content">
					<section dangerouslySetInnerHTML={this.rawSparkleshare()}></section>
				</div>
			</div>
		);
	}
}

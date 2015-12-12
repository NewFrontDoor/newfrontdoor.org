import React from 'react';
import marked from 'marked';
import toc from 'markdown-toc';
import sparkleshare from '!!raw!../content/documentation/sparkleshare.md';

export class Template extends React.Component {
	rawToc() {
		return {__html: marked(toc(sparkleshare, {firsth1: false}).content)};
	}

	rawSparkleshare() {
		return {__html: marked(sparkleshare)};
	}

	render() {
		return (
			<div className="documentation-wrapper">
				<div className="documentation-sidebar">
					<section dangerouslySetInnerHTML={this.rawToc()}></section>
				</div>
				<div className="documentation-content">
					<section dangerouslySetInnerHTML={this.rawSparkleshare()}></section>
				</div>
			</div>
		);
	}
}

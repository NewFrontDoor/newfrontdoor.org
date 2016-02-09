import React from 'react';

export const Status = () => (
	<div className="site-wrapper site-wrapper-padding">
		<h1>System Status</h1>
		<div>
			<p>The following is a list of our systems and their current status - if there is a problem with one of your systems or website that is not listed here, please contact us via the <a href="/support">support request form</a>.</p>
		</div>
		<dl className="dl-horizontal">
			<dt>Website hosting</dt>
			<dd>Operating Ok - no known issues</dd>
			<dt>Sparkleshare</dt>
			<dd>Operating Ok - no known issues</dd>
			<dt>Sympa Mailing Lists</dt>
			<dd>Operating Ok - no known issues</dd>
			<dt>Application name</dt>
			<dd>Application status</dd>
			<dt>Application name</dt>
			<dd>Application status</dd>
		</dl>
	</div>
);

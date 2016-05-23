import React from 'react';
import {Link} from 'react-router';
import {Index} from '../Index/index.jsx';

export const Status = () => (
	<Index>
		<div className="site-wrapper site-wrapper-padding">
			<h1>System Status</h1>
			<div>
				<p>The following is a list of our systems and their current status - if there is a problem with one of your systems or website that is not listed here, please contact us via the <Link to="support">support request form</Link>.</p>
			</div>
			<dt>This feature is currently in development and will be launched soon. In the meantime, the following details will be updated manually.</dt>
			<br/><br/>
			<dl className="dl-horizontal">
				<dt>Website hosting</dt>
				<dd>Operating Ok - no known issues</dd>
				<dt>Sparkleshare</dt>
				<dd>Operating Ok - no known issues</dd>
				<dt>Sympa Mailing Lists</dt>
				<dd>Operating Ok - no known issues</dd>
			</dl>
		</div>
	</Index>
);

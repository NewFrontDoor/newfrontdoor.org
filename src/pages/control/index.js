import React from 'react';
import Index from '../../components/index/index.js';

const Control = () => (
	<Index>
		<div className="site-wrapper">
			<h1>Control page</h1>
			<div>
				<p>A mockup control panel for easy implementation of site features.</p>
				<p>This would likely require implementation of a database of some sort, which is currently not available.</p>
			</div>
			<hr/>
			<form className="">
				<div className="checkbox">
					<label>
						<input type="checkbox" name="announcementCheck" id="error2" value="error2"/>
						Display announcement bar on ‘client’ page
					</label>
				</div>
				<div className="checkbox">
					<label>
						<input type="checkbox" name="announcementCheck" id="error2" value="error2"/>
						Display announcement bar on all pages [currently unavailable]
					</label>
				</div>
				<div className="form-group has-success has-feedback">
					<label htmlFor="subject">Content for announcement bar</label>
					<input type="text" name="subject" className="form-control" placeholder="Insert content for the announcement bar"/>
				</div>
				<hr/>
				<div className="form-group has-success has-feedback">
					<label htmlFor="subject">Email address for support request form</label>
					<input type="text" name="subject" className="form-control" placeholder="Insert valid email"/>
				</div>
				<div className="form-group has-success has-feedback">
					<label htmlFor="subject">Email address for feature request form</label>
					<input type="text" name="subject" className="form-control" placeholder="Insert valid email"/>
				</div>
			</form>
			<div>Insert other possible items here:</div>
			<ul>
				<li>Item 1</li>
				<li>Item 2</li>
				<li>Item 3</li>
			</ul>
		</div>
	</Index>
);

export default Control;

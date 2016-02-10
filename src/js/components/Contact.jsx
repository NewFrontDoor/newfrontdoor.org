import React from 'react';
import {Index} from './Index';

export const Contact = () => (
	<Index>
		<div className="site-wrapper site-wrapper-padding">
				<h1>Contact Us</h1>
				<div>
						<p>The following is a page that should contain correct contact details but doesn't.</p>
				</div>
				<div>
						<h3>Join our mailing list</h3>
						<div className="form-group has-success has-feedback">
								<label htmlFor="subject">Name</label>
								<input type="text" name="subject" className="form-control" placeholder="Insert your full name"/>
								<label htmlFor="subject">Email address</label>
								<input type="text" name="subject" className="form-control" placeholder="Insert a valid email address"/>
						</div>
						<a>About our mailing lists</a>
						<div>
								Vision 100 sends out a bunch of stuff via email regularly including:
								<ul>
										<li>Interesting item 1</li>
										<li>Interesting item 2</li>
										<li>Interesting item 4</li>
										<li>Interesting item 3</li>
										<li>Gotcha didn't I?</li>
								</ul>
								These emails are sent on a regular predictable timeline entirely reliable and also dependent on how much spare time we have...
						</div>
						<div>
								<h3>Email contact</h3>
								<a href="it@vision100.org">it@vision100.org</a>
								<h3>Mailing address</h3>
								<p>123 Big Walk way</p>
								<p>Kingston TAS</p>
								<p>7050</p>
						</div>
				</div>
		</div>
		</Index>
);

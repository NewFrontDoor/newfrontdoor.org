import React from 'react';
import {ContentToggle} from '../ContentToggle';
import {Index} from './Index';

export class Contact extends React.Component {
	render() {
		return (
			<Index>
				<div className="site-wrapper site-wrapper-padding">
					<h1>
						Contact Us
					</h1>
					<div>
						<div>
							<h3>
								Email contact
							</h3>
							<a href="it@vision100.org">it@vision100.org</a>
						</div>
						<h3>
							Join our mailing list
						</h3>
						<div className="form-group has-success has-feedback">
							<label htmlFor="name">Name</label>
							<input type="text" name="name" className="form-control" placeholder="Insert your full name"/>
							<label htmlFor="email">
								Email address
							</label>
							<input type="text" name="email" className="form-control" placeholder="Insert a valid email address"/>
						</div>
						<ContentToggle toggleText="About our mailing lists">
							Vision 100 sends out a bunch of stuff via email regularly including:
							<ul>
								<li>
									New features,
								</li>
								<li>
									Hot tips on best practices,
								</li>
								<li>
									Other helpful content around the web,
								</li>
								<li>
									Official updates,
								</li>
								<li>
									Upcoming events
								</li>
							</ul>
							These emails are sent on a regular predictable timeline entirely reliable and also dependent on how much spare time we have...
						</ContentToggle>
						<div>
							<h3>
								Mailing address
							</h3>
							<p>
								PO Box 5006
							</p>
							<p>
								UTAS LPO
							</p>
							<p>
								SANDY BAY TAS 7005
							</p>
						</div>
					</div>
				</div>
			</Index>
		);
	}
}

import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {Collapse} from '../components/Collapse';
import {Index} from '../components/index/index.jsx';

class ContactForm extends React.Component {
	constructor() {
		super();
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(field) {
		return event => {
			this.setState({
				[field]: event.target.value
			});
		};
	}
	handleSubmit(event) {
		event.preventDefault();
		fetch('https://qvikae2ufi.execute-api.us-west-2.amazonaws.com/prod/mailing-list', {
			method: 'post',
			mode: 'cors',
			body: JSON.stringify({
				name: this.state.name,
				email: this.state.email
			}),
			headers: new Headers({
				'Content-Type': 'application/json'
			})
		});
	}
	render() {
		return (
			<form className="form-group has-success has-feedback" onSubmit={this.handleSubmit}>
				<div className="form-group">
					<label htmlFor="name">Name</label>
					<input type="text" name="name" className="form-control" placeholder="Insert your full name" onChange={this.handleChange('name')}/>
				</div>
				<div className="form-group">
					<label htmlFor="email">
						Email address
					</label>
					<input type="text" name="email" className="form-control" placeholder="Insert a valid email address" onChange={this.handleChange('email')}/>
				</div>
				<div className="form-group">
					<button type="submit" className="btn btn-primary">Submit</button>
				</div>
			</form>
		);
	}
}

export class Contact extends React.Component {
	constructor() {
		super();
		this.state = {
			isOpen: false
		};
		this.handleCollapse = this.handleCollapse.bind(this);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	shouldComponentUpdate() {}
	handleCollapse(event) {
		event.preventDefault();
		this.setState({isOpen: !this.state.isOpen});
	}
	render() {
		return (
			<Index>
				<div className="contact-overlay">
					<div className="site-wrapper site-wrapper-padding">
						<h1>
							Contact Us
						</h1>
						<div>
							<div>
								<h3>
									Email contact
								</h3>
								<a href="mailto:it@vision100.org">it@vision100.org</a>
							</div>
							<h3>
								Join our mailing list
							</h3>
							<ContactForm/>
							<p><a href="#" onClick={this.handleCollapse}>About our mailing lists</a></p>
							<Collapse isOpened={this.state.isOpen}>
								<p>Vision 100 sends out a bunch of stuff via email regularly including:</p>
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
								<p>These emails are sent on a regular predictable timeline entirely reliable and also dependent on how much spare time we have...</p>
							</Collapse>
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
				</div>
			</Index>
		);
	}
}

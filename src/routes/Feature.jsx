import React from 'react';
import {Link} from 'react-router';
import {Index} from '../components/Index/index.jsx';

class FeatureForm extends React.Component {
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
		fetch('https://qvikae2ufi.execute-api.us-west-2.amazonaws.com/prod/feature-request', {
			method: 'post',
			mode: 'cors',
			body: JSON.stringify({
				subject: this.state.subject,
				description: this.state.description,
				organisation: this.state.organisation,
				message: this.state.message
			}),
			headers: new Headers({
				'Content-Type': 'application/json'
			})
		});
	}
	render() {
		return (
			<form className="support-form" onSubmit={this.handleSubmit}>
				<div className="form-group has-success has-feedback">
					<label htmlFor="name">Name:</label>
					<input type="text" name="name" className="form-control" placeholder="First and last name" onChange={this.handleChange('name')}/>
				</div>
				<div className="form-group has-success has-feedback">
					<label htmlFor="organisation">Organisation:</label>
					<input type="text" name="organisation" className="form-control" placeholder="Your church or parachurch organisation" onChange={this.handleChange('organisation')}/>
				</div>
				<div className="form-group has-success has-feedback">
					<label htmlFor="email">Contact email:</label>
					<input type="email" name="email" className="form-control" placeholder="Contact email" onChange={this.handleChange('email')}/>
				</div>
				<div className="form-group">
					<label htmlFor="url-issue">Example URL (if applicable)</label>
					<input type="text" name="urlIssue" className="form-control" placeholder="Please copy paste the url from your web browser" onChange={this.handleChange('urlIssue')}/>
				</div>
				<div className="form-group">
					<label htmlFor="radio">Request type:</label>
					<div className="radio">
						<label>
							<input type="radio" name="optionsRadios" id="error" value="error" onChange={this.handleChange('optionsRadios')}/>
							New website feature
						</label>
						<p className="help-block">May be a module, a visual tweak, or new template</p>
					</div>
					<div className="radio">
						<label>
							<input type="radio" name="optionsRadios" id="error2" value="error2" onChange={this.handleChange('optionsRadios')}/>
							Sparkleshare feature
						</label>
					</div>
					<div className="radio">
						<label>
							<input type="radio" name="optionsRadios" id="error3" value="error3" onChange={this.handleChange('optionsRadios')}/>
							Mailing list feature
						</label>
					</div>
					<div className="radio">
						<label>
							<input type="radio" name="optionsRadios" id="error4" value="error4" onChange={this.handleChange('optionsRadios')}/>
							App integration request
						</label>
					</div>
					<div className="radio">
						<label>
							<input type="radio" name="optionsRadios" id="error5" value="error5" onChange={this.handleChange('optionsRadios')}/>
							Other
						</label>
					</div>
				</div>
				<div className="form-group hide">
					<label htmlFor="file">File upload:</label>
					<input type="file" name="file" className="form-control"/>
					<p className="help-block">Only txt, doc, docx or pdf and under 2mb are accepted.</p>
				</div>
				<div className="form-group hide">
					<label htmlFor="screenshot">Screenshot:</label>
					<input type="file" name="image" className="form-control"/>
					<p className="help-block">Only jpg, jpeg or png and under 2mb are accepted.</p>
				</div>
				<div className="form-group has-success has-feedback">
					<label htmlFor="description">Description</label>
					<textarea type="field" name="description" className="form-control" rows="5" placeholder="Required. Please provide a brief description" onChange={this.handleChange('description')}/>
				</div>
				<div className="form-group">
					<label htmlFor="additional">Any other additional information</label>
					<textarea type="field" name="additional" className="form-control" rows="3" placeholder="Not required. You may choose to enter any other relevant information or special requests here." onChange={this.handleChange('additional')}/>
				</div>
				<div className="form-group">
					<button type="submit" className="btn btn-primary pull-right">Submit</button>
				</div>
			</form>
		);
	}
}

export const Feature = () => (
	<Index>
		<div className="status-overlay">
			<div className="site-wrapper site-wrapper-padding">
				<h1>Feature request form</h1>
				<div>
					<p>
						Some features may be in the pipeline or already available. See our <Link to="/documentation">documentation page</Link> for assistance in using these features, and our <Link to="/client">client page</Link> for any announcements.
					</p>
				</div>
				<hr/>
				<div className="instruction">
					<h3>Guidelines</h3>
					<p>To best assist you with your feature requests, please ensure to:</p>
					<ul>
						<li>fill out this form <strong>as completely as you can.</strong></li>
						<li>include only one request per submission. You’re welcome to submit multiple requests.</li>
						<li>check you're allocated a ticket number.</li>
					</ul>
					Each submission will:
					<ul>
						<li>Send a request ticket by email (to you & us) for tracking by our team.</li>
						<li>Give an option to close your feature request by email.</li>
					</ul>
				</div>
				<FeatureForm/>
			</div>
		</div>
	</Index>
);

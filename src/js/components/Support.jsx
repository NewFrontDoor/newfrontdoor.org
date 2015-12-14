import React from 'react';

export class Support extends React.Component {

	render() {
		return (
			<div className="site-wrapper">
				<h1>Support form</h1>
				<div><p>Some issues may be answered by our documentation which you can find here. Please also check our <a href="/status">system status page</a> for any issues that may impact your work.</p></div>
				<hr />
				<div className="instruction">
					<h3>Guidelines</h3>
					<p>In order to best assist you with any trouble you might be having, please ensure you:</p>
					<ul>
						<li>populate this form <strong>as completely as possible.</strong></li>
						<li>do not include multiple issues on the same submission. Complete once for each issue.</li>
						<li>ensure answers are validated and form submits successfully with issue of ticket number</li>
					</ul>
					Each submission will:
					<ul>
						<li>generate a support ticket which you will receive by email and will be tracked by our team.</li>
						<li>have an option to close your support request by email.</li>
					</ul>
				</div>
			<form className="support-form">
					<div className="form-group has-success has-feedback">
						<label htmlFor="subject">How can we help?</label>
						<input type="text" name="subject" className="form-control" placeholder="Summarise the issue like an email subject line" />
					</div>
					<div className="form-group has-success has-feedback">
						<label htmlFor="description">Further details that will help us resolve the issue</label>
						<textarea type="field" name="description" className="form-control" rows="5" placeholder="Please provide a detailed description, including any steps taken that led to the problem and the result" />
					</div>
					<div className="form-group">
						<label htmlFor="url-issue">URL for affected page: (if applicable)</label>
						<input type="text" name="url-issue" className="form-control" placeholder="Please copy paste the url from your web browser" />
					</div>
					<div className="form-group">
						<label htmlFor="radio">Issue type (This helps us quickly allocate to the product expert)</label>
						<div className="radio">
							<label>
								<input type="radio" name="optionsRadios" id="error" value="error" />
								Username/password authentication issues
							</label>
							<p className="help-block">May be for Website, Sparkleshare, Sympa</p>
						</div>
						<div className="radio">
							<label>
								<input type="radio" name="optionsRadios" id="error2" value="error2" />
								Page not loading correctly/at all
							</label>
						</div>
						<div className="radio">
							<label>
								<input type="radio" name="optionsRadios" id="error3" value="error3" />
								Sparkleshare conflict/error
							</label>
						</div>
						<div className="radio">
							<label>
								<input type="radio" name="optionsRadios" id="error4" value="error4" />
								Mailing list issue/request
							</label>
						</div>
						<div className="radio">
							<label>
								<input type="radio" name="optionsRadios" id="error5" value="error5" />
								Other
							</label>
						</div>
					</div>
					<div className="form-group">
						<label htmlFor="radio">Severity:</label>
						<select className="form-control">
							<option>4 - minimal impact, tolerable for a period</option>
							<option>3 - affects one user, moderate impact on workflow</option>
							<option>2 - affects multiple users, serious impact on workflow</option>
							<option>1 - affects multiple users and clients, system offline</option>
						</select>
					</div>
					<div className="form-group">
						<label htmlFor="file">File upload:</label>
						<input type="file" name="file" className="form-control" />
						<p className="help-block">Only txt, doc, docx or pdf and under 2mb are accepted.</p>
					</div>
					<div className="form-group">
						<label htmlFor="screenshot">Screenshot:</label>
						<input type="file" name="image" className="form-control" />
						<p className="help-block">Only jpg, jpeg or png and under 2mb are accepted.</p>
					</div>
					<div className="form-group">
						<label htmlFor="additional">Any other additional information</label>
						<textarea type="field" name="additional" className="form-control" rows="3" placeholder="Not required. You may choose to enter any other relevant information or special requests here." />
					</div>
					<div className="form-group has-success has-feedback">
						<label htmlFor="name">Name:</label>
						<input type="text" id="name" className="form-control" placeholder="First and last name" />
					</div>
					<div className="form-group has-success has-feedback">
						<label htmlFor="organisation">Organisation:</label>
						<input type="text" name="organisation" className="form-control" placeholder="Your church or parachurch organisation" />
					</div>
					<div className="form-group has-success has-feedback">
						<label htmlFor="email">Contact email:</label>
						<input type="email" name="email" className="form-control" placeholder="Contact email" />
					</div>
					<div className="form-group">
						<button type="submit" className="btn btn-primary pull-right">Submit</button>
					</div>
				</form>
			</div>
		);
	}
}

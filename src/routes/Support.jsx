import React from 'react';
import {Link} from 'react-router';
import {Index} from '../components/Index/index.jsx';

export const Support = () => (
	<Index>
		<div className="status-overlay">
			<div className="site-wrapper site-wrapper-padding">
				<h1>Support form</h1>
				<div>
					<p>Some issues may be answered by our <Link to="/documentation">documentation</Link> which you can find <Link to="/documentation">here</Link>. Please also check our <Link to="/status">system status page</Link> for any issues that may impact your work.</p>
				</div>
				<hr/>
				<div className="instruction">
					<h3>Guidelines</h3>
					<p>To best assist you with your support requests, please ensure to:</p>
					<ul>
						<li>fill out this form <strong>as completely as you can.</strong></li>
						<li>include only one problem per submission. You're welcome to submit multiple requests.</li>
						<li>check you're allocated a ticket number.</li>
					</ul>
					Each submission will:
					<ul>
						<li>Send a support ticket by email (to you & us) for tracking by our team.</li>
						<li>Give an option to close your support request by email.</li>
					</ul>
				</div>
				<form className="support-form">
					<div className="form-group has-success has-feedback">
						<label htmlFor="subject">How can we help?</label>
						<input type="text" name="subject" className="form-control" placeholder="Summarise the issue like an email subject line"/>
					</div>
					<div className="form-group has-success has-feedback">
						<label htmlFor="description">Further details that will help us to help you</label>
						<textarea type="field" name="description" className="form-control" rows="5" placeholder="Please give us a detailed description, including any steps taken that led to the problem and the result"/>
					</div>
					<div className="form-group">
						<label htmlFor="url-issue">URL for affected page: (if applicable)</label>
						<input type="text" name="url-issue" className="form-control" placeholder="Please copy paste the url from your web browser"/>
					</div>
					<div className="form-group">
						<label htmlFor="radio">Issue type (This helps us quickly allocate to the product expert)</label>
						<div className="radio">
							<label>
								<input type="radio" name="optionsRadios" id="error" value="error"/>
								Username/password authentication issues
							</label>
							<p className="help-block">May be for Website, Sparkleshare, Sympa</p>
						</div>
						<div className="radio">
							<label>
								<input type="radio" name="optionsRadios" id="error2" value="error2"/>
								Page not loading correctly/at all
							</label>
						</div>
						<div className="radio">
							<label>
								<input type="radio" name="optionsRadios" id="error3" value="error3"/>
								Sparkleshare conflict/error
							</label>
						</div>
						<div className="radio">
							<label>
								<input type="radio" name="optionsRadios" id="error4" value="error4"/>
								Mailing list issue/request
							</label>
						</div>
						<div className="radio">
							<label>
								<input type="radio" name="optionsRadios" id="error5" value="error5"/>
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
						<input type="file" name="file" className="form-control"/>
						<p className="help-block">Only txt, doc, docx or pdf and under 2mb are accepted.</p>
					</div>
					<div className="form-group">
						<label htmlFor="screenshot">Screenshot:</label>
						<input type="file" name="image" className="form-control"/>
						<p className="help-block">Only jpg, jpeg or png and under 2mb are accepted.</p>
					</div>
					<div className="form-group">
						<label htmlFor="additional">Any other additional information</label>
						<textarea type="field" name="additional" className="form-control" rows="3" placeholder="Not required. You may choose to enter any other relevant information or special requests here."/>
					</div>
					<hr/>
					<h4>Contact Details</h4>
					<div className="form-group has-success has-feedback">
						<label htmlFor="name">Name:</label>
						<input type="text" id="name" className="form-control" placeholder="First and last name"/>
					</div>
					<div className="form-group has-success has-feedback">
						<label htmlFor="organisation">Organisation:</label>
						<input type="text" name="organisation" className="form-control" placeholder="Your church or parachurch organisation"/>
					</div>
					<div className="form-group has-success has-feedback">
						<label htmlFor="email">Contact email:</label>
						<input type="email" name="email" className="form-control" placeholder="Contact email"/>
					</div>
					<div className="form-group">
						<button type="submit" className="btn btn-primary pull-right">Submit</button>
					</div>
				</form>
			</div>
		</div>
	</Index>
);

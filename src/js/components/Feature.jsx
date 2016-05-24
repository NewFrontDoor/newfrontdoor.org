import React from 'react';
import {Link} from 'react-router';
import {Index} from '../Index/index.jsx';

export const Feature = () => (
	<Index>
		<div className="status-overlay">
			<div className="site-wrapper site-wrapper-padding">
				<h1>Feature request form</h1>
				<div>
					<p>
						Some features may be in the pipeline or already available. See our <Link to="documentation">documentation page</Link> for assistance in using these features, and our <Link to="client">client page</Link> for any announcements.
					</p>
				</div>
				<hr/>
				<div className="instruction">
					<h3>Guidelines</h3>
					<p>In order to best understand your request, please ensure you:</p>
					<ul>
						<li>populate this form
							<strong>as completely as possible.</strong>
						</li>
						<li>do not include multiple requests on the same submission. Complete once for each request.</li>
						<li>ensure answers are validated and form submits successfully with issue of ticket number</li>
					</ul>
					Each submission will:
					<ul>
						<li>generate a request ticket which you will receive by email and will be tracked by our team.</li>
						<li>have an option to close your feature request by email.</li>
					</ul>
				</div>
				<form className="support-form">
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
						<label htmlFor="url-issue">Example URL (if applicable)</label>
						<input type="text" name="url-issue" className="form-control" placeholder="Please copy paste the url from your web browser"/>
					</div>
					<div className="form-group">
						<label htmlFor="radio">Request type:</label>
						<div className="radio">
							<label>
								<input type="radio" name="optionsRadios" id="error" value="error"/>
								New website feature
							</label>
							<p className="help-block">May be a module, a visual tweak, or new template</p>
						</div>
						<div className="radio">
							<label>
								<input type="radio" name="optionsRadios" id="error2" value="error2"/>
								Sparkleshare feature
							</label>
						</div>
						<div className="radio">
							<label>
								<input type="radio" name="optionsRadios" id="error3" value="error3"/>
								Mailing list feature
							</label>
						</div>
						<div className="radio">
							<label>
								<input type="radio" name="optionsRadios" id="error4" value="error4"/>
								App integration request
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
						<label htmlFor="file">File upload:</label>
						<input type="file" name="file" className="form-control"/>
						<p className="help-block">Only txt, doc, docx or pdf and under 2mb are accepted.</p>
					</div>
					<div className="form-group">
						<label htmlFor="screenshot">Screenshot:</label>
						<input type="file" name="image" className="form-control"/>
						<p className="help-block">Only jpg, jpeg or png and under 2mb are accepted.</p>
					</div>
					<div className="form-group has-success has-feedback">
						<label htmlFor="description">Description</label>
						<textarea type="field" name="description" className="form-control" rows="5" placeholder="Required. Please provide a brief description"/>
					</div>
					<div className="form-group">
						<label htmlFor="additional">Any other additional information</label>
						<textarea type="field" name="additional" className="form-control" rows="3" placeholder="Not required. You may choose to enter any other relevant information or special requests here."/>
					</div>
					<div className="form-group">
						<button type="submit" className="btn btn-primary pull-right">Submit</button>
					</div>
				</form>
			</div>
		</div>
	</Index>
);

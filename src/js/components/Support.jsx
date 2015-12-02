import React from 'react';

export class Support extends React.Component {

	render() {
		return (
			<div>
				<p>Support form</p>
				<form>
					<div className="form-group">
						<label htmlFor="name">Name:</label>
						<input type="text" name="name" className="form-control" />
					</div>
					<div className="form-group">
						<label htmlFor="organisation">Organisation:</label>
						<input type="text" name="organisation" className="form-control" />
					</div>
					<div className="form-group">
						<label htmlFor="url-issue">URL for issue:</label>
						<input type="text" name="url-issue" className="form-control" />
					</div>
					<div className="form-group">
						<label htmlFor="email">Contact email:</label>
						<input type="email" name="email" className="form-control" />
					</div>
					<div className="form-group">
						<label htmlFor="url-issue">URL for issue:</label>
						<input type="url" name="url-issue" className="form-control" />
					</div>
					<div className="form-group">
						<div className="radio">
							<label>
								<input type="radio" name="optionsRadios" id="error" value="error" />
								error
							</label>
						</div>
						<div className="radio">
							<label>
								<input type="radio" name="optionsRadios" id="error" value="error2" />
								error2
							</label>
						</div>
						<div className="radio">
							<label>
								<input type="radio" name="optionsRadios" id="error3" value="error3" />
								error3
							</label>
						</div>
						<div className="radio">
							<label>
								<input type="radio" name="optionsRadios" id="error4" value="error4" />
								error4
							</label>
						</div>
						<div className="radio">
							<label>
								<input type="radio" name="optionsRadios" id="error5" value="error5" />
								error5
							</label>
						</div>
					</div>
					<div className="form-group">
						<label htmlFor="file">File upload:</label>
						<input type="file" name="file" className="form-control" />
					</div>
					<div className="form-group">
						<label htmlFor="screenshot">Screenshot:</label>
						<input type="text" name="screenshot" className="form-control" />
					</div>
					<div className="form-group">
						<label htmlFor="description">Description</label>
						<input type="field" name="description" className="form-control" />
					</div>
					<button type="submit" className="btn btn-primary pull-right">Submit</button>
				</form>
			</div>
		);
	}
}

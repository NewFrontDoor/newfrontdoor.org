import React from 'react';

export class Documentation extends React.Component {

	render() {
		return (
				<div className="site-wrapper">
					<h1>Documentation</h1>

					<div className="search-wrapper">
						<p>Testing somethign here</p>
						<form>
							<div className="form-group">
								<input type="search" name="search" value="Search all documents on V100IT..." className="form-control" />
								<button type="submit" className="btn btn-primary pull-right">Search</button>
							</div>
						</form>
					</div>
				</div>
		);
	}
}

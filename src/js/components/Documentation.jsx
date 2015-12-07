import React from 'react';

export class Documentation extends React.Component {

	render() {
		return (
			<div className="site-wrapper">
				<h1>Documentation</h1>
				<form>
					<div className="doc-search">
						<label htmlFor="search">Search</label>
						<input type="search" name="search" value="Search all documents on V100IT..." className="form-control" />
					</div>
					<button type="submit" className="btn btn-primary pull-right">Search</button>
				</form>
			</div>
		);
	}
}

import React from 'react';
import classNames from 'classnames';
import styles from './SearchBar.scss'; 

export class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.openResult = this.openResult.bind(this);
		this.closeResult = this.closeResult.bind(this);
	}

	openResult(event) {
		event.preventDefault();
		this.setState({showResult: true});
	}

	closeResult(event) {
		event.preventDefault();
		this.setState({showResult: false});
	}

	render() {
		const siteCless = classNames({
			'visible': this.props.isOpen,
			'search-overlay': true,
			'text-uppercase': true
		});

		const siteYess = classNames({
			'visible': this.state.showResult,
			'search-results': true
		});

		return (
			<div className={siteCless}>
				<div className="search-title">
					<h2>Search menu</h2>
					<div>
						<a onClick={this.props.onClose}>
							<i className="fa fa-times-circle fa-2x"></i>
						</a>
					</div>
				</div>
				<form onSubmit={this.openResult}>
					<div className="input-group">
						<label className="sr-only" htmlFor="search">Search</label>
						<input type="search" name="search" className="form-control search" placeholder="Search..."/>
						<span className="input-group-btn submit">
							<button className="btn btn-transparent" type="submit">
								<span className="fa fa-search fa-lg"></span>
							</button>
						</span>
					</div>
				</form>
				<div className={siteYess}>
					<div className="results-title">
						<h3>Results</h3>
						<div>
							<a onClick={this.closeResult}>
								<i className="fa fa-times-circle fa-lg"></i>
							</a>
						</div>
					</div>
					<div className="results-content">
						<ul className="list-unstyled">
							<li>result 1</li>
							<li>result 2</li>
							<li>result 3</li>
						</ul>
					</div>
					<div className="search-nav small">

						<p>more</p>
					</div>
				</div>
				<div className="search-menu">
					<ul className="list-unstyled">
						<li>
							<a href="/client">News</a>
						</li>
						<li>
							<a href="/support">Support</a>
						</li>
						<li>
							<a href="/status">Status</a>
						</li>
						<li>
							<a href="/documentation">Documentation</a>
						</li>
						<li>
							<a href="/contact">Contact</a>
						</li>
					</ul>
				</div>
				<div className="postscript">
					© Vision 100 Resources 2016.<br />
				Design by <a href="http://twitter.com/readeral">readeral</a> and <a href="http://twitter.com/barrythepenguin">barrythepenguin</a>.<br />
					<a href="mailto:info@vision100.org">info@vision100.org</a>.<br />
					ABN: 50 782 030 539.
				</div>
			</div>
		);
	}
}

SearchBar.propTypes = {
	isOpen: React.PropTypes.bool.isRequired,
	onClose: React.PropTypes.func.isRequired
};

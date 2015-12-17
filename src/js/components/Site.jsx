import React from 'react';
import '../../css/main';
import classNames from 'classnames';
import {Header} from './Header';
import {MainMenu} from './MainMenu';
import {Footer} from './Footer';

import content from '../content';
import logo from '../../elements/v100it2.png';

export class Site extends React.Component {
	constructor(props) {
		super(props);
		this.state = {mainmenu: content.mainmenu};
		this.openSearch = this.openSearch.bind(this);
		this.closeSearch = this.closeSearch.bind(this);
		this.openResult = this.openResult.bind(this);
		this.closeResult = this.closeResult.bind(this);
	}

	openSearch(event) {
		event.preventDefault();
		this.setState({showSearch: true});
	}

	closeSearch(event) {
		event.preventDefault();
		this.setState({showSearch: false});
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
			'visible': this.state.showSearch,
			'search-overlay': true,
			'text-uppercase': true
		})
		;

		const siteYess = classNames({
			'visible': this.state.showResult,
			'search-results': true
		});

		return (
				<div>
					<Header>
						<a href="/"><h1 className="sr-only">Vision 100 IT</h1><img className="logo img-responsive" src={logo}></img></a>
						<div className="mobile-menu text-uppercase"><ul><li className="list-unstyled"><a href="/client">Client</a></li><li className="list-unstyled"><a href="#how">Visitor</a></li></ul></div>
						<MainMenu openSearch={this.openSearch} {...this.state.mainmenu}></MainMenu>
					</Header>
					{this.props.children}
					<div className={siteCless}>
						<div className="search-title"><h2>Search menu</h2><div><a onClick={this.closeSearch}><i className="fa fa-times-circle fa-2x"></i></a></div></div>
						<form>
							<div className="form-group">
								<input type="search" name="search" className="form-control search" placeholder="Search..." />
								<span className="form-control submit"><a onClick={this.openResult}><i className="fa fa-search fa-lg"></i></a></span>
							</div>
						</form>
						<div className={siteYess}>
							<div className="results-title"><h3>Results</h3><div><a onClick={this.closeResult}><i className="fa fa-times-circle fa-lg"></i></a></div></div>
							<div className="results-content"><ul className="list-unstyled"><li>result 1</li><li>result 2</li><li>result 3</li></ul></div>
							<div className="search-nav small">

								<p>more</p>
							</div>
						</div>
						<div className="search-menu">
							<ul className="list-unstyled">
								<li><a href="/client">News</a></li>
								<li><a href="/support">Support</a></li>
								<li><a href="/status">Status</a></li>
								<li><a href="/documentation">Documentation</a></li>
								<li><a href="">Contact</a></li>
							</ul>
						</div>
					</div>
					<Footer></Footer>
				</div>
		);
	}
}

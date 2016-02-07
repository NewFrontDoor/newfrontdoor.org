import React from 'react';
import '../../css/main';
import {Header} from '../Header';
import {Footer} from '../Footer';
import {SearchBar} from '../SearchBar';

export class Site extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showSearch: false
		};
		this.openSearch = this.openSearch.bind(this);
		this.closeSearch = this.closeSearch.bind(this);
	}

	openSearch(event) {
		event.preventDefault();
		this.setState({showSearch: true});
	}

	closeSearch(event) {
		event.preventDefault();
		this.setState({showSearch: false});
	}

	render() {
		return (
			<div className="container">
				<Header openSearch={this.openSearch}/>
				{this.props.children}
				<Footer/>
				<SearchBar isOpen={this.state.showSearch} onClose={this.closeSearch}/>
			</div>
		);
	}
}

Site.propTypes = {
	children: React.PropTypes.element.isRequired
};

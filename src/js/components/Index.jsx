import React from 'react';
import {Header} from '../Header';
import {SearchBar} from '../SearchBar';

export class Index extends React.Component {
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
			<div>
				<Header openSearch={this.openSearch}/>
				{this.props.children}
				<SearchBar isOpen={this.state.showSearch} onClose={this.closeSearch}/>
			</div>
		);
	}
}

Index.propTypes = {
	children: React.PropTypes.node
};

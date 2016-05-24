import React from 'react';
import {Header} from '../Header';
import {SearchBar} from '../SearchBar';
import {MainMenu} from '../MainMenu';
import {MobileMenu} from '../MobileMenu';

import styles from './Index.scss';

export class Index extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showSearch: false
		};
		this.handleOpenSearch = this.handleOpenSearch.bind(this);
		this.handleCloseSearch = this.handleCloseSearch.bind(this);
	}

	handleOpenSearch(event) {
		event.preventDefault();
		this.setState({showSearch: true});
	}

	handleCloseSearch() {
		this.setState({showSearch: false});
	}

	render() {
		return (
			<div>
				<Header size={this.props.headerSize}>
					<MobileMenu onOpenSearch={this.handleOpenSearch}/>
					<MainMenu menuItems={this.props.menuItems} onOpenSearch={this.handleOpenSearch}/>
				</Header>
				{this.props.children}
				<SearchBar isOpen={this.state.showSearch} onClose={this.handleCloseSearch}/>
			</div>
		);
	}
}

Index.propTypes = {
	headerSize: Header.propTypes.size,
	children: React.PropTypes.node,
	menuItems: MainMenu.propTypes.menuItems
};

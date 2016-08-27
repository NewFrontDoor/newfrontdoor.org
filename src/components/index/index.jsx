import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {Header} from '../header';
import {SearchBar} from '../search-bar';
import {MainMenu} from '../main-menu';
import {MobileMenu} from '../mobile-menu';

import styles from './Index.scss';

export class Index extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showSearch: false
		};
		this.handleOpenSearch = this.handleOpenSearch.bind(this);
		this.handleCloseSearch = this.handleCloseSearch.bind(this);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}

	shouldComponentUpdate() {}

	handleOpenSearch(event) {
		event.preventDefault();
		this.setState({showSearch: true});
	}

	handleCloseSearch() {
		this.setState({showSearch: false});
	}

	render() {
		return (
			<div className={styles.content}>
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

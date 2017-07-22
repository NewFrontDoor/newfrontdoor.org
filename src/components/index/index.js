import React from 'react';
import PropTypes from 'prop-types';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import Header from '../header/index.js';
import SearchBar from '../search-bar/index.js';
import MainMenu from '../main-menu/index.js';
import MobileMenu from '../mobile-menu/index.js';
import FirstChild from '../../lib/first-child';
import content from '../../content';

import styles from './Index.scss';

class Index extends React.Component {
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
			<div className={styles.content}>
				<Header size={this.props.headerSize}>
					<MobileMenu onOpenSearch={this.handleOpenSearch}/>
					<MainMenu menuItems={this.props.menuItems} onOpenSearch={this.handleOpenSearch}/>
				</Header>
				{this.props.children}
				<CSSTransitionGroup
					component={FirstChild}
					transitionName={styles}
					transitionEnterTimeout={300}
					transitionLeaveTimeout={300}
					>
					{this.state.showSearch && <SearchBar onClose={this.handleCloseSearch}/>}
				</CSSTransitionGroup>
			</div>
		);
	}
}

Index.defaultProps = {
	headerSize: 'full',
	menuItems: content.clientmenu.links
};

Index.propTypes = {
	headerSize: Header.propTypes.size,
	children: PropTypes.node.isRequired,
	menuItems: MainMenu.propTypes.menuItems
};

export default Index;

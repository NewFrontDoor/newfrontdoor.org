import React from 'react';
import PropTypes from 'prop-types';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import CSSTransition from 'react-transition-group/CSSTransition';
import Header from '../header/index';
import SearchBar from '../search-bar/index';
import MainMenu from '../main-menu/index';
import MobileMenu from '../mobile-menu/index';
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
				<TransitionGroup>
					{this.state.showSearch && (
						<CSSTransition timeout={300} classNames={styles}>
							<SearchBar onClose={this.handleCloseSearch}/>
						</CSSTransition>
					)}
				</TransitionGroup>
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

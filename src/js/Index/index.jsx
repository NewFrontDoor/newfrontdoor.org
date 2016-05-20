import React from 'react';
import {Header} from '../Header';
import {SearchBar} from '../SearchBar';
import {MainMenu} from '../MainMenu';
import {MobileMenu} from '../MobileMenu';

import logo from '../../elements/v100it2.png';

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

	handleCloseSearch(event) {
		event.preventDefault();
		this.setState({showSearch: false});
	}

	render() {
		const logoStyle = {
			paddingLeft: this.state.padding,
			paddingRight: this.state.padding
		};

		return (
			<div>
				<Header size={this.props.headerSize}>
					<a className={styles.logo} style={logoStyle} href="/">
						<h1 className="sr-only">Vision 100 IT</h1>
						<img className="img-responsive" src={logo}></img>
					</a>
					<MobileMenu onOpenSearch={this.handleOpenSearch}/>
					<MainMenu onOpenSearch={this.handleOpenSearch}/>
				</Header>
				{this.props.children}
				<SearchBar isOpen={this.state.showSearch} onClose={this.handleCloseSearch}/>
			</div>
		);
	}
}

Index.propTypes = {
	headerSize: Header.propTypes.size,
	children: React.PropTypes.node
};

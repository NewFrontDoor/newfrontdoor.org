import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import ReactHeight from 'react-height';
import FaTimesCircle from 'react-icons/fa/times-circle';
import Button from '../button/index.js';
import styles from './SearchResults.scss';

const SearchResults = ({onCloseResults, containerClass, children, titleClass, query}) => {
	return (
		<div className={containerClass}>
			<div className={titleClass}>
				<h3>
					Results
					<span style={{float: 'right'}}>
						<Button appearance="blank" onClick={onCloseResults}>
							<FaTimesCircle/>
						</Button>
					</span>
				</h3>
			</div>
			{children}
			{query && <div className={`small ${styles.nav}`}>
				<Link to={`/documentation?search=${query}`}>more</Link>
			</div>}
		</div>
	);
};

SearchResults.defaultProps = {
	onResultClick: () => {},
	containerClass: '',
	children: null,
	query: null
};

SearchResults.propTypes = {
	onCloseResults: PropTypes.func.isRequired,
	containerClass: PropTypes.string,
	children: PropTypes.node,
	titleClass: PropTypes.string.isRequired,
	query: PropTypes.string
};

const withHeight = WrappedComponent => {
	class HeightContainer extends React.Component {
		constructor() {
			super();

			this.state = {
				height: 0
			};

			this.handleHeight = this.handleHeight.bind(this);
		}

		handleHeight(height) {
			this.setState({height});
		}

		render() {
			let {height} = this.state;

			if (!this.props.children) {
				height = 0;
			}

			return (
				<div className={styles.container} style={{height}}>
					<ReactHeight onHeightReady={this.handleHeight}>
						<WrappedComponent {...this.props}/>
					</ReactHeight>
				</div>
			);
		}
	}

	HeightContainer.defaultProps = {
		children: null
	};

	HeightContainer.propTypes = {
		children: PropTypes.node
	};

	return HeightContainer;
};

export default withHeight(SearchResults);

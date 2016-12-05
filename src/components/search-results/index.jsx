import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import ReactHeight from 'react-height';
import styles from './SearchResults.scss';

const SearchResults = ({onCloseResults, containerClass, children, titleClass, query}) => {
	return (
		<div className={containerClass}>
			<div className={titleClass}>
				<h3> Results <a onClick={onCloseResults}> <span className="fa fa-times-circle"/> </a> </h3>
			</div>
			{children}
			{query && <div className={`small ${styles.nav}`}>
				<Link to={`/documentation?search=${query}`}>more</Link>
			</div>}
		</div>
	);
};

SearchResults.defaultProps = {
	onResultClick: () => {}
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

			if (typeof this.props.children === 'undefined') {
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

	HeightContainer.propTypes = {
		children: PropTypes.node
	};

	return HeightContainer;
};

export default withHeight(SearchResults);

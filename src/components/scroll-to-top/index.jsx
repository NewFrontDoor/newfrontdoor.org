import React, {PropTypes} from 'react';
import {withRouter} from 'react-router-dom';
import {scroller, animateScroll} from 'react-scroll';

class ScrollToTop extends React.Component {
	componentDidUpdate(prevProps) {
		if (this.props.location !== prevProps.location) {
			const {hash} = window.location;
			const scrollOptions = {
				spy: true,
				smooth: true,
				offset: -64,
				duration: 500
			};

			if (hash === '') {
				animateScroll.scrollToTop(scrollOptions);
			} else {
				const id = hash.replace('#', '');
				scroller.scrollTo(id, scrollOptions);
			}
		}
	}

	render() {
		return this.props.children;
	}
}

ScrollToTop.propTypes = {
	location: PropTypes.object.isRequired,
	children: PropTypes.node.isRequired
};

export default withRouter(ScrollToTop);

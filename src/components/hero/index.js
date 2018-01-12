import React from 'react';
import PropTypes from 'prop-types';
import Scroll from '../../containers/scroll';
import styles from './Hero.scss';

class Hero extends React.Component {
	render() {
		return (
			<div className={this.props.mini ? `${styles.mini} ${styles.container}` : styles.container}>
				<div className={styles.background}/>
				<Scroll
					render={() => {
						const contentStyle = {
							opacity: `${1 - ((window.pageYOffset - 10) / 250)}`
						};

						return (
							<div className={this.props.children ? `${styles.content}` : ''} style={contentStyle}>
								{this.props.children}
							</div>
						);
					}}
				/>
			</div>
		);
	}
}

Hero.defaultProps = {
	mini: false,
	children: null
};

Hero.propTypes = {
	mini: PropTypes.bool,
	children: PropTypes.node
};

export default Hero;

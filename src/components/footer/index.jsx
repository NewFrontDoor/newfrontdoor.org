import React from 'react';
import PropTypes from 'prop-types';
import hash from 'string-hash';
import {Link} from 'react-router-dom';
import content from '../../content';
import styles from './Footer.scss';

const FooterItem = props => {
	if (props.target) {
		return (<a href={props.target}>
			{props.text}
			{props.children}
		</a>);
	}
	return (<Link to={props.to}>
		{props.text}
		{props.children}
	</Link>);
};

FooterItem.defaultProps = {
	children: null,
	target: null,
	text: null,
	to: null
};

FooterItem.propTypes = {
	children: PropTypes.node,
	target: PropTypes.string,
	text: PropTypes.string,
	to: PropTypes.string
};

const Footer = () => (
	<footer>
		<div className={styles.wrap}>
			{content.footerLinks.map(list => (
				<div key={hash(list.heading || 'logo')} className={styles.item}>
					<header>
						{list.heading && <h3>{list.heading}</h3>}
					</header>
					<ul className="list-unstyled">
						{list.links.map(link => (
							<li key={hash(link.text || link.target || link.to)}>
								<FooterItem {...link}/>
							</li>
						))}
					</ul>
				</div>
			))}
		</div>
	</footer>
);

export default Footer;

import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import content from '../../content';
import styles from './Footer.scss';

const FooterItem = props => {
	if (props.target) {
		return (<a href={props.target}>{props.text}
			<span className={props.className}/>
		</a>);
	}
	return (<Link to={props.to}>{props.text}
		<span className={props.className}/>
	</Link>);
};

FooterItem.propTypes = {
	className: PropTypes.string,
	target: PropTypes.string,
	text: PropTypes.string,
	to: PropTypes.string
};

const Footer = () => (
	<footer>
		<div className={styles.wrap}>
			{content.footerLinks.map((list, key) => <div key={key} className={styles.item}>
				<header>
					{list.heading && <h3>{list.heading}</h3>}
				</header>
				<ul className="list-unstyled">
					{list.links.map((item, key) => <li key={key}>
						<FooterItem {...item}/>
					</li>)}
				</ul>
			</div>)}
		</div>
	</footer>
);

export default Footer;

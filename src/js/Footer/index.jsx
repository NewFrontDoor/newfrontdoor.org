import styles from './Footer.scss';
import React from 'react';

export const Footer = props => (
		<footer>
				<div className={styles.wrap}>
						{props.footerLinks.map((list, key) => <div key={key} className={styles.item}>
								<header className="text-lowercase">
										<h3>{list.heading}</h3>
								</header>
								<ul className="list-unstyled">
										{list.links.map((link, key) => <li key={key}>
												<a href={link.target}>{link.text}</a>
										</li>)}
								</ul>
						</div>)}
				</div>
		</footer>
);

Footer.propTypes = {footerLinks: React.PropTypes.array.isRequired};

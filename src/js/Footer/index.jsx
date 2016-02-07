import styles from './Footer.scss';
import React from 'react';
import content from '../content';

export const Footer = () => (
		<footer>
				<div className={styles.wrap}>
						{content.footerLinks.map((list, key) => <div key={key} className={styles.item}>
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

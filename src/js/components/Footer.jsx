import React from 'react';

export const Footer = props => (
		<footer>
				<div className="footer-wrap">
						{props.footerLinks.map((list, key) => <div key={key} className={list.className}>
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

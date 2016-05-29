import React from 'react';
import {Element} from 'react-scroll';
import styles from './feature-join.scss';

const imageContext = require.context('../../elements');

export const FeaturedJoin = props => (
	<div className={styles.feature}>
		<section className={styles.video}>
			<video autoPlay loop>
				<source src={imageContext('./clip2.mp4')} type="video/mp4"></source>
			</video>
		</section>
		<Element name="join" className={styles.content}>
			<section>
				<div className={styles.background}></div>
				<header className="hidden">
					<h2>Sign up</h2>
				</header>

				<div className="text-slab">
					Begin the journey
				</div>

				<p className="text-center">
					Interested in coming on board? Get in touch below or via our Social Media channels.
				</p>
				<form>
					<div className={`form-group ${styles.group1}`}>
						<label hidden htmlFor="name">Name</label>
						<input type="text" id="name" className="form-control input-default" placeholder="Name"/>
					</div>
					<div className={`form-group ${styles.group1}`}>
						<label hidden htmlFor="email">Contact email</label>
						<input type="email" name="email" className="form-control input-default" placeholder="Contact email"/>
					</div>
					<div className={`form-group ${styles.group2}`}>
						<label hidden htmlFor="organisation">Organisation</label>
						<input type="text" name="organisation" className="form-control input-default" placeholder="Organisation"/>
					</div>
					<div className={`form-group ${styles.group2}`}>
						<label hidden htmlFor="message">Message</label>
						<textarea type="text" name="message" className="form-control input-default" placeholder="Message"></textarea>
					</div>
					<button type="submit" className={`btn btn-default ${styles.group2}`}>Submit</button>
				</form>
				<div className={styles.social}>
					<div>
						<a href="http://facebook.com/vision100it">
							<span className="fa fa-facebook fa-3x"></span>
						</a>
					</div>
					<div>
						<a href="http://twitter.com/vision100it">
							<span className="fa fa-twitter fa-3x"></span>
						</a>
					</div>
				</div>
			</section>
		</Element>
	</div>
);

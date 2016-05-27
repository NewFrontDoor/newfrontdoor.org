import React from 'react';
import {Featured} from '../../components/Featured';
const imageContext = require.context('../../elements');

export const FeaturedJoin = props => (
	<Featured name="join" className="featured-sixth">
		<video autoPlay loop id="bgvid">
			<source src={imageContext('./clip2.mp4')} type="video/mp4"></source>
		</video>
		<div className="close-content">
			<div className="close-background"></div>
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
				<div className="form-group group-1">
					<label hidden for="name">Name</label>
					<input type="text" id="name" className="form-control input-default" placeholder="Name"/>
				</div>
				<div className="form-group group-1">
					<label hidden for="email">Contact email</label>
					<input type="email" name="email" className="form-control input-default" placeholder="Contact email"/>
				</div>
				<div className="form-group group-2">
					<label hidden for="organisation">Organisation</label>
					<input type="text" name="organisation" className="form-control input-default" placeholder="Organisation"/>
				</div>
				<div className="form-group group-2">
					<label hidden for="message">Message</label>
					<textarea type="text" name="message" className="form-control input-default" placeholder="Message"></textarea>
				</div>
				<button type="submit" className="btn btn-default group-2">Submit</button>
			</form>
			<div className="social">
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
		</div>
	</Featured>
);

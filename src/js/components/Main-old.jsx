import React from 'react';
import {Support} from './Support';

export class Main extends React.Component {

	render() {
		return (
			<div className="site-wrapper">
				<main role="main">

					<div>
						<article ng-repeat="post in app.posts">
							<div>
								<header className="text-lowercase">
									<h2>Post Title</h2>
									<h3 className="text-right">
										<small>Post Date</small>
									</h3>
								</header>

								<section>
									<p className="lead">Post Lead</p>
									<p>Post Body</p>
								</section>
							</div>
						</article>
					</div>
					<aside>
						<header className="text-lowercase">
							<h3>This is V100IT</h3>
						</header>
						<section>
							<p>These are our recent projects</p>
						</section>
						<header className="text-lowercase">
							<h4>Panel One</h4>
						</header>
						<section>
							<div>
							</div>
						</section>
						<header className="text-lowercase">
							<h4>Panel Two</h4>
						</header>
						<section>
							<Support></Support>
						</section>
					</aside>
				</main>
			</div>
		);
	}
}

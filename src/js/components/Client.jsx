import React from 'react';

import fm from 'front-matter';
import Remarkable from 'remarkable';

import {MiniHero} from './MiniHero';
import {Post} from '../Post';

const md = new Remarkable();

const blog = require.context('!!raw!../../blogs', true, /^.*\.md$/);

const posts = blog.keys().map(blog).map(fm).map((post, key) => Object.assign(post, {body: md.render(post.body), key}));

export const Client = () => (
		<div>
				<MiniHero/>
				<main role="main">
						<section className="announcement-banner">
								<div>
										This is where the announcement content would go
								</div>
						</section>
						<section className="warning-banner">
								<div>
										This is where the warning content would go
								</div>
						</section>
						<div className="client-wrapper">
								<section className="pinned-post">
									<Post {...posts.shift()} />
								</section>
								<section className="posts">
										{posts.map(post => <Post {...post}/>)}
								</section>
								<div></div>
						</div>
				</main>
		</div>
);

import React from 'react';

import fm from 'front-matter';
import Remarkable from 'remarkable';

import {MiniHero} from './MiniHero';
import {Post} from '../Post';

const md = new Remarkable();

const blog = require.context('!!raw!../../blogs', true, /^.*\.md$/);

const posts = blog.keys().map(blog).map(fm).map((post, key) => Object.assign(post, {body: md.render(`${post.body.slice(0, 500)}... [View more](#)`), key}));
const pinnedPost = posts.shift();

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
									<Post {...pinnedPost.attributes}>
										<div dangerouslySetInnerHTML={{__html: pinnedPost.body}}></div>
									</Post>
								</section>
								<section className="posts">
										{posts.map((post, key) => <Post key={key} {...post.attributes}>
											<div dangerouslySetInnerHTML={{__html: post.body}}></div>
										</Post>)}
								</section>
								<div></div>
						</div>
				</main>
		</div>
);

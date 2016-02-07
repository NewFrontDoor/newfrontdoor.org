import React from 'react';

import fm from 'front-matter';
import Remarkable from 'remarkable';

import {Hero} from '../Hero';
import {Post} from '../Post';

const md = new Remarkable();

const blog = {
	get posts() {
		const context = require.context('!!raw!../../blogs', true, /^.*\.md$/);
		return context.keys().map(context);
	},
	post(id) {
		return this.posts.find(x => x === id);
	},
	page({trim = 0, page = 0, size = 0}) {
		const begin = page * size;
		const end = begin + size;
		return this.posts.slice(begin, end).map(fm).map(parsePost);

		function parsePost(post, key) {
			const body = trim ? `${post.body.slice(0, trim)}... [View more](#)` : post.body;
			return Object.assign(post, {body: md.render(body), key});
		}
	}
};

const posts = blog.page({
	trim: 500,
	page: 0,
	size: 3
});

const pinnedPost = posts.shift();

export const Client = () => (
		<div>
				<Hero mini />
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

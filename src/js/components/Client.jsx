import React from 'react';

import fm from 'front-matter';
import Remarkable from 'remarkable';

import {Index} from './Index';
import {Hero} from '../Hero';
import {Post} from '../Post';

const md = new Remarkable();

const blog = {
	get context() {
		return require.context('!!raw!../../blog', true, /^.*\.md$/);
	},
	get posts() {
		return this.context.keys();
	},
	post(id) {
		return this.context(this.posts.find(x => x === id));
	},
	page({trim = 0, page = 0, size = 0}) {
		const begin = page * size;
		const end = begin + size;
		return this.posts.slice(begin, end).map(this.context).map(fm).map(parsePost);

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
	<Index>
		<Hero mini/>
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
			<div className="product-cards">
				<div id="one">
					<h3>Elvanto</h3>
					<img src="../../../src/elements/elvanto.png" />
					<p>Have you got started with Elvanto yet?</p>
				</div>
				<div id="two">
					<h3>Website</h3>
					<img src="../../../src/elements/soul.jpeg" />
					<p>Let us help you get the most out of your website</p>
				</div>
				<div id="three">
					<h3>Sparkleshare</h3>
					<img src="../../../src/elements/Sparkleshare.png" />
					<p>Dropbox, google drive & usb sticks making you nuts?</p>
				</div>
				<div id="four">
					<h3>Designers</h3>
					<img src="../../../src/elements/close-image.jpeg" />
					<p>Thinking of a refresh? Read our recommendations</p>
				</div>
			</div>
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
	</Index>
);

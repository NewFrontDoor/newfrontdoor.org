import React from 'react';

import fm from 'front-matter';
import {Markdown} from '../Markdown';

import {Index} from '../Index/index.jsx';
import {Hero} from '../Hero';
import {Post} from '../Post';
import {Alert} from '../Alert';

import content from '../content';

const blog = {
	get context() {
		return require.context('../../blog', true, /^.*\.md$/);
	},
	get posts() {
		return this.context.keys();
	},
	post(id) {
		return this.context(this.posts.find(x => x === id));
	},
	postId(key) {
		const id = this.posts[key].split('.');
		id.shift();
		id.pop();
		return id.join('.');
	},
	page({trim = 0, page = 0, size = 0}) {
		const begin = page * size;
		const end = begin + size;

		return this.posts.slice(begin, end).map(this.context).map(fm).map((post, key) => {
			const postId = this.postId([key + begin]);
			const body = trim ? `${post.body.slice(0, trim)}... [View more](blog${postId})` : post.body;
			return Object.assign(post, {body, key});
		});
	}
};

const posts = blog.page({
	trim: 500,
	page: 0,
	size: 3
});

const pinnedPost = posts.shift();

export const Client = () => (
	<Index headerSize="mini">
		<Hero mini/>
		<main role="main">
			<div className="alerts" hidden>
					{content.banners.map((link, key) => (
						<Alert key={key} type={link.type}>
							<p dangerouslySetInnerHTML={{__html: link.text}}></p>
						</Alert>
					))}
			</div>
			<div className="product-cards">
				<div id="one">
					<h3 hidden>Elvanto</h3>
					<img src="../../../src/elements/elvanto.png"/>
					<p>Have you got started with Elvanto yet?</p>
				</div>
				<div id="two">
					<h3 hidden>Website</h3>
					<img src="../../../src/elements/soul.jpeg"/>
					<p>Let us help you get the most out of your website</p>
				</div>
				<div id="three">
					<h3 hidden>Sparkleshare</h3>
					<img src="../../../src/elements/Sparkleshare.png"/>
					<p>Dropbox, google drive & usb sticks making you nuts?</p>
				</div>
				<div id="four">
					<h3 hidden>Designers</h3>
					<img src="../../../src/elements/close-image.jpeg"/>
					<p>Thinking of a refresh? Read our recommendations</p>
				</div>
			</div>
			<div className="client-wrapper">
				<section className="pinned-post">
					<Post {...pinnedPost.attributes}>
						<Markdown>
							{pinnedPost.body}
						</Markdown>
					</Post>
				</section>
				<section className="posts">
					{posts.map((post, key) => <Post key={key} {...post.attributes}>
						<Markdown>
							{post.body}
						</Markdown>
					</Post>)}
				</section>
				<div></div>
			</div>
		</main>
	</Index>
);

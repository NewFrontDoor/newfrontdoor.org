import React from 'react';

import fm from 'front-matter';
import {Markdown} from '../Markdown';

import {Index} from '../Index/index.jsx';
import {Hero} from '../Hero';
import {Post} from '../Post';
import {Card} from '../Card';
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
			const body = trim ? `${post.body.slice(0, trim)}... [View more](/blog${postId})` : post.body;
			return Object.assign(post, {url: `/blog${postId}`, body, key});
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
			<div className="alerts hidden">
					{content.banners.map((link, key) => (
						<Alert key={key} type={link.type}>
							<p dangerouslySetInnerHTML={{__html: link.text}}></p>
						</Alert>
					))}
			</div>
			<div className="product-cards">
				<Card className="mob-hidden" name="Elvanto" background="black" image="../src/elements/elvanto.png" imagePadding="10px">
					Have you got started with Elvanto yet?
				</Card>
				<Card className="mob-hidden" name="Website" background="white" image="../src/elements/soul.jpeg" imagePadding="10px">
					Let us help you get the most out of your website
				</Card>
				<Card className="mob-hidden" name="Sparkleshare" background="black" image="../src/elements/Sparkleshare.png" imagePadding="10px">
					Dropbox, google drive & usb sticks making you nuts?
				</Card>
				<Card className="mob-hidden" name="Designers" background="white" image="../src/elements/close-image.jpeg">
					Thinking of a refresh? Read our recommendations
				</Card>
			</div>
			<div className="client-wrapper">
				<section className="pinned-post">
					<Post url={pinnedPost.url} {...pinnedPost.attributes}>
						<Markdown>
							{pinnedPost.body}
						</Markdown>
					</Post>
				</section>
				<section className="posts">
					{posts.map((post, key) => <Post key={key} url={post.url} {...post.attributes}>
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

import React from 'react';

import fm from 'front-matter';

import {Alert} from '../components/Alert';
import {Card} from '../components/Card';
import {Hero} from '../components/Hero';
import {Index} from '../components/Index/index.jsx';
import {Markdown} from '../components/Markdown';
import {Post} from '../components/Post';

import content from '../content';

const blog = {
	get context() {
		return require.context('../blog', true, /^.*\.md$/);
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
				<Card className="mob-hidden" name="Elvanto" background="#323232" image="./elvanto.png" imagePadding="10px" link="/elvanto">
					Have you got started with Elvanto yet?
				</Card>
				<Card className="mob-hidden" name="Registration" background="white" image="./soul.jpeg" imagePadding="10px" link="/registration">
					Have a church event soon? Check out the V100IT registration module
				</Card>
				<Card className="mob-hidden" name="Podcasting" background="#171717" image="./podcasting.png" imagePadding="75px" link="/podcasting">
					Get on board with podcasting your sermons
				</Card>
				<Card className="mob-hidden" name="Designers" background="white" image="./close-image.jpeg" link="">
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

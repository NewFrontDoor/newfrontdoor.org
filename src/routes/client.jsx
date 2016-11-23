import React, {PropTypes} from 'react';

import fm from 'front-matter';
import {withRouter} from 'react-router';

import Alert from '../components/alert/index.jsx';
import Card from '../components/card/index.jsx';
import Hero from '../components/hero/index.jsx';
import Index from '../components/index/index.jsx';
import {Markdown} from '../components/markdown/index.jsx';
import Post from '../components/post/index.jsx';

import content from '../content';

const blog = {
	get context() {
		return require.context('../blog', true, /^.*\.md$/);
	},
	get posts() {
		return this.context.keys().sort().reverse();
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

const Client = props => {
	const posts = blog.page({
		trim: 500,
		page: props.params.page || 0,
		size: 5
	});

	const pinnedPost = posts.shift();

	return (
		<Index headerSize="mini">
			<Hero mini/>
			<main role="main">
				<div className="alerts hidden">
					{content.banners.map((banner, key) => (
						<Alert key={key} type={banner.type}>
							<p>{banner.text}</p>
						</Alert>
					))}
				</div>
				<div className="product-cards">
					<Card name="Elvanto" background="#323232" image="./elvanto.png" imagePadding="10px" link="/elvanto">
						Have you got started with Elvanto yet?
					</Card>
					<Card name="Registration" background="white" image="./soul.jpeg" imagePadding="10px" link="/registration">
						Have a church event soon? Check out the V100IT registration module
					</Card>
					<Card name="Podcasting" background="#171717" image="./podcasting.png" imagePadding="75px" link="/podcasting">
						Get on board with podcasting your sermons
					</Card>
					<Card name="Designers" background="white" image="./close-image.jpeg">
						Thinking of a refresh? Read our recommendations - <em>coming soon...</em>
					</Card>
				</div>
				<div className="client-wrapper">
					{ pinnedPost && <section className="pinned-post">
						<Post url={pinnedPost.url} {...pinnedPost.attributes}>
							<Markdown>
								{pinnedPost.body}
							</Markdown>
						</Post>
					</section> }
					<section className="posts">
						{posts.map((post, key) => <Post key={key} url={post.url} {...post.attributes}>
							<Markdown>
								{post.body}
							</Markdown>
						</Post>)}
					</section>
				</div>
			</main>
		</Index>
	);
};

Client.propTypes = {
	params: PropTypes.shape({
		page: PropTypes.string
	})
};

export default withRouter(Client);

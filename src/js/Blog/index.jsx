import React from 'react';
import fm from 'front-matter';
import Remarkable from 'remarkable';
import {Index} from '../Index/index.jsx';
import styles from './Blog.scss';

const md = new Remarkable();

const blogs = {
	get context() {
		return require.context('!!raw!../../blog', true, /^.*\.md$/);
	},
	get blogs() {
		return this.context.keys();
	},
	document(id) {
		const blog = this.context(this.blogs.find(x => x === `./${id}.md`));
		const content = fm(blog);
		return {body: md.render(content.body), ...content.attributes};
	}
};

export class Blog extends React.Component {
	get blog() {
		return blogs.document(this.props.params.blogId) || {};
	}

	render() {
		return (
			<Index>
				<div className="blog-wrapper">
					<div className="blog-content">
						<h1>{this.blog.title}</h1>
						<h1><small>{this.blog.sub_title}</small></h1>
						<section dangerouslySetInnerHTML={{__html: this.blog.body}}></section>
					</div>
				</div>
			</Index>
		);
	}
}

Blog.propTypes = {
	params: React.PropTypes.shape({blogId: React.PropTypes.string}).isRequired
};

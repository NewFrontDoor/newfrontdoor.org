import React from 'react';
import fm from 'front-matter';
import moment from 'moment';
import {Index} from '../Index/index.jsx';
import {Markdown} from '../Markdown';
import styles from './Blog.scss';

const blogs = {
	get context() {
		return require.context('../../blog', true, /^.*\.md$/);
	},
	get blogs() {
		return this.context.keys();
	},
	document(id) {
		const blog = this.context(this.blogs.find(x => x === `./${id}.md`));
		const {body, attributes} = fm(blog);
		return {body, ...attributes};
	}
};

const imageContext = require.context('../../elements');

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
						<h3>{this.blog.author.name} - <span className={styles.date}>{moment(this.blog.date).format('Do MMMM, YYYY')}</span></h3>
						<div className={styles.imgContainer}><img src={imageContext(this.blog.image.href)} alt={this.blog.image.alt}/></div>
						<Markdown>
							{this.blog.body}
						</Markdown>
						<a href="/client"> &#060; Back</a>
					</div>
				</div>
			</Index>
		);
	}
}

Blog.propTypes = {
	params: React.PropTypes.shape({blogId: React.PropTypes.string}).isRequired
};

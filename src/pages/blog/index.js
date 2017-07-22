import React from 'react';
import PropTypes from 'prop-types';
import fm from 'front-matter';
import moment from 'moment';
import Index from '../../components/index/index.js';
import {Markdown} from '../../components/markdown/index.js';
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

const imageContext = require.context('../../images');

class Blog extends React.Component {
	constructor() {
		super();
		this.handleGoBack = this.handleGoBack.bind(this);
	}

	get blog() {
		return blogs.document(this.props.match.params.blogId) || {};
	}

	handleGoBack() {
		this.props.history.goBack();
	}

	render() {
		return (
			<Index>
				<div className={styles.wrapper}>
					<h1>{this.blog.title}</h1>
					<h1><small>{this.blog.sub_title}</small></h1>
					<h3>{this.blog.author.name} - <span className={styles.date}>{moment(this.blog.date).format('Do MMMM, YYYY')}</span></h3>
					{ this.blog.image && <div className={styles.imgContainer}>
						<img className={styles.image} src={imageContext(this.blog.image.href)} alt={this.blog.image.alt}/>
					</div> }
					<Markdown>
						{this.blog.body}
					</Markdown>
					<a href="#" onClick={this.handleGoBack}> &#060; Back</a>
				</div>
			</Index>
		);
	}
}

Blog.propTypes = {
	match: PropTypes.shape({
		params: PropTypes.shape({
			blogId: PropTypes.string.isRequired
		})
	}).isRequired,
	history: PropTypes.shape({
		goBack: PropTypes.func.isRequired
	}).isRequired
};

export default Blog;

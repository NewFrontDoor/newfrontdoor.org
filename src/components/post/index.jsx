import React from 'react';
import {Link} from 'react-router';
import moment from 'moment';
import styles from './Post.scss';

const imageContext = require.context('../../images');

const Post = props => (
	<section className={styles.post}>
		<header className={styles.header}>
			<h2 className={styles.title}><Link to={props.url}>{props.title}</Link></h2>
			<p className={styles.meta}>
				<span className={styles.author}>By&nbsp;
					{props.author.name}
				</span>
				<span className={styles.date}>{moment(props.date).format('Do MMMM, YYYY')}</span>
			</p>
		</header>
		<div className={styles.body}>
			<div className={styles.content}>
				{props.image && <img src={imageContext(props.image.href)} className={props.image.size} alt={props.image.alt}/>}
				{props.children}
			</div>
		</div>
	</section>
);

Post.propTypes = {
	url: React.PropTypes.string,
	children: React.PropTypes.node.isRequired,
	title: React.PropTypes.string.isRequired,
	author: React.PropTypes.shape({name: React.PropTypes.string.isRequired}),
	date: React.PropTypes.object.isRequired,
	// tags: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
	image: React.PropTypes.shape({href: React.PropTypes.string.isRequired, size: React.PropTypes.string.isRequired, alt: React.PropTypes.string.isRequired})
};

export default Post;

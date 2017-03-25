import React, {PropTypes} from 'react';
import {Link} from 'react-router-dom';
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

Post.defaultProps = {
	image: null
};

Post.propTypes = {
	url: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
	title: PropTypes.string.isRequired,
	author: PropTypes.shape({
		name: PropTypes.string.isRequired
	}).isRequired,
	date: PropTypes.object.isRequired,
	// Disable tags: PropTypes.arrayOf(PropTypes.string).isRequired,
	image: PropTypes.shape({
		href: PropTypes.string.isRequired,
		size: PropTypes.string.isRequired,
		alt: PropTypes.string.isRequired
	})
};

export default Post;

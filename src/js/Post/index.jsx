import styles from './Post.scss';
import React from 'react';
import moment from 'moment';

const imageContext = require.context('../../elements');

export const Post = props => (
	<section className={styles.post}>
		<header className={styles.header}>
			<h2 className={styles.title}>{props.title}</h2>
			<p className={styles.meta}>
				<span className={styles.author}>By&nbsp;
					<a href="#">{props.author.name}</a>
				</span>
				<span className={styles.date}>{moment(props.date).format('Do MMMM, YYYY')}</span>
				<span className={styles.category}>under&nbsp;
					<span>{props.tags.map((tag, key) => <a key={key} href={`blog/tags/${tag}`}>{tag}</a>)}</span>
				</span>
			</p>
		</header>
		<div className={styles.body}>
			<div className={styles.imgContainer}><img src={imageContext(props.image.href)} alt={props.image.alt}/></div>
			<div className={styles.content}>
				{props.children}
			</div>
		</div>
	</section>
);

Post.propTypes = {
	children: React.PropTypes.node.isRequired,
	title: React.PropTypes.string.isRequired,
	author: React.PropTypes.shape({name: React.PropTypes.string.isRequired}),
	date: React.PropTypes.object.isRequired,
	tags: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
	image: React.PropTypes.shape({href: React.PropTypes.string.isRequired, alt: React.PropTypes.string.isRequired})
};

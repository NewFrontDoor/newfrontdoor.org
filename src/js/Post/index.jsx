import React from 'react';
import moment from 'moment';

const imageContext = require.context('../../elements');

export const Post = props => (
	<section className="post">
		<header className="post-header">
			<h2 className="post-title">{props.title}</h2>
			<p className="post-meta">
				<span className="post-author">By&nbsp;
					<a href="#">{props.author.name}</a>
				</span>&nbsp;
				<span className="post-date">{moment(props.date).format('Do MMMM, YYYY')}</span>&nbsp;
				<span className="post-category">under&nbsp;
					<span>{props.tags.map((tag, key) => <a key={key} href={`client/tags/${tag}`}>{tag}</a>)}</span>
				</span>
			</p>
		</header>
		<div className="post-body">
			<div className="img-container"><img src={imageContext(props.image.href)} alt={props.image.alt}/></div>
			<div className="post-content">
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

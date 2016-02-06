import React from 'react';
import moment from 'moment';

const imageContext = require.context('../../elements');

export const Post = props => (
	<section className="post">
		<header className="post-header">
			<h2 className="post-title">{props.attributes.title}</h2>
			<p className="post-meta">
				<span className="post-author">By&nbsp;
					<a href="#">{props.attributes.author.name}</a>
				</span>&nbsp;
				<span className="post-date">{moment(props.attributes.date).format('Do MMMM, YYYY')}</span>&nbsp;
				<span className="post-category">under&nbsp;
					<span>{props.attributes.tags.map((tag, key) => <a key={key} href={`client/tags/${tag}`}>{tag}</a>)}</span>
				</span>
			</p>
		</header>
		<div className="post-body">
			<div className="img-container"><img src={imageContext(props.attributes.image.href)} alt={props.attributes.image.alt}/></div>
			<div className="post-content" dangerouslySetInnerHTML={{__html: props.body}}></div>
		</div>
	</section>
);

Post.propTypes = {
	body: React.PropTypes.string.isRequired,
	attributes: React.PropTypes.shape({
		title: React.PropTypes.string.isRequired,
		author: React.PropTypes.shape({name: React.PropTypes.string.isRequired}),
		date: React.PropTypes.object.isRequired,
		tags: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
		image: React.PropTypes.shape({href: React.PropTypes.string.isRequired, alt: React.PropTypes.string.isRequired})
	})
};

import React, {PropTypes} from 'react';
import {Markdown} from '../markdown/index.jsx';
import styles from './TeamMember.scss';

const imageContext = require.context('../../images');

const TeamMember = props => (
	<div className={styles.member}>
		<h4 title={props.title}>{props.name} - {props.position}</h4>
		<img src={props.image ? imageContext(props.image) : ''} className={styles.img}/>
		<Markdown>{props.text}</Markdown>
	</div>
);

TeamMember.defaultProps = {
	title: ''
};

TeamMember.propTypes = {
	name: PropTypes.string.isRequired,
	position: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	title: PropTypes.string
};

export default TeamMember;

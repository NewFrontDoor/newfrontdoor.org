import React from 'react';
import '../../css/main';
import {Footer} from '../Footer';

export const Site = props => (
	<div className="container">
		{props.children}
		<Footer/>
	</div>
);

Site.propTypes = {
	children: React.PropTypes.element.isRequired
};

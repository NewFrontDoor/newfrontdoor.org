import React from 'react';
import {GatewayDest, GatewayProvider} from 'react-gateway';
import '../css/main';
import {Footer} from '../components/footer';

export const Site = props => (
	<GatewayProvider>
		<div id="application" className="container">
			{props.children}
			<Footer/>
			<GatewayDest name="modal"/>
		</div>
	</GatewayProvider>
);

Site.propTypes = {
	children: React.PropTypes.element.isRequired
};

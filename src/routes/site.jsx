import React, {PropTypes} from 'react';
import {GatewayDest, GatewayProvider} from 'react-gateway';
import '../css/main.scss';
import Footer from '../components/footer/index.jsx';

const Site = props => (
	<GatewayProvider>
		<div id="application" className="container">
			{props.children}
			<Footer/>
			<GatewayDest name="modal"/>
		</div>
	</GatewayProvider>
);

Site.propTypes = {
	children: PropTypes.element.isRequired
};

export default Site;

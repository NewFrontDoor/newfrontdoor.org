import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Alert from '../../components/alert/index.jsx';
import Blog from '../../components/blog/index.jsx';
import Documentation from '../../components/documentation/index.jsx';
import Template from '../../components/documentation/template.jsx';
import About from '../../routes/about.jsx';
import Client from '../../routes/client.jsx';
import Consultation from '../../routes/consultation.jsx';
import Contact from '../../routes/contact.jsx';
import Control from '../../routes/control.jsx';
import Feature from '../../routes/feature.jsx';
import Home from '../../routes/home.jsx';
import Site from '../../routes/site.jsx';
import Status from '../../routes/status.jsx';
import Support from '../../routes/support.jsx';
import Training from '../../routes/training.jsx';
import Registration from '../../routes/registration.jsx';
import Podcasting from '../../routes/podcasting.jsx';
import Elvanto from '../../routes/elvanto.jsx';
import Sparkleshare from '../../routes/sparkleshare.jsx';
import Error from '../../routes/error.jsx';

const Layout = () => (
	<div id="application" className="container">
		<Site>
			<Switch>
				<Route exact path="/" component={Home}/>
				<Route exact path="/client/:page?" component={Client}/>
				<Route exact path="/blog/:blogId" component={Blog}/>
				<Route exact path="/support" component={Support}/>
				<Route exact path="/feature" component={Feature}/>
				<Route exact path="/documentation" component={Documentation}/>
				<Route exact path="/documentation/:documentId" component={Template}/>
				<Route exact path="/status" component={Status}/>
				<Route exact path="/control" component={Control}/>
				<Route exact path="/about" component={About}/>
				<Route exact path="/contact" component={Contact}/>
				<Route exact path="/training" component={Training}/>
				<Route exact path="/consultation" component={Consultation}/>
				<Route exact path="/registration" component={Registration}/>
				<Route exact path="/podcasting" component={Podcasting}/>
				<Route exact path="/alert" component={Alert}/>
				<Route exact path="/elvanto" component={Elvanto}/>
				<Route exact path="/sparkleshare" component={Sparkleshare}/>
				<Route component={Error}/>
			</Switch>
		</Site>
	</div>
);

export default Layout;

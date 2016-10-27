import React from 'react';
import {Route, IndexRoute} from 'react-router';

import Alert from '../components/alert/index.jsx';
import Blog from '../components/blog/index.jsx';
import Documentation from '../components/documentation/index.jsx';
import Template from '../components/documentation/template.jsx';
import About from './about.jsx';
import Client from './client.jsx';
import Consultation from './consultation.jsx';
import Contact from './contact.jsx';
import Control from './control.jsx';
import Feature from './feature.jsx';
import Home from './home.jsx';
import Site from './site.jsx';
import Status from './status.jsx';
import Support from './support.jsx';
import Training from './training.jsx';
import Registration from './registration.jsx';
import Podcasting from './podcasting.jsx';
import Elvanto from './elvanto.jsx';
import Sparkleshare from './sparkleshare.jsx';
import Error from './error.jsx';

export default(
	<Route path="/" component={Site}>
		<IndexRoute component={Home}/>
		<Route path="/client" component={Client}/>
		<Route path="/blog/:blogId" component={Blog}/>
		<Route path="/support" component={Support}/>
		<Route path="/feature" component={Feature}/>
		<Route path="/documentation" component={Documentation}/>
		<Route path="/documentation/:documentId" component={Template}/>
		<Route path="/status" component={Status}/>
		<Route path="/control" component={Control}/>
		<Route path="/about" component={About}/>
		<Route path="/contact" component={Contact}/>
		<Route path="/training" component={Training}/>
		<Route path="/consultation" component={Consultation}/>
		<Route path="/registration" component={Registration}/>
		<Route path="/podcasting" component={Podcasting}/>
		<Route path="/alert" component={Alert}/>
		<Route path="/elvanto" component={Elvanto}/>
		<Route path="/sparkleshare" component={Sparkleshare}/>
		<Route path="/*" component={Error}/>
	</Route>
);

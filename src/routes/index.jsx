import React from 'react';
import {Route, IndexRoute} from 'react-router';

import {Alert} from '../components/Alert';
import {Blog} from '../components/Blog';
import {Documentation} from '../components/Documentation';
import {Template} from '../components/Documentation/Template';
import {About} from './About';
import {Client} from './Client';
import {Consultation} from './Consultation';
import {Contact} from './Contact';
import {Control} from './Control';
import {Feature} from './Feature';
import {Home} from './Home';
import {Site} from './Site';
import {Status} from './Status';
import {Support} from './Support';
import {Training} from './Training';
import {Registration} from './Registration';
import {Podcasting} from './Podcasting';
import {Elvanto} from './Elvanto';
import {Sparkleshare} from './Sparkleshare';
import {Error} from './Error';

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
		<Route path="/error" component={Error}/>
	</Route>
);

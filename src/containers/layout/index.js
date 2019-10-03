import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {GatewayDest, GatewayProvider} from 'react-gateway';
import Footer from '../../components/footer';
import * as Routes from '../../routes';
import '../../css/main.scss';

const Layout = () => (
	<GatewayProvider>
		<div>
			<div id="application" className="container">
				<Switch>
					<Route exact path="/" component={Routes.Home}/>
					<Route exact path="/about" component={Routes.About}/>
					{/* <Route exact path="/blog/:blogId" component={Routes.Blog}/> */}
					{/* <Route exact path="/client/:page?" component={Routes.Client}/> */}
					<Route exact path="/consultation" component={Routes.Consultation}/>
					<Route exact path="/contact" component={Routes.Contact}/>
					{/* <Route exact path="/control" component={Routes.Control}/> */}
					<Route exact path="/documentation/:documentId" component={Routes.DocumentationTemplate}/>
					{/* <Route exact path="/documentation" component={Routes.Documentation}/> */}
					<Route exact path="/elvanto" component={Routes.Elvanto}/>
					<Route exact path="/feature" component={Routes.Feature}/>
					<Route exact path="/podcasting" component={Routes.Podcasting}/>
					<Route exact path="/registration" component={Routes.Registration}/>
					{/* <Route exact path="/sparkleshare" component={Routes.Sparkleshare}/> */}
					{/* <Route exact path="/status" component={Routes.Status}/> */}
					<Route exact path="/support" component={Routes.Support}/>
					<Route exact path="/training" component={Routes.Training}/>
					<Route component={Routes.Error}/>
				</Switch>
				<Footer/>
			</div>
			<GatewayDest name="modal"/>
		</div>
	</GatewayProvider>
);

export default Layout;

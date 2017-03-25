import React from 'react';

function asyncRoute(getComponent) {
	return class AsyncComponent extends React.Component {
		static Component = null;
		mounted = false;

		state = {
			Component: AsyncComponent.Component
		};

		componentWillMount() {
			if (typeof document !== 'undefined' && this.state.Component === null) {
				getComponent().then(m => m.default).then(Component => {
					AsyncComponent.Component = Component;
					if (this.mounted) {
						this.setState({Component});
					}
				});
			}
		}

		componentDidMount() {
			this.mounted = true;
		}

		componentWillUnmount() {
			this.mounted = false;
		}

		render() {
			const {Component} = this.state;

			if (Component !== null) {
				return <Component {...this.props}/>;
			}

			return null;
		}
  };
}

export const Blog = asyncRoute(() => import('../pages/blog/index.jsx'));
export const Documentation = asyncRoute(() => import('../pages/documentation/index.jsx'));
export const DocumentationTemplate = asyncRoute(() => import('../pages/documentation/template/index.jsx'));
export const About = asyncRoute(() => import('../pages/about/index.jsx'));
export const Client = asyncRoute(() => import('../pages/client/index.jsx'));
export const Consultation = asyncRoute(() => import('../pages/consultation/index.jsx'));
export const Contact = asyncRoute(() => import('../pages/contact/index.jsx'));
export const Control = asyncRoute(() => import('../pages/control/index.jsx'));
export const Feature = asyncRoute(() => import('../pages/feature/index.jsx'));
export const Home = asyncRoute(() => import('../pages/index.jsx'));
export const Status = asyncRoute(() => import('../pages/status/index.jsx'));
export const Support = asyncRoute(() => import('../pages/support/index.jsx'));
export const Training = asyncRoute(() => import('../pages/training/index.jsx'));
export const Registration = asyncRoute(() => import('../pages/registration/index.jsx'));
export const Podcasting = asyncRoute(() => import('../pages/podcasting/index.jsx'));
export const Elvanto = asyncRoute(() => import('../pages/elvanto/index.jsx'));
export const Sparkleshare = asyncRoute(() => import('../pages/sparkleshare/index.jsx'));
export const Error = asyncRoute(() => import('../pages/error/index.jsx'));

import React from 'react';

function asyncRoute(getComponent) {
	return class AsyncComponent extends React.Component {
		static Component = null;

		mounted = false;

		state = {
			Component: AsyncComponent.Component
		};

		// eslint-disable-next-line camelcase
		UNSAFE_componentWillMount() {
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

export const Blog = asyncRoute(() => import('../pages/blog/index.js'));
export const Documentation = asyncRoute(() => import('../pages/documentation/index.js'));
export const DocumentationTemplate = asyncRoute(() => import('../pages/documentation/template/index.js'));
export const About = asyncRoute(() => import('../pages/about/index.js'));
export const Client = asyncRoute(() => import('../pages/client/index.js'));
export const Consultation = asyncRoute(() => import('../pages/consultation/index.js'));
export const Contact = asyncRoute(() => import('../pages/contact/index.js'));
export const Control = asyncRoute(() => import('../pages/control/index.js'));
export const Feature = asyncRoute(() => import('../pages/feature/index.js'));
export const Home = asyncRoute(() => import('../pages/index.js'));
export const Status = asyncRoute(() => import('../pages/status/index.js'));
export const Support = asyncRoute(() => import('../pages/support/index.js'));
export const Training = asyncRoute(() => import('../pages/training/index.js'));
export const Registration = asyncRoute(() => import('../pages/registration/index.js'));
export const Podcasting = asyncRoute(() => import('../pages/podcasting/index.js'));
export const Elvanto = asyncRoute(() => import('../pages/elvanto/index.js'));
export const Sparkleshare = asyncRoute(() => import('../pages/sparkleshare/index.js'));
export const Error = asyncRoute(() => import('../pages/error/index.js'));

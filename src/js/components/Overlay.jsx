import React from 'react';

export class Overlay extends React.Component {
	render() {
		return (
			<div className="overlay" style="height: 100%; width: 100%; z-index: 5; position: fixed;"></div>
		);
	}
}

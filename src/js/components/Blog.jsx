import React from 'react';

export class Blog extends React.Component {

	// | date : 'EEE, MMM yyyy'

	const lead = 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.';
	const body = `Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.

	Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec ullamcorper nulla non metus auctor fringilla.

	Maecenas sed diam eget risus varius blandit sit amet non magna. Donec id elit non mi porta gravida at eget metus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.`;

	const posts = [{
		title: 'This is where the first big image and quote will go',
		date: new Date(2015, 0, 1),
		lead,
		body
	}, {
		title: 'Who are Vision 100 IT?',
		date: new Date(2014, 0, 1),
		lead,
		body
	}, {
		title: 'How we can help you',
		date: new Date(2013, 0, 1),
		lead,
		body
	}, {
		title: 'Philosophy + tools',
		date: new Date(2013, 0, 1),
		lead,
		body
	}, {
		title: 'Events',
		date: new Date(2013, 0, 1),
		lead,
		body
	}, {
		title: 'Pricing',
		date: new Date(2013, 0, 1),
		lead,
		body
	}, {
		title: 'Come on board',
		date: new Date(2012, 0, 1),
		lead,
		body
	}];



	// import angular from 'angular';
	//
	// const app = angular.module('app', []);
	//
	// class AppController {
	// 	constructor() {
	// 		const lead = 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.';
	// 		const body = `Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.
	//
	// 	Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec ullamcorper nulla non metus auctor fringilla.
	//
	// 	Maecenas sed diam eget risus varius blandit sit amet non magna. Donec id elit non mi porta gravida at eget metus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.`;
	//
	// 		this.posts = [{
	// 			title: 'This is a really long heading so I can see how it looks',
	// 			date: new Date(2015, 0, 1),
	// 			lead,
	// 			body
	// 		}, {
	// 			title: 'Post 2',
	// 			date: new Date(2014, 0, 1),
	// 			lead,
	// 			body
	// 		}, {
	// 			title: 'Post 3',
	// 			date: new Date(2013, 0, 1),
	// 			lead,
	// 			body
	// 		}, {
	// 			title: 'Post 4',
	// 			date: new Date(2012, 0, 1),
	// 			lead,
	// 			body
	// 		}];
	// 	}
	// }
	//
	// app.controller('appController', AppController);

}

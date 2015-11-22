/* eslint-env browser */
import 'babel-polyfill';

import React from 'react';
import {Root} from './components/Root';
import {Footer} from './components/Footer';
import ReactDOMServer from 'react-dom/server';

// | date : 'EEE, MMM yyyy'

const lead = 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.';
const body = `Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.

Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec ullamcorper nulla non metus auctor fringilla.

Maecenas sed diam eget risus varius blandit sit amet non magna. Donec id elit non mi porta gravida at eget metus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.`;

const posts = [{
	title: 'This is a really long heading so I can see how it looks',
	date: new Date(2015, 0, 1),
	lead,
	body
}, {
	title: 'Post 2',
	date: new Date(2014, 0, 1),
	lead,
	body
}, {
	title: 'Post 3',
	date: new Date(2013, 0, 1),
	lead,
	body
}, {
	title: 'Post 4',
	date: new Date(2012, 0, 1),
	lead,
	body
}];

export default locals => Promise.resolve({
	'/': ReactDOMServer.renderToString(<Root locals={locals}><header>
    <svg width="100%" viewBox="0 0 6 1">
      <rect width="1" height="1" x="0" fill="#E63224" />
      <rect width="1" height="1" x="1" fill="#B7CBE6" />
      <rect width="1" height="1" x="2" fill="#040608" />
      <rect width="1" height="1" x="3" fill="#F18032" />
      <rect width="1" height="1" x="4" fill="#FCF5ED" />
      <rect width="1" height="1" x="5" fill="#FFFFFF" />
      <text x="1" y="0.75" fontFamily="Quicksand" fontSize="0.5" fill="black">Vision 100 IT</text>
    </svg>
  </header>
  <div className="site-wrapper">
    <main role="main">
      <div>
        <article ng-repeat="post in app.posts">
          <div>
            <header className="text-lowercase">
              <h2>Post Title</h2>
              <h3 className="text-right">
                <small>Post Date</small>
              </h3>
            </header>

            <section>
              <p className="lead">Post Lead</p>
              <p>Post Body</p>
            </section>
          </div>
				</article>
      </div>
      <aside>
        <header className="text-lowercase">
          <h3>This is V100IT</h3>
        </header>
        <section>
          <p>These are our recent projects</p>
        </section>
        <header className="text-lowercase">
          <h4>Panel One</h4>
        </header>
        <section>
          <div>
          </div>
        </section>
        <header className="text-lowercase">
          <h4>Panel Two</h4>
        </header>
        <section>
        </section>
      </aside>
    </main>
  </div>
	<Footer></Footer>
</Root>)
});

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

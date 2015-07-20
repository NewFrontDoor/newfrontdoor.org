import 'babel/polyfill';

import angular from 'angular';

import Instagram from './instagram';

Instagram.initialise({
  accessToken: '31694633.32a8a43.4e2eb7ef66db45efae265d0264b15a0a',
  clientID: '32a8a43b97c54d30964b9d65d0e5be79'
});

let instagram = new Instagram({
  query: '@gillydowe',
  max: 4
}, document.querySelector('.ghost-snap'));

instagram.userFeed();

var app = angular.module('app', []);

function appController() {
  var vm = this;

  var lead = 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.';
  var body = `Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.

Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec ullamcorper nulla non metus auctor fringilla.

Maecenas sed diam eget risus varius blandit sit amet non magna. Donec id elit non mi porta gravida at eget metus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.`

  vm.posts = [{
    title: 'This is a really long heading so I can see how it looks',
    date: new Date(2015, 0, 1),
    lead: lead,
    body: body
  }, {
    title: 'Post 2',
    date: new Date(2014, 0, 1),
    lead: lead,
    body: body
  }, {
    title: 'Post 3',
    date: new Date(2013, 0, 1),
    lead: lead,
    body: body
  }, {
    title: 'Post 4',
    date: new Date(2012, 0, 1),
    lead: lead,
    body: body
  }];
}

app.controller('appController', appController);

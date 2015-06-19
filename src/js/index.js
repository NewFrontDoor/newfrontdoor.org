import angular from 'angular';

var app = angular.module('app', []);

function appController() {
  var vm = this;

  vm.hello = 'Hello World!!!';
}

app.controller('appController', appController);

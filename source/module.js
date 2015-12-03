'use strict';

var app = angular.module('gameApp', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider'], function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('home', { url: '/', templateUrl: 'views/home.html', controller: 'homeCtrl' });

});

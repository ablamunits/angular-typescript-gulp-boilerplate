///<reference path="../typings/index.d.ts" />

import {listItemBlockDirectiveFactory} from './directives/list-item-block/list-item-block.drv';
import { MainPageController } from './pages/main.ctrl';

require('angular');
require('angular-ui-router');

const MainApp: ng.IModule = angular.module('MainApp', ['ui.router']);

MainApp.config(function ($stateProvider, $urlRouterProvider, $httpProvider) {
	$httpProvider.defaults.withCredentials = true;

	$urlRouterProvider.otherwise('/');
	$stateProvider
	.state('app', {
		url: '/',
		templateUrl: 'pages/main.tpl.html',
		controller: 'mainPageController as page',
	});
});

MainApp.controller('mainPageController', MainPageController);
MainApp.directive('listItemBlock', listItemBlockDirectiveFactory);

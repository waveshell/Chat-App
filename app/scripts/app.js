angular.module('chatApp', [
    'btford.socket-io',
    'ngMaterial',
    'angular-cache',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngMessages'
  ])
  .config(function ($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'views/chat.html',
      controller: 'ChatPageCtrl'
    })
  })
  .run(function () {
    console.log('Welcome to the Chat application!');
  }
);

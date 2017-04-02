angular.module('chatApp', [
    'ngMaterial',
    'angular-cache',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngMessages',
  ])
  .config(function ($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'views/home.html', resolve: {}
    })
  })
  .run(function () {
    console.log('run: Hello World!');
  }
);

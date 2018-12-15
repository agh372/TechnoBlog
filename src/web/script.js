'use strict';

var myAPP = angular.module('myAPP', [ 'ngRoute']);

myAPP.config(['$routeProvider',
    function (
        $routeProvider
    ) {
          $routeProvider.
              when('/', {
                  templateUrl: 'pages/home.html',
                  controller: 'mainController'
              }).
              when('/login', {
                  templateUrl: 'pages/login.html',
                  controller: 'loginController'
              }).
              when('/add_post', {
                  templateUrl: 'pages/add_post.html',
                  controller: 'addPostController'
              }).
              when('/signup', {
                  templateUrl: 'pages/signup.html',
                  controller: 'loginController'
              }).
              when('/post/:postId', {
                  templateUrl: 'pages/full_post.html',
                  controller: 'fullPostController'
                  
              }).
              otherwise({
                  redirectTo: '/'
              });
}]);

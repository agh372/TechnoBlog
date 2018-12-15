angular.module('myAPP')
 .controller('loginController', function($scope, $http) {
  // create a message to display in our view



  $scope.createUser = function() {

   $http.post('/signup', $scope.signUp)
    .success(function(data) {
     console.log("post:", data);
     $scope.signUp = {};
     // $scope.posts = data;

    })
    .error(function(data) {
     console.log('Error: ' + data);
    });
  };


  $scope.loginUser = function() {

   $http.post('/login', $scope.login)
    .success(function(data) {
     console.log("login:", $scope.login.email);
     $scope.login = {};
     // $scope.posts = data;

    })
    .error(function(data) {
     console.log('Error: ' + data);
    });
  };



 });
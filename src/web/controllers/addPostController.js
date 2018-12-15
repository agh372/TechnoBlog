angular.module('myAPP')
 .controller('addPostController', function($scope, $http, fileUpload) {


  $scope.createPost = function() {

   $http.post('/add_post', $scope.post)
    .success(function(data) {
     console.log("post:", data);
     $scope.post = {};
     //$scope.posts = data;

    })
    .error(function(data) {
     console.log('Error: ' + data);
    });
  };


  $scope.uploadFile = function() {
   var file = $scope.myFile;

   console.log('file is ');
   console.log(file);

   var uploadUrl = "/fileUpload";
   fileUpload.uploadFileToUrl(file, uploadUrl);
  };

 });
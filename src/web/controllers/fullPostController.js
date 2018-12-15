angular.module('myAPP')
 .controller('fullPostController', function($scope, $http, $routeParams, GetUser) {



  GetUser.async().then(function(d) {
   console.log("ser:", d);
   $scope.users = d;
   if (d.user == "Anonymous") {
    $scope.addButton = "Login to add post";
    $scope.postButton = "Login to Comment";
    //$scope.users = {'user':"Anonymous"};
   } else {

    $scope.addButton = "Add Post";
    $scope.postButton = "Submit";

   }
  });


  $scope.comment = {};
  $http.get('/comments/' + $routeParams.postId)
   .success(function(data) {
    $scope.comments = data;

   })
   .error(function(data) {
    console.log('Error: ' + data);
   });




  $http.get('/post/' + $routeParams.postId)
   .success(function(data) {
    console.log("dat post.:", data.title);
    $scope.mainPost = data;

   })
   .error(function(data) {
    console.log('Error: ' + data);
   });



  $scope.submitComment = function(comment, id) {

   console.log('blahblah ' + id, comment);
   $http.post('/add_comment/' + id, $scope.comment)
    .success(function(data) {
     console.log("post:", data);
     $scope.comment = {};
     $http.get('/comments/' + $routeParams.postId)
      .success(function(data) {
       $scope.comments = data;

      })
      .error(function(data) {
       console.log('Error: ' + data);
      });

     //$scope.posts = data;

    })
    .error(function(data) {
     console.log('Error: ' + data);
    });
  };

 });
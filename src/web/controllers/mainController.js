angular.module('myAPP')
 .controller('mainController', function($scope, $http, GetUser) {
  $scope.formData = {};
  $scope.user = "";


  GetUser.async().then(function(d) {
   console.log("ser:", d);
   $scope.users = d;
   if (d.user == "Anonymous") {
    $scope.addButton = "Login to add post";
    //$scope.users = {'user':"Anonymous"};
   } else {

    $scope.addButton = "Add Post";

   }
  });




  $http.get('/posts/1')
   .success(function(data) {
    $scope.posts = data;
    console.log('dataaaa ', data[0].tag[0].text);

   })
   .error(function(data) {
    console.log('Error: ' + data);
   });


  $http.get('/posts')
   .success(function(data) {
    //$scope.posts = data;
    console.log('dataaaa ', data[0].tag[0].text);
    $scope.pages = data.length;
    $scope.number = $scope.pages;
    console.log('Error:essd ' + $scope.number);

   })
   .error(function(data) {
    console.log('Error: ' + data);
   });





  $scope.getNumber = function(num) {

   var x = Math.ceil(num / 3);
   console.log("FDg", x);

   return new Array(x);
  }

  $scope.getPagePost = function(num) {
   $http.get('/posts/' + num)
    .success(function(data) {
     $scope.posts = data;
     console.log('dataaaa ', data[0].tag[0].text);

    })
    .error(function(data) {
     console.log('Error: ' + data);
    });



   //return new Array(num);   
  }




  $scope.deletePost = function(id) {
   $http.delete('/delete_post/' + id)
    .success(function(data) {

     $scope.posts = data;
    })
    .error(function(data) {});
  };


  $scope.searchTags = function(string, num) {


   if (typeof string != "undefined") {
    $http.get('/tags/' + string + '/' + num)
     .success(function(data) {

      $scope.posts = data;
      console.log("delete:", string);
     })
     .error(function(data) {
      console.log('Error: ' + data);
     });
   } else {


    $http.get('/posts')
     .success(function(data) {
      $scope.posts = data;

     })
     .error(function(data) {
      console.log('Error: ' + data);
     });
   }

  };


  $scope.getUser = function() {
   console.log("user:");
   $http.get('/getUser')
    .success(function(data) {
     $scope.user = data;
     //   $scope.posts = data;
     //   console.log("delete:",data);
    })
    .error(function(data) {
     console.log('Error: ' + data);
    });


  };


  $scope.getPost = function(postId, $index) {
   console.log("postNo.:", postId, $index);
   $http.get('/post/' + postId)
    .success(function(data) {
     console.log("dat post.:", data.title);
     $scope.mainPost = data;

    })
    .error(function(data) {
     console.log('Error: ' + data);
    });

  };


  $scope.addTags = function($index) {
   console.log("postNo.:", $index);

  };

  $scope.checkStatus = function($index) {
   GetUser.async().then(function(d) {
    $scope.users = d;


   });
   if ($scope.users == 'Anonymous')
    return true;
   else
    return false;

  };

 });
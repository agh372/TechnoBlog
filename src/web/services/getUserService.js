

myAPP.factory('GetUser', function($http) {
  var promise;
  var myService = {
    async: function() {
      if ( !promise ) {
        // $http returns a promise, which has a then function, which also returns a promise
        promise = $http.get('/getUser').then(function (response) {
          // The then function here is an opportunity to modify the response
          if(typeof promise!="undefined")
          console.log(response);
      else
      	console.log("false");
          // The return value gets picked up by the then in the controller.
          return response.data;
        });
      }
      // Return the promise to the controller
      return promise;
    }
  };
  return myService;
});

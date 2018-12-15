//var app = angular.module('myAPP', []);

myAPP.directive('tagList', function() {
  return {
     
      template: '<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.0-rc.3/angular.min.js"></script>'+
  '  <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.0/angular-route.js"></script>'+
     ' <script src="js/jquery.js"></script>'+

    '<script src="js/bootstrap.min.js"></script>'+
    ' <link href="css/bootstrap.min.css" rel="stylesheet">'+
'<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">'+
'    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></script>'+
   ' <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>'+
'    <link href="css/blog-home.css" rel="stylesheet">'+
  
'<script src="http://code.jquery.com/jquery-1.10.2.js"></script>'+
'<script type="text/javascript">'+
'$(document).ready(function() {'+
 
/*Colors you need to add for your anchor tags*/
'var colors = ["red", "green", "blue","orange","gray"];'+
 
/*Minimum & Maximum font Size*/
'var minFontSize = 10;'+
'var maxFontSize = 40;'+
 
/*Finding all the links inside a Div*/
'$("#links").find("a").each(function(e) {'+
/*Applying font size*/
'$(this).css("fontSize", randomNumberGenerator(minFontSize, maxFontSize));'+
/*Applying font color*/
'$(this).css("color", colors[Math.floor(Math.random() * colors.length)]);'+
'});'+
 
/*Random Number Generator function*/
'function randomNumberGenerator(min,max){'+

'return Math.floor(Math.random()*(max-min+1)+min);'+
'}});'+
'</script>'+
'<div class="well">'+
                    '<h4>Tag</h4>'+
                  ' <div id="links">'+
'<a>Health Tips</a>, <a >Beauty Tips</a>, <a >Celebrity</a>, <a>Kids</a>, <a >Recipes</a>, <a >Effective Tips</a>, <a>Our Blog</a>, <a >Women</a>, <a>How to</a>, <a>Skin Care Tips</a>, <a>Business</a>, <a>Career</a>'+
'</div>'+
             '   </div>'


  };
});

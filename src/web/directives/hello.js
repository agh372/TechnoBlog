//var app = angular.module('myAPP', []);

myAPP.directive('listOptions', function() {
  return {
 // template: '   
     
//template: '<div class="banner"><div class="container"><div class="header"><div class="logo"><a href="index.html" class="title">Ideal Blog</a></div><div class="header-right"><ul><li><a href="#/login">Login</a></li><li><a href="#/signup">Sign up</a></li><li><a href="#"><i class="fb"> </i></a></li><li><a href="#"><i class="twt"> </i></a></li><li><div class="search2"><form><input type="text" ng-model="tagString" value="Search.." onfocus="this.value=''" onblur="if(this.value==''){this.value='Search..';}"><input type="submit" value="" ng-click="searchTags(tagString)"></form></div></li><div class="clearfix"></div></ul></div><div class="clearfix"> </div></div><div class="head-nav"><span class="menu"> </span><ul class="cl-effect-15"><li class="active"><a href="index.html">HOME</a></li><li><a href="about.html" data-hover="ABOUT">ABOUT</a></li><li><a href="contact.html" data-hover="CONTACT">CONTACT</a></li><div class="clearfix"> </div></ul><a href="#/add_post" class="btn btn-primary add" ng-disabled="users.user== 'Anonymous'">{{addButton}}</a><div class="user">You are logged in as <span style="font-weight:bold">{{users.user}}</span></div></div></div></div>';
  };
});

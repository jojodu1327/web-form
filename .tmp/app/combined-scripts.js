'use strict';

/* client/app/app.js */
(function(){

angular.module('app', [
  'ngResource',
  'ngRoute',
  'LoginCtrl',
  'SignupCtrl',
  ]);

})();
/* client/app/common/app.config.js */
(function(){

/* @ngInject */
function Config ($routeProvider){
  $routeProvider.otherwise('/index');
}

angular.module('app').config(Config);

})();
/* client/app/user/index.config.js */
(function(){

/* @ngInject */
function Config ($routeProvider){

  $routeProvider.when('/index', {
    templateUrl : '/app/user/index.html',
    controller: 'IndexCtrl',
  });
}

angular.module('app').config(Config);

})();
/* client/app/user/index.controller.js */
(function(){

/* @ngInject */
function IndexCtrl($scope) {
	
	
}

angular.module('app').controller('IndexCtrl', IndexCtrl);

})();
/* client/app/user/login.config.js */
(function(){

/* @ngInject */
function Config ($routeProvider){

  $routeProvider.when('/login', {
    templateUrl : '/app/user/login.html',
    controller: 'LoginCtrl',
  });
}

angular.module('app').config(Config);

})();
/* client/app/user/login.controller.js */
(function(){

/* @ngInject */
function LoginCtrl($scope) {
	
	
}

angular.module('app').controller('LoginCtrl', LoginCtrl);

})();
/* client/app/user/signup.config.js */
(function(){

/* @ngInject */
function Config ($routeProvider){

  $routeProvider.when('/signup', {
    templateUrl : '/app/user/signup.html',
    controller: 'SignupCtrl',
  });
}

angular.module('app').config(Config);

})();
/* client/app/user/signup.controller.js */
(function(){

/* @ngInject */
function SignupCtrl($scope) {
	
	
}

angular.module('app').controller('SignupCtrl', SignupCtrl);

})();
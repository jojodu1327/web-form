/* @ngInject */
function Config ($routeProvider){

  $routeProvider.when('/signup', {
    templateUrl : '/app/user/signup.html',
    controller: 'SignupCtrl',
  });
}

angular.module('app').config(Config);
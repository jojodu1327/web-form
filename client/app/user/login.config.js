/* @ngInject */
function Config ($routeProvider){

  $routeProvider.when('/login', {
    templateUrl : '/app/user/login.html',
    controller: 'LoginCtrl',
  });
}

angular.module('app').config(Config);
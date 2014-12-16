/* @ngInject */
function Config ($routeProvider){

  $routeProvider.when('/index', {
    templateUrl : '/app/user/index.html',
    controller: 'IndexCtrl',
  });
}

angular.module('app').config(Config);
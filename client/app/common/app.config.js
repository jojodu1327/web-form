/* @ngInject */
function Config ($routeProvider){
  $routeProvider.otherwise('/index');
}

angular.module('app').config(Config);
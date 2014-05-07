
angular.module('slushAngular', [
  'ngRoute',
  'slushAngular.todo',
  'slush-angular-templates'
])
.config(function ($routeProvider) {
  'use strict';
  $routeProvider
    .when('/todo', {
      controller: 'TodoCtrl',
      templateUrl: '/slush-angular/todo/todo.html'
    })
    .otherwise({
      redirectTo: '/todo'
    });
});

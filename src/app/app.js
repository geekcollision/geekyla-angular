'use strict';

angular.module('slushAngular', [
    'ngRoute', // ui-router
    'slushAngular.companies',
    'slushAngular.geeks',
    'slushAngular.todo',
    'slush-angular-templates'
]).config(function ($routeProvider) {
    $routeProvider.when('/todo', {
        controller: 'TodoCtrl',
        templateUrl: '/slush-angular/todo/todo.html'
    }).when('/geeks', {
        controller: 'GeeksCtrl',
        templateUrl: '/slush-angular/geeks/geeks.html'
    }).when('/companies', {
        controller: 'CompaniesCtrl',
        templateUrl: '/slush-angular/companies/companies.html'
    }).otherwise({
        redirectTo: '/todo'
    });
});

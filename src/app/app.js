'use strict';

angular.module('slushAngular', [
    'ngRoute', // ui-router
    'slushAngular.companies',
    'slushAngular.geeks',
    'slushAngular.calendar',
    'slush-angular-templates',
]).config(function ($routeProvider) {
    $routeProvider.when('/events', {
        controller: 'CalendarCtrl',
        templateUrl: '/slush-angular/calendar/calendar.html'
    }).when('/geeks', {
        controller: 'GeeksCtrl',
        templateUrl: '/slush-angular/geeks/geeks.html'
    }).when('/companies', {
        controller: 'CompaniesCtrl',
        templateUrl: '/slush-angular/companies/companies.html'
    }).otherwise({
        redirectTo: '/events'
    });
});

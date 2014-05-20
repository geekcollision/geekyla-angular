'use strict';

angular.module('slushAngular', [
    'ngRoute', // ui-router
    'slushAngular.companies',
    'slushAngular.geeks',
    'slushAngular.calendar'
]).config(function ($routeProvider) {
    $routeProvider.when('/events', {
        controller: 'CalendarCtrl',
        templateUrl: '/calendar/calendar.html'
    }).when('/geeks', {
        controller: 'GeeksCtrl',
        templateUrl: '/geeks/geeks.html'
    }).when('/companies', {
        controller: 'CompaniesCtrl',
        templateUrl: '/companies/companies.html'
    }).otherwise({
        redirectTo: '/events'
    });
});

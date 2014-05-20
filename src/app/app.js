'use strict';

angular.module('slushAngular', [
    'ngRoute', // ui-router
    'masonry',
    'slushAngular.companies',
    'slushAngular.geeks',
    'slushAngular.geek',
    'slushAngular.calendar',
    'slushAngular.services',
    'slushAngular.directives'
]).config(function ($routeProvider, $locationProvider) {
    $routeProvider.when('/events', {
        controller: 'CalendarCtrl',
        templateUrl: '/calendar/calendar.html'
    }).when('/geeks/:nick', {
        controller: 'GeekCtrl',
        templateUrl: '/geek/geek.html',
        resolve: {
            geek: function($route, GeekService) {
                return GeekService.get({nick: $route.current.params.nick});
            }
        }
    })
    .when('/geeks/', {
        controller: 'GeeksCtrl',
        templateUrl: '/geeks/geeks.html',
        resolve: {
            geeks: function(GeekService) {
                return GeekService.get();
            }
        }
    }).when('/companies', {
        controller: 'CompaniesCtrl',
        templateUrl: '/companies/companies.html'
    }).otherwise({
        redirectTo: '/events'
    });

    $locationProvider.html5Mode(false);
});

'use strict';

angular.module('slushAngular', [
    'ngRoute', // ui-router
    'slushAngular.companies',
    'slushAngular.geeks',
    'slushAngular.geek',
    'slushAngular.calendar'
]).config(function ($routeProvider) {
    $routeProvider.when('/events', {
        controller: 'CalendarCtrl',
        templateUrl: '/calendar/calendar.html'
    }).when('/geeks/:nick', {
        controller: 'GeekCtrl',
        templateUrl: '/geek/geek.html',
        resolve: {
            geek: function($q, $http, $route) {
                var nick = $route.current.params.nick;

                var url = 'http://jklgeeks.herokuapp.com/api/v1/geeks?nick=' + nick;
                var q = $q.defer();

                $http.get(url).then(function(res) {
                    q.resolve(res.data[0]);
                });

                return q.promise;
            }
        }
    })
    .when('/geeks/', {
        controller: 'GeeksCtrl',
        templateUrl: '/geeks/geeks.html',
        resolve: {
            geeks: function($q, $http) {
                var url = 'http://jklgeeks.herokuapp.com/api/v1/geeks';
                var q = $q.defer();

                $http.get(url).then(function(res) {
                    q.resolve(res.data);
                });

                return q.promise;
            }
        }
    }).when('/companies', {
        controller: 'CompaniesCtrl',
        templateUrl: '/companies/companies.html'
    }).otherwise({
        redirectTo: '/events'
    });
});

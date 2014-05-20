'use strict';

angular.module('slushAngular.directives').directive('geek', function() {
    return {
        restrict: 'E',
        templateUrl: '/directives/geek.html',
        scope: {
            geek: '='
        },
        controller: function($scope, $location) {
            $scope.go = function(nick) {
                $location.path('geeks/' + nick);
            };
        }
    };
});
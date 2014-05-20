'use strict';

angular.module('slushAngular.directives').directive('geekList', function() {
    return {
        restrict: 'E',
        templateUrl: '/directives/geeklist.html',
        scope: {
            search: '=',
            geeks: '='
        },
        controller: function($scope, $location) {
            $scope.go = function(nick) {
                $location.path('geeks/' + nick);
            };
        }
    };
});
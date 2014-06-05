'use strict';

angular.module('slushAngular.directives').directive('geek', function() {
    return {
        restrict: 'E',
        templateUrl: '/directives/geek.html',
        replace: true,
        scope: {
            geek: '='
        },
        controller: [
            '$scope', '$location',
            function($scope, $location) {
                $scope.go = function(nick) {
                    $location.path('geeks/' + nick);
                };
            }
        ]
    };
});
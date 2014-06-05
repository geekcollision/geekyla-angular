'use strict';

angular.module('slushAngular.directives')
    .directive('geekList', function() {
        return {
            restrict: 'E',
            templateUrl: '/directives/geeklist.html',
            replace: true,
            scope: {
                search: '=',
                geeks: '='
            }
        };
    });
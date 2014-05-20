'use strict';

angular.module('slushAngular.directives').directive('geekList', function() {
    return {
        restrict: 'E',
        templateUrl: '/directives/geeklist.html',
        scope: {
            search: '=',
            geeks: '='
        }
    };
});
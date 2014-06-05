'use strict';

angular.module('slushAngular.geek')
    .controller('GeekCtrl', [
        '$scope', 'geek',
        function($scope, geek) {
            $scope.geek = geek;
        }
    ]);

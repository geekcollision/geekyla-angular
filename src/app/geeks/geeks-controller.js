'use strict';

angular.module('slushAngular.geeks')
    .controller('GeeksCtrl', [
        '$scope', 'geeks',
        function($scope, geeks) {
            $scope.geeks = geeks;
        }
    ]);

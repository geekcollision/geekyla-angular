'use strict';

angular.module('slushAngular.geeks').controller('GeeksCtrl', function($scope, $location, geeks) {
    $scope.geeks = geeks;

    $scope.go = function(nick) {
        $location.path('geeks/' + nick);
    };
});

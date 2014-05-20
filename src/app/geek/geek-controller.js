'use strict';

angular.module('slushAngular.geek').controller('GeekCtrl', function($scope, $routeParams, geek) {
    $scope.geek = geek;
});

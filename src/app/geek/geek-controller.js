'use strict';

angular.module('slushAngular.geek').controller('GeekCtrl', function($scope, $routeParams, geek) {
    console.log(geek);

    $scope.geek = geek;
});

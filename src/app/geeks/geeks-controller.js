'use strict';

angular.module('slushAngular.geeks').controller('GeeksCtrl', function($scope, geeks) {
    console.log(geeks);

    $scope.geeks = geeks;
});

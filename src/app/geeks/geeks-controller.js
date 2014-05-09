'use strict';

angular.module('slushAngular.geeks').controller('GeeksCtrl', function($scope, $http) {
    var url = 'http://jklgeeks.herokuapp.com/api/v1/geeks';

    $scope.geeks = [];

    $http.get(url).then(function(res) {
        $scope.geeks = res.data;
    });
});

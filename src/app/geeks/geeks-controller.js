'use strict';

angular.module('slushAngular.geeks').controller('GeeksCtrl', function($scope, $http, GeekService) {
    var url = 'http://jklgeeks.herokuapp.com/api/v1/geeks';

    $scope.geeks = GeekService
        .get()
        .then(
            function(response) {
                $scope.geeks = response.data;
            }
        );

    /*


    $http.get(url).then(function(res) {
        $scope.geeks = res.data;
    });
    */
});

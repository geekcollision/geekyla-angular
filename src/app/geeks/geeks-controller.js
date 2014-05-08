'use strict';

angular.module('slushAngular.geeks')
    .controller('GeeksCtrl', function($scope, $http) {
    // http://www.gravatar.com/avatar/id

    var url = 'http://jklgeeks.herokuapp.com/api/v1/geeks';

    $scope.geeks = [];

    $http.get(url).then(function(res) {
        $scope.geeks = res.data;
    });

    // box-sizing: border-box;
    // display: inline-block;
    // vertical-align: top;
});

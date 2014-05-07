'use strict';

angular.module('slushAngular.companies')
    .controller('CompaniesCtrl', function($scope, $http) {
    var url = 'http://it2rest.herokuapp.com/api/v1/companies';

    $scope.companies = [];

    $http.get(url).then(function(res) {
        $scope.companies = res.data;
    });
});

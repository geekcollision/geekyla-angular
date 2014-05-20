'use strict';

angular.module('slushAngular.services').factory('GeekService',[
    '$q', '$http',
    function($q, $http) {
        return {
            get: function(params) {
                var url = 'http://jklgeeks.herokuapp.com/api/v1/geeks';
                var q = $q.defer();

                $http({
                    url: url,
                    method: 'GET',
                    params: params
                }).then(function(res) {
                    q.resolve(params? res.data[0]: res.data);
                });

                return q.promise;
            }
        };
    }
]);
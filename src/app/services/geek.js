'use strict';

angular.module('slushAngular.services')
    .factory('GeekService', [
        '$q', '$http',
        function($q, $http) {
            return {
                get: function(params) {
                    var url = 'http://jklgeeks.herokuapp.com/api/v1/geeks';
                    var deferred = $q.defer();

                    $http.get(url, {
                        params: params
                    }).then(function(res) {
                        // Bit of hack, this has to done some other way :D
                        deferred.resolve(params ? res.data[0]: res.data);
                    });

                    return deferred.promise;
                }
            };
        }
    ]);
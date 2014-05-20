'use strict';

angular.module('slushAngular.geeks')
    .factory('GeekService',
        [
            '$http',
            function($http) {
                return {
                    get: function(params) {
                        var url = 'http://jklgeeks.herokuapp.com/api/v1/geeks';

                        return $http.get(url, params);
                    },
                    getByNick: function(nick) {
                        return GeekService.get({nick: nick});
                    }
                };
            }
        ]
    );

'use strict';

angular.module('slushAngular.calendar').controller('CalendarCtrl', function($scope, $http) {
    var url = 'http://www.google.com/calendar/feeds/8k5oi1dne96kpvqtr4ebljsi0k@group.calendar.google.com/public/basic?alt=json';

    $scope.events = [];

    $http.get(url).then(function(res) {
        var events = res.data.feed.entry;

        $scope.events = events.map(function(entry) {
            var content = entry.content.$t;

            return {
                title: entry.title.$t,
                when: content.split('When: ')[1].split('<br />')[0],
                where: parseWhere(content).replace(/&#39;/g, '\''),
                description: content.split('Event Description: ')[1]
            };

            function parseWhere(str) {
                var parts = str.split('Where: ');

                if(parts.length > 1) {
                    return parts[1].split('<br />')[0];
                }

                return '';
            }
        });
    });
});

/* jshint strict:false, globalstrict:false */
/* global describe, it, beforeEach, inject, module */
describe('CalendarCtrl', function () {
  var calendarCtrl,
      scope;

  beforeEach(module('slushAngular'));

  beforeEach(inject(function ($injector) {
    scope = $injector.get('$rootScope');

    calendarCtrl = function () {
      return $injector.get('$controller')('CalendarCtrl', {'$scope': scope});
    };
  }));

});

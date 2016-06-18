'use strict';

/**
* @ngdoc service
* @name timelineApp.timeline
* @description
* # timeline
* Factory in the timelineApp.
*/
angular.module('timelineApp')
.factory('timeline', function ($http) {
// Service logic
// ...
function getTimelines(){
  return $http.get('data/gant.json');
}
// Public API here
return {
  getTimelines: getTimelines
}
});

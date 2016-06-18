'use strict';

/**
* @ngdoc function
* @name timelineApp.controller:MainCtrl
* @description
* # MainCtrl
* Controller of the timelineApp
*/
angular.module('timelineApp')
.controller('MainCtrl',function($scope,timeline){
    $scope.options = {
        currentDate: 'line',
        currentDateValue: new Date(),
        expandToFit:'true',
        headersFormats : { 
            day: 'D MMM'
        }
    };
    console.log($scope.getToday);
    timeline.getTimelines().success(function(data){
        $scope.data=data;
        console.log("data:"+data);
    }).error(function(error){
        console.log(error);
    });
    console.log("end of controller");
});

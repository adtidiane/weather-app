//CONTROLLERS
// homapage controller
weatherApp.controller('homepageController', ['$scope','cityService','$location', function($scope, cityService, $location){
    $scope.city = cityService.city;
    $scope.$watch('city', function(){
        cityService.city = $scope.city;
    });   
                  
    $scope.submit = function(){
        $location.path('/forecast');                       
    }
}]);

//forecast controller
weatherApp.controller('forecastController', ['$scope','$resource','$routeParams','cityService', function($scope, $resource, $routeParams, cityService){
    $scope.city = cityService.city;
    $scope.days = $routeParams.days || '2';
    $scope.wheatherApi = $resource("http://api.openweathermap.org/data/2.5/forecast/daily",{callback: "JSON_CALLBACK"}, {get:{method: "JSONP"}});
    $scope.weatherResult = $scope.wheatherApi.get({q: $scope.city, cnt:$scope.days});
    
    $scope.convertToCelsius = function(degK){
        return Math.round(degK - 273);
    };
    
    $scope.convertToDate = function(dt){
        return new Date(dt * 1000);
    };
}]);
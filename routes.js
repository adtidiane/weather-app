//route config
weatherApp.config(function($routeProvider){
    $routeProvider.
    when('/',{
        templateUrl: 'pages/homepage.htm', 
        controller: 'homepageController' ,
    }).
    when('/forecast', {
        templateUrl: 'pages/forecast.htm',
        controller: 'forecastController'
    }).
    when('/forecast/:days', {
        templateUrl: 'pages/forecast.htm',
        controller: 'forecastController'
    });
});
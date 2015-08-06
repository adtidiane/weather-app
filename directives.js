//directives
weatherApp.directive("weatherContent", function(){
    return {
        restrict: 'AE',
        templateUrl: 'directives/weathercontent.htm',
        replace:true,
        scope: {
            weatherDay: "=",
            convertToStandard: "&",
            convertToDate: "&",
            dateFormat: "@"
        }
    }
});
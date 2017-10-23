var app = angular.module("myApp", ['ngRoute', 'ngResource']);

app.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        
        $routeProvider
            .when('/', {
                templateUrl: 'static/views/boitiers.html',
                controller: "listeCtrl",
                resolve: {
                    liste: function(userFactory) {
                        console.log('myApp, resolve, liste');
                        return userFactory.query();
                    }
                }
            })
            .otherwise({
                redirectTo: '/',

            });
    }
]);